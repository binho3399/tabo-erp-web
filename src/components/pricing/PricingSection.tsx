import React from 'react';
import { Icon, Button, Badge } from '@/components/ui';
import { PRICING_PLANS, COMPARISON_FEATURES } from '@/constants/landing';
import type { PricingPlan } from '@/types/landing';

interface PricingSectionProps {
    hideHeader?: boolean;
}

const PricingSection: React.FC<PricingSectionProps> = ({ hideHeader = false }) => {
    const plans = PRICING_PLANS;
    const comparisonFeatures = COMPARISON_FEATURES;

    return (
        <section className="pt-0 pb-16 lg:pb-24 bg-white dark:bg-slate-950 transition-colors duration-500 relative overflow-clip">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {!hideHeader && (
                    <div className="text-left lg:text-center mb-16">
                        <Badge variant="primary" className="mb-4 md:mb-5 uppercase">BẢNG GIÁ MINH BẠCH</Badge>
                        <h3 className="text-[28px] md:text-[42px] font-normal text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-4 md:mb-5 transition-colors">
                            Đầu tư thông minh cho <br /><span className="text-blue-500 dark:text-blue-400">tương lai doanh nghiệp.</span>
                        </h3>
                    </div>
                )}

                {/* Main Grid Layout */}
                <div className="relative">
                    {/* Header Row with Plan Cards */}
                    <div className="md:sticky md:top-[72px] z-40 md:bg-white/95 dark:md:bg-slate-950/95 md:backdrop-blur-md pt-0 pb-6 grid grid-cols-1 md:grid-cols-[22%_1fr_1fr] gap-6 lg:gap-8 mb-2 border-b border-transparent transition-colors">
                        {/* Title corner */}
                        <div className="hidden md:flex flex-col justify-end pb-8">
                            <h4 className="text-[16px] font-semibold text-slate-900 dark:text-slate-100 tracking-tight">Nhóm tính năng</h4>
                        </div>

                        {plans.map((plan: PricingPlan, idx: number) => (
                            <div
                                key={idx}
                                className={`rounded-[20px] p-6 flex flex-col relative transition-all duration-500 hover:-translate-y-1 ${plan.highlight
                                        ? 'bg-[#0F172A] text-white shadow-[0_20px_50px_-15px_rgba(37,99,235,0.4)] dark:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.2)]'
                                        : 'bg-white dark:bg-slate-900 shadow-md hover:shadow-xl text-slate-900 dark:text-white border border-transparent dark:border-slate-800'
                                    }`}
                            >
                                {plan.highlight && (
                                    <>
                                        {/* Creative Background Effects Wrapper */}
                                        <div className="absolute inset-0 rounded-[20px] overflow-hidden pointer-events-none">
                                            {/* Base dark gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-[#020617]"></div>
                                            
                                            {/* Animated Glowing Orbs */}
                                            <div className="absolute -top-[24%] -right-[8%] h-[58%] w-[58%] rounded-full bg-blue-600/18 blur-[56px]"></div>
                                            <div className="absolute bottom-[12%] -left-[18%] h-[44%] w-[44%] rounded-full bg-indigo-600/14 blur-[56px]"></div>
                                            
                                            {/* Premium Grid Pattern - using CSS gradient for reliable rendering */}
                                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)] opacity-65"></div>
                                            
                                            {/* Glassmorphism Border Reflections */}
                                            <div className="absolute inset-0 rounded-[20px] border border-white/10"></div>
                                            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"></div>
                                        </div>

                                        {/* Magic Border Badge */}
                                        <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 z-30 group">
                                            <div className="relative flex items-center justify-center rounded-full p-[1.5px] overflow-hidden shadow-[0_0_16px_rgba(37,99,235,0.45)]">
                                                {/* Badge Content */}
                                                <span className="relative z-10 bg-blue-600 text-white text-[10px] font-bold px-5 py-[5.5px] rounded-full uppercase tracking-widest">
                                                    Đề xuất
                                                </span>
                                            </div>
                                        </div>
                                    </>
                                )}

                                <div className="relative z-10 h-full flex flex-col justify-between gap-8">
                                    <div className="flex justify-between items-center gap-4">
                                        <div className="flex-1">
                                            <h5 className="text-[20px] lg:text-[28px] font-normal tracking-tight">
                                                {plan.name}
                                            </h5>
                                            <p className={`text-[12px] font-normal leading-relaxed ${plan.highlight ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}>
                                                {plan.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-col items-end">
                                            <div className="flex items-baseline gap-1">
                                                <span className={`text-4xl lg:text-5xl font-normal tracking-tighter ${plan.highlight ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                                                    {plan.price}
                                                </span>
                                                <span className={`text-sm font-normal ${plan.highlight ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}>
                                                    {plan.period}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <Button
                                            to="/contact"
                                            variant={plan.variant || (plan.highlight ? 'primary' : 'outline')}
                                            fullWidth
                                            size="md"
                                            className={plan.highlight ? 'shadow-blue-500/20 shadow-lg' : 'dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800'}
                                        >
                                            {plan.cta}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Comparison Table Part */}
                    <div className="hidden md:block">
                        {comparisonFeatures.map((feature, fIdx) => (
                            <div
                                key={fIdx}
                                className={`grid grid-cols-[22%_1fr_1fr] gap-8 py-6 border-b border-slate-100/60 dark:border-slate-800/60 items-center transition-colors hover:bg-slate-50/30 dark:hover:bg-slate-900/30 px-6 -mx-6 rounded-xl`}
                            >
                                <div className="text-[16px] text-slate-500 dark:text-slate-400 font-normal">{feature}</div>
                                {plans.map((plan, pIdx) => (
                                    <div key={pIdx} className="text-center">
                                        {typeof plan.features[fIdx] === 'string' && plan.features[fIdx] !== '-' ? (
                                            <span className={`text-[16px] font-normal ${plan.highlight ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>
                                                {plan.features[fIdx]}
                                            </span>
                                        ) : (
                                            <div className="flex justify-center">
                                                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-blue-500/10 dark:bg-blue-400/10' : 'bg-slate-100 dark:bg-slate-800'}`}>
                                                    <Icon name="check" className={`text-xs font-black ${plan.highlight ? 'text-blue-500 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}`} />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Comparison (Simple list) */}
                    <div className="md:hidden mt-8 space-y-12">
                        {/* Mobile users already see the cards at top, we don't need a heavy table here per modern design rules, but we can list plan highlights if needed */}
                    </div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-0 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50/22 blur-[72px] pointer-events-none transition-colors dark:bg-blue-600/5"></div>
        </section>
    );
};

export default PricingSection;
