import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { AxiosAuthed } from "@/common/api";
import { AxiosError } from "axios";
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

  try {
    const res = await AxiosAuthed(session.backendTokens.accessToken).get(
      `/files/general_journals/${journal_id}`
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
