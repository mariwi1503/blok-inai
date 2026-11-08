import {
  FaFireExtinguisher,
  FaPhoneVolume,
  FaShieldHalved,
  FaUserShield,
} from "react-icons/fa6";
import type { EmergencyContact, RondaShift } from "@/types";

export const LAYANAN_SECTION = {
  eyebrow: "Ketertiban & Fasilitas",
  title: "Jadwal Ronda Malam & Layanan Surat",
  description:
    "Siskamling rutin untuk menjaga kedamaian dan kenyamanan warga Blok Inai.",
} as const;

export const RONDA = {
  title: "Jadwal Siskamling Pekan Ini",
  shiftLabel: "Shift Malam: 22.00 - 04.30 WIB",
  post: "Pos Ronda 07",
} as const;

export const RONDA_SHIFTS: RondaShift[] = [
  { days: "Senin - Selasa", houses: "Inai 01 - 35", coordinator: "P. Joko" },
  { days: "Rabu - Kamis", houses: "Inai 36 - 70", coordinator: "P. Bowo" },
  { days: "Jumat - Sabtu", houses: "Inai 71 - 105", coordinator: "P. Dedi" },
  { days: "Minggu", houses: "Inai 106 - 140", coordinator: "Tim Ronda 4" },
];

export const SURAT_PROCEDURE = {
  title: "Prosedur Pembuatan Surat Pengantar RT",
  steps: [
    "Pilih dan unduh template surat yang dibutuhkan di bawah ini.",
    "Cetak (print) mandiri dan isi data diri sesuai KTP & KK yang masih berlaku.",
    "Bawa berkas yang telah diisi ke kediaman Ketua RT (Inai 04) untuk verifikasi dan tanda tangan + stempel basah.",
    "Layanan tanda tangan dibuka setiap hari pkl 19:00 - 21:30 WIB (konfirmasi via WhatsApp terlebih dahulu).",
  ],
  downloadTitle: "Download Template Surat Siap Cetak",
  downloadDescription:
    "Unduh dokumen Word (.doc) atau cetak langsung untuk diisi warga.",
  badge: "Format Resmi RT 07",
} as const;

export const EMERGENCY_SECTION = {
  eyebrow: "Siaga 24 Jam",
  title: "Nomor Telepon Penting",
  description:
    "Simpan nomor ini untuk kondisi gawat darurat di lingkungan kita.",
} as const;

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    icon: FaPhoneVolume,
    label: "Panggilan Darurat",
    title: "Layanan Darurat Terpadu (112)",
    value: "112",
    tel: "112",
    tone: {
      card: "bg-rose-50/70 border-rose-100 hover:bg-rose-100/70",
      icon: "bg-rose-500",
      label: "text-rose-600",
      value: "text-sm font-black text-rose-700",
    },
  },
  {
    icon: FaShieldHalved,
    label: "Kepolisian",
    title: "Polsek Terdekat / Call Center",
    value: "110",
    tel: "110",
    tone: {
      card: "bg-slate-50 border-slate-200 hover:bg-slate-100",
      icon: "bg-blue-600",
      label: "text-blue-600",
      value: "text-sm font-bold text-slate-700",
    },
  },
  {
    icon: FaFireExtinguisher,
    label: "Pemadam Kebakaran",
    title: "Damkar Kota / Pos Jaga",
    value: "113",
    tel: "113",
    tone: {
      card: "bg-slate-50 border-slate-200 hover:bg-slate-100",
      icon: "bg-amber-500",
      label: "text-amber-600",
      value: "text-sm font-bold text-slate-700",
    },
  },
  {
    icon: FaUserShield,
    label: "Satpam Gerbang Masuk",
    title: "Pos Keamanan Utama Blok Inai",
    value: "Ext: Pos-07",
    tone: {
      card: "bg-slate-50 border-slate-200",
      icon: "bg-emerald-600",
      label: "text-emerald-600",
      value: "text-xs font-semibold text-slate-700",
    },
  },
];
