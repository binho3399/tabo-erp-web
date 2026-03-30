import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import StripBanner from '../components/home/StripBanner';
import StrategySection from '../components/home/StrategySection';
import VisionSection from '../components/home/VisionSection';
import SolutionsSection from '../components/home/SolutionsSection';
import PricingSection from '../components/pricing/PricingSection';
import TestimonialsSection from '../components/home/TestimonialsSection';

const Home: React.FC = () => {
    return (
        <div className="font-sans text-gray-900 dark:text-white bg-[#F7F8F8] dark:bg-slate-950 transition-colors duration-500">
            <HeroSection />
            <FeaturesSection />
            <StripBanner />
            <SolutionsSection />
            <VisionSection />
            <StrategySection />
            <PricingSection />
            <TestimonialsSection />
        </div>
    );
};

export default Home;
