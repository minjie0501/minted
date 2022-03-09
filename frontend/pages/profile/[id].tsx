import React, { useEffect, useState } from "react";
import { ProfileBody } from "../../components/Profile/ProfileBody";
import { ProfileHeader } from "../../components/Profile/ProfileHeader";
import { useRouter } from "next/router";
import { urlBase } from "../../utils/urlBase";
import { GetServerSideProps } from "next";
import { Divide } from "phosphor-react";

interface Props {
  id: string;
}

export default function Profile({ id }: Props) {
  const router = useRouter();
  const [userData, setUserData] = useState({});
  const [render, setRender] = useState(false);



  useEffect(() => {
    (async () => {
      const res = await fetch(`${urlBase}/users/provider/${id}`);
      const user = await res.json();
      setUserData(user);
      setRender(true);
    })();
  }, []);

  return (
    <>
      {render ? (
        <div className="m-auto w-full xl:w-[1240px] p-2 h-full  flex flex-col">
          <ProfileHeader userData={userData} />
          <ProfileBody userData={userData}/>
        </div>
      ) : (
        <div className="m-auto w-full xl:w-[1240px] p-2 h-screen  flex flex-col"></div>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { id: context.params?.id },
  };
};
