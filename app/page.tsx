import LandingFeature from "@/components/pages/landing/landing-feature";
import LandingFooter from "@/components/pages/landing/landing-footer";
import LandingHero from "@/components/pages/landing/landing-hero";
import LandingNavbar from "@/components/pages/landing/landing-navbar";
import { Button } from "@/components/ui/button";
import { ClipboardCheckIcon, ContactIcon } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <main className="bg-slate-800 scroll-smooth">
        <LandingNavbar />

        <LandingHero />

        <section
          id="features"
          className="bg-background py-24 flex flex-col gap-y-24"
        >
          <LandingFeature
            title="Manajemen Unit"
            description="Memudahkan anda mengatur setiap unit badan usaha anda dalam satu aplikasi yang terintegrasi."
            icon={ContactIcon}
            imageUrl="/landing/images/manajemen-unit.svg"
            direction="left"
          />

          <LandingFeature
            title="Pajak Perhitungan PPh 21"
            description="Memudahkan anda dalam menghitung pajak tenaga kerja unit anda, sesuai dengan ketentuan PPh21 terbaru 1 Januari 2024."
            icon={ClipboardCheckIcon}
            imageUrl="/landing/images/pph21.svg"
            direction="right"
          />
        </section>

        <section id="cta-try-now" className="text-slate-50 py-48">
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

              <Button className="w-fit" variant={"ghost"} size={"lg"} asChild>
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
