import React, { useState, useEffect } from "react";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { Products } from "./Pages/Products";
import { Dropdown } from "./Components/Dropdown";
import { LoginForm } from "./Components/LoginForm";
import { SignUp } from "./Pages/SignUp";

function App() {
  // Dummy login
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  // const [user, setUser] = useState({ name: "", email: "" });
  // const [error, setError] = useState("");

  // const login = (details: any) => {
  //   console.log(details);
  // };

  // const logout = () => {
  //   console.log("logout");
  // };

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
      <div className="flex flex-col h-screen">
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp value='sign-up'/>} />
          <Route path="/log-in" element={<SignUp value='log-in' />} />
        </Routes>
        {/* {window.location.pathname === "sign-up" ? <LoginForm /> : ""} */}
      </div>
    </>
  );
}

export default App;
