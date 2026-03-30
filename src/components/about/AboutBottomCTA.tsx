import React from 'react';
import { Icon, Button } from '@/components/ui';

const AboutBottomCTA: React.FC = () => {
    return (
        <section className="bg-slate-50/50 dark:bg-slate-900/60 w-full py-20 lg:py-24 hover:bg-white dark:hover:bg-slate-900/80 transition-colors duration-1000 ease-out backdrop-blur-sm relative overflow-hidden group border-y border-slate-200/50 dark:border-slate-800/50">
            
            {/* 1. Underlying Neural Grid Mesh - Enhanced Presence */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.08] dark:opacity-[0.15] bg-[linear-gradient(to_right,#3b82f6_1.5px,transparent_1.5px),linear-gradient(to_bottom,#3b82f6_1.5px,transparent_1.5px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(circle_at_center,black_50%,transparent_90%)]"></div>

            {/* 2. Concentric Breathing Background Rings - More Visible */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0 opacity-60 dark:opacity-45 [mask-image:radial-gradient(circle_at_center,black_30%,transparent_80%)]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] aspect-square rounded-full border-2 border-blue-500/20 dark:border-blue-400/30 blur-[1px] animate-breathing" style={{ animationDuration: '6s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] aspect-square rounded-full border border-blue-500/10 dark:border-blue-400/20 blur-[2px] animate-breathing" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1200px] aspect-square rounded-full border border-blue-500/5 dark:border-blue-400/10 blur-[4px] animate-breathing" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
            </div>

            {/* 3. Clearly Visible Animated SVG Data Beams */}
            <svg className="absolute inset-0 w-full h-full z-0 opacity-40 dark:opacity-50 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                <defs>
                    <linearGradient id="ctaBeamGradientFinal" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
                <path d="M 12 0 V 100" fill="none" stroke="url(#ctaBeamGradientFinal)" strokeWidth="2" pathLength="1" strokeDasharray="0.1 0.9" className="animate-grid-dash" style={{ animationDuration: '10s' }} />
                <path d="M 48 0 V 100" fill="none" stroke="url(#ctaBeamGradientFinal)" strokeWidth="1.5" pathLength="1" strokeDasharray="0.15 0.85" className="animate-grid-dash" style={{ animationDelay: '3s', animationDuration: '18s' }} />
                <path d="M 84 0 V 100" fill="none" stroke="url(#ctaBeamGradientFinal)" strokeWidth="2" pathLength="1" strokeDasharray="0.12 0.88" className="animate-grid-dash" style={{ animationDelay: '6s', animationDuration: '22s' }} />
            </svg>

            {/* 4. Vibrant Ambient Glows */}
            <div className="absolute top-[-30%] right-[-15%] w-[50%] h-[70%] bg-blue-400/15 dark:bg-blue-600/25 blur-[130px] rounded-full pointer-events-none group-hover:bg-blue-400/25 dark:group-hover:bg-blue-600/35 group-hover:scale-110 transition-all duration-1000"></div>
            <div className="absolute bottom-[-30%] left-[-15%] w-[50%] h-[70%] bg-cyan-300/15 dark:bg-teal-600/25 blur-[130px] rounded-full pointer-events-none group-hover:bg-cyan-300/25 dark:group-hover:bg-teal-600/35 group-hover:scale-110 transition-all duration-1000 delay-100"></div>

            {/* 5. Clearly Defined Floating Decoration Icons */}
            <div className="absolute top-1/4 left-[15%] opacity-50 text-blue-500 pointer-events-none animate-float hidden md:block" style={{ animationDuration: '10s' }}>
                <Icon name="change_history" className="text-[30px]" />
            </div>
            <div className="absolute bottom-1/4 right-[15%] opacity-50 text-cyan-500 pointer-events-none animate-float hidden md:block" style={{ animationDuration: '12s', animationDelay: '2s' }}>
                <Icon name="star" className="text-[28px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
                {/* Header Decoration */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm mb-10 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
                    <Icon name="change_history" className="text-slate-500 dark:text-blue-400 text-[24px]" />
                </div>
                
                {/* CTA Heading - Standardized to Vibe Guidelines */}
                <h2 className="text-[24px] md:text-[36px] lg:text-[42px] font-normal text-slate-900 dark:text-white tracking-tight max-w-2xl md:max-w-3xl lg:max-w-none mx-auto leading-[1.25] md:leading-[1.15] mb-12 relative z-10 transition-colors">
                    Chúng tôi kiến tạo sự cân bằng hoàn hảo <br className="hidden lg:block" /> giữa <span className="text-blue-500 dark:text-blue-400">hiệu năng</span> và <span className="text-blue-500 dark:text-blue-400">trải nghiệm</span>. Bắt đầu hành trình <br className="hidden lg:block" /> chuyển đổi số cùng Tabo ngay hôm nay!
                </h2>

                {/* Button with Visual Priority */}
                <div className="flex justify-center relative z-10">
                    <Button to="/contact" variant="primary" size="lg" className="rounded-full select-none shadow-[0_20px_40px_-10px_rgba(59,130,246,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(59,130,246,0.5)] active:scale-95 transition-all duration-500 group/btn">
                        <span className="flex items-center gap-3 text-base lg:text-lg">
                            Liên hệ ngay <Icon name="arrow_outward" className="text-[20px] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </span>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default AboutBottomCTA;
