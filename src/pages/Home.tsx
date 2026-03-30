import React, { Suspense, lazy } from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import StripBanner from '../components/home/StripBanner';

// Lazy loaded components for better initial performance
const SolutionsSection = lazy(() => import('../components/home/SolutionsSection'));
const StrategySection = lazy(() => import('../components/home/StrategySection'));
const PricingSection = lazy(() => import('../components/pricing/PricingSection'));
const TestimonialsSection = lazy(() => import('../components/home/TestimonialsSection'));
const VisionSection = lazy(() => import('../components/home/VisionSection'));

// Simple loading placeholder
const SectionLoader = () => (
    <div className="py-20 flex items-center justify-center min-h-[400px] bg-slate-50 dark:bg-slate-900/20">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const Home: React.FC = () => {
    return (
        <div className="font-sans text-gray-900 dark:text-white bg-[#F7F8F8] dark:bg-slate-950">
            <HeroSection />
            <FeaturesSection />
            <StripBanner />
            <Suspense fallback={<SectionLoader />}>
                <SolutionsSection />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <VisionSection />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <StrategySection />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <PricingSection />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <TestimonialsSection />
            </Suspense>
        </div>
    );
};

export default Home;
