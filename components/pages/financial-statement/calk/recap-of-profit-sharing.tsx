"use client";
import React, { ChangeEvent, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { RecapOfProfitSharingFormData } from "@/types/financial-statement/calk/recap-of-profit-sharing";

interface RecapOfProfitSharingProps {
  data: RecapOfProfitSharingFormData;
  onChange: (data: RecapOfProfitSharingFormData) => void;
}

export default function RecapOfProfitSharing({
  data,
  onChange,
}: RecapOfProfitSharingProps) {
  /* UNCOMMENT DIBAWAH - TEMPORARY ONLY */
  // const [dataByYear, setDataByYear] = useState<{
  //   [year: number]: RecapOfProfitSharingFormData;
  // }>({
  //   2020: {
  //     shuBumdes: "",
  //     danaSHUPades: "",
  //     danaSHUDireksi: "",
  //     danaSHUKomisaris: "",
  //     sahuDewanPengawas: "",
  //     shuDanaSosialdll: "",
  //   },
  //   2021: {
  //     shuBumdes: "",
  //     danaSHUPades: "",
  //     danaSHUDireksi: "",
  //     danaSHUKomisaris: "",
  //     sahuDewanPengawas: "",
  //     shuDanaSosialdll: "",
  //   },
  //   2022: {
  //     shuBumdes: "",
  //     danaSHUPades: "",
  //     danaSHUDireksi: "",
  //     danaSHUKomisaris: "",
  //     sahuDewanPengawas: "",
  //     shuDanaSosialdll: "",
  //   },
  // });
  // const handleInputChange = (
  //   e: ChangeEvent<HTMLInputElement>,
  //   field: keyof RecapOfProfitSharingFormData,
  //   year: number
  // ) => {
  //   setDataByYear((prevData) => ({
  //     ...prevData,
  //     [year]: { ...prevData[year], [field]: e.target.value },
  //   }));
  //   const updatedData = {
  //     ...data,
  //     [year]: { ...data, [field]: e.target.value },
  //   };
  //   onChange(updatedData);
  // };

  // const calculateTotal = (
  //   field: keyof RecapOfProfitSharingFormData,
  //   year: number
  // ) => {
  //   if (field === "total") {
  //     return Object.values(dataByYear[year]).reduce(
  //       (acc, curr, index) =>
  //         acc +
  //         (index === Object.keys(dataByYear[year]).indexOf("total")
  //           ? 0
  //           : parseFloat(curr) || 0),
  //       0
  //     );
  //   } else {
  //     return years.reduce(
  //       (acc, currYear) => acc + (parseFloat(dataByYear[currYear][field]) || 0),
  //       0
  //     );
  //   }
  // };

  // const calculateColumnTotal = (field: keyof RecapOfProfitSharingFormData) => {
  //   return years.reduce((acc, year) => acc + calculateTotal(field, year), 0);
  // };

  const years = [2020, 2021, 2022];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell className="border border-black text-center font-bold">
            SHU BUMDes
          </TableCell>
          <TableCell className="border border-black text-center font-bold">
            Dana SHU PADes
          </TableCell>
          <TableCell className="border border-black text-center font-bold">
            Dana SHU Direksi
          </TableCell>
          <TableCell className="border border-black text-center font-bold">
            Dana SHU Komisaris
          </TableCell>
          <TableCell className="border border-black text-center font-bold">
            SHU Dewan Pengawas
          </TableCell>
          <TableCell className="border border-black text-center font-bold">
            SHU Dana Sosial, dll
          </TableCell>
          <TableCell className="border border-black text-center font-bold">
            Total
          </TableCell>
        </TableRow>
        {/* <TableRow className="border border-black text-center font-bold">
          <TableCell>20%</TableCell>
          <TableCell>20%</TableCell>
          <TableCell>20%</TableCell>
          <TableCell>10%</TableCell>
          <TableCell>10%</TableCell>
          <TableCell>20%</TableCell>
          <TableCell>100%</TableCell>
        </TableRow> */}
      </TableHeader>

      <TableBody>
        {years.map((year) => (
          <TableRow key={year}>
            {/* <TableCell className="text-center">{year}</TableCell> */}

            {/* UNCOMMENT DIBAWAH - TEMPORARY ONLY */}
            {/* {Object.keys(dataByYear[year]).map((key) => (
              <TableCell className="border border-black text-center" key={key}>
                <Input
                  type="text"
                  className="text-center"
                  placeholder="Silahkan di isi"
                  onChange={(e) =>
                    handleInputChange(
                      e,
                      key as keyof RecapOfProfitSharingFormData,
                      year
                    )
                  }
                />
              </TableCell>
            ))} */}
            <TableCell className="border border-black text-center">
              {/* UNCOMMENT DIBAWAH - TEMPORARY ONLY */}
              {/* {calculateTotal("total", year)} */}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

      <TableFooter>
        {/* <TableRow>
          <TableCell className="text-center">TOTAL</TableCell>
          {Object.keys(dataByYear[2020]).map((key) => (
            <TableCell className="text-center" key={key}>
              {calculateTotal(key as keyof RecapOfProfitSharingFormData, 2020)}
            </TableCell>
          ))}
        </TableRow> */}
      </TableFooter>
    </Table>
  );
}
