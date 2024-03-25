import React from "react";
import InputField from "@/components/Input/input-field";
import { useSearchParams } from "next/navigation";
import { BumdesAdministratorFormData } from "@/types/financial-statement/calk/bumdes-administrator";

const PreviewBumdesAdministrator = () => {
  const searchParams = useSearchParams();

  const data = JSON.parse(searchParams.get("data") || "{}");
  return (
    <table className="w-full mt-5">
      <thead>
        <tr>
          <th className="text-start pl-60 text-lg font-semibold">
            B. Sususan Pengurus dan BUMDes
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
                {data[key as keyof BumdesAdministratorFormData]}
              </td>
            </tr>
          );
        })} */}
        {/* Bumdes Administrator */}
        {Object.keys(data.BumdesAdministrator).map((key, index) => {
          let displayKey = key;
          displayKey = displayKey.charAt(0).toUpperCase() + displayKey.slice(1);
          displayKey = displayKey.replace(/_/g, " ");

          return (
            <tr
              className="border-none space-y-3 flex items-baseline"
              key={index}
            >
              <td className="w-full pl-60 ">
                {index + 21 + ". " + displayKey}
              </td>
              <p className="text-center">:</p>
              <td className="w-full ml-3">
                {
                  data.BumdesAdministrator[
                    key as keyof BumdesAdministratorFormData
                  ]
                }
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PreviewBumdesAdministrator;
