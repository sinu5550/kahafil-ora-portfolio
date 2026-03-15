import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/home/hero/Hero";
import About from "@/components/home/about/About";
import Brands from "@/components/home/brands/Brands";
import Leadership from "@/components/home/leadership/Leadership";
import Solutions from "@/components/home/solutions/Solutions";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Brands />
      <Leadership />
      <Solutions />
    </main>
  );
}
