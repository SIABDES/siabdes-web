import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { AxiosAuthed } from "@/common/api";
import { NewUnitRequest } from "@/types/units";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect("/login");
  }

  const body: NewUnitRequest = await request.json();

  try {
    const res = await AxiosAuthed(session.backendTokens.accessToken).post(
      "/units",
      request.body
    );
  } catch (error) {}

  return NextResponse.json({});
}
