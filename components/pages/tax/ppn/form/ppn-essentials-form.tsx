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

interface PpnEssentialsFormProps {
  taxableEmployers: string | null;
  setTaxableEmployers: React.Dispatch<React.SetStateAction<string | null>>;
  occurred_at: Date | undefined;
  setOccurredAt: React.Dispatch<React.SetStateAction<Date | undefined>>;
  numberEvidence: string | null;
  setNumberEvidence: React.Dispatch<React.SetStateAction<string | null>>;
  setEvidence: React.Dispatch<React.SetStateAction<File | null>>;
}

export default function PpnEssentialsForm({
  taxableEmployers,
  setTaxableEmployers,
  occurred_at,
  setOccurredAt,
  numberEvidence,
  setNumberEvidence,
  setEvidence,
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
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Pilih Objek Pajak" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="kena_pajak_dalam_negeri">
                Kena Pajak - Dalam Negeri
              </SelectItem>
              <SelectItem value="kena_pajak_luar_negeri">
                Kena Pajak - Luar Negeri
              </SelectItem>
              <SelectItem value="tidak_kena_pajak">Tidak Kena Pajak</SelectItem>
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
