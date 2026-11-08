# Blok Inai — Portal Warga RT 07 / RW 21

Website informasi resmi warga Blok Inai: profil lingkungan, pengurus RT, transparansi kas, direktori hunian, galeri kegiatan, layanan surat, dan kotak aspirasi.

Dibangun dengan [Next.js](https://nextjs.org) (App Router, Cache Components), React 19, Tailwind CSS v4, dan TypeScript.

## Menjalankan

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # build produksi
pnpm start      # jalankan hasil build
pnpm lint       # ESLint
```

## Struktur Folder

```
src/
├── app/                 # Routing (App Router) — hanya komposisi halaman
│   ├── layout.tsx       # Root layout: font, metadata, Navbar, Footer, ToastProvider
│   ├── page.tsx         # Halaman utama "/" yang menyusun semua section
│   └── globals.css      # Tailwind v4 + design token (@theme) + utility kustom
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Satu file per section: Hero, Profil, Pengurus, Keuangan,
│   │                    # Hunian, Galeri, Layanan, Lapor (Server Components)
│   └── ui/              # Komponen generik: Container, SectionHeading, Modal,
│                        # Toast (+ useToast), RemoteImage
├── features/            # Logika & komponen interaktif per fitur ("use client")
│   ├── keuangan/        # TransactionTable, LastUpdated, DownloadSummaryButton
│   ├── hunian/          # HouseDirectory (cari/filter/expand), HouseCard, HouseIcon
│   ├── galeri/          # GalleryGrid + Lightbox
│   ├── surat/           # LetterTemplateList, LetterModal, LetterDocument,
│   │                    # letter-document.ts (cetak & unduh .doc)
│   └── lapor/           # CitizenForm
├── data/                # Konten statis: site, hero, profil, pengurus, keuangan,
│                        # houses, gallery, layanan, letters, lapor
├── lib/                 # Util murni: format (rupiah/tanggal), houses, cn
└── types/               # Tipe TypeScript bersama
```

### Prinsip

- **Section = Server Component.** Hanya bagian yang benar-benar interaktif yang memakai `"use client"`, dan ditaruh di `features/`.
- **Konten terpisah dari tampilan.** Mengubah nama pengurus, transaksi, atau status rumah cukup di `src/data/` tanpa menyentuh JSX.
- **Satu halaman, banyak anchor.** Semua section ada di `/` dengan `id` (`#profil`, `#keuangan`, dst). Jika suatu fitur butuh halaman sendiri, buat `src/app/<nama>/page.tsx` dan impor komponen dari `features/`.
- **Komponen klien tidak menerima fungsi lewat props** dari Server Component (misalnya ikon). Data yang mengandung komponen ikon diimpor langsung di dalam komponen klien.

## Catatan

- Gambar masih memakai sumber Unsplash/placehold.co (lihat `images.remotePatterns` di `next.config.ts`). Ganti ke foto asli di `public/` saat tersedia.
- Form aspirasi (`features/lapor/CitizenForm.tsx`) saat ini hanya menampilkan konfirmasi di sisi klien. Sambungkan ke server action atau API saat backend tersedia.
- `blok-inai.html` adalah sumber asli sebelum migrasi; disimpan sebagai referensi.
