import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { AxiosAuthed } from "@/common/api";
import { LEDGERS } from "@/common/api/urls";
import axios, { AxiosError } from "axios";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const nextUrl = request.nextUrl;
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect("/login");
  }

  const account_id = nextUrl.searchParams.get("account_id");

  if (!account_id) {
    return NextResponse.json({
      error: "account_id is required",
    });
  }

  try {
    const res = await AxiosAuthed(session.backendTokens.accessToken).get(
      LEDGERS,
      {
        params: {
          account_id,
        },
      }
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
