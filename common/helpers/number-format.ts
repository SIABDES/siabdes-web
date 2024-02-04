const formatter = new Intl.NumberFormat("de-DE");

export function formatNumber(num: number | bigint): string {
  return formatter.format(num);
}

export function reverseFormatNumber(num: string): string {
  return num.trim().replace(/\./g, "");
}

export function reverseFormat(num: string): string {
  const numericString = num.trim().replace(/\D+/g, "");
  return numericString || "0";
}

export function formatRupiah(num: number | bigint): string {
  return `Rp ${formatNumber(num)}`;
}
