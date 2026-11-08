"use client";

import { useState } from "react";
import { FaBars, FaRegPaperPlane, FaTreeCity, FaXmark } from "react-icons/fa6";
import { NAV_LINKS, SITE } from "@/data/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-3" aria-label={`${SITE.name} beranda`}>
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center shadow-md shadow-emerald-200">
              <FaTreeCity className="text-xl" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-emerald-700 via-teal-700 to-slate-800 bg-clip-text text-transparent">
                {SITE.name}
              </span>
              <span className="block text-[11px] font-semibold text-emerald-600 uppercase tracking-wider">
                {SITE.rtRw}
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center space-x-1 font-medium text-sm text-slate-600">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 rounded-xl hover:text-emerald-700 hover:bg-emerald-50/80 transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#lapor"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-sm font-semibold shadow-md shadow-emerald-200/50 hover:shadow-lg transition inline-flex items-center"
            >
              <FaRegPaperPlane className="mr-1.5" /> Hubungi Pengurus
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
              className="p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition focus:outline-none"
            >
              {mobileOpen ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden border-b border-slate-100 bg-white/95 backdrop-blur-lg px-5 py-4 space-y-2 shadow-lg",
          !mobileOpen && "hidden",
        )}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMobile}
            className="block px-3 py-2 rounded-lg text-slate-700 font-medium hover:bg-emerald-50 hover:text-emerald-700"
          >
            {link.mobileLabel ?? link.label}
          </a>
        ))}
        <a
          href="#lapor"
          onClick={closeMobile}
          className="block w-full text-center px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-medium text-sm mt-3"
        >
          Lapor / Aspirasi
        </a>
      </div>
    </nav>
  );
}
