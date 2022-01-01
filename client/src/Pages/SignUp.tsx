import React from "react";
import { LoginForm } from "../Components/LoginForm";
import { SignUpForm } from "../Components/SignUpForm";

export const SignUp: React.FC<{ value: string }> = ({ value }) => {
  return <div className="overflow-hidden flex-1">{value === "sign-up" ? <SignUpForm /> : <LoginForm />}</div>;
};
