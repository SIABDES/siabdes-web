import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { AxiosAuthed, AxiosToBackend } from '@/common/api';
import {
  ADJUSTMENT_JOURNALS,
  GENERAL_JOURNALS,
  JOURNALS,
} from '@/common/api/urls';
import { JournalCategory } from '@/types/journals';
import { AxiosError } from 'axios';
import { authOptions } from '@/lib/next-auth-options';

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect('/login');
  }

  const res = await AxiosToBackend.get(
    `/units/${session.user.unitId}/${ADJUSTMENT_JOURNALS}`
  );

  return NextResponse.json(res.data);
}

export async function POST(request: NextRequest) {
  const payload = await request.formData();

  payload.append('category', JournalCategory.ADJUSTMENT);

  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect('/login');
  }

  try {
    const res = await AxiosToBackend.post(
      `/units/${session.user.unitId}/${JOURNALS}`,
      payload
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
