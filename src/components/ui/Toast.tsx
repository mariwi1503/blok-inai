"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { FaBell, FaCheck } from "react-icons/fa6";
import { cn } from "@/lib/cn";

type ToastVariant = "success" | "warning";

type ToastMessage = {
  title: string;
  message: string;
  variant: ToastVariant;
};

type ShowToast = (title: string, message: string, variant?: ToastVariant) => void;

const ToastContext = createContext<ShowToast | null>(null);

const TOAST_DURATION_MS = 3500;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [visible, setVisible] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback<ShowToast>((title, message, variant = "success") => {
    setToast({ title, message, variant });
    setVisible(true);

    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setVisible(false), TOAST_DURATION_MS);
  }, []);

  useEffect(() => {
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  const isSuccess = toast?.variant !== "warning";

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className={cn(
          "fixed bottom-6 right-6 z-50 transform transition-all duration-300 bg-white border border-slate-100 shadow-2xl rounded-2xl p-4 flex items-center space-x-3 max-w-sm",
          visible ? "translate-y-0 opacity-100" : "translate-y-32 opacity-0 pointer-events-none",
        )}
      >
        <div
          className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
            isSuccess ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600",
          )}
        >
          {isSuccess ? <FaCheck /> : <FaBell />}
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-800">{toast?.title ?? "Berhasil"}</h4>
          <p className="text-xs text-slate-500">{toast?.message ?? "Aksi berhasil dilakukan."}</p>
        </div>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast(): ShowToast {
  const showToast = useContext(ToastContext);
  if (!showToast) {
    throw new Error("useToast harus dipakai di dalam <ToastProvider>.");
  }
  return showToast;
}
