'use client';

import {
  formatNumber,
  reverseFormatNumber,
} from '@/common/helpers/number-format';
import FormInput from '@/components/patan-ui/form/form-input';
import { Button } from '@/components/ui/button';
import { ComboBox } from '@/components/ui/combobox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { AccountType } from '@/types/accounts';
import { JournalTransactionFormDataType } from '@/types/journals';
import {
  PpnTariffPercentageMap,
  PpnTaxObjectType,
  PpnTransactionFormDataType,
} from '@/types/ppn/ppn';
import { TrashIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface PpnTransactionsFormProps {
  index: number;
  transaction: PpnTransactionFormDataType;
  isAbleToDelete: boolean;
  setTransactions: React.Dispatch<
    React.SetStateAction<PpnTransactionFormDataType[]>
  >;
  taxObjeks: PpnTaxObjectType | null;
}

export default function PpnTransactionsForm(props: PpnTransactionsFormProps) {
  //   const [accountId, setAccountId] = useState<string | undefined>(
  //     props.transaction.account_id?.toString()
  //   );

  //   const hasAccount =
  //     accountId === undefined || accountId.trim().length === 0 ? false : true;

  //   useEffect(() => {
  //     if (!accountId) {
  //       props.setTransactions((prev) =>
  //         prev.map((transaction) => {
  //           if (transaction.unique_id === props.transaction.unique_id) {
  //             return {
  //               ...transaction,
  //               account_id: undefined,
  //               debit: 0,
  //               credit: 0,
  //             };
  //           }
  //           return transaction;
  //         })
  //       );
  //       return;
  //     }

  //     props.setTransactions((prev) =>
  //       prev.map((transaction) => {
  //         if (transaction.unique_id === props.transaction.unique_id) {
  //           return { ...transaction, account_id: parseInt(accountId) };
  //         }
  //         return transaction;
  //       })
  //     );
  //   }, [accountId]);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    // let newValue = reverseFormatNumber(e.target.value);
    // if (newValue === "") {
    //   newValue = "0";
    // }
    // props.setTransactions((prev) =>
    //   prev.map((transaction) => {
    //     if (transaction.unique_id === props.transaction.unique_id) {
    //       return { ...transaction, price: parseFloat(newValue) }; // Use newValue here
    //     }
    //     return transaction;
    //   })
    // );
  };
  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = reverseFormatNumber(e.target.value);
    if (newValue === '') {
      newValue = '0';
    }
    props.setTransactions((prev) =>
      prev.map((transaction) => {
        if (transaction.unique_id === props.transaction.unique_id) {
          return { ...transaction, price: parseFloat(newValue) }; // Use newValue here
        }
        return transaction;
      })
    );
  };

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = reverseFormatNumber(e.target.value);

    if (newValue === '') {
      newValue = '0';
    }

    props.setTransactions((prev) =>
      prev.map((transaction) => {
        if (transaction.unique_id === props.transaction.unique_id) {
          return { ...transaction, amount: parseFloat(newValue) }; // Use newValue here
        }
        return transaction;
      })
    );
  };
  //create function for total price, with condition price * amount, and then set total price
  const calculateTotalPrice = () => {
    const total_price = props.transaction.price * props.transaction.amount;
    // console.log(props.transaction.total_price);
    return total_price;
  };
  const handleChangeTotalPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = reverseFormatNumber(e.target.value);

    if (newValue === '') {
      newValue = '0';
    } else {
      newValue = calculateTotalPrice().toString();
    }
    props.setTransactions((prev) =>
      prev.map((transaction) => {
        if (transaction.unique_id === props.transaction.unique_id) {
          return { ...transaction, total_price: parseFloat(newValue) }; // Use newValue here
        }
        return transaction;
      })
    );
    console.log('TESSS');
  };

  // const calculateDPP = () => {
  //   const dpp = calculateTotalPrice - props.transaction.discount;
  //   return dpp;
  // };

  // create function for dpp, with condition total price - discount, and then set dpp
  const calculateDPP = () => {
    const dpp = calculateTotalPrice() - props.transaction.discount;
    return dpp;
  };

  const getTaxTariff = () => {
    if (!props.taxObjeks) return 0;

    return PpnTariffPercentageMap[props.taxObjeks];
  };

  // create function for tax, with condition dpp * tax, and then set tax
  const calculateTaxPPN = () => {
    const tax = calculateDPP() * (getTaxTariff() / 100);
    return tax;
  };

  // const handleChangeDpp = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   let newValue = reverseFormatNumber(e.target.value);

  //   if (newValue === "") {
  //     newValue = "0";
  //   } else {
  //     newValue = calculateDPP().toString();
  //   }
  //   props.setTransactions((prev) =>
  //     prev.map((transaction) => {
  //       if (transaction.unique_id === props.transaction.unique_id) {
  //         return { ...transaction, dpp: parseFloat(newValue) }; // Use newValue here
  //       }
  //       return transaction;
  //     })
  //   );
  // };
  const handleChangeDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = reverseFormatNumber(e.target.value);

    if (newValue === '') {
      newValue = '0';
    }

    props.setTransactions((prev) =>
      prev.map((transaction) => {
        if (transaction.unique_id === props.transaction.unique_id) {
          return { ...transaction, discount: parseFloat(newValue) }; // Use newValue here
        }
        return transaction;
      })
    );
  };
  const handleChangeDpp = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = reverseFormatNumber(e.target.value);

    if (newValue === '') {
      newValue = '0';
    }

    props.setTransactions((prev) =>
      prev.map((transaction) => {
        if (transaction.unique_id === props.transaction.unique_id) {
          return { ...transaction, dpp: parseFloat(newValue) }; // Use newValue here
        }
        return transaction;
      })
    );
  };
  const handleChangeTax = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = reverseFormatNumber(e.target.value);

    if (newValue === '') {
      newValue = '0';
    }

    props.setTransactions((prev) =>
      prev.map((transaction) => {
        if (transaction.unique_id === props.transaction.unique_id) {
          return { ...transaction, tax: parseFloat(newValue) }; // Use newValue here
        }
        return transaction;
      })
    );
  };
  const handleChangePpn = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = reverseFormatNumber(e.target.value);

    if (newValue === '') {
      newValue = '0';
    }

    props.setTransactions((prev) =>
      prev.map((transaction) => {
        if (transaction.unique_id === props.transaction.unique_id) {
          return { ...transaction, ppn: parseFloat(newValue) }; // Use newValue here
        }
        return transaction;
      })
    );
  };

  //   const handleChangeCredit = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     let newValue = reverseFormatNumber(e.target.value);

  //     if (newValue === "" || props.transaction.debit > 0) {
  //       newValue = "0";
  //     }

  //     props.setTransactions((prev) =>
  //       prev.map((transaction) => {
  //         if (transaction.unique_id === props.transaction.unique_id) {
  //           return { ...transaction, credit: parseFloat(newValue) }; // Use newValue here
  //         }
  //         return transaction;
  //       })
  //     );
  //   };

  const handleDeleteTransaction = () => {
    if (!props.isAbleToDelete) return;

    props.setTransactions((prev) =>
      prev.filter(
        (transaction) => transaction.unique_id !== props.transaction.unique_id
      )
    );
  };

  return (
    <div className="border border-spacing-5 p-3">
      <p>Objek {props.index}</p>
      <div className="w-96">
        <div className="">
          <FormInput
            name="name"
            type="text"
            label="Nama Barang/Jasa"
            placeholder="Masukkan Nama Barang/Jasa"
            onChange={handleChangeName}
            value={props.transaction.name}
          />
          <div className="flex align-baseline my-auto mt-1">
            <div className="align-baseline my-auto ml-2">
              <Label htmlFor="jenis_objek">Jenis Objek</Label>
            </div>
            <RadioGroup defaultValue="barang">
              <div className="flex gap-6 justify-center ml-32 p-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="barang" id="barang" />
                  <Label htmlFor="barang">Barang</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="jasa" id="jasa" />
                  <Label htmlFor="jasa">Jasa</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      <div className="grid grid-flow-col gap-x-8 mt-5">
        <div className="col-span-3">
          <FormInput
            label="Harga Satuan"
            name="price"
            onChange={handleChangePrice}
            value={formatNumber(props.transaction.price)}
            type="text"
          />
        </div>
        <div className="col-span-3">
          <FormInput
            label="Kuantitas"
            name="amount"
            onChange={handleChangeAmount}
            value={formatNumber(props.transaction.amount)}
            type="text"
          />
        </div>
        <div className="col-span-3">
          <FormInput
            label="Harga Total"
            name="total_price"
            onChange={handleChangeTotalPrice}
            value={formatNumber(calculateTotalPrice())}
            type="text"
            disabled={true}
          />
        </div>
        <div className="col-span-3">
          <FormInput
            label="Potongan Harga"
            name="discount"
            onChange={handleChangeDiscount}
            value={formatNumber(props.transaction.discount)}
            type="text"
          />
        </div>
      </div>

      <div className="grid grid-flow-col gap-x-8 mt-5">
        <div className="col-span-3">
          <FormInput
            label="Dasar Pengenaan Pajak (DPP)"
            name="dpp"
            onChange={handleChangeDpp}
            // value={formatNumber(props.transaction.dpp)}
            value={formatNumber(calculateDPP())}
            type="text"
          />
        </div>
        <div className="col-span-2">
          <FormInput
            label="Tarif PPN (%)  "
            name="tax"
            readOnly
            value={formatNumber(getTaxTariff())}
            type="text"
          />
        </div>
        <div className="col-span-2">
          <FormInput
            label="Pajak Pertambah Nilai (PPN)"
            name="ppn"
            onChange={handleChangePpn}
            value={formatNumber(calculateTaxPPN())}
            type="text"
          />
        </div>
      </div>

      <div className="inline-flex justify-center w-full col-span-12 mt-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={'destructive'}
                size={'icon'}
                onClick={handleDeleteTransaction}
                // disabled={!props.isAbleToDelete}
              >
                <TrashIcon size={16} />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-destructive text-destructive-foreground">
              {props.isAbleToDelete
                ? 'Hapus data transaksi'
                : 'Minimal harus ada 1 data transaksi'}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* <Separator className="w-full mt-2" /> */}
    </div>
  );
}
