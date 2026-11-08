import type { Pengurus } from "@/types";

export const PENGURUS_SECTION = {
  eyebrow: "Amanah Warga",
  title: "Perangkat & Pengurus RT 07",
  description:
    "Periode Pengabdian 2024 - 2027 siap melayani segala kebutuhan administrasi dan kerukunan warga.",
} as const;

export const PENGURUS: Pengurus[] = [
  {
    role: "Ketua RT 07",
    name: "Bpk. Zulkarnaen, S.T.",
    house: "Inai 19",
    quote:
      "Melayani dengan ikhlas, mengutamakan mufakat dan kenyamanan warga bersama.",
    image:
      "/images/ketua.png",
    fallbackImage: "https://placehold.co/400x500/emerald/white?text=Ketua+RT",
    whatsapp: "https://wa.me/",
    badgeClass: "bg-emerald-500",
  },
  {
    role: "Sekretaris",
    name: "Ibu Ratna Dewi, S.Pd.",
    house: "Inai 28",
    quote:
      "Tata kelola administrasi surat pengantar yang cepat, tertib, dan rapi.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    fallbackImage: "https://placehold.co/400x500/teal/white?text=Sekretaris",
    whatsapp: "https://wa.me/",
    badgeClass: "bg-teal-600",
  },
  {
    role: "Bendahara",
    name: "Bpk. Agus Santoso, S.E.",
    house: "Inai 55",
    quote:
      "Akuntabilitas rupiah demi rupiah untuk kemaslahatan bersama warga Blok Inai.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    fallbackImage: "https://placehold.co/400x500/blue/white?text=Bendahara",
    whatsapp: "https://wa.me/",
    badgeClass: "bg-sky-600",
  },
  {
    role: "Seksi Keamanan",
    name: "Bpk. Dedi Supriyadi",
    house: "Inai 92",
    quote:
      "Menjaga lingkungan tetap tenang, siaga ronda malam dan tanggap darurat.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    fallbackImage: "https://placehold.co/400x500/amber/white?text=Keamanan",
    whatsapp: "https://wa.me/",
    badgeClass: "bg-amber-600",
  },
];
