import { Galeri } from "@/components/sections/Galeri";
import { Hero } from "@/components/sections/Hero";
import { Hunian } from "@/components/sections/Hunian";
import { Keuangan } from "@/components/sections/Keuangan";
import { Lapor } from "@/components/sections/Lapor";
import { Layanan } from "@/components/sections/Layanan";
import { Pengurus } from "@/components/sections/Pengurus";
import { Profil } from "@/components/sections/Profil";
import { HOUSES } from "@/data/houses";
import { countHouses } from "@/lib/houses";

export default function HomePage() {
  const houseCounts = countHouses(HOUSES);

  return (
    <>
      <Hero counts={houseCounts} />
      <main>
        <Profil />
        <Pengurus />
        <Keuangan />
        <Hunian counts={houseCounts} />
        <Galeri />
        <Layanan />
        <Lapor />
      </main>
    </>
  );
}
