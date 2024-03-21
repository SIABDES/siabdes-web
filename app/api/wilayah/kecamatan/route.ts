import { AxiosWilayah } from "@/common/api";
import { WILAYAH_KECAMATAN } from "@/common/api/urls";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const kotaKode = req.nextUrl.searchParams.get("kota_kode");

  const res = await AxiosWilayah.get(WILAYAH_KECAMATAN, {
    params: {
      kota_kode: kotaKode,
    },
  });

  return NextResponse.json(res.data, { status: res.status });
}
