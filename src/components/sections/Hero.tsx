import { FaHouseChimney, FaShieldHalved, FaWallet } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { RemoteImage } from "@/components/ui/RemoteImage";
import { HERO } from "@/data/hero";
import type { HouseCounts } from "@/types";

type HeroProps = {
  counts: HouseCounts;
};

const STATS: { key: keyof HouseCounts; label: string; color: string }[] = [
  { key: "all", label: "Total Rumah", color: "text-slate-800" },
  { key: "terisi", label: "Terisi", color: "text-emerald-600" },
  { key: "dikontrakan", label: "Dikontrakkan", color: "text-sky-600" },
  { key: "kosong", label: "Kosong", color: "text-amber-600" },
];

export function Hero({ counts }: HeroProps) {
  return (
    <header className="soft-gradient-bg pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 border border-emerald-200 shadow-sm text-xs md:text-sm font-semibold text-emerald-800">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 badge-pulse" />
              <span>{HERO.badge}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {HERO.titleLead}{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                {HERO.titleHighlight}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {HERO.descriptionLead} <strong>{HERO.descriptionStrong}</strong>
              {HERO.descriptionTail}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#hunian"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm shadow-xl shadow-slate-900/10 transition flex items-center justify-center space-x-2"
              >
                <FaHouseChimney className="text-emerald-400" />
                <span>Cek Data Rumah</span>
              </a>
              <a
                href="#keuangan"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-medium text-sm border border-slate-200/80 shadow-sm transition flex items-center justify-center space-x-2"
              >
                <FaWallet className="text-amber-500" />
                <span>Lihat Saldo Kas</span>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/60 max-w-xl mx-auto lg:mx-0">
              {STATS.map((stat) => (
                <div
                  key={stat.key}
                  className="p-3 bg-white/60 rounded-xl border border-white text-center sm:text-left"
                >
                  <p className={`text-2xl font-bold ${stat.color}`}>{counts[stat.key]}</p>
                  <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-300 rounded-full mix-blend-multiply blur-3xl opacity-40" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply blur-3xl opacity-50" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-white">
                <div className="relative w-full h-80 sm:h-96 overflow-hidden">
                  <RemoteImage
                    src={HERO.image}
                    fallbackSrc={HERO.imageFallback}
                    alt={HERO.imageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover object-center transform hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-card shadow-lg flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold">
                      <FaShieldHalved />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-semibold">
                        {HERO.floatingCard.label}
                      </p>
                      <p className="text-sm font-bold text-slate-800">{HERO.floatingCard.title}</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
                    {HERO.floatingCard.badge}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
