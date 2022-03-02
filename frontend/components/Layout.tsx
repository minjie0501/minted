import React, { ReactElement } from "react";
import { LoginModal } from "./Modals/LoginModal";
import { Navbar } from "./Navbar/Navbar";

interface Props {
  children: ReactElement;
}

export function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <LoginModal />
      {children}
      {/* <Footer /> */}
    </>
  );
}
