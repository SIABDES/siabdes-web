import LandingFeature from "@/components/pages/landing/landing-feature";
import LandingFooter from "@/components/pages/landing/landing-footer";
import LandingHero from "@/components/pages/landing/landing-hero";
import LandingNavbar from "@/components/pages/landing/landing-navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BoxIcon, ClipboardCheckIcon, ContactIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <LandingNavbar />

      <main>
        <LandingHero />

        <section id="hero-sneakpeek-dashboard" className="pb-4">
          <Card className="relative h-[32rem] max-w-4xl mx-auto shadow">
            <CardContent>
              <Image
                alt="Dashboard Unit"
                src={"/landing/images/dashboard-unit.svg"}
                fill
              />
            </CardContent>
          </Card>
        </section>

        <LandingFeature
          title="Manajemen Unit"
          description="Memudahkan anda mengatur setiap unit badan usaha anda dalam satu aplikasi yang terintegrasi."
          icon={ContactIcon}
          imageUrl="/landing/images/manajemen-unit.svg"
          direction="left"
        />

        {/* <LandingFeature
          title="Pajak Pertambahan Nilai (PPN)"
          description="Memudahkan anda dalam menghitung pajak produk unit anda, baik produk barang atau jasa."
          icon={BoxIcon}
          imageUrl="/landing/images/pph21.svg"
          direction="right"
        /> */}

        <LandingFeature
          title="Pajak Perhitungan PPh 21"
          description="Memudahkan anda dalam menghitung pajak tenaga kerja unit anda, sesuai dengan ketentuan PPh21 terbaru 1 Januari 2024."
          icon={ClipboardCheckIcon}
          imageUrl="/landing/images/pph21.svg"
          direction="right"
        />

        <section
          id="cta-try-now"
          className="border-y border-y-border py-48 my-16"
        >
          <div className="max-w-3xl mx-auto flex flex-col gap-y-12 items-center justify-center">
            <div className="flex flex-col gap-y-8 items-center justify-center">
              <h4 className="text-5xl font-semibold">Siap untuk memulai?</h4>
              <p className="text-center">
                Daftarkan BUMDes anda sekarang dan nikmati kemudahan dalam
                akuntansi melalui pembukuan laporan keuangan dan perpajakan PPN
                dan PPh21.
              </p>
            </div>

            <div className="flex flex-row gap-x-8">
              <Button className="w-fit" size={"lg"} asChild>
                <Link href={"/auth/register"}>Daftar Sekarang</Link>
              </Button>

              <Button className="w-fit" variant={"outline"} size={"lg"} asChild>
                <Link href={"#"}>Ragu? Kontak Kami</Link>
              </Button>
            </div>
          </div>
        </section>

        <LandingFooter />
      </main>
    </>
  );
}
