"use client";

import ProfileNavItem from "@/components/pages/bumdes/bumdes-profile-nav-item";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  BarChart2Icon,
  CircleDollarSignIcon,
  TrashIcon,
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
      <h4 className="text-lg font-medium">Profil Unit</h4>

      <div className="inline-flex w-full justify-between items-center mt-6">
        <div className="w-fit flex flex-row gap-x-6 flex-nowrap">
          <ProfileNavItem
            href="/bumdes/units/[unit_id]/profile"
            as={`/bumdes/units/1/profile`}
            icon={UserIcon}
            label="Profil Unit"
          />
        </div>

        <div>
          <Button
            variant={"destructiveOutline"}
            className="flex flex-row items-center"
          >
            <TrashIcon className="w-5 h-5 mr-2" />
            Hapus Unit
          </Button>
        </div>
      </div>

      <Separator className="my-4" />

      <div>{children}</div>
    </>
  );
}
