import type { GalleryItem, GalleryPhoto } from "@/types";

export const GALERI_SECTION = {
  eyebrow: "Momen Warga",
  title: "Galeri Kegiatan Blok Inai",
  description:
    "Dokumentasi kebersamaan, perayaan kemerdekaan, kerja bakti, dan agenda warga lainnya.",
} as const;

const unsplash = (id: string, width: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

/** Builds a photo entry from an Unsplash id with card and lightbox sizes. */
const photo = (id: string, alt: string, caption?: string): GalleryPhoto => ({
  src: unsplash(id, 800),
  largeSrc: unsplash(id, 1200),
  alt,
  caption,
});

export const GALLERY: GalleryItem[] = [
  {
    photos: [
      photo("photo-1577495508048-b635879837f1", "Kerja Bakti", "Pembersihan saluran drainase Blok A"),
      photo("photo-1593113598332-cd288d649433", "Warga bergotong royong", "Warga bergotong royong mengangkat sampah"),
      photo("photo-1559027615-cd4628902d4a", "Fogging lingkungan", "Fogging nyamuk DBD di Blok B"),
    ],
    fallbackImage: "https://placehold.co/600x400/emerald/white?text=Kerja+Bakti",
    tag: "Gotong Royong",
    title: "Kerja Bakti Bersih Saluran & Fogging",
    meta: "12 Januari 2026 • Area Blok A & B",
    tone: {
      tag: "text-emerald-600 bg-emerald-50",
      hoverTitle: "group-hover:text-emerald-700",
    },
  },
  {
    photos: [
      photo("photo-1511556532299-8f662fc26c06", "Semarak 17an", "Pembukaan lomba 17 Agustus"),
      photo("photo-1528605248644-14dd04022da1", "Lomba anak-anak", "Lomba balap karung anak-anak"),
      photo("photo-1517457373958-b7bdd4587205", "Lomba ibu-ibu", "Lomba tarik tambang ibu-ibu"),
      photo("photo-1469571486292-0ba58a3f068b", "Pembagian hadiah", "Pembagian hadiah pemenang lomba"),
    ],
    fallbackImage: "https://placehold.co/600x400/rose/white?text=Lomba+17an",
    tag: "HUT RI",
    title: "Semarak Lomba 17-an Anak & Ibu Warga",
    meta: "Lapangan RT 07",
    tone: {
      tag: "text-rose-600 bg-rose-50",
      hoverTitle: "group-hover:text-rose-600",
    },
  },
  {
    photos: [
      photo("photo-1529156069898-49953e39b3ac", "Silaturahmi Warga", "Buka puasa bersama di Balai Warga"),
      photo("photo-1542810634-71277d95dcbb", "Santunan anak yatim", "Santunan anak yatim Blok Inai"),
    ],
    fallbackImage: "https://placehold.co/600x400/amber/white?text=Silaturahmi",
    tag: "Silaturahmi",
    title: "Buka Puasa & Halal Bihalal Bersama",
    meta: "Balai Warga RT 07",
    tone: {
      tag: "text-amber-600 bg-amber-50",
      hoverTitle: "group-hover:text-amber-600",
    },
  },
  {
    photos: [
      photo("photo-1544367567-0f2fcb009e0b", "Senam Sehat", "Senam pagi bersama warga"),
      photo("photo-1571019614242-c5c5dee9f50b", "Peregangan", "Sesi peregangan dipandu instruktur"),
    ],
    fallbackImage: "https://placehold.co/600x400/sky/white?text=Senam+Sehat",
    tag: "Kesehatan",
    title: "Senam Pagi & Pemeriksaan Tensi Gratis",
    meta: "Tiap Minggu Ke-2 & Ke-4",
    tone: {
      tag: "text-sky-600 bg-sky-50",
      hoverTitle: "group-hover:text-sky-600",
    },
  },
  {
    photos: [photo("photo-1516253593875-bd7ba052fbc5", "Fasilitas RT")],
    fallbackImage: "https://placehold.co/600x400/teal/white?text=Fasilitas+RT",
    tag: "Fasilitas",
    title: "Pemasangan Lampu Jalan LED Tenaga Surya",
    meta: "Swadaya Kas RT 07",
    tone: {
      tag: "text-teal-600 bg-teal-50",
      hoverTitle: "group-hover:text-teal-600",
    },
  },
  {
    photos: [
      photo("photo-1416879595882-3373a0480b5b", "Kebun TOGA", "Peresmian kebun hidroponik PKK"),
      photo("photo-1466692476868-aef1dfb1e735", "Tanaman obat", "Koleksi tanaman obat keluarga"),
      photo("photo-1518005020951-eccb494ad742", "Panen perdana", "Panen perdana sayuran hidroponik"),
    ],
    fallbackImage: "https://placehold.co/600x400/emerald/white?text=Kebun+Warga",
    tag: "Lingkungan Hidup",
    title: "Peresmian Kebun Hidroponik PKK Blok Inai",
    meta: "Sudut Fasum Blok Inai",
    tone: {
      tag: "text-emerald-600 bg-emerald-50",
      hoverTitle: "group-hover:text-emerald-700",
    },
  },
];
