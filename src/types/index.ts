import type { IconType } from "react-icons";

export type NavLink = {
  href: `#${string}`;
  label: string;
  mobileLabel?: string;
};

export type Pillar = {
  icon: IconType;
  title: string;
  description: string;
  /** Tailwind classes for the icon tile in idle and hover state. */
  tone: {
    idle: string;
    hover: string;
  };
};

export type Pengurus = {
  role: string;
  name: string;
  house: string;
  quote: string;
  image: string;
  fallbackImage: string;
  whatsapp: string;
  /** Tailwind background class for the role badge. */
  badgeClass: string;
};

export type TransactionType = "masuk" | "keluar";

export type Transaction = {
  date: string;
  description: string;
  category: string;
  type: TransactionType;
  amount: number;
};

export type KasSummary = {
  balance: number;
  incomeThisMonth: number;
  expenseThisMonth: number;
  incomeNote: string;
  expenseNote: string;
};

export type HouseStatus = "terisi" | "dikontrakan" | "kosong";

export type House = {
  /** Display label, e.g. "Inai 07". */
  label: string;
  number: number;
  status: HouseStatus;
};

export type HouseFilter = HouseStatus | "all";

export type HouseCounts = Record<HouseFilter, number>;

export type GalleryPhoto = {
  /** Thumbnail / card size (~800px wide). */
  src: string;
  /** Full size shown in the lightbox (~1200px wide). Falls back to `src`. */
  largeSrc?: string;
  alt: string;
  /** Optional caption shown under the photo in the lightbox. */
  caption?: string;
};

export type GalleryItem = {
  /** One or more photos; the first one is the cover shown on the card. */
  photos: GalleryPhoto[];
  /** Shown when any photo of this activity fails to load. */
  fallbackImage: string;
  tag: string;
  title: string;
  meta: string;
  /** Tailwind classes for the tag pill and hover title color. */
  tone: {
    tag: string;
    hoverTitle: string;
  };
};

export type RondaShift = {
  days: string;
  houses: string;
  coordinator: string;
};

export type EmergencyContact = {
  icon: IconType;
  label: string;
  title: string;
  value: string;
  tel?: string;
  tone: {
    card: string;
    icon: string;
    label: string;
    value: string;
  };
};

export type LetterTemplateKey = "domisili" | "skck" | "sku" | "acara";

export type LetterField = {
  label: string;
  value: string;
};

export type LetterSignature = {
  title: string;
  name: string;
  bold?: boolean;
};

export type LetterTemplate = {
  key: LetterTemplateKey;
  title: string;
  shortTitle: string;
  purpose: string;
  filename: string;
  icon: IconType;
  /** Document heading printed inside the letter body. */
  heading: string;
  number: string;
  intro: string;
  fields: LetterField[];
  closing: string;
  signatures: LetterSignature[];
  /** Whether the letterhead shows a phone line. */
  letterheadPhone?: string;
  tone: {
    icon: string;
    iconHover: string;
    preview: string;
    button: string;
  };
};

export type AspirationCategory =
  | "Aduan Fasilitas (Lampu/Jalan/Got)"
  | "Keamanan & Ketertiban"
  | "Pertanyaan Kas / Iuran RT"
  | "Usulan Kegiatan Warga"
  | "Lainnya";
