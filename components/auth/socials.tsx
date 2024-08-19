"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Socials = () => (
  <div className="flex flex-col gap-4 w-full">
    <Button
      variant="outline"
      className="flex gap-4"
      onClick={() =>
        signIn("google", {
          redirect: false,
          callbackUrl: "/",
        })
      }
    >
      <>
        <FcGoogle size={20} />
        <span>Sign in with Google</span>
      </>
    </Button>
    <Button
      variant="outline"
      className="flex gap-4"
      onClick={() =>
        signIn("github", {
          redirect: false,
          callbackUrl: "/",
        })
      }
    >
      <>
        <FaGithub size={20} />
        <span>Sign in with GitHub</span>
      </>
    </Button>
  </div>
);

export default Socials;
