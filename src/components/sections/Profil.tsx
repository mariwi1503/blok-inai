import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PILLARS, PROFIL } from "@/data/profil";
import { cn } from "@/lib/cn";

export function Profil() {
  return (
    <section id="profil" className="py-20 bg-white relative">
      <Container>
        <SectionHeading
          eyebrow={PROFIL.eyebrow}
          title={PROFIL.title}
          description={PROFIL.description}
          descriptionClassName="text-slate-600 text-base mt-4 leading-relaxed"
          className="max-w-3xl mx-auto mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/50 transition group"
              >
                <div
                  className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition duration-300",
                    pillar.tone.idle,
                    pillar.tone.hover,
                  )}
                >
                  <Icon />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{pillar.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
