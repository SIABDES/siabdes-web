import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { RegisterFormData, RegisterSchema } from "@/types/auth";
import { AxiosNoAuth } from "@/common/api";
import { AxiosError } from "axios";
import { AuthRegisterResponse } from "@/types/auth/response";
import { authOptions } from "@/lib/next-auth-options";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (session) {
    const role = session.user.role;

    switch (role) {
      case "BUMDES":
        return NextResponse.redirect("/bumdes");
      case "UNIT":
        return NextResponse.redirect("/unit");
      default:
        return NextResponse.redirect("/");
    }
  }

  const body = await req.json();
  const payload = await RegisterSchema.safeParseAsync(body);

  if (!payload.success) {
    return NextResponse.json(payload.error, {
      status: 400,
    });
  }

  const { data } = payload;

  try {
    const res = await AxiosNoAuth.post<AuthRegisterResponse>("/auth/register", {
      identifier: data.credentials.email,
      password: data.credentials.password,
      bumdes: {
        name: data.profile.name,
        phone: data.profile.phone,
        address: {
          province: data.address.province,
          regency: data.address.regency,
          district: data.address.district,
          village: data.address.village,
          postal_code: data.address.postalCode,
          complete_address: data.address.completeAddress,
        },
      },
      organization: {
        leader: data.organization.leader,
        secretary: data.organization.secretary,
        treasurer: data.organization.treasurer,
      },
    });

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
