import React from 'react';
import { useSearchParams } from 'next/navigation';
import { BumdesIdentityFormData } from '@/types/financial-statement/calk/bumdes-identity';

const PreviewBumdesIdentity = () => {
  const searchParams = useSearchParams();
  // const data: BumdesIdentityFormData = JSON.parse(
  //   searchParams.get('data') || '{}'
  // );

  const data = JSON.parse(searchParams.get('data') || '{}');

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-center text-xl font-bold ">
            BAB I <br /> GAMBARAN UMUM
          </th>
        </tr>
        <tr>
          <th className="text-start pl-60 text-lg font-semibold">
            A. Identitas dan Kedudukan
          </th>
        </tr>
      </thead>

      <tbody>
        {/* {Object.keys(data).map((key, index) => {
          let displayKey = key;
          displayKey = displayKey.charAt(0).toUpperCase() + displayKey.slice(1);
          displayKey = displayKey.replace(/_/g, ' ');

          return (
            <tr
              className="border-none space-y-3 flex items-baseline"
              key={index}
            >
              <td className="w-full pl-60 ">{index + 1 + '. ' + displayKey}</td>
              <p className="text-center">:</p>
              <td className="w-full ml-3">
                {data[key as keyof BumdesIdentityFormData]}
              </td>
            </tr>
          );
        })} */}

        {/* Bumdes Identity */}
        {Object.keys(data.BumdesIdentity).map((key, index) => {
          let displayKey = key;
          displayKey = displayKey.charAt(0).toUpperCase() + displayKey.slice(1);
          displayKey = displayKey.replace(/_/g, ' ');

          return (
            <tr
              className="border-none space-y-3 flex items-baseline"
              key={index}
            >
              <td className="w-full pl-60 ">{index + 1 + '. ' + displayKey}</td>
              <p className="text-center">:</p>
              <td className="w-full ml-3">
                {data.BumdesIdentity[key as keyof BumdesIdentityFormData]}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PreviewBumdesIdentity;
