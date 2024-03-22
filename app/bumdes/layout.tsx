"use client";

import { NewSidebar } from "@/components/patan-ui/new-sidebar";
import { cn } from "@nextui-org/react";
import { HomeIcon } from "lucide-react";
import React from "react";

export default function BumdesRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-row gap-x-6">
      <NewSidebar
        items={[
          {
            icon: HomeIcon,
            label: "Dashboard",
            href: "/bumdes",
            tooltip: "Dashboard",
          },
          {
            icon: HomeIcon,
            label: "Dashboard",
            href: "/unit/dashboard",
          },
        ]}
      />

      <main className={cn("min-h-screen")}>{children}</main>
    </div>
  );
}
