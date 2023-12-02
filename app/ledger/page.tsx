'use client';

import { formatDateToString } from '@/common/helpers/date';
import { formatNumber } from '@/common/helpers/number-format';
import Layout from '@/components/layout/layout';
import { ComboBox } from '@/components/ui/combobox';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useGetAccounts } from '@/hooks/account/useGetAccounts';
import { useGetLedger } from '@/hooks/ledger/useGetLedger';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function Ledger() {
  const session = useSession();

  const [selectedAccountId, setSelectedAccountId] = useState<
    string | undefined
  >(undefined);

  {
    const { data: accounts } = useGetAccounts();

    const { data: ledgers, refetch: refetchLedgers } = useGetLedger({
      account_id: selectedAccountId,
    });

    useEffect(() => {
      if (accounts && accounts.length > 0) {
        setSelectedAccountId(accounts[0].id.toString());
      }
    }, [accounts]);

    useEffect(() => {
      void refetchLedgers();
    }, [selectedAccountId]);

    return (
      <Layout>
        <div>
          <h1 className="text-2xl font-bold mb-4 text-center">Buku Besar</h1>
          {accounts && (
            <ComboBox
              items={accounts.map((account) => ({
                label: account.name,
                value: account.id.toString(),
              }))}
              value={selectedAccountId}
              setValue={setSelectedAccountId}
              className="w-96"
              placeholder="Pilih akun yang ingin dilihat"
            />
          )}

          {ledgers && (
            <ScrollArea className="pt-8 w-full h-[28rem]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>No</TableHead>
                    <TableHead>Tanggal Transaksi</TableHead>
                    <TableHead>Deskripsi</TableHead>
                    <TableHead>Debit</TableHead>
                    <TableHead>Kredit</TableHead>
                    <TableHead>Saldo</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {ledgers.transactions.map((transaction, index) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        {formatDateToString(transaction.occurred_at)}
                      </TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell>
                        {transaction.is_credit
                          ? 0
                          : formatNumber(transaction.amount)}
                      </TableCell>
                      <TableCell>
                        {transaction.is_credit
                          ? formatNumber(transaction.amount)
                          : 0}
                      </TableCell>
                      <TableCell>
                        {formatNumber(transaction.calculation_result)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          )}
        </div>
      </Layout>
    );
  }
}
