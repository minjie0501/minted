import React from 'react'
import { DropdownItem } from './DropdownItem';

interface Props{
    isOpen: boolean,
    toggle: () => void
}

export const Dropdown:React.FC<Props> = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? "grid grid-rows-4 text-center items-center bg-slate-400 text-xl text-zinc-300" : "hidden"} onClick={toggle}>
          <DropdownItem className="p-4 hover:bg-blue-700" to="/" pageName="Home" />
          <DropdownItem className="p-4 hover:bg-blue-700" to="/products" pageName="Products" />
          <DropdownItem className="p-4 hover:bg-blue-700" to="/about" pageName="About" />
          <DropdownItem className="p-4 hover:bg-blue-700" to="/contact" pageName="Contact" />
        </div>
      );
}
