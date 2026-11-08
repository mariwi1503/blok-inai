import { FaTreeCity, FaWhatsapp } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { FOOTER_LINKS, SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12 text-slate-600 text-sm">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                <FaTreeCity />
              </div>
              <div>
                <span className="text-xl font-bold text-slate-900 tracking-tight">{SITE.name}</span>
                <span className="block text-xs font-semibold text-emerald-600">{SITE.rtRw}</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
              {SITE.footerTagline}
            </p>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Navigasi Singkat
            </h5>
            <ul className="space-y-2 text-xs">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-emerald-600 transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Sekretariat RT
            </h5>
            <p className="text-xs text-slate-500 leading-relaxed">
              {SITE.secretariat.place}
              <br />
              {SITE.secretariat.address}
              <br />
              {SITE.secretariat.hours}
            </p>
            <div className="mt-4 flex space-x-2">
              <span className="inline-flex items-center text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                <FaWhatsapp className="mr-1 text-emerald-600" /> Grup WhatsApp Warga Aktif
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>{SITE.copyright}</p>
          <div className="flex items-center space-x-4">
            <span>{SITE.motto}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
