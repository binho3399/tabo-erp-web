import React, { Suspense, lazy } from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import StripBanner from '../components/home/StripBanner';
import ErrorBoundary from '../components/common/ErrorBoundary';

// Lazy loaded components for better initial performance
const SolutionsSection = lazy(() => import('../components/home/SolutionsSection'));
const StrategySection = lazy(() => import('../components/home/StrategySection'));
const PricingSection = lazy(() => import('../components/pricing/PricingSection'));
const TestimonialsSection = lazy(() => import('../components/home/TestimonialsSection'));
const VisionSection = lazy(() => import('../components/home/VisionSection'));

// Enhanced loading placeholder with better aesthetic
const SectionLoader = () => (
    <div className="py-24 flex flex-col items-center justify-center min-h-[400px] bg-slate-50/50 dark:bg-slate-950/50 backdrop-blur-sm transition-all duration-700">
        <div className="relative w-16 h-16 mb-6">
            <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-4 bg-blue-500/10 rounded-full animate-pulse"></div>
        </div>
        <p className="text-slate-400 dark:text-slate-500 text-sm font-medium animate-pulse">Đang tải nội dung...</p>
    </div>
);

const Home: React.FC = () => {
    return (
        <div className="font-sans text-gray-900 dark:text-white bg-[#F7F8F8] dark:bg-slate-950">
            <HeroSection />
            <FeaturesSection />
            <StripBanner />
            <ErrorBoundary>
                <Suspense fallback={<SectionLoader />}>
                    <div className="flex flex-col gap-0">
                        <SolutionsSection />
                        <VisionSection />
                        <StrategySection />
                        <PricingSection />
                        <TestimonialsSection />
                    </div>
                </Suspense>
            </ErrorBoundary>
        </div>
    );
};

export default Home;
