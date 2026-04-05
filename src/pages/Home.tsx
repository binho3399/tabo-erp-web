import React, { Suspense, lazy } from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import StripBanner from '../components/home/StripBanner';
import DeferredSection from '../components/common/DeferredSection';
import ErrorBoundary from '../components/common/ErrorBoundary';
import {
    ContentGridSkeleton,
    FAQSkeleton,
    PricingTableSkeleton,
} from '../components/common/SkeletonLayouts';

// Lazy loaded components for better initial performance
const SolutionsSection = lazy(() => import('../components/home/SolutionsSection'));
const StrategySection = lazy(() => import('../components/home/StrategySection'));
const PricingSection = lazy(() => import('../components/pricing/PricingSection'));
const TestimonialsSection = lazy(() => import('../components/home/TestimonialsSection'));
const VisionSection = lazy(() => import('../components/home/VisionSection'));

const solutionsFallback = <ContentGridSkeleton variant="split" />;
const visionFallback = <ContentGridSkeleton variant="cards" />;
const strategyFallback = <ContentGridSkeleton variant="cards" />;
const pricingFallback = <PricingTableSkeleton withHeader={false} compact />;
const testimonialsFallback = <FAQSkeleton rows={3} centered />;

const Home: React.FC = () => {
    return (
        <div className="font-sans text-gray-900 dark:text-white bg-[#F7F8F8] dark:bg-slate-950">
            <HeroSection />
            <FeaturesSection />
            <StripBanner />
            <ErrorBoundary>
                <div className="flex flex-col gap-0">
                    <DeferredSection fallback={solutionsFallback} minHeight={920}>
                        <Suspense fallback={solutionsFallback}>
                            <SolutionsSection />
                        </Suspense>
                    </DeferredSection>
                    <DeferredSection fallback={visionFallback} minHeight={720}>
                        <Suspense fallback={visionFallback}>
                            <VisionSection />
                        </Suspense>
                    </DeferredSection>
                    <DeferredSection fallback={strategyFallback} minHeight={760}>
                        <Suspense fallback={strategyFallback}>
                            <StrategySection />
                        </Suspense>
                    </DeferredSection>
                    <DeferredSection fallback={pricingFallback} minHeight={980}>
                        <Suspense fallback={pricingFallback}>
                            <PricingSection />
                        </Suspense>
                    </DeferredSection>
                    <DeferredSection fallback={testimonialsFallback} minHeight={520}>
                        <Suspense fallback={testimonialsFallback}>
                            <TestimonialsSection />
                        </Suspense>
                    </DeferredSection>
                </div>
            </ErrorBoundary>
        </div>
    );
};

export default Home;
