"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginFormData, LoginSchema } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      // Add default values for the controlled inputs
      identifier: "",
      password: "",
    },
  });

  const onLoginSubmit = (data: LoginFormData) => {
    signIn("credentials", {
      ...data,
      callbackUrl: "/auth/redirect",
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onLoginSubmit)}
        className="flex flex-col justify-between"
      >
        <div className="flex flex-col gap-y-4">
          <FormField
            control={form.control}
            name="identifier"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="identifier">Email atau Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tulis email atau username anda.."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Tulis password anda.."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-y-6 mt-2">
          <Button type="submit" className="w-full mt-6">
            Masuk
          </Button>

          <span className="text-center text-sm font-medium text-muted-foreground">
            Belum punya akun?{" "}
            <Link
              href="/auth/register"
              className="text-primary/80 hover:underline"
            >
              Daftar
            </Link>
          </span>
        </div>
      </form>
    </Form>
  );
}
