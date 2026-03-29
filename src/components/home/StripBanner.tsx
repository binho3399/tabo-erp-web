import React from 'react';
import { Icon, Button } from '@/components/ui';

const StripBanner: React.FC = () => {
    return (
        <section className="bg-slate-950 dark:bg-slate-950 text-white py-24 relative overflow-hidden transition-colors duration-500">
            {/* VIVID & IMPRESSIVE Background Decoration */}
            <div className="absolute inset-0 z-0">
                {/* 1. Base Layer: Deep noise texture */}
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

                {/* 2. Primary Neon BLOOMS (Brighter & Larger) */}
                <div className="absolute -top-[20%] -left-[10%] w-[80%] h-[140%] bg-blue-500/30 dark:bg-blue-600/20 blur-[120px] rounded-full animate-pulse duration-[6s] opacity-80"></div>
                <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[120%] bg-indigo-500/25 dark:bg-indigo-600/15 blur-[100px] rounded-full animate-pulse duration-[8s] delay-700 opacity-70"></div>

                {/* 3. Intense Light Beams */}
                <div className="absolute top-0 left-1/3 w-[2px] h-full bg-gradient-to-b from-transparent via-blue-400/30 dark:via-blue-500/20 to-transparent skew-x-[30deg] blur-[1px]"></div>
                <div className="absolute top-0 right-1/4 w-[3px] h-full bg-gradient-to-b from-transparent via-indigo-400/20 dark:via-indigo-500/15 to-transparent -skew-x-[20deg] blur-[2px]"></div>

                {/* 4. Enhanced Concentric Geo-Circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-blue-500/10 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-blue-500/15 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/20 rounded-full"></div>

                {/* 5. Clear Grid/Data Layer */}
                <div className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
                         `,
                        backgroundSize: '100px 16.666%'
                    }}></div>

                {/* 6. Floating 'Sparks' (More visible) */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-ping opacity-60"></div>
                <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-indigo-300 rounded-full shadow-[0_0_12px_rgba(129,140,248,0.8)] animate-ping opacity-50 delay-1000"></div>

                {/* 7. Vivid Edge Accents */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 opacity-60"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent shadow-[0_0_25px_rgba(59,130,246,0.5)]"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent shadow-[0_0_25px_rgba(59,130,246,0.5)]"></div>

                {/* 8. BRIGHT Connecting Flow Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 1000 400">
                    <defs>
                        <linearGradient id="brightFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="30%" stopColor="rgba(96, 165, 250, 0.7)" />
                            <stop offset="70%" stopColor="rgba(59, 130, 246, 0.7)" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                    <path d="M 50,150 Q 300,50 600,200 T 950,250" fill="none" stroke="url(#brightFlowGradient)" strokeWidth="2" strokeDasharray="12 12" className="animate-flow-dash" />
                    <path d="M 0,250 C 200,250 400,350 700,250 S 1000,150 1000,150" fill="none" stroke="url(#brightFlowGradient)" strokeWidth="1.5" strokeDasharray="8 16" className="animate-flow-dash opacity-50" style={{ animationDelay: '0.5s' }} />
                    <path d="M 100,350 Q 400,450 800,300" fill="none" stroke="url(#brightFlowGradient)" strokeWidth="2.5" strokeDasharray="15 25" className="animate-flow-dash opacity-30" style={{ animationDuration: '4s' }} />
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
                    <div className="relative z-20 w-32 h-32 bg-blue-500/10 rounded-[20px] border border-blue-500/20 backdrop-blur-xl flex items-center justify-center animate-bounce shadow-[0_0_60px_-15px_rgba(59,130,246,0.5)]">
                        <Icon name="history" className="text-5xl text-blue-400" />
                        {/* Orbiting particles */}
                        <div className="absolute -top-4 -right-4 w-10 h-10 bg-indigo-500/20 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-sky-500/20 rounded-full blur-lg"></div>
                    </div>

                    {/* Floating Glass Cards */}
                    <div className="absolute top-0 right-0 z-30 p-5 rounded-[20px] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl animate-pulse delay-75 transform hover:scale-105 transition-transform">
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

                    <div className="absolute bottom-0 left-0 z-30 p-5 rounded-[20px] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl animate-pulse delay-300 transform hover:scale-105 transition-transform">
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
