import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TeamSection from '@/components/sections/TeamSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import BlogSection from '@/components/sections/BlogSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ReviewsSection />
      <BlogSection />
    </>
  );
}
