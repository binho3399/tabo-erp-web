import React from 'react';
import PricingHero from '@/components/pricing/PricingHero';
import PricingFeatures from '@/components/pricing/PricingFeatures';
import PricingFAQ from '@/components/pricing/PricingFAQ';

const PricingSection = React.lazy(() => import('@/components/pricing/PricingSection'));

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
            <PricingFeatures />

            {/* 4. FAQ Section */}
            <PricingFAQ />
        </div>
    );
};

export default Pricing;
