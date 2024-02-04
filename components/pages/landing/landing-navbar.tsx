"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, LogOutIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function LandingNavbar() {
  const { data: session, status: authStatus } = useSession();

  return (
    <nav className="w-full py-4 text-slate-50 bg-slate-800">
      <div className="px-32 flex flex-row justify-between items-center">
        <div className="flex flex-row gap-x-12">
          <Link href={"/"}>
            <div className="relative h-11 w-32">
              <Image
                alt="SIABDes TAXion"
                src={"/Logo-white-horizontal.svg"}
                className="object-cover"
                fill
              />
            </div>
          </Link>

          <div className="flex flex-row gap-x-4 items-center">
            <Link href="#about-us">
              <Button variant={"ghost"}>Tentang Kami</Button>
            </Link>

            <Link href="#features">
              <Button variant={"ghost"}>Kelebihan Aplikasi</Button>
            </Link>
          </div>
        </div>

        {/* Sementara disembuyikan */}
        <div className="inline-flex gap-x-4 invisible">
          {authStatus === "authenticated" ? (
            <>
              {session.user.role === "BUMDES" && (
                <Link href={"/bumdes"}>
                  <Button>
                    Ke Dashboard <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              )}

              {session.user.role === "UNIT" && (
                <Link href={"/unit/dashboard"}>
                  <Button>
                    Ke Dashboard <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              )}

              <Button
                variant={"destructiveLink"}
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                <LogOutIcon className="w-4 h-4 mr-2" />
                Keluar
              </Button>
            </>
          ) : (
            <>
              <Link href={"/auth/login"}>
                <Button variant={"outline"}>Masuk</Button>
              </Link>
              <Link href="/auth/register">
                <Button variant={"default"}>Daftar</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
