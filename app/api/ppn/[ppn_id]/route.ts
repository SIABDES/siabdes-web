import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { AxiosAuthed } from '@/common/api';
import { AxiosError } from 'axios';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function GET(
  request: NextRequest,
  { params }: { params: { ppn_id: string } }
) {
  const { ppn_id } = params;

  const loginUrl = new URL('/auth/login', request.url);
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.redirect(loginUrl);
  }
  try {
    const { accessToken } = session.backendTokens;
    const { unitId } = session.user;
    const res = await AxiosAuthed(accessToken).get(
      `/units/${unitId}/ppn/${ppn_id}`
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
