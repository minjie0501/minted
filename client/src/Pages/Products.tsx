import React, { useEffect } from "react";
import { url } from "../helpers/endpoint";

export const Products: React.FC = () => {
  const handleProducts = async () => {
    const data = await fetch(`${url}/products`, {
      credentials: "include",
    });
    const dataParse = await data.json();
    console.log(dataParse);
  };

  useEffect(() => {
    handleProducts();
  }, []);

  return <div>Products</div>;
};
