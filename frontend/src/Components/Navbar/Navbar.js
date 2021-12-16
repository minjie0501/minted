import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import {Button}  from "../Button";
import "./Navbar.css";

export default function Navbar() {
  const [isClicked, setClick] = useState({ clicked: false });

  function handleClick(){
    setClick({clicked: !isClicked.clicked})
  }

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        Minted<i className="far fa-gem"></i>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
          <i className={isClicked.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={isClicked.clicked ? 'nav-menu-active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Button>Sign Up</Button>
    </nav>
  );
}
