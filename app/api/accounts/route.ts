import { authOptions } from '../auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import axios from 'axios';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  const { nextUrl } = request;

  const account_id = nextUrl.searchParams.get('account_id');

  if (!account_id) {
    return Response.json({ message: 'account_id is required' });
  }

  const backendUrl = process.env.API_URL;
  const res = await axios.get(`${backendUrl}/accounts`, {
    params: {
      account_id: 1,
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.backendTokens.accessToken}`,
    },
  });

  const data = res.data;

  return Response.json({ data });
}
