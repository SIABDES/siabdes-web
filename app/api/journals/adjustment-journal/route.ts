import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  const URL = process.env.API_URL;
  const res = await fetch(`${URL}/journals?category=ADJUSTMENT`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.backendTokens.accessToken}`,
    },
  });

  const data = await res.json();

  return Response.json({ data });
}
