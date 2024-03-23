import { AxiosAuthed, AxiosToBackend } from "@/common/api";
import { JOURNALS } from "@/common/api/urls";
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
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const res = await AxiosToBackend.get(
    `units/${session.user.unitId}/${JOURNALS}/${journal_id}`
  );

  return NextResponse.json(res.data);
}
