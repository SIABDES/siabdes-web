import { AxiosAuthed, AxiosToBackend } from "@/common/api";
import { authOptions } from "@/lib/next-auth-options";
import { AxiosError } from "axios";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const nextUrl = request.nextUrl;
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect("/login");
  }

  const account_id = nextUrl.searchParams.get("account_id");

  if (!account_id) {
    return NextResponse.json({
      error: "account_id is required",
    });
  }

  try {
    const res = await AxiosToBackend.get(
      `/units/${session.user.unitId}/ledgers`,
      {
        params: {
          account_id,
          business_type: session.user.unitBusinessType,
        },
      }
    );

    return NextResponse.json(res.data);
  } catch (error) {
    if (error instanceof AxiosError) {
      return NextResponse.json(error.response?.data, {
        status: error.response?.status,
        statusText: error.response?.statusText,
      });
    }

    throw error;
  }
}
