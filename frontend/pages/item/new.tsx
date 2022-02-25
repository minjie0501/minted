import React, { useEffect, useRef, useState } from "react";

type Props = {};

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
    const images = (e.target as HTMLInputElement).files;
    for (let i = 0; i < images!.length; i++) {
      if ((e.target as HTMLInputElement).files![i] && (e.target as HTMLInputElement).files![i].type.substr(0, 5) === "image") {
        imgs.push(await readFileAsText((e.target as HTMLInputElement).files![i]));
      }
    }
    setImages(prev => prev!.concat(imgs as any));
  };


  return (
    <div className="">
      <form>
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
      <div>
        {images
          ? images.map((image,i) => (
              <img key={i}
                className="w-20 h-20"
                src={images ? (images as any)[i] : ""}
                style={{ objectFit: "cover" }}
                onClick={() => {
                    setImages((prev => prev.filter((p, idx) =>  idx !== i)))
                }}
              />
            ))
          : null}
      </div>
    </div>
    // <div className="bg-gray-200 w-screen h-screen">
    //   <div className="m-auto w-[960px] max-w-full border-red-200 border">
    //     <h2>Sell an item</h2>
    //     <div>
    //       <div className="flex justify-center">
    //         <div className="mb-3 w-96">
    //           <label htmlFor="formFileMultiple" className="form-label inline-block mb-2 text-gray-700">
    //             Multiple files input example
    //           </label>
    //           <input
    //             className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    //             type="file"
    //             id="formFileMultiple"
    //             multiple
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
