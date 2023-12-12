import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { AxiosAuthed } from "@/common/api";
import { NewUnitRequest, NewUnitSchema } from "@/types/units";
import { AxiosError } from "axios";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect("/login");
  }

  const body = await request.json();
  const payload = NewUnitSchema.safeParse(body);

  if (!payload.success) {
    return NextResponse.json(payload.error, { status: 400 });
  }

  try {
    const res = await AxiosAuthed(session.backendTokens.accessToken).post(
      "/units",
      payload.data
    );

    return NextResponse.json(res.data.data);
  } catch (error) {
    if (error instanceof AxiosError) {
      return NextResponse.json(error.response?.data, {
        status: error.response?.status,
      });
    }
    throw error;
  }
}

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const searchParams = request.nextUrl.searchParams;

  if (!session) {
    return NextResponse.redirect("/auth/login");
  }

  try {
    const res = await AxiosAuthed(session.backendTokens.accessToken).get(
      "/units"
    );

    return NextResponse.json(res.data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
