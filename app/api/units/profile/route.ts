import { AxiosAuthed } from "@/common/api";
import { authOptions } from "@/lib/next-auth-options";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.redirect("/login");
  }

  const res = await AxiosAuthed(session.backendTokens.accessToken).get(
    `/units/${session.user.unitId}/profile`
  );

  const { data } = res.data;

  return NextResponse.json(data);
}
