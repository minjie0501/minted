import React, { ReactElement } from "react";
import { Card } from "./Card";

interface Props {
  children: ReactElement | ReactElement[];
  title: string;
}

export function ContentTable({ children, title }: Props) {
  return (
    <div className="m-auto w-[1240px]">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className=" grid grid-cols-5 mb-16 justify-center">{children}</div>
    </div>
  );
}
