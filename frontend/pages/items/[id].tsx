import React, { useEffect, useState } from "react";
import { ItemDetails } from "../../components/Item/ItemDetails";
import { ItemPictures } from "../../components/Item/ItemPictures";
import { GetServerSideProps } from "next";
import { urlBase } from "../../utils/urlBase";
import { useAppDispatch } from "../../features/hooks";
import { setUser } from "../../features/userSlice";
import { ItemImages } from "../../components/Modals/ItemImages";

export interface Item {
  _id: string;
  title: string;
  imgs: string[];
  description: string;
  category: string;
  brand: string;
  condition: string;
  price: number;
  size: string;
  sellerId: any;
}

interface Props {
  id: string;
  item: Item;
}

export default function Item({ item }: Props) {
  console.log(item);
  const dispatch = useAppDispatch()
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${urlBase}/auth/isLoggedIn`, { credentials: "include" });
        const user = await res.json();
        if (user.hasOwnProperty("id") && user.hasOwnProperty("provider")) {
          dispatch(setUser(user));
        }
      } catch (error) {
        throw error;
      }
    })();
  }, []);

 const [test, setTest] = useState(false)

  return (
    <div className="bg-gray-100 py-10">
      <button className="py-24" onClick={() => setTest(!test)}>test button</button>
      {test && <ItemImages imgs={item.imgs}/>}
      <div className=" bg-gray-100 m-auto w-full xl:w-[1240px] flex space-x-4">
        <ItemPictures item={item}/>
        <ItemDetails item={item} />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id }: any = context.params; // TODO: fix any type
  const res = await fetch(`${urlBase}/items/${id}`);
  const item = await res.json();
  return {
    props: { item },
  };
};
