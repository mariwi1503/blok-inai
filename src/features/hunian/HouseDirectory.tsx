"use client";

import { useMemo, useState } from "react";
import { FaHouseChimneyCrack, FaMagnifyingGlass } from "react-icons/fa6";
import { INITIAL_DISPLAY_LIMIT } from "@/data/houses";
import { filterHouses } from "@/lib/houses";
import { cn } from "@/lib/cn";
import type { House, HouseCounts, HouseFilter } from "@/types";
import { HouseCard } from "./HouseCard";

type HouseDirectoryProps = {
  houses: House[];
  counts: HouseCounts;
};

const FILTERS: { value: HouseFilter; label: string }[] = [
  { value: "all", label: "Semua" },
  { value: "terisi", label: "Terisi" },
  { value: "dikontrakan", label: "Dikontrakkan" },
  { value: "kosong", label: "Kosong" },
];

export function HouseDirectory({ houses, counts }: HouseDirectoryProps) {
  const [activeFilter, setActiveFilter] = useState<HouseFilter>("all");
  const [keyword, setKeyword] = useState("");
  const [showAll, setShowAll] = useState(false);

  const isSearching = keyword.trim().length > 0;

  const filtered = useMemo(
    () => filterHouses(houses, activeFilter, keyword),
    [houses, activeFilter, keyword],
  );

  const displayed =
    showAll || isSearching ? filtered : filtered.slice(0, INITIAL_DISPLAY_LIMIT);

  const canToggleShowAll = filtered.length > INITIAL_DISPLAY_LIMIT && !isSearching;

  return (
    <>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="relative w-full sm:w-64">
          <FaMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
          <input
            type="text"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="Cari nomor, cth: Inai 05 / 42..."
            aria-label="Cari nomor rumah"
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
          />
        </div>

        <div
          role="tablist"
          aria-label="Filter status rumah"
          className="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl text-xs text-slate-600 overflow-x-auto"
        >
          {FILTERS.map((filter) => {
            const isActive = filter.value === activeFilter;
            return (
              <button
                key={filter.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter.value)}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg transition whitespace-nowrap",
                  isActive
                    ? "bg-white text-slate-900 shadow-sm font-bold"
                    : "text-slate-600 hover:text-slate-900 font-medium",
                )}
              >
                {filter.label} ({counts[filter.value]})
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-3 sm:gap-4 mt-8">
        {displayed.length === 0 ? (
          <div className="col-span-full py-12 text-center text-slate-400">
            <FaHouseChimneyCrack className="text-4xl mb-3 text-slate-300 mx-auto" />
            <p className="text-sm font-medium">
              Tidak ditemukan rumah dengan kata kunci &quot;{keyword}&quot;.
            </p>
          </div>
        ) : (
          displayed.map((house) => <HouseCard key={house.number} house={house} />)
        )}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 pt-4 border-t border-slate-100">
        <span>
          {filtered.length === 0
            ? "Ditemukan 0 rumah"
            : `Menampilkan ${displayed.length} dari total ${filtered.length} rumah (Inai 01 - Inai 140)`}
        </span>
        {canToggleShowAll && (
          <button
            type="button"
            onClick={() => setShowAll((value) => !value)}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition"
          >
            {showAll ? "Tampilkan Lebih Sedikit" : `Tampilkan Seluruh ${houses.length} Rumah`}
          </button>
        )}
      </div>
    </>
  );
}
