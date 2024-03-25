import { AxiosAuthed } from "@/common/api";
import { authOptions } from "@/lib/next-auth-options";
import { AxiosError } from "axios";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { employee_id: string } }
) {
  const { employee_id } = params;

  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      {
        message: "You are not authorized to access this resource",
      },
      { status: 401 }
    );
  }
  try {
    const { accessToken } = session.backendTokens;
    const { unitId } = session.user;

    const res = await AxiosAuthed(accessToken).get(
      `/units/${unitId}/employees/${employee_id}`
    );

    return NextResponse.json(res.data);
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) {
        return NextResponse.json(error.response.data, { status: 404 });
      }
    }
    throw error;
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { employee_id: string } }
) {
  const { employee_id } = params;
  const loginUrl = new URL("/auth/login", request.url);
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect(loginUrl);
  }

  try {
    const res = await AxiosAuthed(session.backendTokens.accessToken).delete(
      `/units/${session.user.unitId}/employees/${employee_id}`
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

export async function PUT(
  request: NextRequest,
  { params }: { params: { employee_id: string } }
) {
  const { employee_id } = params;
  const loginUrl = new URL("/auth/login", request.url);
  const data = await request.json();
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const res = await AxiosAuthed(session.backendTokens.accessToken).put(
      `/units/${session.user.unitId}/employees/${employee_id}`,
      data
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
