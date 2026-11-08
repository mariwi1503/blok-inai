"use client";

import { useRef } from "react";
import { FaFileWord, FaPrint, FaRegFileLines, FaXmark } from "react-icons/fa6";
import { Modal } from "@/components/ui/Modal";
import type { LetterTemplate } from "@/types";
import { LetterDocument } from "./LetterDocument";
import { printLetterMarkup } from "./letter-document";

type LetterModalProps = {
  template: LetterTemplate | null;
  onClose: () => void;
  onDownload: (template: LetterTemplate) => void;
};

export function LetterModal({ template, onClose, onDownload }: LetterModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    if (contentRef.current) printLetterMarkup(contentRef.current.innerHTML);
  };

  return (
    <Modal
      open={template !== null}
      onClose={onClose}
      overlayClassName="bg-black/75"
      panelClassName="max-w-2xl flex flex-col max-h-[90vh]"
      labelledBy="letter-modal-title"
    >
      {template && (
        <>
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-lg">
                <FaRegFileLines />
              </div>
              <div>
                <h4 id="letter-modal-title" className="font-bold text-slate-800 text-sm sm:text-base">
                  {template.title}
                </h4>
                <p className="text-xs text-slate-500">Bisa langsung dicetak atau diunduh format Word</p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup pratinjau surat"
              className="w-8 h-8 rounded-full bg-slate-200/80 text-slate-600 hover:bg-slate-300 flex items-center justify-center transition"
            >
              <FaXmark />
            </button>
          </div>

          <div
            ref={contentRef}
            className="p-5 sm:p-8 overflow-y-auto space-y-4 text-slate-800 text-xs sm:text-sm bg-slate-100/50"
          >
            <LetterDocument template={template} />
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 text-xs font-semibold transition"
            >
              Tutup
            </button>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={handlePrint}
                className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition flex items-center space-x-1.5"
              >
                <FaPrint />
                <span>Cetak Langsung</span>
              </button>
              <button
                type="button"
                onClick={() => onDownload(template)}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-200 transition flex items-center space-x-1.5"
              >
                <FaFileWord />
                <span>Unduh Dokumen (.doc)</span>
              </button>
            </div>
          </div>
        </>
      )}
    </Modal>
  );
}
