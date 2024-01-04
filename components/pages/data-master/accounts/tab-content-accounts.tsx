import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TabsContent } from "@/components/ui/tabs";

interface TabContentAccountsProps {
  data: Record<string, React.ReactNode>[];
  value: string;
}

export const TabContentAccounts: React.FC<TabContentAccountsProps> = ({
  data = [{}],
  value = "",
}) => {
  return (
    <div>
      <TabsContent value={value}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead className="text-center">Kode Akun</TableHead>
              <TableHead>Nama Akun</TableHead>
              <TableHead>Kategori Akun</TableHead>
              <TableHead className="text-center">Saldo Normal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((account, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="text-center">{account.ref}</TableCell>
                <TableCell>{account.name}</TableCell>
                <TableCell>Kategori</TableCell>
                {account.is_credit ? (
                  <TableCell className="text-center">Kredit</TableCell>
                ) : (
                  <TableCell className="text-center">Debit</TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabsContent>
    </div>
  );
};
