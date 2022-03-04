import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAppDispatch } from "../../features/hooks";
import { setUser } from "../../features/userSlice";
import { urlBase } from "../../utils/urlBase";
import Link from "next/link";

type Props = {};

export function ProfileDropdown({}: Props) {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch(`${urlBase}/auth/logout`, {
        method: "DELETE",
        credentials: "include",
      });
      if (res.status === 200) {
        router.reload();
        dispatch(setUser({}));
      }
    } catch (error) {
      throw error;
    }
  };

  const handleCloseOnClick = () => {
    setOpen(false)
  }

  return (
    <div className="flex justify-center">
      <div>
        <div className="dropdown relative">
          <div
            className="
          px-2
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
          cursor-pointer
        "
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={() => setOpen(!open)}
          >
            <div className="w-7 h-7 border-gray-800 border rounded-full relative">
              <Image
                src="https://lh3.googleusercontent.com/a/AATXAJxnKVq1UEYixQ1hfEoxzfjgvTqqSrlSSwSrtOIA=s96-c"
                alt=""
                layout="fill"
                className="rounded-full border-red-200 border-2"
              />
            </div>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-down"
              className="text-gray-800 w-2 ml-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
              ></path>
            </svg>
          </div>
          <ul
            className={clsx(
              "dropdown-menu w-48 absolute drop-shadow-2xl bg-white text-sm right-0 z-50 float-left pt-2 pb-1  list-none  text-left rounded-md shadow-lg  mt-1  m-0 bg-clip-padding border-none",
              {
                "": open === true,
                hidden: open === false,
              }
            )}
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <a
                className="text-xs py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-400 hover:bg-gray-100  pointer-events-none"
                href="#"
              >
                ACCOUNT
              </a>
            </li>
            <li>
              <Link href={"/profile/dummyUserId"} >
                <a
                  className=" py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 "
                  href="#"
                  onClick={handleCloseOnClick}
                >
                  Profile
                </a>
              </Link>
            </li>
            <li>
              <a className=" py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#" onClick={handleCloseOnClick}>
                Settings
              </a>
            </li>
            <li>
              <a className=" py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#" onClick={handleCloseOnClick}>
                Personalization
              </a>
            </li>
            <li>
              <a className=" py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#" onClick={handleCloseOnClick}>
                <span className="flex justify-between items-center">
                  Balance <span className="text-gray-300 text-xs">$0.00</span>
                </span>
              </a>
            </li>
            <li>
              <a className=" py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 " href="#" onClick={handleCloseOnClick}>
                Invite friends
              </a>
            </li>
            <li>  
              <a
                className=" py-2 px-4 font-normal block w-full border-t whitespace-nowrap bg-transparent text-red-500 hover:bg-gray-100 "
                href="#"
                onClick={handleLogout}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
