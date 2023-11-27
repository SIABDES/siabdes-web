export function formatNumber(num: number | bigint): string {
  return new Intl.NumberFormat("de-DE").format(num);
}

export function reverseFormatNumber(num: string): string {
  return num.trim().replace(/\./g, "");
}
