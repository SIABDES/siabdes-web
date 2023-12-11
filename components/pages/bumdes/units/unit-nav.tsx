import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon, NewspaperIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface UnitNavProps {
  href: string;
  as: string;
  label: string;
  icon: LucideIcon;
}

export default function UnitNav(props: UnitNavProps) {
  return (
    <Link
      href={props.href}
      as={props.as}
      className="group group-hover:shadow-2xl transition duration-300"
    >
      <Card className="h-32 w-32 group-hover:bg-primary group transition duration-300">
        <CardContent className="flex flex-col items-center justify-center h-full p-0 gap-y-4 group-hover:text-primary-foreground transition duration-300">
          {React.createElement(props.icon, { className: "h-6 w-6" })}
          <p className="text-sm font-medium text-center">{props.label}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
