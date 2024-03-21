import { AxiosToBackend } from "@/common/api";
import { authOptions } from "@/lib/next-auth-options";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { employee_id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session)
    return NextResponse.json(
      {
        message: "You are not authorized to access this resource",
      },
      { status: 401 }
    );

  const employeeId = params.employee_id;

  const minPeriodMonth = req.nextUrl.searchParams.get("min_period_month");
  const maxPeriodMonth = req.nextUrl.searchParams.get("max_period_month");
  const minPeriodYears = req.nextUrl.searchParams.get("min_period_years");
  const maxPeriodYears = req.nextUrl.searchParams.get("max_period_years");

  const res = await AxiosToBackend.get(
    `/units/${session.user.unitId}/employees/${employeeId}/pph21`,
    {
      params: {
        min_period_month: minPeriodMonth,
        max_period_month: maxPeriodMonth,
        min_period_years: minPeriodYears,
        max_period_years: maxPeriodYears,
      },
    }
  );

  return NextResponse.json(res.data, {
    status: res.status,
    statusText: res.statusText,
  });
}
