"use client";

import { FaFileArrowDown } from "react-icons/fa6";
import { useToast } from "@/components/ui/Toast";

export function DownloadSummaryButton() {
  const showToast = useToast();

  return (
    <button
      type="button"
      onClick={() =>
        showToast(
          "Mengunduh Dokumen",
          "Rekapitulasi Buku Kas RT 07 RW 21 berhasil disiapkan untuk diunduh (Format PDF).",
        )
      }
      className="text-emerald-700 hover:text-emerald-800 font-bold inline-flex items-center space-x-1.5"
    >
      <FaFileArrowDown />
      <span>Download Ringkasan</span>
    </button>
  );
}
