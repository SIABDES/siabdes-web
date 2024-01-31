"use client";

import { Button } from "@/components/ui/button";
import { Session } from "inspector";
import { ArrowRight, LogOutIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function LandingNavbar() {
  const { data: session, status: authStatus } = useSession();

  return (
    <nav className="w-full py-4 text-slate-50">
      <div className="px-32 flex flex-row justify-between items-center">
        <div className="flex flex-row gap-x-16">
          <div className="relative h-11 w-32">
            <Link href={"/"}>
              <Image
                alt="SIABDes TAXion"
                src={"/Logo-white-horizontal.svg"}
                fill
              />
            </Link>
          </div>

          <div className="flex flex-row gap-x-8 items-center">
            <Link href="/" className="font-medium text-sm">
              Tentang Kami
            </Link>

            <Link href="/" className="font-medium text-sm">
              Kelebihan Aplikasi
            </Link>

            <Link href="/" className="font-medium text-sm">
              Panduan
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
