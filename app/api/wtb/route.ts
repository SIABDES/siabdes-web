import { AxiosAuthed, AxiosToBackend } from '@/common/api';
import { authOptions } from '@/lib/next-auth-options';
import { JournalCategory } from '@/types/journals';
import { WtbResponse } from '@/types/wtb/response';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const start_occurred_at =
    request.nextUrl.searchParams.get('start_occurred_at');
  const end_occurred_at = request.nextUrl.searchParams.get('end_occurred_at');

  const retrieval_category =
    request.nextUrl.searchParams.get('retrieval_category');

  const group_refs = request.nextUrl.searchParams.getAll('group_refs');
  const journal_category = request.nextUrl.searchParams.get('journal_category');

  const limit = request.nextUrl.searchParams.get('limit');
  const cursor = request.nextUrl.searchParams.get('cursor');

  if (!session) {
    return NextResponse.redirect('/login');
  }

  const resList = await AxiosToBackend.get(
    `/units/${session.user.unitId}/wtb`,
    {
      params: {
        start_occurred_at: start_occurred_at,
        end_occurred_at: end_occurred_at,
        retrieval_category: retrieval_category,
        group_refs: group_refs,
        journal_category: journal_category,
        limit: limit,
        cursor: cursor,
      },
    }
  );

  const resSum = await AxiosToBackend.get(
    `units/${session.user.unitId}/wtb/summary`,
    {
      params: {
        start_occurred_at: start_occurred_at,
        end_occurred_at: end_occurred_at,
        retrieval_category: retrieval_category,
      },
    }
  );

  const { data: listAccounts } = resList.data;
  const { data: summary } = resSum.data;

  const dataResult: WtbResponse = {
    list: listAccounts.accounts,
    summary: {
      ...summary,
    },
  };

  return NextResponse.json(dataResult);
}
