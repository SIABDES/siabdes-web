import { formatDateToString } from "@/common/helpers/date";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  ScrollShadow,
} from "@nextui-org/react";
import Link from "next/link";
import { getUnits } from "./_actions/get";
import { redirect } from "next/navigation";
import { UnitBusinessType } from "./_types/common";

function formatUnitBusinessType(type: UnitBusinessType) {
  switch (type) {
    case UnitBusinessType.COMMERCE:
      return "Perdagangan";
    case UnitBusinessType.INDUSTRY:
      return "Industri";
    case UnitBusinessType.SERVICES:
      return "Jasa";
  }
}

export default async function BumdesUnitsPage() {
  const { response, data } = await getUnits();
  const { units } = data;

  if (response.status === 401) {
    redirect("/auth/login");
  }

  return (
    <div className="pr-16">
      <div className="flex justify-between flex-row">
        <h4 className="font-medium text-lg">Manajemen Unit</h4>

        <Button color="primary" as={Link} href="/bumdes/units/add">
          Tambah Unit
        </Button>
      </div>

      <Divider className="w-full my-4" />

      <ScrollShadow className="w-full h-[32rem]">
        <section className="min-h-[20rem] grid grid-cols-5 gap-x-8 px-4 py-6">
          {units.map((unit) => (
            <Card
              key={unit.id}
              as={Link}
              href={`/bumdes/units/${unit.id}`}
              classNames={{
                base: "mb-4 h-fit hover:bg-primary group",
              }}
            >
              <CardHeader className="flex flex-col items-start justify-start">
                <h5 className="font-medium group-hover:text-white">
                  {unit.name}
                </h5>
                <p className="text-sm text-gray-500 group-hover:text-foreground-200">
                  {formatUnitBusinessType(unit.business_type)}
                </p>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-gray-500 group-hover:text-foreground-200">
                  {formatDateToString(unit.created_at)}
                </p>
              </CardBody>
            </Card>
          ))}
        </section>
      </ScrollShadow>
    </div>
  );
}
