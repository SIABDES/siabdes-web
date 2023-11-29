import FormDateInput from "@/components/patan-ui/form/form-date-input";
import FormInput from "@/components/patan-ui/form/form-input";
import React from "react";

interface AdjustmentJournalEssentialsFormProps {
  description: string | null;
  setDescription: React.Dispatch<React.SetStateAction<string | null>>;
  occurred_at: Date | undefined;
  setOccurredAt: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export default function AdjustmentJournalEssentialsForm({
  description,
  setDescription,
  occurred_at,
  setOccurredAt,
}: AdjustmentJournalEssentialsFormProps) {
  return (
    <div className="grid grid-flow-col gap-x-8">
      <div className="col-span-4">
        <FormInput
          name="deskripsi"
          type="text"
          label="Deskripsi"
          placeholder="contoh: Pembelian Bahan Baku"
          onChange={(e) => setDescription(e.target.value)}
          value={description ?? ""}
        />
      </div>

      <div className="col-span-4">
        <FormDateInput
          setValue={setOccurredAt}
          value={occurred_at}
          placeholder="Pilih tanggal transaksi"
          label="Tanggal Transaksi"
        />
      </div>
    </div>
  );
}
