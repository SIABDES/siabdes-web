import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import axios from 'axios';
import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  const { nextUrl } = request;

  const account_id = nextUrl.searchParams.get('account_id');

  if (!account_id) {
    return Response.json({ message: 'account_id is required' });
  }

  const backendUrl = process.env.API_URL;

  // console.log(session?.backendTokens.accessToken);

  const res = await axios.get(`${backendUrl}/ledgers`, {
    params: {
      account_id: 1,
    },
    headers: {
      Authorization: `Bearer ${session?.backendTokens.accessToken}`,
    },
  });

  const data = res.data;

  return Response.json({ data });
}
