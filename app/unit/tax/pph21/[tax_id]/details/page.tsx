"use client";

import Layout from "@/components/layout/layout";
import Pph21DetailsCalculations from "@/components/pages/pph21/details/pph21-details-calculations";
import Pph21DetailsDeleteButton from "@/components/pages/pph21/details/pph21-details-delete-button";
import { Pph21DetailsGrossSalary } from "@/components/pages/pph21/details/pph21-details-gross-salary";
import { Pph21DetailsNetCalculations } from "@/components/pages/pph21/details/pph21-details-net-calculations";
import Pph21DetailsPkpCalculations from "@/components/pages/pph21/details/pph21-details-pkp-calculations";
import Pph21DetailsResult from "@/components/pages/pph21/details/pph21-details-result";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetQueryPph21Details } from "@/hooks/pph21/useGetPph21Details";
import { EditIcon } from "lucide-react";
import Link from "next/link";

export default function Details({ params }: { params: { tax_id: string } }) {
  const { data: pph21Details, isLoading: isPph21DetailsLoading } =
    useGetQueryPph21Details({ taxId: params.tax_id });

  return (
    <Layout>
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold flex items-center">
          Detail PPh 21
        </h1>
        <div className="inline-flex gap-x-4 justify-end">
          <Button variant={"outline"}>
            <Link
              href={`/unit/tax/ppn/${params.tax_id}/edit`} // ganti pph 21
              className="flex items-center"
            >
              <EditIcon size={16} className="mr-2" />
              Edit PPh 21
            </Link>
          </Button>

          <Pph21DetailsDeleteButton taxId={params.tax_id} />

          <section className="flex flex-row justify-end">
            <div>
              <Button variant="outline" asChild>
                <Link href={"/unit/tax/pph21"}>Kembali</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>

      <div id="details-content">
        {isPph21DetailsLoading && (
          <div className="space-y-6 my-6">
            <Skeleton className="w-full h-36" />
            <Skeleton className="w-full h-36" />
            <Skeleton className="w-full h-36" />
          </div>
        )}

        {pph21Details && (
          <div className="space-y-6 my-6">
            <div>
              <p>Jenis Pegawai: {pph21Details?.data.employee_type}</p>
              <p>
                Periode: {pph21Details?.data.period_month}{" "}
                {pph21Details?.data.period_years}
              </p>
            </div>

            <Pph21DetailsGrossSalary
              salary={pph21Details?.data.gross_salary.salary}
              thr={pph21Details?.data.gross_salary.thr}
              bonus={pph21Details?.data.gross_salary.bonus}
              allowance={pph21Details?.data.gross_salary.allowance}
              overtime_salary={pph21Details?.data.gross_salary.overtime_salary}
              assurance={pph21Details?.data.gross_salary.assurance}
              workingDays={pph21Details?.data.gross_salary.working_days}
              dailySalary={pph21Details?.data.gross_salary.daily_salary}
              monthlySalary={pph21Details?.data.gross_salary.monthly_salary}
            />

            {pph21Details.data.net_calculations && (
              <Pph21DetailsNetCalculations
                calculation={pph21Details.data.net_calculations}
              />
            )}

            {pph21Details.data.pkp_calculations && (
              <Pph21DetailsPkpCalculations
                pkp={pph21Details.data.pkp_calculations}
              />
            )}

            <Pph21DetailsCalculations
              calculations={pph21Details.data.pph21_calculations}
            />

            <Pph21DetailsResult result={pph21Details.data.result} />
          </div>
        )}
      </div>
    </Layout>
  );
}
