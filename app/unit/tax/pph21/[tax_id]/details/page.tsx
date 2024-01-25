import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Details() {
  return (
    <Layout>
      <h1 className="text-lg font-semibold mb-4">Detail PPh 21</h1>

      <section className="flex flex-row justify-end">
        <div>
          <Button variant="outline" asChild>
            <Link href={"/unit/tax/pph21"}>Kembali</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
