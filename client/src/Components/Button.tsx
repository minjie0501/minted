import React from "react";

interface Props {
  value: string;
  onClick?: () => void
}

export const Button: React.FC<Props> = ({ value, onClick }) => {
  return <button className="bg-zinc-300 hover:bg-blue-300 text-slate-700 font-bold ml-3 py-1 px-2 rounded" onClick={onClick}>{value}</button>;
};
