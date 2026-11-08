import { FaFileArrowDown, FaFileLines, FaMoon } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  EMERGENCY_CONTACTS,
  EMERGENCY_SECTION,
  LAYANAN_SECTION,
  RONDA,
  RONDA_SHIFTS,
  SURAT_PROCEDURE,
} from "@/data/layanan";
import { LetterTemplateList } from "@/features/surat/LetterTemplateList";
import { cn } from "@/lib/cn";
import type { EmergencyContact } from "@/types";

function EmergencyCard({ contact }: { contact: EmergencyContact }) {
  const Icon = contact.icon;
  const content = (
    <>
      <div className="flex items-center space-x-3.5">
        <div
          className={cn(
            "w-10 h-10 rounded-xl text-white flex items-center justify-center font-bold",
            contact.tone.icon,
          )}
        >
          <Icon />
        </div>
        <div>
          <p className={cn("text-xs font-bold uppercase tracking-wider", contact.tone.label)}>
            {contact.label}
          </p>
          <h5 className="text-sm font-bold text-slate-800">{contact.title}</h5>
        </div>
      </div>
      <span className={contact.tone.value}>{contact.value}</span>
    </>
  );

  const className = cn(
    "flex items-center justify-between p-4 rounded-2xl border transition",
    contact.tone.card,
  );

  return contact.tel ? (
    <a href={`tel:${contact.tel}`} className={className}>
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}

export function Layanan() {
  return (
    <section id="layanan" className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-8">
            <SectionHeading
              eyebrow={LAYANAN_SECTION.eyebrow}
              title={LAYANAN_SECTION.title}
              description={LAYANAN_SECTION.description}
              align="left"
              titleSize="md"
            />

            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-4 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-lg">
                    <FaMoon />
                  </div>
                  <div>
                    <h4 className="font-bold text-base">{RONDA.title}</h4>
                    <p className="text-xs text-slate-400">{RONDA.shiftLabel}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-full">
                  {RONDA.post}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                {RONDA_SHIFTS.map((shift) => (
                  <div key={shift.days} className="p-3 bg-white/5 rounded-2xl border border-white/10">
                    <span className="text-[11px] text-slate-400 uppercase font-semibold">{shift.days}</span>
                    <p className="text-sm font-bold text-white mt-1">{shift.houses}</p>
                    <p className="text-[10px] text-emerald-400">Koord: {shift.coordinator}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-7">
              <h4 className="font-bold text-slate-800 text-base mb-3 flex items-center space-x-2">
                <FaFileLines className="text-teal-600" />
                <span>{SURAT_PROCEDURE.title}</span>
              </h4>
              <ol className="space-y-2 text-xs sm:text-sm text-slate-600 list-decimal list-inside leading-relaxed">
                {SURAT_PROCEDURE.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>

              <div className="mt-6 pt-5 border-t border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-800 flex items-center">
                      <FaFileArrowDown className="text-emerald-600 mr-2" />
                      {SURAT_PROCEDURE.downloadTitle}
                    </h5>
                    <p className="text-[11px] text-slate-500">{SURAT_PROCEDURE.downloadDescription}</p>
                  </div>
                  <span className="hidden sm:inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    {SURAT_PROCEDURE.badge}
                  </span>
                </div>

                <LetterTemplateList />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
                {EMERGENCY_SECTION.eyebrow}
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-3">{EMERGENCY_SECTION.title}</h3>
              <p className="text-slate-500 text-xs mt-1">{EMERGENCY_SECTION.description}</p>
            </div>

            <div className="space-y-3">
              {EMERGENCY_CONTACTS.map((contact) => (
                <EmergencyCard key={contact.title} contact={contact} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
