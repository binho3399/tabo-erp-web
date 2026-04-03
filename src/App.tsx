import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from '@/components/layout/Layout';
import ScrollToTop from '@/components/layout/ScrollToTop';
import RouteDocumentMeta from '@/components/seo/RouteDocumentMeta';
import { siteRoutes, type SiteRoute } from '@/config/site';

const routes: SiteRoute[] = siteRoutes.map((route) => ({
    ...route,
    Component: lazy(route.load),
}));

const routeFallback = (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500 animate-pulse"></span>
            Đang tải nội dung...
        </div>
    </div>
);

const App: React.FC = () => {
    return (
        <Router>
            <ScrollToTop />
            <RouteDocumentMeta />
            <Layout>
                <Suspense fallback={routeFallback}>
                    <Routes>
                        {routes.map(({ path, Component }) => (
                            <Route key={path} path={path} element={<Component />} />
                        ))}
                    </Routes>
                </Suspense>
            </Layout>
        </Router>
    );
};

export default App;
