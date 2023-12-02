import React from 'react';
import InputField from '@/components/Input/input-field';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useSearchParams } from 'next/navigation';
import { BumdesIdentityFormData } from '@/types/financial-statement/calk/bumdes-identity';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const PreviewBumdesIdentity = () => {
  const searchParams = useSearchParams();
  const data: BumdesIdentityFormData = JSON.parse(
    searchParams.get('data') || '{}'
  );

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-center text-xl font-bold">
            BAB I <br /> GAMBARAN UMUM
          </th>
        </tr>
        <tr>
          <th className="text-start pl-60 text-lg font-semibold">
            A. Identitas dan Kedudukan
          </th>
        </tr>
      </thead>

      <tbody className="ml-52">
        {Object.keys(data).map((key, index) => {
          let displayKey = key;
          displayKey = displayKey.charAt(0).toUpperCase() + displayKey.slice(1);
          displayKey = displayKey.replace(/_/g, ' ');

          return (
            <tr className="border-none space-y-3 grid grid-cols-3" key={index}>
              <td className="pl-60">{index + 1 + '. ' + displayKey}</td>
              <td className="text-center">:</td>
              <td className="">{data[key as keyof BumdesIdentityFormData]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PreviewBumdesIdentity;
