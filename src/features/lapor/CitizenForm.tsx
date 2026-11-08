"use client";

import { type FormEvent } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { useToast } from "@/components/ui/Toast";
import { ASPIRATION_CATEGORIES } from "@/data/lapor";

const INPUT_CLASS =
  "w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-white/15 transition";

const LABEL_CLASS = "block text-xs font-semibold text-slate-200 mb-1.5";

/**
 * Citizen aspiration form. Currently client-side only (shows a confirmation
 * toast), matching the original page. Wire `handleSubmit` to a server action
 * when a backend is available.
 */
export function CitizenForm() {
  const showToast = useToast();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "");
    const house = String(data.get("house") ?? "");
    const category = String(data.get("category") ?? "");

    form.reset();
    showToast(
      "Aspirasi Diterima",
      `Terima kasih ${name} (${house}). Laporan kategori "${category}" telah diteruskan ke Pengurus RT 07.`,
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="citizen-name" className={LABEL_CLASS}>
            Nama Lengkap
          </label>
          <input
            id="citizen-name"
            name="name"
            type="text"
            required
            placeholder="Contoh: Bpk. Budi Santoso"
            className={INPUT_CLASS}
          />
        </div>
        <div>
          <label htmlFor="citizen-house" className={LABEL_CLASS}>
            Nomor Rumah (Inai 01 - Inai 140)
          </label>
          <input
            id="citizen-house"
            name="house"
            type="text"
            required
            placeholder="Contoh: Inai 42"
            className={INPUT_CLASS}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="citizen-wa" className={LABEL_CLASS}>
            Nomor WhatsApp Aktif
          </label>
          <input
            id="citizen-wa"
            name="whatsapp"
            type="tel"
            required
            placeholder="08xxxxxxxxxx"
            className={INPUT_CLASS}
          />
        </div>
        <div>
          <label htmlFor="citizen-category" className={LABEL_CLASS}>
            Kategori Masukan
          </label>
          <select
            id="citizen-category"
            name="category"
            defaultValue={ASPIRATION_CATEGORIES[0].value}
            className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
          >
            {ASPIRATION_CATEGORIES.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="citizen-message" className={LABEL_CLASS}>
          Detail Pesan / Aspirasi
        </label>
        <textarea
          id="citizen-message"
          name="message"
          rows={4}
          required
          placeholder="Tuliskan saran atau kendala yang dihadapi secara rinci..."
          className={INPUT_CLASS}
        />
      </div>

      <div className="pt-2 text-right">
        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition inline-flex items-center justify-center"
        >
          <FaPaperPlane className="mr-2" /> Kirim Aspirasi Sekarang
        </button>
      </div>
    </form>
  );
}
