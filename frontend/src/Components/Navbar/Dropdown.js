import React from "react";
import { Link } from "react-router-dom";

export default function Dropdown({isOpen, toggle}) {
  return (
    <div className={isOpen ? "grid grid-rows-4 text-center items-center bg-slate-400 text-xl text-zinc-300" : "hidden"} onClick={toggle}>
      <Link className="p-4" to="/">
        Home
      </Link>
      <Link className="p-4" to="/">
        Products
      </Link>
      <Link className="p-4" to="/">
        About
      </Link>
      <Link className="p-4" to="/">
        Contact
      </Link>
    </div>
  );
}
