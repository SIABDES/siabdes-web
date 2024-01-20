import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { AxiosAuthed } from '@/common/api';
import { GetEmployeesResponse } from '@/types/employees/response';
import { AxiosError } from 'axios';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function GET(
  request: NextRequest,
  { params }: { params: { employee_id: string } }
) {
  const { employee_id } = params;

  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.redirect('/auth/login');
  }
  try {
    const { accessToken } = session.backendTokens;
    const { unitId } = session.user;
    const res = await AxiosAuthed(accessToken).get(
      `/units/${unitId}/employees/${employee_id}`
    );
    return NextResponse.json(res.data);
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) {
        return NextResponse.redirect('/auth/login');
      }
    }
    throw error;
  }
}
