import { AxiosAuthed, AxiosToBackend } from '@/common/api';
import { EMPLOYEES_PPH21 } from '@/common/api/urls';
import { authOptions } from '@/lib/next-auth-options';
import { PPh21PostPayloadRequest } from '@/types/pph21/request';
import { AxiosError } from 'axios';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

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

    // const pph21Url = EMPLOYEES_PPH21(session.user.unitId, payload.employee_id);

    const res = await AxiosToBackend.post(EMPLOYEES_PPH21, payload);

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
