import Image from "next/image";
import React, { useState } from "react";
import { Item } from "../../pages/items/[id]";

interface Props {
  item: Item;
}

export function ItemPictures({ item }: Props) {
  const [imgNumber, setImgNumber] = useState(item.imgs.length);

  // TODO: image modal

  return (
    <>
      {imgNumber >= 4 ? (
        <div className="flex-grow bg-white m-2 flex max-h-[700px]">
          <div className="flex-1 bg-gray-200 m-1 mr-0">
            <div className="relative h-full cursor-pointer border-gray-300 border-2">
              <Image src={item.imgs[0]} layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className="flex-1 flex flex-col m-1">
            <div className="flex-1 bg-gray-200">
              <div className="relative h-full cursor-pointer border-gray-300 border-2">
                <Image src={item.imgs[1]} layout="fill" objectFit="cover" />
              </div>
            </div>
            <div className="flex-1 flex  mt-1 space-x-1">
              <div className="flex-1 bg-gray-200 ">
                <div className="relative h-full cursor-pointer border-gray-300 border-2">
                  <Image src={item.imgs[2]} layout="fill" objectFit="cover" />
                </div>
              </div>
              <div className="flex-1 bg-gray-200">
                <div className="relative h-full cursor-pointer border-gray-300 border-2">
                  <Image src={item.imgs[3]} layout="fill" objectFit="cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : imgNumber >= 2 ? (
        <div className="flex-grow bg-white m-2 flex max-h-[700px]">
          <div className="flex-1 bg-gray-200 m-1 mr-0">
            <div className="relative h-full cursor-pointer border-gray-300 border-2">
              <Image src={item.imgs[0]} layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className="flex-1 bg-gray-200 m-1 mr-1">
            <div className="relative h-full cursor-pointer border-gray-300 border-2">
              <Image src={item.imgs[1]} layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-grow bg-white m-2 flex max-h-[700px]">
          <div className="flex-1 bg-gray-200 border-gray-300 border-2">
            <div className="relative cursor-pointer h-full">
              <Image src={item.imgs[0]} layout="fill" className="contain" objectFit="contain" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
