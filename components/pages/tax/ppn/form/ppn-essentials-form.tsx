import FormDateInput from '@/components/patan-ui/form/form-date-input';
import FormInput from '@/components/patan-ui/form/form-input';
import React from 'react';
import PpnEvidenceForm from './ppn-evidence-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { PpnTaxObjectType } from '@/types/ppn/ppn';

interface PpnEssentialsFormProps {
  taxableEmployers: string | null;
  setTaxableEmployers: React.Dispatch<React.SetStateAction<string | null>>;
  occurred_at: Date | undefined;
  setOccurredAt: React.Dispatch<React.SetStateAction<Date | undefined>>;
  numberEvidence: string | null;
  setNumberEvidence: React.Dispatch<React.SetStateAction<string | null>>;
  setEvidence: React.Dispatch<React.SetStateAction<File | null>>;
  setTaxObjeks: React.Dispatch<React.SetStateAction<PpnTaxObjectType | null>>;
}

export default function PpnEssentialsForm({
  taxableEmployers,
  setTaxableEmployers,
  occurred_at,
  setOccurredAt,
  numberEvidence,
  setNumberEvidence,
  setEvidence,
  setTaxObjeks,
}: PpnEssentialsFormProps) {
  return (
    <div className="grid grid-flow-col gap-x-8">
      <div className="col-span-3 space-y-4">
        <div className="">
          <Label className="p-2 text-sm font-medium text-black w-full space-y-2">
            Transaksi
          </Label>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Pilih Transaksi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pembelian">Pembelian</SelectItem>
              <SelectItem value="pembayaran">Penjualan</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <FormInput
          name="taxable-employers"
          type="text"
          label="Pengusaha Kena Pajak"
          placeholder="Nama Pengusaha Kena Pajak"
          onChange={(e) => setTaxableEmployers(e.target.value)}
          value={taxableEmployers ?? ''}
        />
      </div>

      <div className="col-span-2 space-y-4">
        <FormDateInput
          setValue={setOccurredAt}
          value={occurred_at}
          placeholder="Pilih tanggal transaksi"
          label="Tanggal Transaksi"
        />
        <div className="">
          <Label className="p-2 text-sm font-medium text-black w-full space-y-2">
            Objek Pajak
          </Label>
          <Select
            onValueChange={(value) => {
              setTaxObjeks(value as PpnTaxObjectType);
            }}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Pilih Objek Pajak" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={PpnTaxObjectType.KENA_PAJAK_DALAM_NEGERI}>
                Kena Pajak - Dalam Negeri
              </SelectItem>
              <SelectItem value={PpnTaxObjectType.KENA_PAJAK_LUAR_NEGERI}>
                Kena Pajak - Luar Negeri
              </SelectItem>
              <SelectItem value={PpnTaxObjectType.TIDAK_KENA_PAJAK}>
                Tidak Kena Pajak
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="col-span-2 space-y-4">
        <FormInput
          name="number_evidence"
          type="text"
          label="Nomor Bukti Transaksi"
          placeholder="Contoh bukti transaksi : faktur pajak, invoice, purchase order, dll."
          onChange={(e) => setNumberEvidence(e.target.value)}
          value={numberEvidence ?? ''}
        />
        <PpnEvidenceForm setEvidence={setEvidence} />
      </div>
    </div>
  );
}
