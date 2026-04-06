import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/home/CTASection';
import { CTASkeleton, FooterSkeleton, HeaderSkeleton } from '@/components/common/SkeletonLayouts';

interface LayoutProps {
    children: React.ReactNode;
    loadingState?: 'idle' | 'route';
}

const Layout: React.FC<LayoutProps> = ({ children, loadingState = 'idle' }) => {
    const isRouteLoading = loadingState === 'route';

    return (
        <div className="flex flex-col min-h-screen">
            {isRouteLoading ? <HeaderSkeleton /> : <Navbar />}
            <main className="flex-grow">
                {children}
            </main>
            {isRouteLoading ? <CTASkeleton /> : <CTASection />}
            {isRouteLoading ? <FooterSkeleton /> : <Footer />}
        </div>
    );
};

export default Layout;
