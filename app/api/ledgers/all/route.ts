import { AxiosToBackend } from "@/common/api";
import { authOptions } from "@/lib/next-auth-options";
import { GetAllLedgersRequest, GetAllLedgersResponse } from "@/types/ledger";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const payload = {
    start_occurred_at: searchParams.get("start_occurred_at"),
    end_occurred_at: searchParams.get("end_occurred_at"),
  };

  const validation = GetAllLedgersRequest.safeParse(payload);

  if (!validation.success) {
    return NextResponse.json(
      { message: validation.error.message },
      { status: 400 }
    );
  }

  const { start_occurred_at, end_occurred_at } = validation.data;

  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const response = await AxiosToBackend.get<GetAllLedgersResponse>(
    `/units/${session.user.unitId}/ledgers/all`,
    {
      params: {
        start_occurred_at: start_occurred_at.toISOString(),
        end_occurred_at: end_occurred_at.toISOString(),
        business_type: session.user.unitBusinessType,
      },
    }
  );

  return NextResponse.json(response.data, {
    status: response.status,
    statusText: response.statusText,
  });
}
