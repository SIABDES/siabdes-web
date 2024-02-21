import FormInput from "@/components/patan-ui/form/form-input";

interface JournalEvidenceFormProps {
  setEvidence: (evidence: File | null) => void;
}

export default function JournalEvidenceForm({
  setEvidence,
}: JournalEvidenceFormProps) {
  return (
    <div className="col-span-4">
      <FormInput
        name="evidence"
        type="file"
        label="Bukti Transaksi"
        onChange={(e) => {
          if (!e.target.files?.item(0)) {
            setEvidence(null);
            return;
          }
          setEvidence(e.target.files.item(0));
        }}
      />
    </div>
  );
}
