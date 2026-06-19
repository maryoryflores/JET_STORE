import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Beneficios from "@/components/home/Beneficios";

export default function Home() {
  return (
      <>
        <Navbar />
        <Hero />
        <Beneficios />
        <Footer />
      </>
  );
}