import React, { ReactElement } from "react";
import { Card } from "./Card";

interface Props {
  children: ReactElement | ReactElement[];
  title: string;
}

export function ContentTable({ children, title }: Props) {
  return (
    <div className="m-auto w-[390px] sm:w-[600px] md:w-[820px] lg:w-[1040px] xl:w-[1240px]">
      <h2 className="ml-2 sm:ml-12 md:ml-8 lg:ml-3 xl:ml-0 text-2xl font-semibold mb-4">{title}</h2>
      <div className=" flex flex-wrap xl:grid xl:grid-cols-5 justify-items-center mb-16 justify-center">{children}</div>
    </div>
  );
}
