import React, { ReactElement } from "react";
import { Card } from "./Card";

interface Props {
  children: ReactElement | ReactElement[] | any; // TODO: change this for any for the .map in HomeContent
  title: string;
}

export function ContentTable({ children, title }: Props) {
  return (
    <div className="m-auto px-5 xl:px-0 w-full  xl:w-[1240px]">
      <h2 className="ml-0 lg:ml-2 xl:ml-0 text-2xl font-semibold mb-4">{title}</h2>
      <div className=" flex flex-wrap xl:grid xl:grid-cols-5 justify-items-center mb-16 justify-between xl:justify-center">{children}</div>
      {/* <div className=" grid grid-cols-3 lg:grid-cols-4 xl:grid xl:grid-cols-5 justify-items-center mb-16 justify-between xl:justify-center">{children}</div> */}
    </div>
  );
}
