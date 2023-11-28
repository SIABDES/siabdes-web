import { AxiosAuthed } from "@/common/api";
import { GENERAL_JOURNALS, JOURNALS } from "@/common/api/urls";
import { JournalCategory } from "@/types/journals";
import { AxiosError } from "axios";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

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

export async function POST(request: NextRequest) {
  const payload = await request.formData();

  payload.append("category", JournalCategory.GENERAL);

  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect("/login");
  }

  try {
    const res = await AxiosAuthed(session?.backendTokens.accessToken).post(
      JOURNALS,
      payload
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
