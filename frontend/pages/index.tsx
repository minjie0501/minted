import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { LoginModal } from "../components/Modals/LoginModal";

const Home: NextPage = () => {
  return (
    <div>
      <LoginModal />
    </div>
  );
};

export default Home;
