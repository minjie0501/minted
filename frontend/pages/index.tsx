import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { Carousel } from "../components/Carousel";
import { HomeContent } from "../components/HomeContent";
import { useAppDispatch } from "../features/hooks";
import { setUser } from "../features/userSlice";

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
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
    <div className="overflow-x-hidden">
      {/* <Image src="/assets/carousel1.jpg" alt=""  width={20} height={20}/> */}
      <Carousel />
      <HomeContent />
    </div>
  );
};

export default Home;
