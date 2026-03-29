import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AboutHero from "@/components/about/AboutHero";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <AboutHero />
      <Footer />
    </main>
  );
}
