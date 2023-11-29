import { WTB } from "@/common/api/urls";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { AxiosAuthed } from "@/common/api";
import { GetWtbResponse, WtbResponse } from "@/types/wtb/response";

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect("/login");
  }

  const resList = await AxiosAuthed(session.backendTokens.accessToken).get(
    `/wtb/${session.user.unitId}`
  );

  const resSum = await AxiosAuthed(session.backendTokens.accessToken).get(
    `/wtb/${session.user.unitId}/summary`
  );

  const { data: listAccounts } = resList.data;
  const { data: summary } = resSum.data;

  const dataResult: WtbResponse = {
    list: listAccounts.accounts,
    summary: {
      ...summary,
    },
  };

  // console.log({ dataResult });

  return NextResponse.json(dataResult);
}
