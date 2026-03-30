import React from 'react';
import PricingHero from '@/components/pricing/PricingHero';
import PricingSection from '@/components/pricing/PricingSection';
import PricingFeatures from '@/components/pricing/PricingFeatures';
import PricingFAQ from '@/components/pricing/PricingFAQ';

const Pricing: React.FC = () => {
    return (
        <div className="bg-[#F7F8F8] dark:bg-slate-950 transition-colors duration-500">
            {/* 1. Hero Section */}
            <PricingHero />

            {/* 2. Pricing Table Section */}
            <PricingSection hideHeader />

            {/* 3. Detailed Features Accordion */}
            <PricingFeatures />

            {/* 4. FAQ Section */}
            <PricingFAQ />
        </div>
    );
};

export default Pricing;
