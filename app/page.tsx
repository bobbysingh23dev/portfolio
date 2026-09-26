import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SelectedWork } from "./components/SelectedWork";
import { TechMatrix } from "./components/TechMatrix";
import { FooterCTA } from "./components/FooterCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex w-full flex-col">
        <Hero />
        <SelectedWork />
        <TechMatrix />
        <FooterCTA />
      </main>
    </>
  );
}
