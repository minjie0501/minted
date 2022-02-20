import React, { ReactElement } from "react";
import { Navbar } from "./Navbar";

interface Props {
  children: ReactElement;
}

export function Layout({ children }: Props) {
  return (
    <>
      <Navbar toggle={() => {}} />
      {children}
      {/* <Footer /> */}
    </>
  );
}
