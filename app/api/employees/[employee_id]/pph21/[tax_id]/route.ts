import { AxiosToBackend } from "@/common/api";
import { authOptions } from "@/lib/next-auth-options";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { employee_id: string; tax_id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session)
    return NextResponse.json(
      {
        message: "You are not authorized to access this resource",
      },
      { status: 401 }
    );

  const { employee_id, tax_id } = params;
  const { unitId } = session.user;

  const res = await AxiosToBackend.get(
    `/units/${unitId}/employees/${employee_id}/pph21/${tax_id}`
  );

  return NextResponse.json(res.data, {
    status: res.status,
    statusText: res.statusText,
  });
}
