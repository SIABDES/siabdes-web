"use server";

import { AddUnitResponse } from "../_types/response";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/next-auth-options";
import { AddUnitRequest } from "../_schemas/mutation";
import { BACKEND_URL } from "@/common/configs";
import { revalidateTag } from "next/cache";

export async function addUnit(req: AddUnitRequest): Promise<AddUnitResponse> {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("Unauthorized");
  }

  const payload = JSON.stringify(req);

  const response = await fetch(
    `${BACKEND_URL}/bumdes/${session.user.bumdesId}/units`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${session.backendTokens.accessToken}`,
      },
      body: payload,
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  revalidateTag("bumdes-units");

  return data;
}
