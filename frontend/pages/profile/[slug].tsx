import React from "react";
import { ProfileBody } from "../../components/Profile/ProfileBody";
import { ProfileHeader } from "../../components/Profile/ProfileHeader";

type Props = {};

export default function Profile({}: Props) {
  return (
    // NOTE: h-84vh questionable
    <div className="m-auto w-full xl:w-[1240px] p-2 h-full border-green-200 border flex flex-col">
      <ProfileHeader />
      <ProfileBody />
    </div>
  );
}
