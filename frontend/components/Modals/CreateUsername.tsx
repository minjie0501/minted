import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../features/hooks";
import { showModal } from "../../features/loginModalSlice";
import { CreateAccountModal } from "./CreateAccountModal";
import { SocialLoginModal } from "./SocialLoginModal";

interface Props  {
    username: String,
    setUsername: (username:string) => void
};

export function CreateUsernameModal({username,setUsername}: Props) {
  const handleCreateUsername = async () => {
    // TODO: error handling
    await fetch(`http://localhost:3001/auth/autoRegister`, {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username: username }),
    });
  };

  return (
    <>
      <div
        id="authentication-modal"
        aria-hidden="true"
        className=" overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0 flex bg-gray-700 bg-opacity-80"
      >
        <div className="relative px-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-end p-2">
            </div>
            <form className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action="#">
              <div className="flex flex-col">
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white self-center">Add username</h3>
              </div>
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Enter username
                </label>
                <input
                  type="username"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Username123"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleCreateUsername}
              >
                Create username
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
