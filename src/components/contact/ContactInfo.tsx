import React from 'react';
import SectionContainer from '@/components/common/SectionContainer';
import SectionHeader from '@/components/common/SectionHeader';
import SurfaceCard from '@/components/common/SurfaceCard';
import { Icon, Button } from '@/components/ui';
import LazyMapEmbed from '@/components/contact/LazyMapEmbed';
import { contactCards, siteMetadata } from '@/config/site';

const ContactInfo: React.FC = () => {
    return (
        <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
            <SectionContainer className="relative z-10">
                <div className="flex flex-col gap-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        {/* Col 1: Header + Trụ sở chính */}
                        <div className="flex flex-col w-full gap-5 h-full">
                            <div className="flex-1">
                                <SectionHeader
                                    className="mb-0"
                                    title={<>Thông tin <span className="text-blue-500 dark:text-blue-400">liên hệ</span></>}
                                    description={<>Kết nối với chúng tôi qua các kênh dưới đây <br className="hidden md:block" /> để nhận được sự hỗ trợ nhanh nhất.</>}
                                />
                            </div>

                            {/* Trụ sở chính Card */}
                            <SurfaceCard className="group flex flex-col w-full gap-4 lg:gap-8 p-4 lg:p-6">
                                <div className="w-11 h-11 lg:w-14 lg:h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                                    <Icon name="location_on" className="text-2xl text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-[20px] lg:text-[28px] font-normal text-slate-900 dark:text-white tracking-tight mb-4 transition-colors">Trụ sở chính</h4>
                                    <p className="text-slate-500 dark:text-slate-400 font-normal text-base leading-relaxed line-clamp-2 transition-colors">
                                        {siteMetadata.address}
                                    </p>
                                </div>
                            </SurfaceCard>
                        </div>

                        {/* Col 2: Hotline + Email */}
                        <div className="flex flex-col w-full gap-5 h-full">
                            {contactCards.map((card) => (
                                <SurfaceCard key={card.title} className="group flex flex-col gap-4 lg:gap-8 p-4 lg:p-6">
                                    <div className="w-11 h-11 lg:w-14 lg:h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                                        <Icon name={card.icon} className="text-2xl text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-[20px] lg:text-[28px] font-normal text-slate-900 dark:text-white tracking-tight mb-4 transition-colors">{card.title}</h4>
                                        <div className="space-y-1">
                                            {card.lines.map((line) => (
                                                <p key={`${card.title}-${line.label}`} className="text-slate-500 dark:text-slate-400 font-normal text-base leading-relaxed transition-colors">
                                                    {line.label}:{' '}
                                                    {line.href ? (
                                                        <a href={line.href} className="text-blue-500 dark:text-blue-400 hover:text-blue-600 transition-colors">
                                                            {line.value}
                                                        </a>
                                                    ) : (
                                                        <strong className="text-slate-900 dark:text-slate-200">{line.value}</strong>
                                                    )}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </SurfaceCard>
                            ))}
                        </div>

                        {/* Col 3: Package CTA */}
                        <div className="w-full h-full">
                            <div className="bg-[#0057E7] w-full p-4 lg:p-6 rounded-[20px] flex flex-col gap-4 lg:gap-6 h-full relative overflow-hidden group">
                                {/* Intense Gradient & Mesh Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700 opacity-90"></div>
                                <div className="absolute top-0 right-0 h-[320px] w-[320px] -mr-40 -mt-40 rounded-full bg-sky-400/16 blur-[72px] pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 h-[240px] w-[240px] -ml-20 -mb-20 rounded-full bg-indigo-500/24 blur-[56px] pointer-events-none"></div>

                                {/* Decorative Rings */}
                                <div className="absolute top-1/2 left-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8 pointer-events-none transition-transform duration-[1400ms] group-hover:scale-125"></div>

                                {/* Light Sweep Beam */}
                                <div className="absolute inset-0 opacity-20 pointer-events-none">
                                    <div className="absolute top-[-50%] left-[-50%] w-[50%] h-[200%] bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-[35deg] transform translate-x-[-100%] group-hover:translate-x-[400%] transition-transform duration-[1500ms] ease-in-out"></div>
                                </div>

                                {/* Abstract Dots Decoration */}
                                <div className="absolute top-10 right-10 flex gap-2 opacity-20">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                </div>

                                {/* Background icons - Re-positioned and enhanced */}
                                <div className="absolute -right-12 bottom-0 opacity-[0.12] pointer-events-none group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-700">
                                    <Icon name="shield" className="text-[260px] text-white" filled />
                                </div>
                                <div className="absolute -left-16 top-1/4 opacity-[0.08] pointer-events-none group-hover:scale-110 group-hover:translate-x-4 transition-all duration-700 -rotate-12">
                                    <Icon name="favorite" className="text-[180px] text-white" filled />
                                </div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-8">
                                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                            <span className="text-[11px] font-bold text-white tracking-widest uppercase">TABO ERP</span>
                                        </div>
                                        <h4 className="text-[20px] lg:text-[28px] font-normal text-white mb-4 underline underline-offset-8 decoration-white/20">Giải pháp doanh nghiệp</h4>
                                        <p className="text-white/90 font-normal text-base leading-relaxed">
                                            Bắt đầu trải nghiệm giải pháp quản trị doanh nghiệp toàn diện ngay hôm nay.
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-3 mt-auto relative z-10">
                                        <Button 
                                            variant="secondary" 
                                            fullWidth 
                                            size="md" 
                                            className="!bg-white hover:!bg-slate-50 !text-blue-600 shadow-xl shadow-blue-900/20 hover:shadow-blue-900/40 transition-all active:scale-[0.98]"
                                        >
                                            Dùng thử Miễn Phí
                                        </Button>
                                        <Button 
                                            variant="outline" 
                                            fullWidth 
                                            size="md" 
                                            className="!bg-transparent border-white/40 !text-white hover:!bg-white/10 transition-all active:scale-[0.98]"
                                        >
                                            Liên hệ tư vấn
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map (Bottom) */}
                    <LazyMapEmbed />
                </div>
            </SectionContainer>
        </section>
    );
};

export default ContactInfo;
