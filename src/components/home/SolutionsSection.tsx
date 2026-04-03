import React from 'react';
import SectionContainer from '@/components/common/SectionContainer';
import SurfaceCard from '@/components/common/SurfaceCard';
import { Icon, Button, Badge } from '@/components/ui';
import { SOLUTIONS } from '@/constants/landing';
import type { SolutionItem } from '@/types/landing';

const SolutionsSection: React.FC = () => {
    const solutions = SOLUTIONS;

    return (
        <section className="py-16 lg:py-24 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800 transition-colors duration-500 relative">
            <SectionContainer>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start lg:items-stretch">
                    {/* Left Column: Text + CTA */}
                    <div className="lg:col-span-6 lg:self-stretch">
                        <div className="flex flex-col items-start text-left pt-0 lg:pt-10 lg:sticky lg:top-28 lg:h-fit">
                            <Badge variant="primary" className="section-kicker">GIẢI PHÁP</Badge>
                            <h2 className="section-title mb-4 md:mb-5">
                                Giải quyết mọi<br /><span className="text-blue-500 dark:text-blue-400">nỗi đau</span> doanh nghiệp.
                            </h2>
                            <p className="section-description mb-0 md:mb-6">
                                Chuẩn hóa quy trình và minh bạch dữ liệu để doanh nghiệp <br className="hidden md:block" /> vận hành trơn tru, ổn định và hiệu quả lâu dài.
                            </p>
                            <div className="hidden lg:block">
                                <Button to="/contact" variant="primary" size="lg">
                                    Tư vấn giải pháp miễn phí
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Stacked Cards (keeping original UI) */}
                    <div className="lg:col-span-6 flex flex-col gap-8 lg:self-start">
                        {solutions.map((sol: SolutionItem, i: number) => (
                            <SurfaceCard key={i} className="group p-4 lg:p-6 flex flex-col h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm font-bold text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">{sol.id}</span>
                                    <div className="w-11 h-11 lg:w-10 lg:h-10 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm group-hover:bg-blue-500 dark:group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <Icon name={sol.icon} className="text-xl text-slate-600 dark:text-slate-400 group-hover:text-white dark:group-hover:text-white" />
                                    </div>
                                </div>

                                <h3 className="text-[20px] lg:text-[28px] font-normal text-slate-900 dark:text-white mb-4 tracking-tight transition-colors">{sol.title}</h3>
                                <p className="text-base text-slate-500 dark:text-slate-400 font-normal mb-4 leading-relaxed max-w-xl transition-colors">
                                    {sol.description}
                                </p>

                                <div className="mt-auto flex flex-col gap-y-4 relative">
                                    {/* Vertical connecting line */}
                                    <div className="absolute left-[10px] top-[10px] bottom-[10px] w-px border-l border-dashed border-blue-200 dark:border-blue-900/50 z-0"></div>
                                    
                                    {sol.features.map((item: string, idx: number) => (
                                        <div key={idx} className="flex items-center gap-3 relative z-10">
                                            <div className="w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0 border border-white dark:border-slate-800 shadow-sm">
                                                <Icon name="check" className="text-[10px] text-blue-500 dark:text-blue-400 font-black" />
                                            </div>
                                            <span className="text-base text-slate-700 dark:text-slate-300 font-normal transition-colors">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </SurfaceCard>
                        ))}
                    </div>

                    {/* Mobile CTA */}
                    <div className="lg:hidden w-full flex justify-center mt-8">
                        <Button to="/contact" variant="primary" size="md" fullWidth>
                            Tư vấn giải pháp miễn phí
                        </Button>
                    </div>
                </div>
            </SectionContainer>
        </section>
    );
};

export default SolutionsSection;
