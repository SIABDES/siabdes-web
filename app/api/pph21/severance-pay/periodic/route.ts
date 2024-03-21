import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { AxiosError } from 'axios';
import { AxiosAuthed } from '@/common/api';
import { EMPLOYEES_PPH21 } from '@/common/api/urls';
import { PPh21PostPayloadRequest } from '@/types/pph21/request';
import { EmployeesType } from '@/types/employees/employees';
import {
  SeverencePayFormData,
  SeverencePayGrossSalaryUnionFormData,
} from '@/types/pph21/severance-pay/severence-pay';
import { authOptions } from '@/lib/next-auth-options';

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  const loginUrl = new URL('/auth/login', req.url);

  if (!session) {
    return NextResponse.redirect(loginUrl);
  }

  if (!session.user.unitId) {
    return NextResponse.json(
      {
        message: 'User does not have unitId',
      },
      { status: 401 }
    );
  }

  try {
    const payload: PPh21PostPayloadRequest = await req.json();

    const pph21Url = EMPLOYEES_PPH21(session.user.unitId, payload.employee_id);

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
