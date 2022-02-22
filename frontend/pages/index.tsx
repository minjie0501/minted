import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { Carousel } from "../components/Carousel";

const Home: NextPage = () => {

  return (
    <div>
      {/* <Image src="/assets/carousel1.jpg" alt=""  width={20} height={20}/> */}
      <Carousel/>
    </div>
  );
};

export default Home;
