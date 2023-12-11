"use client";

import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ProfileNavItemProps {
  href: string;
  as: string;
  icon: LucideIcon;
  label: string;
}

export default function ProfileNavItem(props: ProfileNavItemProps) {
  const pathname = usePathname();

  const isActive = props.as === pathname;

  return (
    <Link href={props.href} as={props.as}>
      <Button
        variant={isActive ? "default" : "outline"}
        className="flex flex-row items-center"
      >
        {React.createElement(props.icon, { className: "w-5 h-5 mr-2" })}
        {props.label}
      </Button>
    </Link>
  );
}
