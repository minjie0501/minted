import React from "react";
import { useAppDispatch } from "../../features/hooks";
import { showModal } from "../../features/loginModalSlice";
import { Button } from "../Button";
import { ProfileDropdown } from "../ProfileDropdown";
import { DropdownItem } from "./DropdownItem";

interface Props {
  isOpen: boolean;
  loggedIn: boolean;
}

export function Dropdown({ isOpen, loggedIn }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div className={isOpen ? "grid grid-rows-4 text-center items-center bg-slate-700 text-xl text-zinc-300" : "hidden"}>
      {loggedIn ? (
        <div>
          <ProfileDropdown />
        </div>
      ) : (
        <Button value="Sign up | Log in" onClick={() => dispatch(showModal(true))} />
      )}
      <DropdownItem to="/" pageName="Home" />
      <DropdownItem to="/products" pageName="Products" />
      <DropdownItem to="/about" pageName="About" />
      <DropdownItem to="/contact" pageName="Contact" />
    </div>
  );
}
