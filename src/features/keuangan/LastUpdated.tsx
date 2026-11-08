"use client";

import { useSyncExternalStore } from "react";
import { FaRegClock } from "react-icons/fa6";
import { formatDateId } from "@/lib/format";

const subscribe = () => () => {};
const getClientSnapshot = () => formatDateId(new Date());
const getServerSnapshot = () => null;

/**
 * Shows today's date on the client. Rendering the date on the server would
 * bake a build-time value into the static shell under Cache Components, so
 * the server snapshot is empty and the client fills it in after hydration.
 */
export function LastUpdated() {
  const dateStr = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  return (
    <div className="mt-4 md:mt-0 flex items-center space-x-2 text-xs font-medium text-slate-500 bg-white px-3.5 py-2 rounded-xl border border-slate-200">
      <FaRegClock className="text-emerald-600" />
      <span>
        Terakhir diperbarui: <span>{dateStr ?? "…"}</span>
      </span>
    </div>
  );
}
