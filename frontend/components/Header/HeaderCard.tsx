import React from "react";

type Props = {};



export default function HeaderCard({}: Props) {
  return (
    <div className="w-[350px] bg-white p-8">
      <h1 className="text-4xl font-medium whitespace-pre-wrap">
        Ready to {"\n"}declutter your {"\n"}closet?
      </h1>
      <button className="px-10 py-2 mt-10 mb-4 w-full bg-cyan-500 rounded-md">Sell now</button>
      <div>
        <a href="" className="text-cyan-500">Learn how it works</a>
      </div>
    </div>
  );
}
