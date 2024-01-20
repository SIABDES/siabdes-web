import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { NextRequest, NextResponse } from 'next/server';
import { AxiosAuthed } from '@/common/api';
import { GetEmployeesResponse } from '@/types/employees/response';
import { AxiosError } from 'axios';

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  const loginUrl = new URL('/auth/login', request.url);

  if (!session) {
    return NextResponse.redirect(loginUrl);
  }

  try {
    const res = await AxiosAuthed(
      session.backendTokens.accessToken
    ).get<GetEmployeesResponse>(`/units/${session.user.unitId}/employees`);

    return NextResponse.json(res.data);
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) {
        return NextResponse.redirect(loginUrl);
      }
    }
    throw error;
  }
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  const loginUrl = new URL('/auth/login', request.url);

  if (!session) {
    return NextResponse.redirect(loginUrl);
  }

  try {
    const payload = await request.json();

    const res = await AxiosAuthed(session.backendTokens.accessToken).post(
      `/units/${session.user.unitId}/employees`,
      payload
    );

    return NextResponse.json(res.data);
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) {
        return NextResponse.redirect(loginUrl);
      }
    }
    throw error;
  }
}
