import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGem } from "@fortawesome/free-solid-svg-icons";
import { SketchLogo } from "phosphor-react";
import { Button } from "./Button";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "../features/hooks";
import { showModal } from "../features/loginModalSlice";
import { Dropdown } from "./HamburgerMenu/Dropdown";
import { ProfileDropdown } from "./ProfileDropdown";

interface Props {}

export function Navbar({}: Props) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const user = useAppSelector((state) => state.user.value);
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user.hasOwnProperty("id") && user.hasOwnProperty("provider")) {
      setLoggedIn(true);
    }
  }, [user]);

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
          <div className="ml-2 lg:ml-4 xl:ml-20 flex text-2xl justify-center items-center cursor-pointer">
            <SketchLogo size={28} weight="bold" />
            <span className="ml-4">Minted</span>
          </div>
        </Link>

        <div className="px-4 cursor-pointer md:hidden" onClick={() => setHamburgerOpen(!hamburgerOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <div className="md:flex hidden text-base justify-center items-center lg:text-lg mr-2 lg:mr-4 xl:mr-20">
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
          {loggedIn ? (
            <div>
              <ProfileDropdown />
            </div>
          ) : (
            <Button value="Sign up | Log in" onClick={() => dispatch(showModal(true))} />
          )}
          <Link href="/items/new">
            <span className="mx-4 cursor-pointer">Sell Now</span>
          </Link>
          {/* </a> */}
          {/* </Link> */}
        </div>
      </nav>
      <Dropdown isOpen={hamburgerOpen} loggedIn={loggedIn} />
    </>
  );
}
