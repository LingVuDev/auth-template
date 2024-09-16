"use client";

import React, { useCallback, useEffect, useState } from "react";
import CardWrapper from "./card-wrapper";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useSearchParams } from "next/navigation";
import { newVerification } from "@/actions/new-verification";
import FormError from "@/components/ui/form-error";
import FormSuccess from "@/components/ui/form-success";

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Token not found!");

      return;
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, []);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="flex items-center w-full justify-center">
        {!error && !success && (
          <AiOutlineLoading3Quarters className="mr-2 h-4 w-4 animate-spin" />
        )}
        <FormSuccess message={success} />
        <FormError message={error} />
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
