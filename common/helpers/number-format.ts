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

export function reverseFormatRupiah(num: string): string {
  // remove Rp and dot
  return num.trim().replace(/Rp|\./g, "");
}

export const leadingZeroTrimmer = new Intl.NumberFormat("en-US", {
  style: "decimal",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export function numberToWordsID(num: number): string {
  const ones = [
    "",
    "Satu ",
    "Dua ",
    "Tiga ",
    "Empat ",
    "Lima ",
    "Enam ",
    "Tujuh ",
    "Delapan ",
    "Sembilan ",
  ];
  const tens = [
    "",
    "Sepuluh ",
    "Dua Puluh ",
    "Tiga Puluh ",
    "Empat Puluh ",
    "Lima Puluh ",
    "Enam Puluh ",
    "Tujuh Puluh ",
    "Delapan Puluh ",
    "Sembilan Puluh ",
  ];
  const teens = [
    "Sepuluh ",
    "Sebelas ",
    "Dua Belas ",
    "Tiga Belas ",
    "Empat Belas ",
    "Lima Belas ",
    "Enam Belas ",
    "Tujuh Belas ",
    "Delapan Belas ",
    "Sembilan Belas ",
  ];
  const thousands = ["", "Ribu ", "Juta ", "Miliar ", "Triliun "];

  // Split the number into integer and decimal parts
  let [integerPart, decimalPart] = Math.abs(num)
    .toString()
    .split(".")
    .map((part) => parseInt(part, 10));

  let words = "";

  // Check for negative number
  // if (num < 0) {
  //   words += 'Minus ';
  // }
  if (num < 0) return "Minus " + numberToWordsID(-num);

  let i = 0;
  while (integerPart > 0) {
    let remainder = integerPart % 1000;
    if (remainder !== 0) {
      let tempWords = "";
      const hundred = Math.floor(remainder / 100);
      remainder = remainder % 100;
      const ten = Math.floor(remainder / 10);
      const one = remainder % 10;

      if (hundred > 0) {
        tempWords += hundred === 1 ? "Seratus " : ones[hundred] + "Ratus ";
      }
      if (remainder >= 10 && remainder < 20) {
        tempWords += teens[remainder - 10];
      } else {
        tempWords += tens[ten];
        if (one >= 1) {
          tempWords += ones[one];
        }
      }

      words = tempWords + thousands[i] + words;
    }
    integerPart = Math.floor(integerPart / 1000);
    i++;
  }

  let decimalWords = "";
  if (decimalPart !== undefined && decimalPart > 0) {
    if (decimalPart < 10) {
      decimalWords = ones[decimalPart];
    } else if (decimalPart < 20) {
      decimalWords = teens[decimalPart - 10];
    } else {
      const ten = Math.floor(decimalPart / 10);
      const one = decimalPart % 10;
      decimalWords = tens[ten] + ones[one];
    }
    words += " Koma " + decimalWords.trim() + " Rupiah";
  } else {
    words += "Rupiah";
  }

  return words.trim();
}

// ini kalo gak usah ngomongin koma
// export function numberToWordsID(num: number): string {
//   const ones = [
//     '',
//     'Satu ',
//     'Dua ',
//     'Tiga ',
//     'Empat ',
//     'Lima ',
//     'Enam ',
//     'Tujuh ',
//     'Delapan ',
//     'Sembilan ',
//   ];
//   const tens = [
//     '',
//     'Sepuluh ',
//     'Dua Puluh ',
//     'Tiga Puluh ',
//     'Empat Puluh ',
//     'Lima Puluh ',
//     'Enam Puluh ',
//     'Tujuh Puluh ',
//     'Delapan Puluh ',
//     'Sembilan Puluh ',
//   ];
//   const teens = [
//     'Sepuluh ',
//     'Sebelas ',
//     'Dua Belas ',
//     'Tiga Belas ',
//     'Empat Belas ',
//     'Lima Belas ',
//     'Enam Belas ',
//     'Tujuh Belas ',
//     'Delapan Belas ',
//     'Sembilan Belas ',
//   ];
//   const thousands = ['', 'Ribu ', 'Juta ', 'Miliar ', 'Triliun '];

//   if (!Number.isInteger(num)) num = Math.floor(num); // Use floor to avoid rounding up
//   if (num === 0) return 'Nol';
//   if (num < 0) return 'Minus ' + numberToWordsID(-num);

//   let words = '';

//   let i = 0;
//   while (num > 0) {
//     let remainder = num % 1000;
//     if (remainder !== 0) {
//       let tempWords = '';
//       const hundred = Math.floor(remainder / 100);
//       remainder = remainder % 100;
//       const ten = Math.floor(remainder / 10);
//       const one = remainder % 10;

//       if (hundred > 0) {
//         tempWords += hundred === 1 ? 'Seratus ' : ones[hundred] + 'Ratus ';
//       }
//       if (remainder >= 10 && remainder < 20) {
//         tempWords += teens[one];
//       } else {
//         tempWords += tens[ten];
//         if (one >= 1) {
//           tempWords += ones[one];
//         }
//       }

//       words = tempWords + thousands[i] + words;
//     }
//     num = Math.floor(num / 1000);
//     i++;
//   }

//   return words.replace(/  +/g, ' ').trim() + ' Rupiah';
// }
