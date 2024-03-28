import { Button, Input } from "@nextui-org/react";
import { BumdesAddUnitForm } from "../_components/mutation-form";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export default async function BumdesAddUnitPage() {
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold">Tambah Unit</h1>
        <Button
          variant="light"
          startContent={<ChevronLeftIcon className="h-4 w-4" />}
          as={Link}
          href="/bumdes/units"
        >
          Kembali
        </Button>
      </div>

      <section className="py-8">
        <BumdesAddUnitForm />
      </section>
    </>
  );
}
