import React from 'react';
import InputField from '@/components/Input/input-field';
import { PPh21CalculationType } from '@/types/pph21/pph21/activity-participant/pph21-calculation';
import { Card } from '@/components/ui/card';
import { PPh21OtherActivityParticipantFormData } from '@/types/pph21/pph21/other-pph21';
import { useForm } from 'react-hook-form';
import HaveNPWP from './have_npwp';
import NotHaveNPWP from './not_have_npwp';

interface PPh21CalculationProps {
  form: ReturnType<typeof useForm<PPh21OtherActivityParticipantFormData>>;
}

export default function PPh21OtherActivityParticipantPPh21Calculation({
  form,
}: PPh21CalculationProps) {
  return (
    <Card>
      <h1 className="text-center font-bold text-sm mb-3">
        Perhitungan Pajak PPh 21
      </h1>
      <div className="grid grid-cols-2 gap-x-9">
        <HaveNPWP form={form} />
        <NotHaveNPWP form={form} />
      </div>
    </Card>
  );
}
