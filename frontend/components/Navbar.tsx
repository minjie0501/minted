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
      <div className="">
        <div className="h-full">
          <div className="m-auto w-full xl:w-[1240px] px-5 xl:px-0">
            <nav
              className="flex justify-between items-center p-2 text-cyan-500 text-xl relative shadow-sm font-bold font-mono"
              role="navigation"
            >
              <Link href="/">
                {/* Minted <FontAwesomeIcon className="text-2xl" icon={faGem} /> */}
                <div className=" flex text-2xl justify-center items-center cursor-pointer">
                  <SketchLogo size={28} weight="bold" />
                  <span className="ml-2">Minted</span>
                </div>
              </Link>

              <div className="px-4 cursor-pointer md:hidden" onClick={() => setHamburgerOpen(!hamburgerOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <div className="md:flex hidden text-base justify-center items-center lg:text-lg ">
                {/* <Link href="/sign-up"> */}
                {/* <a> */}
                {loggedIn ? (
                  <div>
                    <ProfileDropdown />
                  </div>
                ) : (
                  <Button value="Sign up | Log in" onClick={() => dispatch(showModal(true))} />
                )}
                {/* <Link href="/items/new">
                <span className="mx-4 cursor-pointer">Sell Now</span>
              </Link> */}
                {/* </a> */}
                {/* </Link> */}
              </div>
            </nav>
            <Dropdown isOpen={hamburgerOpen} loggedIn={loggedIn} />
          </div>
        </div>
      </div>
      <div className="">
        <div className="h-full">
          <div className="m-auto w-full xl:w-[1240px] ">
            <div className="flex justify-between items-center h-full text-gray-500 text-lg font-thin relative shadow-sm font-mono">
              <div className="md:flex hidden text-base justify-center items-center font-light ">
                <div className="flex m-auto w-full xl:w-[1240px] ">
                  <Link href="/">
                    <span className="mx-2 p-2 hover:bg-gray-100 cursor-pointer">
                      <a href="">Women</a>
                    </span>
                  </Link>
                  <Link href="/">
                    <span className="mx-2 p-2 hover:bg-gray-100 cursor-pointer">
                      <a href="">Men</a>
                    </span>
                  </Link>
                  <Link href="/">
                    <span className="mx-2 p-2 hover:bg-gray-100 cursor-pointer">
                      <a href="">Kids</a>
                    </span>
                  </Link>
                  <Link href="/">
                    <span className="mx-2 p-2 hover:bg-gray-100 cursor-pointer">
                      <a href="">Home</a>
                    </span>
                  </Link>
                  <Link href="/">
                    <span className="mx-2 p-2 hover:bg-gray-100 cursor-pointer">
                      <a href="">About</a>
                    </span>
                  </Link>
                  <Link href="/">
                    <span className="mx-2 p-2 hover:bg-gray-100 cursor-pointer">
                      <a href="">Our Platform</a>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
