import React, { useEffect } from "react";
import { url } from "../helpers/endpoint";

export const Products: React.FC = () => {
// TODO: add skeleton screen when products are not loaded yet

  const handleProducts = async () => {
    const data = await fetch(`${url}/products`, {
      credentials: "include",
    });
    const dataParse = await data.json();
  };

  useEffect(() => {
    handleProducts();
  }, []);

  return <div>Products</div>;
};
