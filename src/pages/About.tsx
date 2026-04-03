import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutMission from '@/components/about/AboutMission';
import DeferredSection from '@/components/common/DeferredSection';

const AboutGrid = React.lazy(() => import('@/components/about/AboutGrid'));
const AboutBottomCTA = React.lazy(() => import('@/components/about/AboutBottomCTA'));
const AboutFAQ = React.lazy(() => import('@/components/about/AboutFAQ'));

const deferredFallback = <div className="deferred-section min-h-[320px] bg-transparent" />;

const About: React.FC = () => {
    return (
        <div className="font-sans text-gray-900 dark:text-white bg-[#F7F8F8] dark:bg-slate-950 transition-colors duration-500 overflow-x-hidden">
            {/* 1. Hero Section */}
            <AboutHero />

            {/* 2. Mission / Introduction */}
            <AboutMission />

            {/* 3. Detailed Solutions & Grid Content */}
            <DeferredSection fallback={deferredFallback} minHeight={520}>
                <React.Suspense fallback={deferredFallback}>
                    <AboutGrid />
                </React.Suspense>
            </DeferredSection>

            {/* 4. Bottom CTA Section */}
            <DeferredSection fallback={deferredFallback} minHeight={420}>
                <React.Suspense fallback={deferredFallback}>
                    <AboutBottomCTA />
                </React.Suspense>
            </DeferredSection>

            {/* 5. FAQ Section */}
            <DeferredSection fallback={deferredFallback} minHeight={420}>
                <React.Suspense fallback={deferredFallback}>
                    <AboutFAQ />
                </React.Suspense>
            </DeferredSection>
        </div>
    );
};

export default About;
