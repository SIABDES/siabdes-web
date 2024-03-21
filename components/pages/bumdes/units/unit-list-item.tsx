import { formatDateToString } from "@/common/helpers/date";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { BumdesUnitType } from "@/types/bumdes";
import Link from "next/link";
import { useMemo } from "react";

interface BumdesUnitItemProps {
  unit: BumdesUnitType;
}

export default function UnitListItem({ unit }: BumdesUnitItemProps) {
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
