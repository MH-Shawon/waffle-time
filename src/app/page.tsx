import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurMenu from "@/components/Menu/OurMenu";
import PopularItems from "@/components/PopularItems";

export default function Home() {
  return (
    <main className=" bg-[#FFFFFF]">
      <Navbar />
      <Hero />

      <PopularItems />

      <OurMenu />
    </main>
  );
}
