import { ScrollArea } from '@/components/ui/scroll-area';
import { AccountType } from '@/types/accounts';
import PpnTransactionsForm from '../ppn-transaction-form';
import { PpnTaxObjectType, PpnTransactionFormDataType } from '@/types/ppn/ppn';
import PpnNewTransactionForm from '../new-transaction-form';

interface PpnTransactionsFormProps {
  transactions: PpnTransactionFormDataType[];
  setTransactions: React.Dispatch<
    React.SetStateAction<PpnTransactionFormDataType[]>
  >;
  taxObjeks: PpnTaxObjectType | null;
}

export default function PpnTransactionsContainerForm({
  setTransactions,
  transactions,
  taxObjeks,
}: PpnTransactionsFormProps) {
  return (
    <>
      <p className="pt-8">Perhitungan Nilai Objek {}</p>
      <ScrollArea className="h-1/2 w-full">
        <div className="flex flex-col gap-y-6">
          {transactions.map((transaction, index) => (
            <PpnTransactionsForm
              key={transaction.unique_id}
              index={index + 1}
              transaction={transaction}
              setTransactions={setTransactions}
              isAbleToDelete={transactions.length > 1}
              taxObjeks={taxObjeks}
            />
          ))}
        </div>

        <PpnNewTransactionForm
          transactions={transactions}
          setTransactions={setTransactions}
        />
      </ScrollArea>
    </>
  );
}
