import BumdesLayout from "@/components/layout/bumdes-layout";
import React from "react";

export default function BumdesRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BumdesLayout>{children}</BumdesLayout>;
}
