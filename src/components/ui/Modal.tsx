"use client";

import { useEffect, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  /** Classes for the dialog panel. */
  panelClassName?: string;
  /** Classes for the backdrop overlay. */
  overlayClassName?: string;
  labelledBy?: string;
};

export function Modal({
  open,
  onClose,
  children,
  panelClassName,
  overlayClassName,
  labelledBy,
}: ModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
      onClick={onClose}
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm",
        overlayClassName ?? "bg-black/80",
      )}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={cn("w-full bg-white rounded-3xl overflow-hidden shadow-2xl relative", panelClassName)}
      >
        {children}
      </div>
    </div>
  );
}
