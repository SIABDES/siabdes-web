"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
        className={cn(
          "flex flex-row items-center",
          !isActive && "text-gray-500"
        )}
      >
        {React.createElement(props.icon, { className: "w-5 h-5 mr-2" })}
        {props.label}
      </Button>
    </Link>
  );
}
