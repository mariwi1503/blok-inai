const rupiahFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

export function formatRupiah(amount: number): string {
  return rupiahFormatter.format(amount);
}

export function formatDateId(date: Date): string {
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/** Pads a house number to two digits: 7 -> "07", 42 -> "42", 140 -> "140". */
export function padHouseNumber(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}
