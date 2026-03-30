import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutMission from '@/components/about/AboutMission';
import AboutGrid from '@/components/about/AboutGrid';
import AboutBottomCTA from '@/components/about/AboutBottomCTA';
import AboutFAQ from '@/components/about/AboutFAQ';

const About: React.FC = () => {
    return (
        <div className="font-sans text-gray-900 dark:text-white bg-[#F7F8F8] dark:bg-slate-950 transition-colors duration-500 overflow-x-hidden">
            {/* 1. Hero Section */}
            <AboutHero />

            {/* 2. Mission / Introduction */}
            <AboutMission />

            {/* 3. Detailed Solutions & Grid Content */}
            <AboutGrid />

            {/* 4. Bottom CTA Section */}
            <AboutBottomCTA />

            {/* 5. FAQ Section */}
            <AboutFAQ />
        </div>
    );
};

export default About;
