"use client";

import ProfileNavItem from "@/components/pages/bumdes/bumdes-profile-nav-item";
import { Separator } from "@/components/ui/separator";
import {
  BarChart2Icon,
  CircleDollarSignIcon,
  UserIcon,
  Users2Icon,
} from "lucide-react";
import React from "react";

export default function BumdesUnitProfileRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h4 className="text-lg font-medium">Profil Bumdes</h4>

      <div className="w-fit flex flex-row gap-x-6 flex-nowrap overflow-y-scroll mt-4">
        <ProfileNavItem
          href="/bumdes/profile"
          as={`/bumdes/profile`}
          icon={UserIcon}
          label="Profil Bumdes"
        />

        <ProfileNavItem
          href="/bumdes/profile/organization"
          as={`/bumdes/profile/organization`}
          icon={Users2Icon}
          label="Susunan Pengurus"
        />

        <ProfileNavItem
          href="/bumdes/profile/funding"
          as={`/bumdes/profile/funding`}
          icon={CircleDollarSignIcon}
          label="Riwayat Pemodalan"
        />

        <ProfileNavItem
          href="/bumdes/profile/incomes"
          as={`/bumdes/profile/incomes`}
          icon={BarChart2Icon}
          label="Omzet/Keuntungan/Dividen"
        />
      </div>

      <Separator className="my-4" />

      <div>{children}</div>
    </>
  );
}
