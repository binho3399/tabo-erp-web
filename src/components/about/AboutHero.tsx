import React from 'react';
import { Icon, Badge } from '@/components/ui';

const AboutHero: React.FC = () => {
    return (
        <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-24 min-h-[40vh] flex flex-col justify-center">
            {/* Background Decorations Container with Smooth Fade Mask */}
            <div className="absolute inset-0 z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]">
                {/* Ambient Blurry Blobs */}
                <div className="absolute top-[-5%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-[130px] transition-all duration-700"></div>
                <div className="absolute bottom-[-15%] right-[-5%] w-[40%] h-[40%] rounded-full bg-cyan-300/20 dark:bg-cyan-600/10 blur-[130px] transition-all duration-700"></div>
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-purple-300/10 dark:bg-purple-600/5 blur-[100px] transition-all duration-700"></div>

                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

                {/* Animated SVG Beams */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <defs>
                        <linearGradient id="beamGradientAbout" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>

                    <path d="M 15 0 V 25 H 30 V 45 H 10 V 70 H 25 V 100" fill="none" stroke="url(#beamGradientAbout)" strokeWidth="0.04" pathLength="1" strokeDasharray="0.12 0.88" className="animate-grid-dash" />
                    <path d="M 85 0 V 35 H 70 V 65 H 90 V 85 H 75 V 100" fill="none" stroke="url(#beamGradientAbout)" strokeWidth="0.04" pathLength="1" strokeDasharray="0.15 0.85" className="animate-grid-dash" style={{ animationDelay: '3s', animationDuration: '20s' }} />
                    <path d="M 45 0 V 15 H 55 V 35 H 40 V 60 H 60 V 80 H 50 V 100" fill="none" stroke="url(#beamGradientAbout)" strokeWidth="0.025" pathLength="1" strokeDasharray="0.1 0.9" className="animate-grid-dash" style={{ animationDelay: '6s', animationDuration: '25s' }} />
                </svg>
            </div>

            {/* 1. Centered Typographic Hero Header */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col items-center text-center">
                
                {/* Concentric Pulsing Blue Circles Behind Text (With Smooth Bottom Fade Mask - Higher Start) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full min-h-[800px] pointer-events-none z-0 [mask-image:linear-gradient(to_bottom,black_10%,black_40%,transparent_85%)]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] aspect-square rounded-full border border-blue-500/10 dark:border-blue-400/10 bg-gradient-to-b from-blue-400/5 to-transparent dark:from-blue-600/5 blur-[2px] animate-breathing" style={{ animationDuration: '6s' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] md:w-[600px] aspect-square rounded-full border-[1.5px] border-blue-500/15 dark:border-blue-400/15 bg-gradient-to-b from-blue-500/5 to-transparent dark:from-blue-600/5 blur-[1px] animate-breathing" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] aspect-square rounded-full border-2 border-blue-500/20 dark:border-blue-400/20 bg-gradient-to-b from-blue-500/10 to-transparent dark:from-blue-600/10 shadow-[0_0_80px_rgba(59,130,246,0.15)] dark:shadow-[0_0_80px_rgba(59,130,246,0.25)] animate-breathing" style={{ animationDuration: '3s', animationDelay: '2s' }}></div>
                </div>

                {/* Floating Left Icon (Shield/Security) */}
                <div className="hidden md:flex absolute top-[25%] left-[-10%] w-16 h-16 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-white/50 dark:border-slate-700 shadow-xl rounded-[20px] items-center justify-center animate-bounce z-10" style={{ animationDuration: '4s' }}>
                    <Icon name="security" className="text-3xl text-emerald-500 dark:text-emerald-400" />
                </div>

                {/* Floating Right Icon (Timer/Performance) */}
                <div className="hidden md:flex absolute bottom-[15%] right-[-10%] w-16 h-16 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-white/50 dark:border-slate-700 shadow-xl rounded-[20px] items-center justify-center animate-bounce z-10" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                    <Icon name="schedule" className="text-3xl text-blue-500 dark:text-blue-400" />
                </div>

                <Badge variant="primary" className="mb-6 uppercase shadow-sm relative z-10 select-none">
                    TỔNG QUAN
                </Badge>
                
                <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-normal tracking-tight text-slate-900 dark:text-white leading-[1.2] lg:leading-[1.1] mb-6 transition-colors relative z-10">
                    Về chúng tôi <span className="text-blue-500 dark:text-blue-400 block sm:inline mt-2 sm:mt-0">— Tabo ERP</span>
                </h1>

                <p className="text-base text-slate-500 dark:text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto relative z-10">
                    Tabo ra đời từ khát vọng kiến tạo một hệ điều hành doanh nghiệp "tất cả trong một", giúp đồng bộ dữ liệu và quy trình một cách hiệu quả nhất.
                </p>
            </div>

            {/* Small Floating Decorations with Animations - Restored */}
            <div className="absolute top-[15%] left-[15%] w-2 h-2 bg-blue-500 rounded-full opacity-40 pointer-events-none animate-bounce" style={{ animationDuration: '4s' }}></div>
            <div className="absolute bottom-[25%] right-[15%] border-[1.5px] border-indigo-400 w-3 h-3 rounded-sm opacity-30 rotate-45 pointer-events-none animate-[spin]" style={{ animationDuration: '6s' }}></div>
            <div className="absolute top-[25%] right-[20%] opacity-30 text-blue-600 pointer-events-none animate-pulse" style={{ animationDuration: '3s' }}>
                <Icon name="star" className="text-[18px]" />
            </div>
            <div className="absolute bottom-[35%] left-[10%] opacity-30 text-cyan-600 pointer-events-none -rotate-12 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                <Icon name="change_history" className="text-[20px]" />
            </div>
            <div className="absolute top-[10%] left-[80%] w-2 h-2 bg-orange-400 rounded-full opacity-40 pointer-events-none animate-pulse" style={{ animationDuration: '2s' }}></div>

            {/* Bottom Gradient for smooth transition - Simplified to avoid 'bright line' edge */}
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#F7F8F8] to-transparent dark:from-slate-950 dark:to-transparent pointer-events-none z-10 transition-colors duration-500"></div>
        </section>
    );
};

export default AboutHero;
