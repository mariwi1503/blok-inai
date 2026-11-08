import type { AspirationCategory } from "@/types";

export const LAPOR_SECTION = {
  eyebrow: "Suara Warga",
  title: "Kotak Saran & Aspirasi Warga Blok Inai",
  description:
    "Punya masukan lampu jalan mati, aduan kebersihan, atau usulan kegiatan? Sampaikan secara langsung.",
} as const;

export const ASPIRATION_CATEGORIES: { value: AspirationCategory; label: string }[] = [
  {
    value: "Aduan Fasilitas (Lampu/Jalan/Got)",
    label: "Aduan Fasilitas (Lampu / Jalan / Got)",
  },
  { value: "Keamanan & Ketertiban", label: "Keamanan & Ketertiban" },
  { value: "Pertanyaan Kas / Iuran RT", label: "Pertanyaan Kas / Iuran RT" },
  { value: "Usulan Kegiatan Warga", label: "Usulan Kegiatan Warga" },
  { value: "Lainnya", label: "Lainnya" },
];
