import { AxiosAuthed } from "@/common/api";
import { AxiosError } from "axios";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect("/auth/login");
  }

  const bumdesId = session.user.bumdesId;

  try {
    const res = await AxiosAuthed(session.backendTokens.accessToken).get(
      `/bumdes/${bumdesId}/organization`
    );

    return NextResponse.json(res.data);
  } catch (error) {
    if (error instanceof AxiosError) {
      return NextResponse.json(error.response?.data, {
        status: error.response?.status,
      });
    }
    throw error;
  }
}
