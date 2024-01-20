import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { NextResponse } from 'next/server';
import { AxiosAuthed } from '@/common/api';
import { GetEmployeesResponse } from '@/types/employees/response';

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect('/auth/login');
  }

  try {
    const res = await AxiosAuthed(
      session.backendTokens.accessToken
    ).get<GetEmployeesResponse>(`/unit/${session.user.unitId}/employees`);
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) {
        return NextResponse.redirect('/bumdes/profile');
      }
    }
    throw error;
  }
}
