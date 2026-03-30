import React from 'react';
import HeroSection from './HeroSection';
import SkillsSection from './SkillsSection';
import ServicesSection from './ServicesSection';
import ProjectsSection from './ProjectsSection';
import StatsTestimonials from './StatsTestimonials';
import CTASection from './CTASection';

const HomePage = () => {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <StatsTestimonials />
      <CTASection />
    </div>
  );
};

export default HomePage;