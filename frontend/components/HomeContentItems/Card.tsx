import Image from "next/image";
import React from "react";

interface Props {}

export function Card({}: Props) {
  return (
    <div className="p-0 lg:p-2 w-40 sm:w-64 m-auto">
      <div>Username</div>
      <div className="relative h-60 sm:h-80 w-full">
        <Image src="/assets/dummyimage.jpg" layout="fill" alt="" />
      </div>
      <div>Price</div>
      <div>Size</div>
      <div className="mb-4">Brand</div>
    </div>
  );
}
