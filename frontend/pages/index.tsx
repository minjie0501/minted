import type { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { HomeContent } from "../components/HomeContent";
import { CreateUsernameModal } from "../components/Modals/CreateUsername";
import { useAppDispatch } from "../features/hooks";
import { setUser } from "../features/userSlice";
import { urlBase } from "../utils/urlBase";

const Home: NextPage = (items) => {
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
      <HomeContent items={items as any}/>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${urlBase}/items`);
  const items = await res.json();
  return {
    props: { items },
  };
};
