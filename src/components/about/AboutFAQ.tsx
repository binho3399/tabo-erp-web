import SectionContainer from '@/components/common/SectionContainer';
import SectionHeader from '@/components/common/SectionHeader';
import { Accordion } from '@/components/ui';
import { aboutFaqItems } from '@/content/faqs';

const AboutFAQ: React.FC = () => {
    return (
        <section className="py-16 lg:py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-500">
            <SectionContainer>
                <SectionHeader
                    badge="Giải đáp thắc mắc"
                    centered
                    title={<>Câu hỏi <span className="text-blue-500 dark:text-blue-400">thường gặp</span></>}
                    description="Những câu hỏi phổ biến khi tìm hiểu giải pháp của Tabo ERP."
                />

                <Accordion 
                    items={aboutFaqItems}
                    columns={2}
                />
            </SectionContainer>
        </section>
    );
};

export default AboutFAQ;
