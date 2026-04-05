import React from 'react';
import DeferredSection from '@/components/common/DeferredSection';
import { FAQSkeleton, PricingTableSkeleton } from '@/components/common/SkeletonLayouts';
import PricingHero from '@/components/pricing/PricingHero';
const PricingFeatures = React.lazy(() => import('@/components/pricing/PricingFeatures'));
const PricingFAQ = React.lazy(() => import('@/components/pricing/PricingFAQ'));

const PricingSection = React.lazy(() => import('@/components/pricing/PricingSection'));
const pricingTableFallback = <PricingTableSkeleton withHeader={false} compact={false} />;
const pricingFeaturesFallback = <PricingTableSkeleton withHeader={false} compact />;
const pricingFaqFallback = <FAQSkeleton rows={5} centered={false} />;

const Pricing: React.FC = () => {
    return (
        <div className="bg-[#F7F8F8] dark:bg-slate-950 transition-colors duration-500">
            {/* 1. Hero Section */}
            <PricingHero />

            {/* 2. Pricing Table Section */}
            <React.Suspense fallback={pricingTableFallback}>
                <PricingSection hideHeader />
            </React.Suspense>

            {/* 3. Detailed Features Accordion */}
            <DeferredSection fallback={pricingFeaturesFallback} minHeight={900}>
                <React.Suspense fallback={pricingFeaturesFallback}>
                    <PricingFeatures />
                </React.Suspense>
            </DeferredSection>

            {/* 4. FAQ Section */}
            <DeferredSection fallback={pricingFaqFallback} minHeight={680}>
                <React.Suspense fallback={pricingFaqFallback}>
                    <PricingFAQ />
                </React.Suspense>
            </DeferredSection>
        </div>
    );
};

export default Pricing;
