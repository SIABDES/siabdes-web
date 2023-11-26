import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { AxiosAuthed } from "@/common/api";
import { authOptions } from "../../auth/[...nextauth]/route";
import { GENERAL_JOURNALS } from "@/common/api/urls";

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect("/login");
  }

  const res = await AxiosAuthed(session.backendTokens.accessToken).get(
    GENERAL_JOURNALS
  );

  return NextResponse.json(res.data);
}
