import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import React from 'react';
import { authOptions } from '../../auth/[...nextauth]/route';
import { AxiosAuthed } from '@/common/api';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.redirect('/login');
  }

  const res = await AxiosAuthed(session.backendTokens.accessToken).get(
    `/units/${session.user.unitId}/profile`
  );

  const { data } = res.data;

  return NextResponse.json(data);
}
