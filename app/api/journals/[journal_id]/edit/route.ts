import { AxiosAuthed } from "@/common/api";
import { authOptions } from "@/lib/next-auth-options";
import { AxiosError } from "axios";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: { journal_id: string } }
) {
  const formData = await request.formData();
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect("/login");
  }

  try {
    console.log(formData);

    const res = await AxiosAuthed(session.backendTokens.accessToken).put(
      `/journals/${params.journal_id}`,
      formData
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
