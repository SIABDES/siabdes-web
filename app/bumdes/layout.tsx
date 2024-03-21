import { NewSidebar } from "@/components/patan-ui/new-sidebar";
import { cn } from "@nextui-org/react";
import React from "react";

export default function BumdesRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[300vh] flex flex-row gap-x-6">
      <NewSidebar />

      <main className={cn("min-h-screen")}>{children}</main>
    </div>
  );
}
