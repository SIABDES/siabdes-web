import { AxiosWilayah } from "@/common/api";
import { WILAYAH_KELURAHAN } from "@/common/api/urls";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const kecamatanKode = req.nextUrl.searchParams.get("kecamatan_kode");

  const res = await AxiosWilayah.get(WILAYAH_KELURAHAN, {
    params: {
      kecamatan_kode: kecamatanKode,
    },
  });

  return NextResponse.json(res.data, { status: res.status });
}
