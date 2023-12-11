"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { PropsWithChildren, useState } from "react";
import BumdesNavbar from "../pages/bumdes/bumdes-navbar";
import { BumdesSidebar } from "../pages/bumdes/bumdes-sidebar";
import { Separator } from "../ui/separator";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function BumdesLayout(props: PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <motion.div className={cn(inter.className, "min-h-screen")}>
      <BumdesSidebar
        isOpen={sidebarOpen ?? true}
        toggleSidebar={toggleSidebar}
      />

      <div className={cn(sidebarOpen ? "ml-sidebar" : "ml-sidebar-collapsed")}>
        <BumdesNavbar />

        <Separator />

        <main className="px-8 pb-16 mt-4 w-full">{props.children}</main>
      </div>
    </motion.div>
  );
}
