import type { KasSummary, Transaction } from "@/types";

export const KEUANGAN_SECTION = {
  eyebrow: "Transparansi Keuangan",
  title: "Saldo Kas & Mutasi RT 07",
  description:
    "Laporan kas real-time dan 5 riwayat transaksi terakhir untuk seluruh warga.",
} as const;

export const KAS_SUMMARY: KasSummary = {
  balance: 18_450_000,
  incomeThisMonth: 6_100_000,
  expenseThisMonth: 2_120_000,
  incomeNote: "Iuran Wajib Warga (Inai 01 - 140)",
  expenseNote: "Honor satpam, kebersihan & PJU",
};

export const RECENT_TRANSACTIONS: Transaction[] = [
  {
    date: "04 Nov 2026",
    description: "Iuran Wajib Warga Bulan November (Penerimaan Termin 1)",
    category: "Iuran Bulanan",
    type: "masuk",
    amount: 3_200_000,
  },
  {
    date: "02 Nov 2026",
    description: "Honor 2 Petugas Kebersihan & Angkut Sampah Blok",
    category: "Kebersihan",
    type: "keluar",
    amount: 1_400_000,
  },
  {
    date: "28 Okt 2026",
    description: "Penggantian 4 Titik Bohlam Lampu Jalan Tenaga Surya",
    category: "Pemeliharaan",
    type: "keluar",
    amount: 450_000,
  },
  {
    date: "22 Okt 2026",
    description: "Donasi Swadaya Warga untuk Pengadaan Tempat Sampah Terpilah",
    category: "Donasi Fasum",
    type: "masuk",
    amount: 1_250_000,
  },
  {
    date: "15 Okt 2026",
    description: "Pembelian Obat Fogging Nyamuk DBD & Konsumsi Petugas",
    category: "Kesehatan Lingkungan",
    type: "keluar",
    amount: 380_000,
  },
];
