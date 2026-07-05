import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import CursorGlow from "@/components/CursorGlow";
import Petals from "@/components/Petals";
import MusicToggle from "@/components/MusicToggle";
import BackToTop from "@/components/BackToTop";
import Hero from "@/components/Hero";
import QuranVerse from "@/components/QuranVerse";
import Timeline from "@/components/Timeline";
import Countdown from "@/components/Countdown";
import Blessings from "@/components/Blessings";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <CursorGlow />
      <Petals />
      <MusicToggle />
      <BackToTop />

      <main>
        <Hero />
        <QuranVerse />
        <Timeline />
        <Countdown />
        <Blessings />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
