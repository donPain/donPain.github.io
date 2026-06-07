import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Expertise } from "@/components/expertise";
import { Stack } from "@/components/stack";
import { Experience } from "@/components/experience";
import { Research } from "@/components/research";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Expertise />
        <Stack />
        <Experience />
        <Research />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
