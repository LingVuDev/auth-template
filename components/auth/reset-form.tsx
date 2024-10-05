"use client";

import React, { useState, useTransition } from "react";
import CardWrapper from "./card-wrapper";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { ResetSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import FormError from "../ui/form-error";
import FormSuccess from "../ui/form-success";
import { reset } from "@/actions/reset";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ResetForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof ResetSchema>) => {
    startTransition(() => {
      setError("");
      setSuccess("");

      reset(data).then((response) => {
        setError(response?.error);
        setSuccess(response?.success);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Forgot your password?"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="john.doe@example.com"
                      type="email"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.email?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          {}
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? (
              <AiOutlineLoading3Quarters className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Send reset email"
            )}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default ResetForm;
