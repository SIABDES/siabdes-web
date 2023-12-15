"use client";

import { UnitEmptyState } from "@/components/pages/bumdes/units/unit-empty-state";
import UnitListItem from "@/components/pages/bumdes/units/unit-list-item";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import useGetUnits from "@/hooks/units/useGetUnits";
import { BumdesUnitType } from "@/types/bumdes";
import { SelectValue } from "@radix-ui/react-select";
import Link from "next/link";

export default function BumdesUnitsPage() {
  const { data: getUnitsData, isLoading: isGetUnitsLoading } = useGetUnits();

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
        {!isGetUnitsLoading &&
          getUnitsData &&
          getUnitsData.units.map((unit) => (
            <UnitListItem key={unit.name} unit={unit} />
          ))}

        {!isGetUnitsLoading &&
          getUnitsData &&
          getUnitsData.units.length === 0 && <UnitEmptyState />}
      </div>
    </>
  );
}
