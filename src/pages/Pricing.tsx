import React from 'react';
import DeferredSection from '@/components/common/DeferredSection';
import PricingHero from '@/components/pricing/PricingHero';
const PricingFeatures = React.lazy(() => import('@/components/pricing/PricingFeatures'));
const PricingFAQ = React.lazy(() => import('@/components/pricing/PricingFAQ'));

const PricingSection = React.lazy(() => import('@/components/pricing/PricingSection'));
const deferredFallback = <div className="deferred-section min-h-[320px] bg-transparent" />;

const Pricing: React.FC = () => {
    return (
        <div className="bg-[#F7F8F8] dark:bg-slate-950 transition-colors duration-500">
            {/* 1. Hero Section */}
            <PricingHero />

            {/* 2. Pricing Table Section */}
            <React.Suspense fallback={<div className="h-40 flex items-center justify-center"><div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>}>
                <PricingSection hideHeader />
            </React.Suspense>

            {/* 3. Detailed Features Accordion */}
            <DeferredSection fallback={deferredFallback} minHeight={720}>
                <React.Suspense fallback={deferredFallback}>
                    <PricingFeatures />
                </React.Suspense>
            </DeferredSection>

            {/* 4. FAQ Section */}
            <DeferredSection fallback={deferredFallback} minHeight={420}>
                <React.Suspense fallback={deferredFallback}>
                    <PricingFAQ />
                </React.Suspense>
            </DeferredSection>
        </div>
    );
};

export default Pricing;
