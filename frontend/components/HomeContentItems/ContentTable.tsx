import clsx from "clsx";
import React, { ReactElement } from "react";
import { Card } from "./Card";

interface Props {
  children: ReactElement | ReactElement[] | any; // TODO: change this for any for the .map in HomeContent
  title: string;
  page?: string;
}

export function ContentTable({ children, title, page }: Props) {
  return (
    <div className="m-auto px-5 xl:px-0 w-full xl:w-fit">
      <h2
        className={clsx("ml-0 lg:ml-2 xl:ml-0 text-2xl font-semibold mb-4", {
          hidden: page === "profile",
        })}
      >
        {title}
      </h2>
      <div
        className={clsx("flex flex-wrap xl:grid xl:grid-cols-5 justify-items-center mb-16 justify-between xl:justify-center", {
          "xl:grid-cols-4": page === "profile",
        })}
      >
        {children}
      </div>
    </div>
  );
}
