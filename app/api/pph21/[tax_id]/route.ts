import { AxiosToBackend } from '@/common/api';
import { authOptions } from '@/lib/next-auth-options';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { tax_id: string } }
) {
  const session = await getServerSession(authOptions);
  const unitId = session?.user.unitId;

  if (!session || !unitId)
    return NextResponse.json(
      {
        message: 'You have no access to this resource',
      },
      { status: 401 }
    );

  const taxId = params.tax_id;

  const res = await AxiosToBackend.get(`/pph21/${taxId}`);

  return NextResponse.json(res.data, {
    status: res.status,
    statusText: res.statusText,
  });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { tax_id: string } }
) {
  const session = await getServerSession(authOptions);
  const unitId = session?.user.unitId;

  if (!session || !unitId)
    return NextResponse.json(
      {
        message: 'You have no access to this resource',
      },
      { status: 401 }
    );

  const taxId = params.tax_id;

  const res = await AxiosToBackend.delete(`/pph21/${taxId}`);

  return NextResponse.json(res.data, {
    status: res.status,
    statusText: res.statusText,
  });
}
