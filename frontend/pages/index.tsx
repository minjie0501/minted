import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { Carousel } from "../components/Carousel";
import Header from "../components/Header/Header";
import { HomeContent } from "../components/HomeContent";
import { useAppDispatch } from "../features/hooks";
import { setUser } from "../features/userSlice";

const Home: NextPage = () => {
  const dispatch = useAppDispatch()

  // TODO: this on all pages
  const userIsLoggedIn = async () => {
    try {
      const res = await fetch(`http://localhost:3001/auth/isLoggedIn`, {  credentials: 'include', });
      const user = await res.json()
      if(user.hasOwnProperty("id") && user.hasOwnProperty("provider")){
        dispatch(setUser(user))
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    userIsLoggedIn();
  }, []);



  return (
    <div className="overflow-x-hidden ">
      {/* <Image src="/assets/carousel1.jpg" alt=""  width={20} height={20}/> */}
      {/* <Carousel /> */}
      <Header/>
      <HomeContent />
    </div>
  );
};

export default Home;
