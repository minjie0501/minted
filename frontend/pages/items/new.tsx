import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../components/Button";
import { XSquare, Plus } from "phosphor-react";
import clsx from "clsx";
import { brands, categories, conditionOptions } from "../../data/sellItemPageData";

type Props = {};

// TODO: add drag and drop later
// TODO: add some kind of error message when the user tries to add more than 10 images
// TODO: select box arrow look up when open look down when closed
// TODO: create separate components from some of the stuff
export default function New({}: Props) {
  const [images, setImages] = useState<Array<File>>([]);
  const [files, setFiles] = useState<Array<File>>([]);
  const [itemData, setItemData] = useState({ // TODO: finish this
    title: "",
    description: "",
    category: "",
    brand: "",
    condition: "",
    price: "",
  });

  useEffect(() => {
    console.log(itemData);
  }, [itemData]);

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
    const fls = [] as any;
    const selectedImages = (e.target as HTMLInputElement).files;
    for (let i = 0; i < selectedImages!.length; i++) {
      if (
        (e.target as HTMLInputElement).files![i] &&
        (e.target as HTMLInputElement).files![i].type.substr(0, 5) === "image"
      ) {
        imgs.push(await readFileAsText((e.target as HTMLInputElement).files![i]));
        fls.push((e.target as HTMLInputElement).files![i]);
      }
    }
    if (images?.length + imgs.length < 11) {
      setImages((prev) => prev!.concat(imgs as any));
      setFiles((prev) => prev!.concat(fls as any));
    }
  };

  const handleUpload = async () => {
    console.log("asd");
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "uploads");
    data.append("cloud_name", "dhpyqq46x");
    try {
      const uploadRes = await fetch("https://api.cloudinary.com/v1_1/dhpyqq46x/image/upload", {
        method: "POST",
        body: data,
      });

      const { url } = await uploadRes.json();
      console.log(url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleItemData = (e: any) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-100 pt-10">
      <div className="m-auto w-[390px] sm:w-[690px] md:w-[820px] lg:w-[960px] h-full">
        <h2 className="font-semibold text-2xl  pt-3 bg-gray-100">Sell an item</h2>
        <div className=" my-6 bg-white ">
          <div className="pt-4 m-4">
            <h3 className="text-gray-500">Add up to 10 photos. </h3>
          </div>
          <div className="flex">
            <div
              className={clsx("flex flex-1 border-green-200 border-dashed border min-h-[150px] m-4", {
                "justify-center": images.length < 1,
                "justify-start": images.length > 0,
              })}
            >
              <div className="flex flex-wrap  justify-center items-center">
                {images
                  ? images.map((image, i) =>
                      i < 10 ? (
                        <div key={i} className="relative">
                          {/* <div className="absolute right-0 flex justify-center items-center"><XSquare size={30} className="bg-white"/></div> */}
                          <XSquare
                            size={30}
                            weight="fill"
                            fill="red"
                            className="absolute m-2 right-0 cursor-pointer"
                            onClick={() => {
                              setImages((prev) => prev.filter((p, idx) => idx !== i));
                            }}
                          />
                          <img
                            className="w-40 h-40 m-2 border-cyan-500 border border-opacity-25"
                            src={images ? (images as any)[i] : ""}
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      ) : (
                        ""
                      )
                    )
                  : null}
                <form className={clsx("border-cyan-500 border p-1 rounded", { hidden: images.length === 10 })}>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      (fileInputRef.current as any).click();
                    }}
                    className="flex justify-center text-cyan-500 items-center"
                  >
                    <Plus size={24} />
                    Upload Photos
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
          </div>
        </div>

        <div className="border-gray-200 border bg-white my-6">
          <div className=" flex flex-1 py-6 px-4 border-gray-200 border-b">
            <div className="flex-1">Title</div>
            <div className="flex-1">
              <input
                type="text"
                className="border-b border-gray-200 w-full focus:border-cyan-400 outline-none"
                placeholder="e.g. White COS Sweater"
              />
            </div>
          </div>
          <div className=" flex flex-1 py-6 px-4 border-gray-200 border-b">
            <div className="flex-1">Describe your item</div>
            <textarea
              className="flex-1 outline-none border-b border-gray-200 w-full focus:border-cyan-400"
              placeholder="e.g. only worn a few times, true to size"
              cols={30}
              rows={5}
            />
          </div>
        </div>

        <div className="border-gray-200 border bg-white my-6">
          <div className=" flex flex-1 py-6 px-4 border-gray-200 border-b">
            <div className="flex-1">Category</div>
            <div className="flex-1">
              <select
                name=""
                id=""
                defaultValue={"Select category"}
                className="w-full outline-none border-b border-gray-200"
              >
                {categories.map((c, idx) => (
                  <option key={idx} value={c} disabled={idx === 0 ? true : false}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className=" flex flex-1 py-6 px-4 border-gray-200 border-b">
            <div className="flex-1">Brand</div>
            <div className="flex-1">
              <select
                name=""
                id=""
                defaultValue={"Select brand"}
                className="w-full outline-none border-b border-gray-200"
              >
                {brands.map((b, idx) => (
                  <option key={idx} value={b} disabled={idx === 0 ? true : false}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className=" flex flex-1 py-6 px-4 border-gray-200 border-b">
            <div className="flex-1">Condition</div>
            <div className="flex-1">
              <select
                name=""
                id=""
                defaultValue={"Select condition"}
                className="w-full outline-none border-b border-gray-200"
                onChange={(e) => console.log(e.target.value)}
              >
                {conditionOptions.map((o, idx) => (
                  <option key={idx} value={o[0]} disabled={idx === 0 ? true : false}>
                    {o[0]}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="border-gray-200 border bg-white my-6">
          <div className=" flex flex-1 py-6 px-4 border-gray-200 border-b">
            <div className="flex-1">Price</div>
            <div className="flex-1">
              <input
              name="price"
                type="text"
                className="border-b border-gray-200 w-full focus:border-cyan-400 outline-none"
                placeholder="$0.00"
                onChange={handleItemData}
              />
            </div>
          </div>
          <div className=" flex flex-1 py-6 px-4 border-gray-200 border-b">
            <div className="flex-1"></div>
            <div className="flex-1  items-center flex">
              <input
                className="form-check-input appearance-none h-6 w-6 border border-gray-300 rounded-sm bg-white checked:bg-cyan-500 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="swap"
              />
              <label htmlFor="swap">I'm interested in swapping this</label>
            </div>
          </div>
        </div>
        <div className="pb-10 flex justify-end">
          <Button value="Save Draft" btnClass=" border-cyan-500 bg-white border rounded p-2" />
          <Button
            value="Upload"
            btnClass=" text-white border-cyan-500 ml-4 px-3 bg-cyan-500  border rounded p-2"
            onClick={handleUpload}
          />
        </div>
      </div>
    </div>
  );
}
