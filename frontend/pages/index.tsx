import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Carousel } from "../components/Carousel";
import Header from "../components/Header/Header";
import { HomeContent } from "../components/HomeContent";
import { CreateUsernameModal } from "../components/Modals/CreateUsername";
import { useAppDispatch } from "../features/hooks";
import { setUser } from "../features/userSlice";
import { urlBase } from "../utils/urlBase";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const [createUsername, setCreateUsername] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${urlBase}/auth/isLoggedIn`, { credentials: "include" });
        const user = await res.json();
        if (user.hasOwnProperty("id") && user.hasOwnProperty("provider")) {
          dispatch(setUser(user));
          const res = await fetch(`${urlBase}/auth/newUser`, { credentials: "include" });
          if (res.status === 204) {
            setCreateUsername(true);
          }
        }
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  return (
    <div className="overflow-x-hidden ">
      {/* <Image src="/assets/carousel1.jpg" alt=""  width={20} height={20}/> */}
      {/* <Carousel /> */}
      {createUsername && <CreateUsernameModal username={username} setUsername={setUsername} />}
      <Header />
      <HomeContent />
    </div>
  );
};

export default Home;
