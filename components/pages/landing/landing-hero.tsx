import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingHero() {
  return (
    <section id="hero" className="pt-32 pb-24">
      <div className="text-center max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold">
          Sederhanakan Proses Akuntansi Bisnis Anda
        </h2>
        <p className="text-lg mt-12 max-w-4xl mx-auto">
          Memudahkan BUMDes dalam proses Akuntansi dengan lengkap dan
          terintegrasi, mulai dari{" "}
          <span className="font-semibold">pembukuan laporan keuangan</span>{" "}
          sampai <span className="font-semibold">perpajakan</span> produk dan
          tenaga kerja dengan Standar Akutansi Keuangan Entitas Mikro Kecil
          Menegah <span className="font-semibold">(SAK EMKM)</span>.
        </p>

        <div className="flex flex-row gap-x-8 mt-8 justify-center items-center">
          <Button className="w-fit" size={"lg"} asChild>
            <Link href={"/auth/register"}>Coba Sekarang</Link>
          </Button>

          <Button variant={"outline"} size={"lg"}>
            Pelajari Lebih Lanjut
          </Button>
        </div>
      </div>
    </section>
  );
}
