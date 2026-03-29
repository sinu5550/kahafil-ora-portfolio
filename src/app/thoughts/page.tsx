import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ThoughtsHero from "@/components/thoughts/ThoughtsHero";
import ThoughtSection from "@/components/thoughts/ThoughtSection";
import { thoughtsData } from "@/data/thoughtsData";
import Gallery from "@/components/home/gallery/Gallery";

export default function ThoughtsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ThoughtsHero />
      <div className="pb-20">
        <ThoughtSection title="blogs & articles" items={thoughtsData.blogs} />
        <ThoughtSection title="public speaking & training" items={thoughtsData.speaking} />
        <ThoughtSection title="recent event activities" items={thoughtsData.events} />
        <ThoughtSection title="social activities" items={thoughtsData.social} />
      </div>
      <Gallery/>
      <Footer />
    </main>
  );
}
