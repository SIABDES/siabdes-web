import FormInput from "@/components/patan-ui/form/form-input";

interface PpnEvidenceFormProps {
  setEvidence: React.Dispatch<React.SetStateAction<File | null>>;
}

export default function PpnEvidenceForm({ setEvidence }: PpnEvidenceFormProps) {
  return (
    <div className="col-span-1">
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