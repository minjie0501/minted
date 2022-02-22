import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGem } from "@fortawesome/free-solid-svg-icons";
import { SketchLogo } from "phosphor-react";
import { Button } from "./Button";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "../features/hooks";
import { showModal } from "../features/loginSlice";
import { Dropdown } from "./HamburgerMenu/Dropdown";

interface Props {
}

export function Navbar({  }:Props) {
  const dispatch = useAppDispatch();
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && hamburgerOpen) {
        setHamburgerOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <nav
        className="flex justify-between items-center h-16 bg-slate-700 text-zinc-300 text-xl relative shadow-sm font-bold font-mono"
        role="navigation"
      >
        <Link href="/">
          {/* Minted <FontAwesomeIcon className="text-2xl" icon={faGem} /> */}
          <div className="mx-4 flex text-2xl justify-center items-center cursor-pointer">
            <SketchLogo size={28} weight="bold" />
            <span className="ml-2">Minted</span>
          </div>
        </Link>

        <div className="px-4 cursor-pointer md:hidden" onClick={()=> setHamburgerOpen(!hamburgerOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <div className="pr-8 md:block hidden text-base lg:text-lg">
          <Link href="/">
            <span className="mx-4 cursor-pointer">Home</span>
          </Link>
          <Link href="/products">
            <span className="mx-4 cursor-pointer">Products</span>
          </Link>
          <Link href="/about">
            <span className="mx-4 cursor-pointer">About</span>
          </Link>
          <Link href="/contact">
            <span className="mx-4 cursor-pointer">Contact</span>
          </Link>
          {/* <Link href="/sign-up"> */}
          {/* <a> */}
          <Button value="Sign up | Log in" onClick={() => dispatch(showModal(true))} />
          {/* </a> */}
          {/* </Link> */}
        </div>
      </nav>
      <Dropdown isOpen={hamburgerOpen}  />
    </>
  );
};
