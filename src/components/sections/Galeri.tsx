import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GALERI_SECTION, GALLERY } from "@/data/gallery";
import { GalleryGrid } from "@/features/galeri/GalleryGrid";

export function Galeri() {
  return (
    <section id="galeri" className="py-20 bg-slate-50">
      <Container>
        <SectionHeading
          eyebrow={GALERI_SECTION.eyebrow}
          title={GALERI_SECTION.title}
          description={GALERI_SECTION.description}
          className="max-w-2xl mx-auto mb-16"
        />
        <GalleryGrid items={GALLERY} />
      </Container>
    </section>
  );
}
