"use client";

import PatanCombobox from "@/components/patan-ui/form/patan-combobox";
import { Label } from "@/components/ui/label";
import { useMutateGetManyKecamatan } from "@/hooks/wilayah/useGetManyKecamatan";
import { useMutateGetManyKelurahan } from "@/hooks/wilayah/useGetManyKelurahan";
import useMutateGetManyKota from "@/hooks/wilayah/useGetManyKota";
import { useGetManyProvinsi } from "@/hooks/wilayah/useGetManyProvinsi";
import { RegisterFormData } from "@/types/auth";
import { useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";

interface RegisterLocationFormProps {
  form: UseFormReturn<RegisterFormData>;
}

export default function RegisterLocationForm({
  form,
}: RegisterLocationFormProps) {
  const { data: getProvinsi, isLoading: isGetProvinsiLoading } =
    useGetManyProvinsi();

  const {
    data: getKota,
    isPending: isGetKotaLoading,
    mutateAsync: fetchKota,
  } = useMutateGetManyKota();

  const {
    data: getKecamatan,
    isPending: isGetKecamatanLoading,
    mutateAsync: fetchKecamatan,
  } = useMutateGetManyKecamatan();

  const {
    data: getKelurahan,
    isPending: isGetKelurahanLoading,
    mutateAsync: fetchKelurahan,
  } = useMutateGetManyKelurahan();

  const [province, setProvince] = useState<string>("");
  const [regency, setRegency] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [village, setVillage] = useState<string>("");
  const [provinceCode, setProvinceCode] = useState<string>("");
  const [regencyCode, setRegencyCode] = useState<string>("");
  const [districtCode, setDistrictCode] = useState<string>("");

  useEffect(() => {
    if (provinceCode) {
      setDistrictCode("");
      setRegencyCode("");
      setVillage("");
      setDistrict("");
      setRegency("");
      form.setValue("address.province", province);

      form.resetField("address.regency");
      form.resetField("address.district");
      form.resetField("address.village");

      void fetchKota({ provinsiKode: provinceCode });
    }
  }, [fetchKota, form, province, provinceCode]);

  useEffect(() => {
    if (regencyCode) {
      setDistrictCode("");
      setVillage("");
      setDistrict("");
      form.setValue("address.regency", regency);

      form.resetField("address.district");
      form.resetField("address.village");

      void fetchKecamatan({ kotaKode: regencyCode });
    }
  }, [fetchKecamatan, form, regency, regencyCode]);

  useEffect(() => {
    if (districtCode) {
      setVillage("");
      form.setValue("address.district", district);

      form.resetField("address.village");
      void fetchKelurahan({ kecamatanKode: districtCode });
    }
  }, [fetchKelurahan, districtCode, form, district]);

  useEffect(() => {
    if (village) {
      form.setValue("address.village", village);
    }
  }, [district, form, province, regency, village]);

  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-4">
      <div>
        <Label>Provinsi</Label>
        <PatanCombobox
          data={getProvinsi?.data ?? []}
          isLoading={isGetProvinsiLoading}
          value={province}
          onSelect={async (item) => {
            setProvince(item.value);
            setProvinceCode(item.key);
          }}
          triggerPlaceholderText="Pilih provinsi"
          loadingText="Memuat provinsi..."
          itemBuilder={(item) => ({
            key: item.kode,
            label: item.nama,
            value: item.nama,
          })}
        />
      </div>

      <div>
        <Label>Kota / Kabupaten</Label>
        <PatanCombobox
          data={getKota?.data ?? []}
          disabled={!provinceCode || getKota?.data.length === 0}
          isLoading={isGetKotaLoading}
          value={regency}
          loadingText="Memuat kota/kabupaten..."
          onSelect={async (item) => {
            setRegency(item.value);
            setRegencyCode(item.key);
          }}
          triggerPlaceholderText="Pilih kota/kabupaten"
          itemBuilder={(item) => ({
            key: item.kode,
            label: item.nama,
            value: item.nama,
          })}
        />
      </div>

      <div>
        <Label>Kecamatan</Label>
        <PatanCombobox
          data={getKecamatan?.data ?? []}
          disabled={!regencyCode || getKecamatan?.data.length === 0}
          isLoading={isGetKecamatanLoading}
          value={district}
          loadingText="Memuat kecamatan..."
          onSelect={async (item) => {
            setDistrict(item.value);
            setDistrictCode(item.key);
          }}
          triggerPlaceholderText="Pilih kecamatan"
          itemBuilder={(item) => ({
            key: item.kode,
            label: item.nama,
            value: item.nama,
          })}
        />
      </div>

      <div>
        <Label>Kelurahan / Desa</Label>
        <PatanCombobox
          data={getKelurahan?.data ?? []}
          disabled={!districtCode || getKelurahan?.data.length === 0}
          isLoading={isGetKelurahanLoading}
          value={village}
          loadingText="Memuat kelurahan/desa..."
          onSelect={async (item) => {
            setVillage(item.value);
          }}
          triggerPlaceholderText="Pilih kelurahan/desa"
          itemBuilder={(item) => ({
            key: item.kode,
            label: item.nama,
            value: item.nama,
          })}
        />
      </div>
    </div>
  );
}
