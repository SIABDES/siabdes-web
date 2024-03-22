import { AxiosAuthed, AxiosToBackend } from '@/common/api';
import { JOURNALS } from '@/common/api/urls';
import { authOptions } from '@/lib/next-auth-options';
import { AxiosError } from 'axios';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { journal_id: string } }
) {
  const { journal_id } = params;
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect('/login');
  }

  try {
    const res = await AxiosToBackend.get(
      `units/${session.user.unitId}/${JOURNALS}/${journal_id}/evidence`
    );

    return NextResponse.json(res.data);
  } catch (error) {
    if (error instanceof AxiosError) {
      return NextResponse.json(error.response?.data, {
        status: error.response?.status,
        statusText: error.response?.statusText,
      });
    }
    throw error;
  }
}
