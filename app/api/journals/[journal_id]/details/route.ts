import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";

export async function GET(
  request: Request,
  { params }: { params: { journal_id: string } }
) {
  const { journal_id } = params;

  const session = await getServerSession(authOptions);

  const res = await fetch(
    `http://localhost:8080/api/v1/journals/${journal_id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.backendTokens.accessToken}`,
      },
    }
  );

  const data = await res.json();

  return Response.json({ data });
}
