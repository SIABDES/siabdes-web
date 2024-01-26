import { AxiosAuthed } from "@/common/api";
import { authOptions } from "@/lib/next-auth-options";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { journal_id: string } }
) {
  const { journal_id } = params;

  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect("/login");
  }

  const res = await AxiosAuthed(session.backendTokens.accessToken).get(
    `/journals/${journal_id}`
  );

  return NextResponse.json(res.data);
}
