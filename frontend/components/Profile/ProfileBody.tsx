import clsx from "clsx";
import React, { useState } from "react";
import { Card } from "../HomeContentItems/Card";
import { ContentTable } from "../HomeContentItems/ContentTable";
import { Closet } from "./Closet";
import { Reviews } from "./Reviews";

type Props = {};

export function ProfileBody({}: Props) {
  const [showCloset, setShowCloset] = useState(true);

  return (
    <div className=" h-full  flex flex-col">
      <div className="border-gray-200 border-b flex">
        <div
          className={clsx(" py-2 px-3 hover:bg-gray-50 cursor-pointer", { "border-cyan-500 border-b-2": showCloset })}
          onClick={() => setShowCloset(true)}
        >
          Closet
        </div>
        <div className={clsx(" py-2 px-3 hover:bg-gray-50 cursor-pointer", { "border-cyan-500 border-b-2": !showCloset })} onClick={() => setShowCloset(false)}>
          Reviews
        </div>
      </div>
      <div className=" min-h-[60vh] h-full flex justify-center items-center">
        {showCloset ? true ? <div className="">No closet</div> : <Closet /> : true ? <div className="">No reviews</div> : <Reviews />}
      </div>
    </div>
  );
}
