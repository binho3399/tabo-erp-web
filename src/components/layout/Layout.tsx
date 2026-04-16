import React from 'react';
import { useLocation } from 'react-router-dom';

import { CTASkeleton, FooterSkeleton, HeaderSkeleton } from '@/components/common/SkeletonLayouts';
import CTASection from '@/components/home/CTASection';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

interface LayoutProps {
    children: React.ReactNode;
    loadingState?: 'idle' | 'route';
}

const Layout: React.FC<LayoutProps> = ({ children, loadingState = 'idle' }) => {
    const isRouteLoading = loadingState === 'route';
    const { pathname } = useLocation();
    const shouldRenderCta = !pathname.startsWith('/blog');

    return (
        <div className="flex flex-col min-h-screen">
            {isRouteLoading ? <HeaderSkeleton /> : <Navbar />}
            <main className="flex-grow">
                {children}
            </main>
            {shouldRenderCta ? (isRouteLoading ? <CTASkeleton /> : <CTASection />) : null}
            {isRouteLoading ? <FooterSkeleton /> : <Footer />}
        </div>
    );
};

export default Layout;
