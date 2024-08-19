"use client";

import { Session } from "next-auth";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

// type User = Session["user"];

const ProfileButton = ({ expires, user }: Session) => {
  return <div>
    <div>{user?.email}</div>
    <Button variant="ghost" onClick={() => signOut()}>sign out</Button>
  </div>
};

export default ProfileButton;
