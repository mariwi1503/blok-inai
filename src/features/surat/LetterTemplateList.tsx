"use client";

import { useState } from "react";
import { FaDownload, FaRegEye } from "react-icons/fa6";
import { useToast } from "@/components/ui/Toast";
import { LETTER_TEMPLATE_LIST } from "@/data/letters";
import { cn } from "@/lib/cn";
import type { LetterTemplate } from "@/types";
import { LetterModal } from "./LetterModal";
import { downloadLetterDoc } from "./letter-document";

/**
 * Imports the template data directly instead of receiving it via props:
 * each template carries an icon component (a function), which cannot cross
 * the Server -> Client Component boundary as a prop.
 */
export function LetterTemplateList() {
  const templates = LETTER_TEMPLATE_LIST;
  const [preview, setPreview] = useState<LetterTemplate | null>(null);
  const showToast = useToast();

  const handleDownload = (template: LetterTemplate) => {
    downloadLetterDoc(template);
    showToast(
      "Mengunduh Template",
      `Template "${template.title}" berhasil diunduh. Silakan buka & cetak di rumah Anda.`,
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {templates.map((template) => {
          const Icon = template.icon;
          return (
            <div
              key={template.key}
              className="p-3 bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-300 hover:shadow-md transition flex items-center justify-between group"
            >
              <div className="flex items-center space-x-3 min-w-0 pr-2">
                <div
                  className={cn(
                    "w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition",
                    template.tone.icon,
                    template.tone.iconHover,
                  )}
                >
                  <Icon className="text-xs" />
                </div>
                <div className="truncate">
                  <p className="text-xs font-bold text-slate-800 truncate">{template.shortTitle}</p>
                  <p className="text-[10px] text-slate-400">{template.purpose}</p>
                </div>
              </div>
              <div className="flex items-center space-x-1 shrink-0">
                <button
                  type="button"
                  onClick={() => setPreview(template)}
                  title="Lihat Contoh"
                  aria-label={`Lihat contoh ${template.shortTitle}`}
                  className={cn(
                    "p-2 rounded-lg text-slate-400 transition text-xs",
                    template.tone.preview,
                  )}
                >
                  <FaRegEye />
                </button>
                <button
                  type="button"
                  onClick={() => handleDownload(template)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-white font-semibold text-xs shadow-sm transition inline-flex items-center space-x-1",
                    template.tone.button,
                  )}
                >
                  <FaDownload className="text-[10px]" />
                  <span>Unduh</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <LetterModal
        template={preview}
        onClose={() => setPreview(null)}
        onDownload={handleDownload}
      />
    </>
  );
}
