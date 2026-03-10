import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import StripBanner from '../components/home/StripBanner';
import StrategySection from '../components/home/StrategySection';
import VisionSection from '../components/home/VisionSection';
import SolutionsSection from '../components/home/SolutionsSection';
import PricingSection from '../components/home/PricingSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

const Home: React.FC = () => {
    return (
        <div className="font-sans text-gray-900 bg-[#F7F8F8]">
            <HeroSection />
            <FeaturesSection />
            <StripBanner />
            <StrategySection />
            <VisionSection />
            <SolutionsSection />
            <PricingSection />
            <TestimonialsSection />
            <CTASection />
        </div>
    );
};

export default Home;
