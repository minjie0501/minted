import React, { useState, useEffect } from "react";
import Dropdown from "./Components/Navbar/Dropdown";
import Navbar from "./Components/Navbar/Navbar";
import LoginForm from './Components/LoginForm'
import "./App.css";

function App() {
  // Dummy login
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const login = (details) => {
    console.log(details);
  };

  const logout = () => {
    console.log("logout");
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <LoginForm/>
    </>
  );
}

export default App;
