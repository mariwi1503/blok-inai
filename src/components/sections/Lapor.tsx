import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LAPOR_SECTION } from "@/data/lapor";
import { CitizenForm } from "@/features/lapor/CitizenForm";

export function Lapor() {
  return (
    <section
      id="lapor"
      className="py-20 bg-gradient-to-tr from-slate-900 via-slate-800 to-emerald-950 text-white relative"
    >
      <Container size="narrow" className="relative z-10">
        <SectionHeading
          eyebrow={LAPOR_SECTION.eyebrow}
          title={LAPOR_SECTION.title}
          description={LAPOR_SECTION.description}
          variant="dark"
          className="mb-10"
        />

        <div className="bg-white/10 backdrop-blur-xl border border-white/15 p-6 sm:p-10 rounded-3xl shadow-2xl">
          <CitizenForm />
        </div>
      </Container>
    </section>
  );
}
