import { AxiosAuthed, AxiosToBackend } from "@/common/api";
import { authOptions } from "@/lib/next-auth-options";
import { GetEmployeesResponse } from "@/types/employees/response";
import { AxiosError } from "axios";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  const loginUrl = new URL("/auth/login", request.url);

  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized" },
      {
        status: 401,
      }
    );
  }

  const limit = request.nextUrl.searchParams.get("limit");
  const cursor = request.nextUrl.searchParams.get("cursor");

  try {
    const res = await AxiosToBackend.get<GetEmployeesResponse>(
      `/units/${session.user.unitId}/employees`,
      {
        params: {
          limit,
          cursor,
        },
      }
    );

    return NextResponse.json(res.data);
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) {
        return NextResponse.redirect(loginUrl);
      }
    }
    throw error;
  }
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  const loginUrl = new URL("/auth/login", request.url);

  if (!session) {
    return NextResponse.redirect(loginUrl);
  }
  const payload = await request.json();

  try {
    const res = await AxiosAuthed(session?.backendTokens.accessToken).post(
      `/units/${session.user.unitId}/employees`,
      payload
    );

    return NextResponse.json(res.data);
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) {
        return NextResponse.redirect(loginUrl);
      }
      if (error.response?.status === 400) {
        return NextResponse.json(error.response?.data);
      }
    }
    throw error;
  }
}
