import React from "react";

interface Props {
  value: string;
  btnClass?: string;
  onClick?: () => void
}

export const Button: React.FC<Props> = ({ value, btnClass, onClick }) => {
  return <button className={ btnClass ? btnClass:  "bg-zinc-300 hover:bg-blue-300 text-slate-700 font-bold ml-3 py-1 px-2 rounded" } onClick={onClick}>{value}</button>;
};
