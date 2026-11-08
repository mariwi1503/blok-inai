import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { formatRupiah } from "@/lib/format";
import { cn } from "@/lib/cn";
import type { Transaction } from "@/types";

type TransactionTableProps = {
  transactions: Transaction[];
};

export function TransactionTable({ transactions }: TransactionTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50/80 text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-100">
            <th className="py-3.5 px-6">Tanggal</th>
            <th className="py-3.5 px-6">Keterangan / Deskripsi</th>
            <th className="py-3.5 px-6">Kategori</th>
            <th className="py-3.5 px-6">Jenis</th>
            <th className="py-3.5 px-6 text-right">Nominal</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-sm">
          {transactions.map((item) => {
            const isMasuk = item.type === "masuk";
            return (
              <tr key={`${item.date}-${item.description}`} className="hover:bg-slate-50/70 transition">
                <td className="py-4 px-6 text-xs text-slate-500 font-medium whitespace-nowrap">
                  {item.date}
                </td>
                <td className="py-4 px-6 font-semibold text-slate-800 text-xs sm:text-sm">
                  {item.description}
                </td>
                <td className="py-4 px-6">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-600 whitespace-nowrap">
                    {item.category}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span
                    className={cn(
                      "inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-bold",
                      isMasuk ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800",
                    )}
                  >
                    {isMasuk ? (
                      <FaArrowDown className="text-[10px]" />
                    ) : (
                      <FaArrowUp className="text-[10px]" />
                    )}
                    <span>{isMasuk ? "Pemasukan" : "Pengeluaran"}</span>
                  </span>
                </td>
                <td
                  className={cn(
                    "py-4 px-6 text-right font-bold text-xs sm:text-sm whitespace-nowrap",
                    isMasuk ? "text-emerald-600" : "text-rose-600",
                  )}
                >
                  {isMasuk ? "+ " : "- "}
                  {formatRupiah(item.amount)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
