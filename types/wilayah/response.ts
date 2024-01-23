import { Kecamatan, Kelurahan, Kota, Provinsi } from ".";

export type BackendWilayahResponse<T extends object> = {
  message: string;
  data: T;
};

export type GetManyWilayahProvinsiResponse = BackendWilayahResponse<Provinsi[]>;
export type GetOneWilayahProvinsiResponse = BackendWilayahResponse<Provinsi>;

export type GetManyWilayahKotaResponse = BackendWilayahResponse<Kota[]>;
export type GetOneWilayahKotaResponse = BackendWilayahResponse<Kota>;

export type GetManyWilayahKecamatanResponse = BackendWilayahResponse<
  Kecamatan[]
>;
export type GetOneWilayahKecamatanResponse = BackendWilayahResponse<Kecamatan>;

export type GetManyWilayahKelurahanResponse = BackendWilayahResponse<
  Kelurahan[]
>;
export type GetOneWilayahKelurahanResponse = BackendWilayahResponse<Kelurahan>;
