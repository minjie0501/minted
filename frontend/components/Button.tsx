import React from "react";

interface Props {
  value: string;
  btnClass?: string;
  onClick?: () => void;
  icon?: any;
}

export function Button({ value, btnClass, onClick, icon }: Props) {
  return (
    <button
      className={btnClass ? btnClass : "bg-zinc-300 hover:bg-blue-300 text-slate-700 font-bold ml-3 py-1 px-2 rounded"}
      onClick={onClick}
    >
      {icon ? (
        <div className="flex items-center justify-center">
          {icon && <div className="pr-2">{icon}</div>}
          {value}
        </div>
      ) : (
        <div>{value}</div>
      )}
    </button>
  );
}
