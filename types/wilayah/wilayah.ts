export type Provinsi = {
  kode: string;
  nama: string;
};

export type Kota = {
  kode: string;
  nama: string;
  provinsi_kode: string;
};

export type Kecamatan = {
  kode: string;
  nama: string;
  provinsi_kode: string;
  kota_kode: string;
};

export type Kelurahan = {
  kode: string;
  nama: string;
  provinsi_kode: string;
  kota_kode: string;
  kecamatan_kode: string;
};
