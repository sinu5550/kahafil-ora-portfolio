import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/home/hero/Hero";
import About from "@/components/home/about/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
