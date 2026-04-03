import React from 'react';
import aboutTeamIllustration from '@/assets/about-team.svg';
import { aboutGridContent, aboutTeamHighlights } from '@/content/about';

const AboutGrid: React.FC = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 relative z-20">
            {/* 4. Grid Content - 3 Columns Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-16 lg:gap-y-0">

                {/* Left Column (Giải pháp) */}
                <div className="lg:col-span-1 lg:pr-8">
                    <div className="group">
                        <div className="w-full h-[3px] bg-[#0070F3] dark:bg-blue-500 mb-8 transition-colors"></div>
                        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50/80 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6 shadow-sm transition-colors">
                            <span className="text-sm font-bold text-[#0070F3] dark:text-blue-400 uppercase">Giải pháp</span>
                        </div>
                        <h3 className="text-[28px] font-normal tracking-tight text-slate-900 dark:text-white leading-[1.4] transition-colors">
                            Giải pháp quản trị toàn diện với dấu ấn cá nhân hóa. Chuyển đổi số dễ dàng, liền mạch.
                        </h3>
                    </div>
                </div>

                {/* Right Column (Grid 2x2 for others) */}
                <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-16 md:gap-y-24">
                        
                        {/* Item 2: Our Core Values (Text) */}
                        <div className="group">
                            <div className="w-full h-[3px] bg-[#0070F3] dark:bg-blue-500 mb-8 transition-colors"></div>
                            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50/80 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6 shadow-sm transition-colors">
                                <span className="text-sm font-bold text-[#0070F3] dark:text-blue-400 uppercase">{aboutGridContent[0].eyebrow}</span>
                            </div>
                            <div className="text-base text-slate-500 dark:text-slate-400 font-normal leading-relaxed space-y-4 transition-colors">
                                {aboutGridContent[0].body.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        {/* Item 3: Stats / Accessibility equivalent */}
                        <div className="group">
                            <div className="w-full h-[3px] bg-[#0070F3] dark:bg-blue-500 mb-8 transition-colors"></div>
                            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50/80 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6 shadow-sm transition-colors">
                                <span className="text-sm font-bold text-[#0070F3] dark:text-blue-400 uppercase">{aboutGridContent[1].eyebrow}</span>
                            </div>
                            <div className="text-base text-slate-500 dark:text-slate-400 font-normal leading-relaxed space-y-4 transition-colors">
                                <p className="text-slate-800 dark:text-slate-200 font-medium transition-colors">
                                    {aboutGridContent[1].emphasis}
                                </p>
                                {aboutGridContent[1].body.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        {/* Item 3: Tầm nhìn */}
                        <div className="group">
                            <div className="w-full h-[3px] bg-[#0070F3] dark:bg-blue-500 mb-8 transition-colors"></div>
                            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50/80 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6 shadow-sm transition-colors">
                                <span className="text-sm font-bold text-[#0070F3] dark:text-blue-400 uppercase">{aboutGridContent[2].eyebrow}</span>
                            </div>
                            <div className="text-base text-slate-500 dark:text-slate-400 font-normal leading-relaxed space-y-4 transition-colors">
                                <p className="text-slate-800 dark:text-slate-200 font-medium transition-colors">
                                    {aboutGridContent[2].emphasis}
                                </p>
                                {aboutGridContent[2].body.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        {/* Item 4: Our Team (Image only) */}
                        <div className="group">
                            <div className="w-full h-[265px] rounded-[16px] overflow-hidden relative border border-transparent dark:border-slate-800">
                                <div className="absolute -inset-4 bg-blue-100/50 dark:bg-blue-600/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                                <img
                                    src={aboutTeamIllustration}
                                    alt="Doi ngu chuyen gia Tabo"
                                    loading="lazy"
                                    className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-[15s] ease-out"
                                />
                                <div className="absolute inset-x-4 bottom-4 z-20 rounded-2xl border border-white/70 bg-white/85 p-4 shadow-lg backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/80">
                                    <div className="grid grid-cols-3 gap-3 text-center">
                                        {aboutTeamHighlights.map((item) => (
                                            <div key={item.label}>
                                                <p className="text-base font-semibold text-slate-900 dark:text-white">{item.value}</p>
                                                <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{item.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutGrid;
