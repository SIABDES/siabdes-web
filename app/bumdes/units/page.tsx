"use client";

import { formatDateToString } from "@/common/helpers/date";
import BumdesLayout from "@/components/layout/bumdes-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { BussinessType } from "@/types/accounts";
import { SelectValue } from "@radix-ui/react-select";
import Link from "next/link";
import { useMemo } from "react";

export default function BumdesUnitsPage() {
  const units: BumdesUnitType[] = [
    {
      id: "1",
      name: "Manufaktur Ban",
      business_type: "INDUSTRY",
      created_at: new Date().toISOString(),
    },
    {
      id: "2",
      name: "Manufaktur Ban",
      business_type: "COMMERCE",
      created_at: new Date().toISOString(),
    },
    {
      id: "3",
      name: "Manufaktur Ban",
      business_type: "SERVICES",
      created_at: new Date().toISOString(),
    },
    {
      id: "4",
      name: "Manufaktur Ban",
      business_type: "COMMERCE",
      created_at: new Date().toISOString(),
    },
    {
      id: "5",
      name: "Manufaktur Ban",
      business_type: "INDUSTRY",
      created_at: new Date().toISOString(),
    },
  ];

  return (
    <>
      <div className="pb-6">
        <h4 className="text-xl font-medium">Daftar Unit</h4>
        <p className="text-sm text-gray-400">
          Daftar unit yang dimiliki oleh Bumdes
        </p>

        <div className="flex flex-row justify-between items-center pt-4">
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Filter berdasarkan jenis unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"INDUSTRY"}>Industri</SelectItem>
                <SelectItem value={"COMMERCE"}>Perdagangan</SelectItem>
                <SelectItem value={"SERVICES"}>Jasa</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Link href={"/bumdes/units/new"}>
            <Button>Tambah Bumdes</Button>
          </Link>
        </div>
      </div>

      <Separator />

      <div className="grid grid-cols-4 gap-x-4 gap-y-4 mt-4">
        {units.map((unit) => (
          <BumdesUnitItem key={unit.name} unit={unit} />
        ))}
      </div>
    </>
  );
}

type BumdesUnitType = {
  id: string;
  name: string;
  business_type: BussinessType;
  created_at: string;
};

interface BumdesUnitItemProps {
  unit: BumdesUnitType;
}

function BumdesUnitItem({ unit }: BumdesUnitItemProps) {
  const businessTypeDisplay = useMemo(() => {
    switch (unit.business_type) {
      case "INDUSTRY":
        return "Industri";
      case "COMMERCE":
        return "Perdagangan";
      case "SERVICES":
        return "Jasa";
    }
  }, [unit.business_type]);

  return (
    <Link
      href={"/bumdes/units/[id]"}
      as={`/bumdes/units/${unit.id}`}
      className="group"
    >
      <Card className="max-w-xs group group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-2xl transition duration-300">
        <CardContent className="mt-4 group">
          <p className="font-medium group-hover:text-primary-foreground transition duration-300">
            {unit.name}
          </p>
          <p className="text-sm group-hover:text-primary-foreground transition duration-300">
            {businessTypeDisplay}
          </p>
        </CardContent>
        <CardFooter className="group">
          <p className="text-xs text-gray-400 group-hover:text-primary-foreground transition duration-300">
            Dibuat pada: {formatDateToString(unit.created_at)}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}
