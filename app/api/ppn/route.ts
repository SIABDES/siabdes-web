import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';
import { AxiosAuthed } from '@/common/api';
import { AxiosError } from 'axios';
import { GetPPNResponse } from '@/types/ppn/response';
import { CreatePPNSchema } from '@/types/ppn/dto';

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  const loginUrl = new URL('/auth/login', request.url);

  if (!session) {
    return NextResponse.redirect(loginUrl);
  }

  try {
    const limit = request.nextUrl.searchParams.get('limit') || 20;
    const transactionType =
      request.nextUrl.searchParams.get('transaction_type');

    const res = await AxiosAuthed(
      session.backendTokens.accessToken
    ).get<GetPPNResponse>(`/units/${session.user.unitId}/ppn?limit=${limit}`, {
      params: {
        transaction_type: transactionType,
      },
    });

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

  const body = await request.formData();

  if (!body.get('transaction_evidence')) {
    return NextResponse.json(
      {
        message: 'Transaction Evidence cannot be empty',
      },
      { status: 400 }
    );
  }

  console.log(body);

  try {
    const res = await AxiosAuthed(session?.backendTokens.accessToken).post(
      `/units/${session.user.unitId}/ppn`,
      body
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
