import { ScrollArea } from "@/components/ui/scroll-area";
import { AccountType } from "@/types/accounts";
import { JournalTransactionFormDataType } from "@/types/journals";
import JournalTransactionsForm from "../journal-transactions-form";
import NewTransactionForm from "../new-transaction-form";

interface JournalTransactionsFormProps {
  transactions: JournalTransactionFormDataType[];
  setTransactions: React.Dispatch<
    React.SetStateAction<JournalTransactionFormDataType[]>
  >;
  accounts: AccountType[];
}

export default function JournalTransactionsContainerForm({
  accounts,
  setTransactions,
  transactions,
}: JournalTransactionsFormProps) {
  return (
    <>
      <p className="pt-8">Data Transaksi</p>
      <ScrollArea className="h-1/2 w-full">
        <div className="flex flex-col gap-y-6">
          {transactions.map((transaction, index) => (
            <JournalTransactionsForm
              key={transaction.unique_id}
              index={index + 1}
              transaction={transaction}
              accounts={accounts}
              setTransactions={setTransactions}
              isAbleToDelete={transactions.length > 2}
            />
          ))}
        </div>

        <NewTransactionForm
          transactions={transactions}
          setTransactions={setTransactions}
        />
      </ScrollArea>
    </>
  );
}
