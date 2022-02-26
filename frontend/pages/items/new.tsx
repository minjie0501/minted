import React, { useEffect, useRef, useState } from "react";

type Props = {};

// TODO: add drag and drop later
// TODO: add some kind of error message when the user tries to add more than 10 images
export default function New({}: Props) {
  const [images, setImages] = useState<Array<File>>([]);
  const fileInputRef = useRef<HTMLInputElement>();

  function readFileAsText(file: any) {
    return new Promise(function (resolve, reject) {
      let fr = new FileReader();

      fr.onload = function () {
        resolve(fr.result);
      };

      fr.onerror = function () {
        reject(fr);
      };

      fr.readAsDataURL(file);
    });
  }

  const handleOnChange = async (e: Event) => {
    const imgs = [] as any;
    const selectedImages = (e.target as HTMLInputElement).files;
    for (let i = 0; i < selectedImages!.length; i++) {
      if ((e.target as HTMLInputElement).files![i] && (e.target as HTMLInputElement).files![i].type.substr(0, 5) === "image") {
        imgs.push(await readFileAsText((e.target as HTMLInputElement).files![i]));
      }
    }
    if(images?.length + imgs.length<11) setImages((prev) => prev!.concat(imgs as any));
  };

  return (
    <div className="m-auto w-[390px] sm:w-[600px] md:w-[820px] lg:w-[960px] border-red-200 border-2 h-screen mt-10">
      <h2 className="font-semibold text-2xl m-2">Sell an item</h2>
      <div className="border-gray-200  border">
        <h3>Add up to 10 photos. </h3>
      </div>
      <div className="flex border-green-200 border-dashed border w-full min-h-[150px]">
        <div className="flex flex-wrap  justify-center items-center">
          {images
            ? images.map((image, i) =>
                i < 10 ? (
                  <img
                    key={i}
                    className="w-40 h-40 m-2"
                    src={images ? (images as any)[i] : ""}
                    style={{ objectFit: "cover" }}
                    onClick={() => {
                      setImages((prev) => prev.filter((p, idx) => idx !== i));
                    }}
                  />
                ) : (
                  ""
                )
              )
            : null}
          <form className="border-gray-200 border">
            <button
              onClick={(event) => {
                event.preventDefault();
                (fileInputRef.current as any).click();
              }}
            >
              Add Image
            </button>
            <input
              type="file"
              style={{ display: "none" }}
              ref={fileInputRef as any}
              accept="image/*"
              onChange={(e) => handleOnChange(e as any)}
              multiple
            />
          </form>
        </div>
      </div>
      {/* <div className="bg-gray-200 w-screen h-screen">
        <div className="m-auto w-[960px] max-w-full border-red-200 border">
          <h2>Sell an item</h2>
          <div>
            <div className="flex justify-center">
              <div className="mb-3 w-96">
                <label htmlFor="formFileMultiple" className="form-label inline-block mb-2 text-gray-700">
                  Multiple files input example
                </label>
                <input
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="file"
                  id="formFileMultiple"
                  multiple
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
