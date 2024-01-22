export function formatPPNtaxObject(taxObject: string) {
  if (taxObject === 'NO_TAXES') {
    return 'Tidak Kena Pajak';
  } else if (taxObject === 'DOMESTIC_TAXES') {
    return 'Kena Pajak Dalam Negeri';
  } else if (taxObject === 'INTERNATIONAL_TAXES') {
    return 'Kena Pajak Luar Negeri';
  }
}

export function formatPPNItemType(itemType: string) {
  if (itemType === 'GOODS') {
    return 'Barang';
  } else if (itemType === 'SERVICE') {
    return 'Jasa';
  }
}

export function formatPPNTransactionType(transactionType: string) {
  if (transactionType === 'PURCHASE') {
    return 'Pembelian';
  } else if (transactionType === 'SALES') {
    return 'Penjualan';
  }
}
