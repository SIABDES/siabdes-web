import { AxiosAuthed, AxiosToBackend } from "@/common/api";
import { ACCOUNTS } from "@/common/api/urls";
import { authOptions } from "@/lib/next-auth-options";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect("/auth/signin");
  }

  const { nextUrl } = request;

  const account_id = nextUrl.searchParams.get("account_id");

  const res = await AxiosToBackend.get(ACCOUNTS, {
    params: {
      unit_id: session.user.unitId,
      account_id: account_id ? account_id : undefined,
    },
  });

  return NextResponse.json(res.data);
}
