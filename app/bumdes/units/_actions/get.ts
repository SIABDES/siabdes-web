"use server";

import { AxiosToBackend } from "@/common/api";
import { BACKEND_URL } from "@/common/configs";
import { authOptions } from "@/lib/next-auth-options";
import { getServerSession } from "next-auth";
import { GetAllUnitsResponse } from "../_types/response";

export async function getUnits(): Promise<GetAllUnitsResponse> {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("Unauthorized");
  }

  const response = await fetch(
    `${BACKEND_URL}/bumdes/${session.user.bumdesId}/units`,
    {
      headers: {
        Authorization: `Bearer ${session.backendTokens.accessToken}`,
      },
      next: {
        tags: ["bumdes-units"],
      },
    }
  );

  const data = await response.json();

  return { response, ...data };
}
