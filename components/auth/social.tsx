"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";

const Social = () => {
  const handleClick = (provider: "google" | "github") => {
    signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button className="w-full" variant="outline" size="lg" onClick={() => handleClick('google')}>
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button className="w-full" variant="outline" size="lg" onClick={() => handleClick('github')}>
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Social;
