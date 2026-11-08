import {
  FaArrowTrendUp,
  FaArrowUpRightFromSquare,
  FaCircleCheck,
  FaReceipt,
  FaWallet,
} from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { KAS_SUMMARY, KEUANGAN_SECTION, RECENT_TRANSACTIONS } from "@/data/keuangan";
import { SITE } from "@/data/site";
import { DownloadSummaryButton } from "@/features/keuangan/DownloadSummaryButton";
import { LastUpdated } from "@/features/keuangan/LastUpdated";
import { TransactionTable } from "@/features/keuangan/TransactionTable";
import { formatRupiah } from "@/lib/format";

export function Keuangan() {
  return (
    <section id="keuangan" className="py-20 bg-slate-50 relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow={KEUANGAN_SECTION.eyebrow}
            title={KEUANGAN_SECTION.title}
            description={KEUANGAN_SECTION.description}
            align="left"
          />
          <LastUpdated />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-6 text-white shadow-xl shadow-emerald-700/10 relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xl" />
            <div className="flex items-center justify-between mb-4">
              <span className="text-emerald-100 text-xs font-semibold uppercase tracking-wider">
                Total Kas Aktif
              </span>
              <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <FaWallet className="text-sm" />
              </div>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight">
              {formatRupiah(KAS_SUMMARY.balance)}
            </h3>
            <p className="text-xs text-emerald-100/90 mt-3 flex items-center">
              <FaCircleCheck className="text-emerald-300 mr-1.5 text-xs" /> Telah diverifikasi oleh
              Bendahara &amp; Ketua RT
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                Pemasukan (Bulan Ini)
              </span>
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <FaArrowTrendUp className="text-sm" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">
              {formatRupiah(KAS_SUMMARY.incomeThisMonth)}
            </h3>
            <p className="text-xs text-emerald-600 mt-3 font-semibold flex items-center">
              <FaArrowTrendUp className="mr-1" /> {KAS_SUMMARY.incomeNote}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                Pengeluaran (Bulan Ini)
              </span>
              <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
                <FaArrowUpRightFromSquare className="text-sm" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">
              {formatRupiah(KAS_SUMMARY.expenseThisMonth)}
            </h3>
            <p className="text-xs text-rose-500 mt-3 font-semibold flex items-center">
              <FaReceipt className="mr-1" /> {KAS_SUMMARY.expenseNote}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-slate-800 text-base">
                {RECENT_TRANSACTIONS.length} Mutasi Transaksi Terakhir
              </h4>
              <p className="text-xs text-slate-400">Pencatatan kas masuk dan kas keluar terupdate</p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600">
              RT:{SITE.rt} RW:{SITE.rw}
            </span>
          </div>

          <TransactionTable transactions={RECENT_TRANSACTIONS} />

          <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
            <span>Butuh salinan rekapan PDF bulanan? Silakan kontak sekretaris RT.</span>
            <DownloadSummaryButton />
          </div>
        </div>
      </Container>
    </section>
  );
}
