import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactFAQ from '../components/contact/ContactFAQ';

const Contact: React.FC = () => {
    return (
        <div className="font-sans text-gray-900 bg-[#F7F8F8]">
            {/* Hero Section */}
            <ContactHero />

            {/* Contact Layout */}
            <ContactInfo />

            {/* FAQ Section */}
            <ContactFAQ />
        </div>
    );
};

export default Contact;
