import {
  FaBriefcase,
  FaChampagneGlasses,
  FaIdCard,
  FaShieldHalved,
} from "react-icons/fa6";
import type { LetterTemplate, LetterTemplateKey } from "@/types";

const DOTS_LONG =
  "............................................................................";
const DOTS_HOUSE = "Blok Inai No. Inai .........., RT 07 RW 21";

export const LETTERHEAD = {
  line1: "RUKUN TETANGGA 07 / RUKUN WARGA 21",
  line2: "KOMPLEK PERUMAHAN BLOK INAI",
  address: "Sekretariat: Blok Inai No. Inai 04, RT 07 / RW 21",
} as const;

export const KETUA_RT_NAME = "Zulkarnaen, S.T.";

export const LETTER_TEMPLATES: Record<LetterTemplateKey, LetterTemplate> = {
  domisili: {
    key: "domisili",
    title: "Surat Keterangan Domisili Tinggal",
    shortTitle: "Surat Ket. Domisili",
    purpose: "Keperluan bank, kerja, sekolah",
    filename: "Surat_Keterangan_Domisili_RT07_Blok_Inai.doc",
    icon: FaIdCard,
    heading: "SURAT KETERANGAN DOMISILI",
    number: "Nomor: 470 / RT07-RW21 / ..... / 2026",
    letterheadPhone: "Telp: 0812-XXXX-XXXX",
    intro:
      "Yang bertanda tangan di bawah ini Ketua RT 07 / RW 21 Blok Inai, dengan ini menerangkan bahwa:",
    fields: [
      { label: "Nama Lengkap", value: DOTS_LONG },
      { label: "NIK (KTP)", value: DOTS_LONG },
      { label: "Tempat / Tgl Lahir", value: DOTS_LONG },
      { label: "Jenis Kelamin", value: "Laki-laki / Perempuan (*)" },
      { label: "Pekerjaan", value: DOTS_LONG },
      { label: "Alamat Tinggal", value: DOTS_HOUSE },
    ],
    closing:
      "Orang tersebut di atas adalah benar-benar warga yang berdomisili dan bertempat tinggal di lingkungan RT 07 / RW 21 Blok Inai. Surat keterangan ini dibuat untuk keperluan: ................................................................",
    signatures: [
      { title: "Pemohon / Warga,", name: "............................................" },
      { title: "Ketua RT 07 / RW 21, Blok Inai", name: KETUA_RT_NAME, bold: true },
    ],
    tone: {
      icon: "bg-emerald-50 text-emerald-600",
      iconHover: "group-hover:bg-emerald-600 group-hover:text-white",
      preview: "hover:text-emerald-700 hover:bg-emerald-50",
      button: "bg-emerald-600 hover:bg-emerald-700",
    },
  },
  skck: {
    key: "skck",
    title: "Surat Pengantar Pembuatan SKCK",
    shortTitle: "Pengantar SKCK",
    purpose: "Pengantar Polsek / Kelurahan",
    filename: "Surat_Pengantar_SKCK_RT07_Blok_Inai.doc",
    icon: FaShieldHalved,
    heading: "SURAT PENGANTAR SKCK",
    number: "Nomor: 300 / SKCK-RT07 / ..... / 2026",
    intro: "Ketua RT 07 / RW 21 Komplek Blok Inai menerangkan bahwa:",
    fields: [
      { label: "Nama Lengkap", value: DOTS_LONG },
      { label: "NIK", value: DOTS_LONG },
      {
        label: "Agama / Status",
        value: "............................ / ....................................",
      },
      { label: "Alamat Asal / Tinggal", value: DOTS_HOUSE },
    ],
    closing:
      "Sepanjang pengamatan dan catatan kami, yang bersangkutan berkelakuan baik, tidak sedang tersangkut perkara kriminal, dan surat ini diterbitkan sebagai pengantar pengurusan Surat Keterangan Catatan Kepolisian (SKCK).",
    signatures: [
      { title: "Mengetahui RW 21,", name: "............................................" },
      { title: "Ketua RT 07 Blok Inai,", name: KETUA_RT_NAME, bold: true },
    ],
    tone: {
      icon: "bg-sky-50 text-sky-600",
      iconHover: "group-hover:bg-sky-600 group-hover:text-white",
      preview: "hover:text-sky-700 hover:bg-sky-50",
      button: "bg-sky-600 hover:bg-sky-700",
    },
  },
  sku: {
    key: "sku",
    title: "Surat Keterangan Usaha (SKU)",
    shortTitle: "Surat Ket. Usaha (SKU)",
    purpose: "Pengajuan UMKM / Kredit Usaha",
    filename: "Surat_Keterangan_Usaha_RT07_Blok_Inai.doc",
    icon: FaBriefcase,
    heading: "SURAT KETERANGAN USAHA (SKU)",
    number: "Nomor: 510 / SKU-RT07 / ..... / 2026",
    intro: "Ketua RT 07 RW 21 Blok Inai menerangkan bahwa warga di bawah ini:",
    fields: [
      { label: "Nama Pemilik Usaha", value: DOTS_LONG },
      { label: "Alamat Rumah", value: DOTS_HOUSE },
      { label: "Nama Usaha / Dagang", value: DOTS_LONG },
      { label: "Bidang Usaha", value: DOTS_LONG },
      { label: "Alamat / Lokasi Usaha", value: DOTS_LONG },
    ],
    closing:
      "Benar yang bersangkutan memiliki dan menjalankan kegiatan usaha tersebut secara aktif dan tidak mengganggu ketertiban umum lingkungan.",
    signatures: [{ title: "Ketua RT 07 Blok Inai,", name: KETUA_RT_NAME, bold: true }],
    tone: {
      icon: "bg-amber-50 text-amber-600",
      iconHover: "group-hover:bg-amber-600 group-hover:text-white",
      preview: "hover:text-amber-700 hover:bg-amber-50",
      button: "bg-amber-600 hover:bg-amber-700",
    },
  },
  acara: {
    key: "acara",
    title: "Surat Permohonan Izin Keramaian / Tenda Warga",
    shortTitle: "Izin Acara / Tenda",
    purpose: "Pernikahan, tasyakuran & tenda",
    filename: "Surat_Izin_Acara_Keramaian_RT07_Blok_Inai.doc",
    icon: FaChampagneGlasses,
    heading: "SURAT PEMBERITAHUAN / IZIN KERAMAIAN",
    number: "Nomor: 200 / ACARA-RT07 / ..... / 2026",
    intro: "Bersama surat ini, warga yang bertanda tangan di bawah ini:",
    fields: [
      { label: "Nama Penyelenggara", value: DOTS_LONG },
      { label: "Kediaman / Rumah", value: "Blok Inai No. Inai .........." },
      {
        label: "Bentuk Acara",
        value: "Pernikahan / Khitanan / Pengajian / Tasyakuran (*)",
      },
      { label: "Hari & Tanggal", value: DOTS_LONG },
      { label: "Waktu Acara", value: "Pukul ........:........ s/d ........:........ WIB" },
      {
        label: "Penggunaan Badan Jalan",
        value: "Ya / Tidak (Izin Koordinasi Seksi Keamanan)",
      },
    ],
    closing:
      "Penyelenggara bersedia menjaga ketertiban, kebersihan lingkungan, serta keamanan parkir tamu undangan.",
    signatures: [
      { title: "Seksi Keamanan RT 07,", name: "Dedi Supriyadi", bold: true },
      { title: "Ketua RT 07 Blok Inai,", name: KETUA_RT_NAME, bold: true },
    ],
    tone: {
      icon: "bg-violet-50 text-violet-600",
      iconHover: "group-hover:bg-violet-600 group-hover:text-white",
      preview: "hover:text-violet-700 hover:bg-violet-50",
      button: "bg-violet-600 hover:bg-violet-700",
    },
  },
};

export const LETTER_TEMPLATE_LIST: LetterTemplate[] = Object.values(LETTER_TEMPLATES);
