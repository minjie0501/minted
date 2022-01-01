import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export const SignUpForm: React.FC = () => {
const handleSignUp = () => {
    console.log('asd')
}

  return (
    <div className="content-evenly justify-evenly flex grow h-screen">
      <div className="bg-grey-lighter  flex flex-col ">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 pb-24">
          <div className="bg-white px-6 py-8 rounded drop-shadow-2xl text-black w-96">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="fullname" placeholder="Full Name" />
            <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="username" placeholder="Username" />
            <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="email" placeholder="Email" />
            <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="address" placeholder="Address" />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />
            <div className="text-center">
              <Button value="Create account" onClick={handleSignUp}/>
            </div>

          <div className="text-grey-dark mt-6 text-center">
            Already have an account?{" "}
            <Link className="border-b-2" to="/log-in">
              Log in
            </Link>
          </div>
            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the{" "}
              <Link className="no-underline border-b-2 border-grey-dark text-grey-dark" to="/">
                Terms of Service
              </Link>{" "}
              and
              <Link className="no-underline border-b-2 border-grey-dark text-grey-dark" to="/">
                {" "}
                Privacy Policy
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
