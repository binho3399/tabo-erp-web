import React from 'react';
import DeferredSection from '../components/common/DeferredSection';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
const ContactFAQ = React.lazy(() => import('../components/contact/ContactFAQ'));

const deferredFallback = <div className="deferred-section min-h-[320px] bg-transparent" />;

const Contact: React.FC = () => {
    return (
        <div className="font-sans text-gray-900 dark:text-white bg-[#F7F8F8] dark:bg-slate-950 transition-colors duration-500">
            {/* Hero Section */}
            <ContactHero />

            {/* Contact Layout */}
            <ContactInfo />

            {/* FAQ Section */}
            <DeferredSection fallback={deferredFallback} minHeight={420}>
                <React.Suspense fallback={deferredFallback}>
                    <ContactFAQ />
                </React.Suspense>
            </DeferredSection>
        </div>
    );
};

export default Contact;
