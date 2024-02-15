import { AxiosAuthed, AxiosToBackend } from "@/common/api";
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
      { message: "You are not authorized to access this resource" },
      { status: 401 }
    );

  if (!session.user.unitId) {
    return NextResponse.json(
      { message: "You are not authorized to access this resource" },
      { status: 401 }
    );
  }

  const gross_salary = req.nextUrl.searchParams.get("gross_salary");
  const period_years = req.nextUrl.searchParams.get("period_years");
  const period_month = req.nextUrl.searchParams.get("period_month");

  const res = await AxiosToBackend.get(
    `/units/${session.user.unitId}/employees/${params.employee_id}/ter`,
    {
      params: {
        gross_salary,
        period_years,
        period_month,
      },
    }
  );

  return NextResponse.json(res.data, {
    status: res.status,
    statusText: res.statusText,
  });
}
