import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { AxiosError } from "axios";
import { AxiosAuthed } from "@/common/api";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  const loginUrl = new URL("/auth/login", req.url);

  if (!session) {
    return NextResponse.redirect(loginUrl);
  }

  if (!session.user.unitId) {
    return NextResponse.json(
      {
        message: "User does not have unitId",
      },
      { status: 401 }
    );
  }

  try {
    const res = await AxiosAuthed(session.backendTokens.accessToken).get(
      `/units/${session.user.unitId}/pph21`
    );

    return NextResponse.json(res.data, { status: res.status });
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) {
        return NextResponse.redirect(loginUrl);
      }
      return NextResponse.json(error.response?.data, {
        status: error.response?.status,
      });
    }

    throw error;
  }
}
