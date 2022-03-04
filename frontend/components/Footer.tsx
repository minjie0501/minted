import React from "react";
import { Copyright } from "phosphor-react";
import Link from "next/link";

type Props = {};

export function Footer({}: Props) {
  return (
      <div className="flex py-3 p-2 border-gray-200 border-t w-full text-sm m-auto xl:w-[1240px] flex-start text-gray-500">
        <Link href="#">
          <div className="pr-3 cursor-pointer hover:underline">Privay Policy</div>
        </Link>
        <Link href="#">
          <div className="pr-3 cursor-pointer hover:underline">Cookie Policy</div>
        </Link>
        <Link href="#">
          <div className="pr-3 cursor-pointer hover:underline">Cookie Settings</div>
        </Link>
        <Link href="#">
          <div className="pr-3 cursor-pointer hover:underline">Terms & Conditions</div>
        </Link>
        <Link href="#">
          <div className="pr-3 cursor-pointer hover:underline">Pro terms of sale</div>
        </Link>
        <Link href="#">
          <div className="pr-3 cursor-pointer hover:underline">Pro terms of use</div>
        </Link>
        <div className="flex items-center ml-auto">
          <div className="ml-1">{new Date().getFullYear()}</div>
          <Copyright className="ml-1" />
          <div className="ml-1">Minted</div>
      </div>
    </div>
  );
}
