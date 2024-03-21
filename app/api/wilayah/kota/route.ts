import { AxiosWilayah } from "@/common/api";
import { WILAYAH_KOTA } from "@/common/api/urls";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const provinsiKode = req.nextUrl.searchParams.get("provinsi_kode");

  const res = await AxiosWilayah.get(WILAYAH_KOTA, {
    params: {
      provinsi_kode: provinsiKode,
    },
  });

  return NextResponse.json(res.data, { status: res.status });
}
