import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { urlBase } from "../../utils/urlBase";
import { Card } from "../HomeContentItems/Card";
import { ContentTable } from "../HomeContentItems/ContentTable";
import { Closet } from "./Closet";
import { Reviews } from "./Reviews";

interface Props  {
  userData: any
};

export function ProfileBody({userData}: Props) {
  const [showCloset, setShowCloset] = useState(true);
  const [items, setItems] = useState([])

  useEffect(() => {
    (async() => {
      const res = await fetch(`${urlBase}/items/seller/${userData._id}`)
      const itemsData = await res.json()
      setItems(itemsData)
    })()
  },[])


  

  return (
    <div className=" h-full  flex flex-col">
      <div className="border-gray-200 border-b flex">
        <div
          className={clsx(" py-2 px-3 hover:bg-gray-50 cursor-pointer", { "border-cyan-500 border-b-2": showCloset })}
          onClick={() => setShowCloset(true)}
        >
          Closet
        </div>
        <div
          className={clsx(" py-2 px-3 hover:bg-gray-50 cursor-pointer", { "border-cyan-500 border-b-2": !showCloset })}
          onClick={() => setShowCloset(false)}
        >
          Reviews
        </div>
      </div>
      <div className=" min-h-[60vh] h-full flex justify-center items-center">
        {showCloset ? items.length < 1 ? <div className="">No closet</div> : <Closet items={items} username={userData.username}/> : true ? <div className="">No reviews</div> : <Reviews />}
      </div>
    </div>
  );
}
