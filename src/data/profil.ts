import { FaChartLine, FaLeaf, FaPeopleRoof } from "react-icons/fa6";
import type { Pillar } from "@/types";

export const PROFIL = {
  eyebrow: "Tentang Kami",
  title: "Profil Lingkungan Blok Inai",
  description:
    "Blok Inai merupakan bagian dari Rukun Tetangga 07 di Rukun Warga 21. Lingkungan kami mengedepankan asas kekeluargaan, kerukunan antar warga lintas generasi, kebersihan lingkungan, serta transparansi pengelolaan rukun tetangga berbasis teknologi.",
} as const;

export const PILLARS: Pillar[] = [
  {
    icon: FaPeopleRoof,
    title: "Kerukunan & Guyub",
    description:
      "Menjalin silaturahmi yang hangat antar warga melalui agenda arisan rutin, senam bersama tiap akhir pekan, serta gotong royong berkala.",
    tone: {
      idle: "bg-emerald-100 text-emerald-600",
      hover: "group-hover:bg-emerald-600 group-hover:text-white",
    },
  },
  {
    icon: FaChartLine,
    title: "Keterbukaan Anggaran",
    description:
      "Iuran sampah, keamanan, dan kas sosial dilaporkan secara transparan dan berkala melalui website ini dan grup pesan resmi warga.",
    tone: {
      idle: "bg-teal-100 text-teal-600",
      hover: "group-hover:bg-teal-600 group-hover:text-white",
    },
  },
  {
    icon: FaLeaf,
    title: "Asri & Tertata",
    description:
      "Pengelolaan taman blok mandiri, program pemilahan bank sampah organik dan anorganik, serta penataan saluran drainase lancar.",
    tone: {
      idle: "bg-amber-100 text-amber-600",
      hover: "group-hover:bg-amber-500 group-hover:text-white",
    },
  },
];
