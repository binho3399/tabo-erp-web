import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutMission from '@/components/about/AboutMission';
import DeferredSection from '@/components/common/DeferredSection';
import { ContentGridSkeleton, FAQSkeleton } from '@/components/common/SkeletonLayouts';

const AboutGrid = React.lazy(() => import('@/components/about/AboutGrid'));
const AboutBottomCTA = React.lazy(() => import('@/components/about/AboutBottomCTA'));
const AboutFAQ = React.lazy(() => import('@/components/about/AboutFAQ'));

const aboutGridFallback = <ContentGridSkeleton variant="about-grid" />;
const aboutBottomFallback = <ContentGridSkeleton variant="cards" />;
const aboutFaqFallback = <FAQSkeleton rows={4} centered={false} />;

const About: React.FC = () => {
    return (
        <div className="font-sans text-gray-900 dark:text-white bg-[#F7F8F8] dark:bg-slate-950 transition-colors duration-500 overflow-x-hidden">
            {/* 1. Hero Section */}
            <AboutHero />

            {/* 2. Mission / Introduction */}
            <AboutMission />

            {/* 3. Detailed Solutions & Grid Content */}
            <DeferredSection fallback={aboutGridFallback} minHeight={820}>
                <React.Suspense fallback={aboutGridFallback}>
                    <AboutGrid />
                </React.Suspense>
            </DeferredSection>

            {/* 4. Bottom CTA Section */}
            <DeferredSection fallback={aboutBottomFallback} minHeight={640}>
                <React.Suspense fallback={aboutBottomFallback}>
                    <AboutBottomCTA />
                </React.Suspense>
            </DeferredSection>

            {/* 5. FAQ Section */}
            <DeferredSection fallback={aboutFaqFallback} minHeight={620}>
                <React.Suspense fallback={aboutFaqFallback}>
                    <AboutFAQ />
                </React.Suspense>
            </DeferredSection>
        </div>
    );
};

export default About;
