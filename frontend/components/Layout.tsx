import React, { ReactElement } from "react";
import { LoginModal } from "./Modals/LoginModal";
import { Navbar } from "./Navbar";

interface Props {
  children: ReactElement;
}

export function Layout({ children }: Props) {
  return (
    <>
      <Navbar toggle={() => {}} />

      <LoginModal />
      {children}
      {/* <Footer /> */}
    </>
  );
}
