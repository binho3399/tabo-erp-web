import React from 'react';
import { Icon, Button } from '@/components/ui';
import { useViewportActivity } from '@/hooks/useViewportActivity';

const StripBanner: React.FC = () => {
    const { ref: sectionRef, isActive } = useViewportActivity<HTMLElement>();

    return (
        <section ref={sectionRef} data-motion-active={isActive} className="bg-slate-950 dark:bg-slate-950 text-white py-16 lg:py-24 relative overflow-hidden transition-colors duration-500">
            {/* VIVID & IMPRESSIVE Background Decoration */}
            <div className="absolute inset-0 z-0">
                <div className="ambient-noise absolute inset-0 opacity-[0.04] pointer-events-none"></div>

                <div className="motion-gated absolute -top-[16%] -left-[8%] hidden lg:block h-[110%] w-[68%] rounded-full bg-blue-500/18 blur-[88px] opacity-75"></div>
                <div className="motion-gated absolute -bottom-[18%] -right-[8%] hidden lg:block h-[95%] w-[58%] rounded-full bg-indigo-500/14 blur-[80px] opacity-65"></div>

                <div className="motion-gated absolute top-0 left-1/3 hidden lg:block h-full w-px bg-gradient-to-b from-transparent via-blue-400/25 to-transparent"></div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-blue-500/10 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] border border-blue-500/12 rounded-full"></div>

                <div className="ambient-grid-blue absolute inset-0 opacity-[0.04]"></div>

                <div className="motion-gated absolute top-1/4 left-1/4 hidden lg:block h-2 w-2 rounded-full bg-blue-300 opacity-40 shadow-[0_0_10px_rgba(59,130,246,0.55)]"></div>

                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 opacity-60"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent shadow-[0_0_25px_rgba(59,130,246,0.5)]"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent shadow-[0_0_25px_rgba(59,130,246,0.5)]"></div>

                <svg className="absolute inset-0 hidden lg:block w-full h-full pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 1000 400">
                    <defs>
                        <linearGradient id="brightFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                    <path d="M 0,200 Q 250,100 500,200 T 1000,200" fill="none" stroke="url(#brightFlowGradient)" strokeWidth="1.2" strokeDasharray="10 20" className="motion-gated animate-flow-dash" style={{ animationDuration: '5s' }} />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center relative z-10 gap-20">
                {/* Left: Content & Button Group */}
                <div className="text-left">
                    <h2 className="text-[28px] md:text-[42px] font-normal tracking-tight leading-[1.2] mb-8">
                        Thời gian là tài sản quý nhất.<br />
                        <span className="text-blue-400">Tabo</span> giúp bạn <span className="text-blue-400">tối ưu hóa nó.</span>
                    </h2>
                    <Button to="/contact" variant="primary" className="!bg-blue-600 hover:!bg-blue-500 rounded-2xl shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] border border-blue-400/30 px-6 py-2.5 text-base lg:px-10 lg:py-4 lg:text-lg transition-all">
                        Bắt đầu chuyển đổi
                    </Button>
                </div>

                {/* Right: Impressive Decoration */}
                <div className="relative h-[320px] w-full hidden lg:flex items-center justify-center">
                    {/* Central Glowing Icon */}
                    <div className="relative z-20 flex h-28 w-28 items-center justify-center rounded-[20px] border border-blue-500/20 bg-blue-500/10 shadow-[0_0_45px_-18px_rgba(59,130,246,0.45)]">
                        <Icon name="history" className="text-5xl text-blue-400" />
                        {/* Orbiting particles */}
                        <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-indigo-500/18 blur-lg"></div>
                        <div className="absolute -bottom-4 -left-4 h-6 w-6 rounded-full bg-sky-500/16 blur-md"></div>
                    </div>

                    {/* Floating Glass Cards */}
                    <div className="absolute top-0 right-0 z-30 rounded-[20px] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-md transition-transform hover:scale-105">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-green-500/20 rounded-[10px] flex items-center justify-center">
                                <Icon name="trending_up" className="text-green-400" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Hiệu suất</p>
                                <p className="text-xl font-normal text-white">+40%</p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 z-30 rounded-[20px] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-md transition-transform hover:scale-105">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-blue-500/20 rounded-[10px] flex items-center justify-center">
                                <Icon name="schedule" className="text-blue-400" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Thời gian tiết kiệm</p>
                                <p className="text-xl font-normal text-white">4h/ngày</p>
                            </div>
                        </div>
                    </div>

                    {/* Background SVG Decoration */}
                    <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 400 400">
                        <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" className="text-blue-500/50" />
                        <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" className="text-indigo-500/40" />
                        <circle cx="200" cy="200" r="60" fill="none" stroke="currentColor" strokeWidth="1" className="text-sky-500/30" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default StripBanner;
