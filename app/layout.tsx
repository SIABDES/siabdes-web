import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import { QueryClientProvider } from "@/components/query-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SIABDes TAXion",
  description: "Sistem Informasi Administrasi Badan Desa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider>
          <Providers>{children}</Providers>

          <Toaster />
        </QueryClientProvider>
      </body>
    </html>
  );
}
