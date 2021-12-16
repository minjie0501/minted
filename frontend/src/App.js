import React, {useState, useEffect} from "react";
// import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Dropdown from "./Components/Navbar/Dropdown";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen) 
  }

  useEffect(() => {
    const hideMenu = () =>{
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hideMenu)

    return () =>{
      window.removeEventListener('resize', hideMenu)
    }
  })

  return (
    <>
    <Navbar toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    </>
  );
}

export default App;
