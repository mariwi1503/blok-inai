import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HOUSE_LEGEND, HOUSES, HUNIAN_SECTION } from "@/data/houses";
import { HouseDirectory } from "@/features/hunian/HouseDirectory";
import { cn } from "@/lib/cn";
import type { HouseCounts } from "@/types";

type HunianProps = {
  counts: HouseCounts;
};

export function Hunian({ counts }: HunianProps) {
  return (
    <section id="hunian" className="py-20 bg-white">
      <Container>
        <SectionHeading
          eyebrow={HUNIAN_SECTION.eyebrow}
          title={HUNIAN_SECTION.title}
          description={HUNIAN_SECTION.description}
          align="left"
          className="mb-8"
        />

        <HouseDirectory houses={HOUSES} counts={counts} />

        <div className="mt-8 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-slate-600">
            <span className="font-bold text-slate-700">Keterangan Status:</span>
            {HOUSE_LEGEND.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-1.5">
                <span className={cn("w-2.5 h-2.5 rounded-full", item.dot)} />{" "}
                <strong>{item.label}:</strong> {item.description}
              </span>
            ))}
          </div>
          <p className="text-slate-500">{HUNIAN_SECTION.note}</p>
        </div>
      </Container>
    </section>
  );
}
