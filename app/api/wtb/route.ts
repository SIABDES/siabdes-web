import { AxiosAuthed } from "@/common/api";
import { authOptions } from "@/lib/next-auth-options";
import { WtbResponse } from "@/types/wtb/response";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const start_occurred_at =
    request.nextUrl.searchParams.get("start_occurred_at");
  const end_occurred_at = request.nextUrl.searchParams.get("end_occurred_at");

  if (!session) {
    return NextResponse.redirect("/login");
  }

  const resList = await AxiosAuthed(session.backendTokens.accessToken).get(
    `/wtb/${session.user.unitId}`,
    {
      params: {
        start_occurred_at: start_occurred_at,
        end_occurred_at: end_occurred_at,
      },
    }
  );

  const resSum = await AxiosAuthed(session.backendTokens.accessToken).get(
    `/wtb/${session.user.unitId}/summary`,
    {
      params: {
        start_occurred_at: start_occurred_at,
        end_occurred_at: end_occurred_at,
      },
    }
  );

  console.log(resSum.request.req);

  console.log(resSum.data.data.sum);

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
