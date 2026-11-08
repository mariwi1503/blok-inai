import { buildHouseList } from "@/lib/houses";

export const HUNIAN_SECTION = {
  eyebrow: "Sensus & Pemetaan",
  title: "Daftar Rumah (Inai 01 – Inai 140)",
  description:
    "Status ketersediaan dan hunian 140 rumah warga RT 07 / RW 21.",
  note: "Pemilik yang ingin mendaftarkan status sewa/kontrak silakan menghubungi pengurus RT.",
} as const;

export const TOTAL_HOUSES = 140;

/** Number of houses shown before the user expands the grid. */
export const INITIAL_DISPLAY_LIMIT = 42;

const EMPTY_HOUSE_NUMBERS = [7, 25, 33, 63, 81, 88, 105, 120, 137] as const;
const FOR_RENT_HOUSE_NUMBERS = [16, 29, 45, 58, 72, 94, 112, 129, 134] as const;

export const HOUSES = buildHouseList(
  TOTAL_HOUSES,
  EMPTY_HOUSE_NUMBERS,
  FOR_RENT_HOUSE_NUMBERS,
);

export const HOUSE_LEGEND = [
  { dot: "bg-emerald-500", label: "Terisi", description: "Dihuni pemilik / penyewa aktif" },
  { dot: "bg-sky-500", label: "Dikontrakkan", description: "Ditawarkan sewa / kontrak" },
  { dot: "bg-amber-500", label: "Kosong", description: "Tidak berpenghuni / renovasi" },
] as const;
