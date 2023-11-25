import { authOptions } from '../../auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  const res = await fetch(`http://localhost:8080/api/v1/journals`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.backendTokens.accessToken}`,
    },
    body: JSON.stringify(request.body),
  });

  const data = await res.json();

  return Response.json({ data });
}
