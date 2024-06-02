import React from "react";
import { Card, CardFooter, CardHeader } from "../ui/card";
import Header from "./header";
import BackButton from "./back-button";
import CardWrapper from "./card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const ErrorCard = () => {
  return <CardWrapper headerLabel="Oops, something went wrong!" backButtonLabel={"Back to login"} backButtonHref="/auth/login">
    <div className="w-full flex justify-center items-center">
    <ExclamationTriangleIcon className="text-destructive" />
    </div>

  </CardWrapper>;
};

export default ErrorCard;
