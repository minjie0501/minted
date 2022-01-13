import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { url } from "../helpers/endpoint";
import { Button } from "./Button";

export const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log('as')
    const data = await fetch(`${url}/products`)
    const parsedData = await data.json()
    console.log(parsedData)
  };


  const handleGoogleAuth = async () => {
    window.open("http://localhost:3001/auth/google", "_self");
  };

  return (
    <div className="content-evenly justify-evenly flex grow h-screen">
      <div className="bg-grey-lighter  flex flex-col ">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 pb-24">
          <div className="bg-white px-6 py-8 rounded drop-shadow-2xl text-black w-96">
            <h1 className="mb-8 text-3xl text-center">Log in</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="username"
              placeholder="Email or username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="text-center">
              <Button value="Log In" onClick={handleLogin} />
            </div>
            <div className="text-center">
              <Button value="Log In With Google" onClick={handleGoogleAuth} />
            </div>
            <div className="text-center text-grey-dark mt-6">
              Don't have an account yet?{" "}
              <Link className="border-b-2" to="/sign-up">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
