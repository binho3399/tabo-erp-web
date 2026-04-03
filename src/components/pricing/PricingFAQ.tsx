import SectionContainer from '@/components/common/SectionContainer';
import SectionHeader from '@/components/common/SectionHeader';
import { Accordion } from '@/components/ui';
import { pricingFaqItems } from '@/content/faqs';

const PricingFAQ: React.FC = () => {
    return (
        <section className="py-16 lg:py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-500">
            <SectionContainer>
                <SectionHeader
                    badge="Giải đáp thắc mắc"
                    centered
                    title={<>Giải đáp <span className="text-blue-500 dark:text-blue-400">thắc mắc</span></>}
                    description="Những câu hỏi phổ biến liên quan đến biểu phí và quy trình thanh toán tại Tabo."
                />

                <Accordion 
                    items={pricingFaqItems}
                    columns={2}
                />
            </SectionContainer>
        </section>
    );
};

export default PricingFAQ;
