import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AboutHero from "@/components/about/AboutHero";
import About from "@/components/home/about/About";
import Brands from "@/components/home/brands/Brands";
import Leadership from "@/components/home/leadership/Leadership";
import Gallery from "@/components/home/gallery/Gallery";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <AboutHero />
      <About />
      <Brands />
      <Leadership />
      <Gallery/>
      <Footer />
    </main>
  );
}
