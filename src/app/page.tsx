import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import ImageGridSection from '@/components/ImageGridSection';
import ExpereienceSection from '@/components/ExpereienceSection';
import CurateExperienceSection from '@/components/CurateExperienceSection';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <ImageGridSection />
      <ExpereienceSection />
      <CurateExperienceSection />
      <MapSection />
      <Footer />
    </div>
  );
}
