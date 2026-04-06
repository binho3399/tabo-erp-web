import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from '@/components/layout/Layout';
import { RouteSkeleton } from '@/components/common/SkeletonLayouts';
import ScrollToTop from '@/components/layout/ScrollToTop';
import RouteDocumentMeta from '@/components/seo/RouteDocumentMeta';
import { siteRoutes, type SiteRoute } from '@/config/site';

const routes: SiteRoute[] = siteRoutes.map((route) => ({
    ...route,
    Component: lazy(route.load),
}));

const routeFallback = (
    <Layout loadingState="route">
        <RouteSkeleton />
    </Layout>
);

const App: React.FC = () => {
    return (
        <Router>
            <ScrollToTop />
            <RouteDocumentMeta />
            <Suspense fallback={routeFallback}>
                <Layout>
                    <Routes>
                        {routes.map(({ path, Component }) => (
                            <Route key={path} path={path} element={<Component />} />
                        ))}
                    </Routes>
                </Layout>
            </Suspense>
        </Router>
    );
};

export default App;
