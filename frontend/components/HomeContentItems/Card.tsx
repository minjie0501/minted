import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  username?: string;
  item: any;
}

export function Card({ item, username }: Props) {
  console.log(item);
  return (
    <div className="p-0 lg:p-2 w-40 sm:w-64 m-auto ">
      {username && <div>{username}</div>}
      <Link href={`/items/${item._id}`}>
        <div className="relative h-60 sm:h-80 w-full cursor-pointer">
          <Image src={item.imgs[0]} layout="fill" alt="" />
        </div>
      </Link>
      <div className="text-md">€{item.price}</div>
      <div className="text-xs ">{item.size}</div>
      <div className="mb-4 text-xs">{item.brand}</div>
    </div>
  );
}
