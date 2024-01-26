import { Button } from "@/components/ui/button";
import {
  InstagramLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { PhoneIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LandingFooter() {
  return (
    <footer className="py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-x-12">
          <section
            id="footer-partners"
            className="col-span-4 flex flex-col gap-y-4"
          >
            <p className="font-semibold">Tentang Kami</p>

            <p>
              SIABDes TAXIon adalah aplikasi agar membantu BUMDes dalam proses
              akuntansi melalui pembukuan laporan keuangan dan perpajakan.
            </p>
          </section>

          <section id="footer-partners" className="col-span-2">
            <p className="font-semibold">Partner Kami</p>

            <div className="relative h-16 my-4">
              <Image
                alt="Telkom University"
                src={"/landing/images/telu.png"}
                fill
              />
            </div>

            <div className="relative h-12">
              <Image
                alt="Bandung Techno Park"
                src={"/landing/images/btp.png"}
                fill
              />
            </div>
          </section>

          <div id="footer-offset"></div>

          <section id="footer-resources" className="col-span-2">
            <p className="font-semibold">Sumber Daya</p>

            <div className="mt-4 flex flex-col gap-y-2">
              <Link className="text-link text-base" href={"/docs"}>
                Panduan
              </Link>

              <Link className="text-link text-base" href={"/"}>
                Kelebihan Aplikasi
              </Link>

              <Link className="text-link text-base" href={"/"}>
                Tentang Kami
              </Link>
            </div>
          </section>

          <section id="footer-contact-us" className="col-span-3">
            <p className="font-semibold">Hubungi Kami</p>

            <div className="mt-4">
              <Link
                className="text-link"
                href={"mailto:siabdeswebapp@gmail.com"}
              >
                siabdeswebapp@gmail.com
              </Link>
            </div>

            <div className="flex flex-row gap-x-2 items-center mt-2">
              <Button variant={"ghost"} size={"icon"}>
                <InstagramLogoIcon className="h-6 w-6" />
              </Button>

              <Button variant={"ghost"} size={"icon"}>
                <TwitterLogoIcon className="h-6 w-6" />
              </Button>

              <Button variant={"ghost"} size={"icon"}>
                <LinkedInLogoIcon className="h-6 w-6" />
              </Button>

              <Button variant={"ghost"} size={"icon"}>
                <PhoneIcon className="h-6 w-6" />
              </Button>
            </div>
          </section>
        </div>

        <section id="footer-copyright" className="mt-24">
          <p className="text-sm font-medium">
            © 2024 SIABDes TAXIon. All rights reserved.
          </p>
        </section>
      </div>
    </footer>
  );
}
