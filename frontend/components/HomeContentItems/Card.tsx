import Image from "next/image";
import React from "react";

interface Props {
  username:string
  item?: any,
}

export function Card({item,username}: Props) {
  return (
    <div className="p-0 lg:p-2 w-40 sm:w-64 m-auto">
      <div>{username}</div>
      <div className="relative h-60 sm:h-80 w-full">
        <Image src={item.imgs[0]} layout="fill" alt="" />
      </div>
      <div>{item.price}</div>
      <div>Size</div>
      <div className="mb-4">{item.brand}</div>
    </div>
  );
}
