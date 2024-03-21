import { AxiosWilayah } from "@/common/api";
import { WILAYAH_PROVINSI } from "@/common/api/urls";
import { GetManyWilayahProvinsiResponse } from "@/types/wilayah";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const take = req.nextUrl.searchParams.get("take");
  const cursor = req.nextUrl.searchParams.get("cursor") ?? undefined;

  try {
    const res = await AxiosWilayah.get<GetManyWilayahProvinsiResponse>(
      WILAYAH_PROVINSI,
      {
        params: {
          take,
          cursor,
        },
      }
    );

    return NextResponse.json(res.data);
  } catch (error) {
    if (error instanceof AxiosError) {
      return NextResponse.json(error.response?.data, {
        status: error.response?.status || 500,
      });
    }
  }
}
