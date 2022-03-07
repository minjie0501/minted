import Image from "next/image";
import React, { useEffect } from "react";
import { MapPin, Smiley, Clock, CheckCircle, PencilSimple } from "phosphor-react";
import { urlBase } from "../../utils/urlBase";

interface Props  {
  userData: any
};

export function ProfileHeader({userData}: Props) {
  console.log(userData)



  return (
    <div className="flex mb-8">
      <div className="">
        <div className="w-44 h-44 border-gray-800 border rounded-full relative m-4">
          <Image
            src={userData.profileImg}
            alt=""
            layout="fill"
            className="rounded-full border-red-200 border-2"
          />
        </div>
      </div>
      <div className=" flex-grow m-4">
        <div className=" flex-grow flex">
          <div className=" flex-grow flex flex-col">
            <div className="text-2xl">{userData.username}</div>
            <div className="">No reviews yet</div>
          </div>
          <div className=" flex items-center justify-center ">
            <div className="flex border border-gray-400  text-gray-400 py-1 px-2 items-center justify-center rounded hover:bg-gray-100 cursor-pointer">
              <span className="mr-1">
                <PencilSimple size={24} className="" />
              </span>
              <span>
                <a href="/settings/profile">Edit profile</a>
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="mr-14">
            <div className="text-sm text-gray-400 mb-2">About:</div>
            <div className="flex items-center text-gray-600">
              <MapPin size={22} className="text-gray-400 pr-1" />
              United States
            </div>
            <div className="flex items-center text-gray-600">
              <Clock size={22} className="text-gray-400 pr-1" />
              Last seen 1 hour ago
            </div>
            <div className="flex items-center text-gray-600">
              <Smiley size={22} className="text-gray-400 pr-1" />0 followers, 0 following
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-400 font-normal mb-2">Verified info:</div>
            <div className="flex items-center text-gray-600">
              <CheckCircle size={22} className="text-gray-400 pr-1" />
              Google
            </div>
            <div className="flex items-center text-gray-600">
              <CheckCircle size={22} className="text-gray-400 pr-1" />
              Email
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
