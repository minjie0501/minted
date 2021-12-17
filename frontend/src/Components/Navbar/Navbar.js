import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";

export default function Navbar({ toggle }) {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-slate-700 text-zinc-300 text-xl relative shadow-sm font-bold font-mono"
      role="navigation"
    >
      <Link to="/" className="pl-8 text-3xl">
        Minted <FontAwesomeIcon className="text-2xl" icon={faGem} />
      </Link>

      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="p-4" to="/home">
          Home
        </Link>
        <Link className="p-4" to="/products">
          Products
        </Link>
        <Link className="p-4" to="/about">
          About
        </Link>
        <Link className="p-4" to="/contact">
          Contact
        </Link>
        <Link to="/sign-up">
          {" "}
          <Button value="Sign up" />
        </Link>
      </div>
    </nav>
  );
}
