import Image from "next/image";
import React from "react";
import HeaderCard from "./HeaderCard";

type Props = {};

// TODO: make this responsive
export default function Header({}: Props) {
  return (
    <div className="relative flex justify-center w-full ">
      <div className="absolute m-auto px-5 xl:px-0 w-full  xl:w-[1240px] top-1/4 h-fit">
        <HeaderCard />
      </div>
      <div className=" relative w-screen min-h-[65vh]  -z-10">
        <Image src={"/assets/carousel3.jpg"} alt="" layout="fill" className="object-cover" />
      </div>
    </div>
  );
}