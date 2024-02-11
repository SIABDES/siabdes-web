"use client";

import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { PropsWithChildren, useState } from "react";
import BumdesNavbar from "../pages/bumdes/bumdes-navbar"; // ini
import { DistrictRegencySidebar } from "../pages/regency/district-regency-sidebar";
import { Separator } from "../ui/separator";

const inter = Inter({ subsets: ["latin"] });

export default function DistrictRegencyLayout(props: PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={cn(inter.className, "min-h-screen")}>
      <DistrictRegencySidebar
        isOpen={sidebarOpen ?? true}
        toggleSidebar={toggleSidebar}
      />

      <div className={cn(sidebarOpen ? "ml-sidebar" : "ml-sidebar-collapsed")}>
        <BumdesNavbar />

        <Separator />

        <main className="px-8 pb-16 mt-4 w-full">{props.children}</main>
      </div>
    </div>
  );
}
