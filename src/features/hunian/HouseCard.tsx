import { HOUSE_STATUS_META } from "@/lib/houses";
import { cn } from "@/lib/cn";
import type { House } from "@/types";
import { HouseIcon } from "./HouseIcon";

type HouseCardProps = {
  house: House;
};

export function HouseCard({ house }: HouseCardProps) {
  const meta = HOUSE_STATUS_META[house.status];

  return (
    <div
      className={cn(
        "house-unit p-3 rounded-2xl border flex flex-col items-center justify-between text-center relative shadow-sm hover:shadow-lg cursor-pointer",
        meta.cardClass,
      )}
    >
      <div className="relative w-14 h-12 my-1 flex items-center justify-center">
        <HouseIcon roofColor={meta.roofColor} doorColor={meta.doorColor} />
      </div>

      <div className="mt-1 mb-1.5">
        <span className="block text-xs font-black tracking-tight text-slate-800">{house.label}</span>
      </div>

      <span
        className={cn(
          "inline-flex items-center justify-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-bold w-full",
          meta.badgeClass,
        )}
      >
        <span className={cn("w-1.5 h-1.5 rounded-full", meta.dotClass)} />
        <span className="truncate">{meta.label}</span>
      </span>
    </div>
  );
}
