import {
  LedgerResponse,
  LedgerTransactionType,
  LedgerType,
} from '@/types/ledger/ledger';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useGetLedger({
  account_id,
}: {
  account_id: number;
  unit_id?: string;
}) {
  type BackendResponseSchema = {
    data: {
      statusCode: number;
      message: string;
      data: LedgerResponse;
    };
  };

  const getLedger = useQuery({
    queryKey: ['ledger', account_id],
    queryFn: async () => {
      const response = await axios.get<BackendResponseSchema>(`/api/ledgers`, {
        params: {
          account_id,
        },
      });
      const responseData = response.data;
      const result = responseData.data.data;

      const transactions: Record<string, React.ReactNode>[] =
        result.transactions.map(
          (transaction: LedgerTransactionType, index: number) => {
            return {
              No: index + 1,
              'Tanggal Transaksi': new Date(
                transaction.occurred_at
              ).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              }),
              Keterangan: transaction.description,
              'Debit (Rp)': transaction.is_credit ? '-' : transaction.amount,
              'Kredit (Rp)': transaction.is_credit ? transaction.amount : '-',
              'Saldo (Rp)': transaction.calculation_result,
            };
          }
        );

      console.log(transactions);
      return transactions ?? [];
    },
  });
  return getLedger;
}
