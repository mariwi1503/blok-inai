import { FaWhatsapp } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { RemoteImage } from "@/components/ui/RemoteImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PENGURUS, PENGURUS_SECTION } from "@/data/pengurus";
import { cn } from "@/lib/cn";

export function Pengurus() {
  return (
    <section id="pengurus" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <Container>
        <SectionHeading
          eyebrow={PENGURUS_SECTION.eyebrow}
          title={PENGURUS_SECTION.title}
          description={PENGURUS_SECTION.description}
          descriptionClassName="mt-2"
          className="max-w-2xl mx-auto mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PENGURUS.map((person) => (
            <article
              key={person.name}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-60 sm:h-64 overflow-hidden relative">
                <RemoteImage
                  src={person.image}
                  fallbackSrc={person.fallbackImage}
                  alt={person.role}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span
                  className={cn(
                    "absolute top-4 left-4 text-white text-[11px] font-bold px-3 py-1 rounded-full",
                    person.badgeClass,
                  )}
                >
                  {person.role}
                </span>
              </div>
              <div className="p-5 text-center">
                <h4 className="font-bold text-slate-800 text-lg">{person.name}</h4>
                <p className="text-xs text-slate-500 mt-0.5">Kediaman: {person.house}</p>
                <p className="text-xs text-slate-600 mt-3 italic">&ldquo;{person.quote}&rdquo;</p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex justify-center space-x-3 text-slate-400">
                  <a
                    href={person.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Hubungi WA"
                    aria-label={`Hubungi ${person.name} via WhatsApp`}
                    className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
