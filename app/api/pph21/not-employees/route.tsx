import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { AxiosError } from "axios";
import { AxiosAuthed } from "@/common/api";
import { EMPLOYEES_PPH21 } from "@/common/api/urls";
import { PPh21PostPayloadRequest } from "@/types/pph21/request";
import { EmployeesType } from "@/types/employees/employees";
import {
  NotEmployeeFormData,
  NotEmployeeGrossSalaryFormData,
} from "@/types/pph21/not-employee/not-employee";
import { authOptions } from "@/lib/next-auth-options";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  const loginUrl = new URL("/auth/login", req.url);

  if (!session) {
    return NextResponse.redirect(loginUrl);
  }

  if (!session.user.unitId) {
    return NextResponse.json(
      {
        message: "User does not have unitId",
      },
      { status: 401 }
    );
  }

  try {
    const body: NotEmployeeFormData = await req.json();

    const payload: PPh21PostPayloadRequest<NotEmployeeGrossSalaryFormData> = {
      employee_type: EmployeesType.BUKAN_PEGAWAI,
      period: body.period,
      gross_salary: body.gross_salary,
      result: body.result,
    };

    const pph21Url = EMPLOYEES_PPH21(session.user.unitId, body.employee_id);

    const res = await AxiosAuthed(session.backendTokens.accessToken).post(
      pph21Url,
      payload
    );

    return NextResponse.json(res.data, { status: res.status });
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        return NextResponse.redirect(loginUrl);
      }

      return NextResponse.json(error.response?.data, {
        status: error.response?.status,
      });
    }
    throw error;
  }
}
