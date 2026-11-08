import type { NavLink } from "@/types";

export const SITE = {
  name: "Blok Inai",
  rt: "07",
  rw: "21",
  rtRw: "RT 07 / RW 21",
  title: "Blok Inai - RT 07 RW 21 | Guyub, Aman, & Transparan",
  description:
    "Website informasi resmi RT 07 / RW 21 Blok Inai. Wadah keterbukaan kas, direktori warga, jadwal kegiatan gotong royong, dan pelayanan administrasi yang mudah untuk seluruh warga.",
  secretariat: {
    place: "Balai Warga / Kediaman Ketua RT 07",
    address: "Blok Inai No. Inai 04, RT:07 RW:21",
    hours: "Buka Layanan: Setiap Hari (19:00 - 21:30 WIB)",
  },
  footerTagline:
    "Perumahan Blok Inai, RT:07 RW:21. Lingkungan hunian asri, amanah, damai, dan menjunjung tinggi gotong royong serta tata kelola mandiri yang transparan.",
  copyright:
    "© 2026 Blok Inai RT:07 RW:21. Dikelola demi transparansi dan silaturahmi warga.",
  motto: "Guyub Rukun Saklawase",
} as const;

export const NAV_LINKS: NavLink[] = [
  { href: "#profil", label: "Profil", mobileLabel: "Profil RT" },
  { href: "#pengurus", label: "Pengurus", mobileLabel: "Pengurus RT" },
  { href: "#keuangan", label: "Kas Keuangan", mobileLabel: "Kas RT" },
  { href: "#hunian", label: "Data Hunian", mobileLabel: "Daftar Rumah" },
  { href: "#galeri", label: "Galeri", mobileLabel: "Galeri Kegiatan" },
  { href: "#layanan", label: "Layanan Warga", mobileLabel: "Layanan & Ronda" },
];

export const FOOTER_LINKS: NavLink[] = [
  { href: "#profil", label: "Profil RT 07" },
  { href: "#pengurus", label: "Perangkat Pengurus" },
  { href: "#keuangan", label: "Laporan Kas Keuangan" },
  { href: "#hunian", label: "Daftar Hunian Rumah" },
  { href: "#galeri", label: "Dokumentasi Warga" },
];
