import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function LandingHero() {
  return (
    <section id="hero" className="pt-24 pb-24 pl-32 text-slate-50">
      <div className="mx-auto grid grid-cols-2 gap-x-24">
        <div className="mt-16">
          <h2 className="text-5xl font-bold">
            Sederhanakan Proses Akuntansi Bisnis Anda
          </h2>

          <p className="mt-6">
            Memudahkan BUMDes dan EMKM dalam menyajikan laporan keuangan sesuai
            dengan Standar EMKM. SIABDes TAXion menyediakan fasilitas berupa
            jurnal, buku besar, dan neraca neraca lajur. Laporan Keuangan telah
            sesuai dengan SAK EMKM. SIABDes TAXion juga menyediakan fasilitas
            pelaporan perpajakan PPh 21 dan PPN untuk memudahkan pelaporan pajak
            pada BUMDes.
          </p>

          <div className="flex flex-row gap-x-8 mt-8">
            <Button className="w-fit" size={"lg"} asChild>
              <Link href={"/auth/register"}>Coba Sekarang</Link>
            </Button>

            <Button variant={"ghost"} size={"lg"}>
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>

        <div>
          <section id="hero-sneakpeek-dashboard" className="pb-4 rounded-lg">
            <div className="relative top-0">
              <AspectRatio ratio={2800 / 2100}>
                <div
                  id="img-overlay"
                  className="bg-black z-10 absolute top-0 left-0 w-full h-full opacity-40"
                ></div>

                <Image
                  alt="Dashboard Unit"
                  src={"/landing/images/hero-display.png"}
                  fill
                />
              </AspectRatio>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
