import FormDateInput from "@/components/patan-ui/form/form-date-input";
import FormInput from "@/components/patan-ui/form/form-input";
import React from "react";
import PpnEvidenceForm from "./ppn-evidence-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface PpnEssentialsFormProps {
  targetCompany: string | null;
  setTargetCompany: React.Dispatch<React.SetStateAction<string | null>>;
  occurred_at: Date | undefined;
  setOccurredAt: React.Dispatch<React.SetStateAction<Date | undefined>>;
  numberEvidence: string | null;
  setNumberEvidence: React.Dispatch<React.SetStateAction<string | null>>;
  setEvidence: React.Dispatch<React.SetStateAction<File | null>>;
}

export default function PpnEssentialsForm({
  targetCompany,
  setTargetCompany,
  occurred_at,
  setOccurredAt,
  numberEvidence,
  setNumberEvidence,
  setEvidence,
}: PpnEssentialsFormProps) {
  return (
    <div className="grid grid-flow-col gap-x-8">
      <div className="col-span-2">
        <FormInput
          name="target_company"
          type="text"
          label="Penyerahan Kepada"
          placeholder="contoh: Pembelian Bahan Baku"
          onChange={(e) => setTargetCompany(e.target.value)}
          value={targetCompany ?? ""}
        />
        <FormDateInput
          setValue={setOccurredAt}
          value={occurred_at}
          placeholder="Pilih tanggal transaksi"
          label="Tanggal Transaksi"
        />
      </div>

      <div className="col-span-9">
        <FormInput
          name="number_evidence"
          type="text"
          label="Nomor Bukti Transaksi"
          placeholder="Contoh bukti transaksi : faktur pajak, invoice, purchase order, dll."
          onChange={(e) => setNumberEvidence(e.target.value)}
          value={numberEvidence ?? ""}
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
      <PpnEvidenceForm setEvidence={setEvidence} />
    </div>
  );
}
