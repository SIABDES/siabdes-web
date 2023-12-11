"use client";

import LoginForm from "@/components/pages/login/login-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import LoginImage from "@/public/undraw_login_re_4vu2.svg";
import Image from "next/image";

export default function Login() {
  return (
    <main className="max-w-6xl mx-auto flex flex-col items-center justify-between mt-16">
      <div className="grid grid-cols-12 gap-x-16">
        <div className="col-span-6">
          <Image src={LoginImage} alt="login" className="max-w-lg" />
        </div>

        <Card className="col-span-5">
          <CardHeader>
            <h4 className="text-lg text-center font-medium mb-2">Masuk</h4>
          </CardHeader>

          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
