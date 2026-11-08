import type { House, HouseCounts, HouseFilter, HouseStatus } from "@/types";
import { padHouseNumber } from "./format";

type HouseStatusMeta = {
  label: string;
  badgeClass: string;
  dotClass: string;
  cardClass: string;
  roofColor: string;
  doorColor: string;
};

export const HOUSE_STATUS_META: Record<HouseStatus, HouseStatusMeta> = {
  terisi: {
    label: "Terisi",
    badgeClass: "bg-emerald-100 text-emerald-800",
    dotClass: "bg-emerald-500",
    cardClass:
      "bg-emerald-50/70 border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-100/60",
    roofColor: "#059669",
    doorColor: "#10b981",
  },
  dikontrakan: {
    label: "Dikontrakkan",
    badgeClass: "bg-sky-100 text-sky-800",
    dotClass: "bg-sky-500",
    cardClass:
      "bg-sky-50/70 border-sky-200 hover:border-sky-400 hover:shadow-sky-100/60",
    roofColor: "#0284c7",
    doorColor: "#38bdf8",
  },
  kosong: {
    label: "Kosong",
    badgeClass: "bg-amber-100 text-amber-800",
    dotClass: "bg-amber-500",
    cardClass:
      "bg-amber-50/60 border-amber-200 hover:border-amber-400 hover:shadow-amber-100/60",
    roofColor: "#d97706",
    doorColor: "#fbbf24",
  },
};

export function buildHouseList(
  total: number,
  emptyNumbers: readonly number[],
  forRentNumbers: readonly number[],
): House[] {
  const empty = new Set(emptyNumbers);
  const forRent = new Set(forRentNumbers);

  return Array.from({ length: total }, (_, i) => {
    const number = i + 1;
    let status: HouseStatus = "terisi";
    if (empty.has(number)) status = "kosong";
    else if (forRent.has(number)) status = "dikontrakan";

    return { label: `Inai ${padHouseNumber(number)}`, number, status };
  });
}

export function countHouses(houses: readonly House[]): HouseCounts {
  return houses.reduce<HouseCounts>(
    (acc, house) => {
      acc.all += 1;
      acc[house.status] += 1;
      return acc;
    },
    { all: 0, terisi: 0, dikontrakan: 0, kosong: 0 },
  );
}

export function filterHouses(
  houses: readonly House[],
  filter: HouseFilter,
  keyword: string,
): House[] {
  const needle = keyword.trim().toLowerCase();
  return houses.filter((house) => {
    const matchesFilter = filter === "all" || house.status === filter;
    const matchesSearch =
      needle.length === 0 ||
      house.label.toLowerCase().includes(needle) ||
      house.number.toString().includes(needle);
    return matchesFilter && matchesSearch;
  });
}
