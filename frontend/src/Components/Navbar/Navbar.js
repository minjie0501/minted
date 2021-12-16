import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { render } from "react-dom";

export default function Navbar({toggle}) {
  //   const [isClicked, setClick] = useState({ clicked: false });

  //   function handleClick(){
  //     setClick({clicked: !isClicked.clicked})
  //   }

  //   return (
  //     <nav className="NavbarItems">
  //       <h1 className="navbar-logo">
  //         Minted<i className="far fa-gem"></i>
  //       </h1>
  //       <div className="menu-icon" onClick={handleClick}>
  //           <i className={isClicked.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
  //       </div>
  //       <ul className={isClicked.clicked ? 'nav-menu-active' : 'nav-menu'}>
  //         {MenuItems.map((item, index) => {
  //           return (
  //             <li key={index}>
  //               <a className={item.cName} href={item.url}>
  //                 {item.title}
  //               </a>
  //             </li>
  //           );
  //         })}
  //       </ul>
  //       <Button>Sign Up</Button>
  //     </nav>
  //   );
  return (
    <nav className="flex justify-between items-center h-16 bg-slate-700 text-zinc-300 text-xl relative shadow-sm font-bold font-mono" role="navigation">
      <Link to="/" className="pl-8">
        Minted
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
          <Link className="p-4" to="/">Home</Link>
          <Link className="p-4" to="/">Products</Link>
          <Link className="p-4" to="/">About</Link>
          <Link className="p-4" to="/">Contact</Link>
      </div>
    </nav>
  );
}
