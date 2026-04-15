import React from 'react';
import { Icon, PrefetchLink } from '@/components/ui';
import { useViewportActivity } from '@/hooks/useViewportActivity';

const AboutHero: React.FC = () => {
    const { ref: sectionRef, isActive } = useViewportActivity<HTMLElement>();

    return (
        <section
            ref={sectionRef}
            data-motion-active={isActive}
            className="relative pt-28 pb-10 lg:pt-32 lg:pb-14 min-h-[32vh] flex flex-col justify-center"
        >
            {/* Background Decorations Container with Smooth Fade Mask */}
            <div className="absolute inset-0 z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]">
                {/* Ambient Blurry Blobs */}
                <div className="absolute top-[-5%] left-[-8%] h-[42%] w-[42%] rounded-full bg-blue-400/16 blur-[88px] transition-all duration-700 dark:bg-blue-600/8"></div>
                <div className="absolute bottom-[-12%] right-[-4%] h-[34%] w-[34%] rounded-full bg-cyan-300/16 blur-[88px] transition-all duration-700 dark:bg-cyan-600/8"></div>

                {/* Subtle Grid Pattern */}
                <div className="ambient-grid absolute inset-0 opacity-[0.03]"></div>

                {/* Animated SVG Beams */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <defs>
                        <linearGradient id="beamGradientAbout" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>

                    <path d="M 15 0 V 25 H 30 V 45 H 10 V 70 H 25 V 100" fill="none" stroke="url(#beamGradientAbout)" strokeWidth="0.04" pathLength="1" strokeDasharray="0.12 0.88" className="motion-gated animate-grid-dash" />
                    <path d="M 45 0 V 15 H 55 V 35 H 40 V 60 H 60 V 80 H 50 V 100" fill="none" stroke="url(#beamGradientAbout)" strokeWidth="0.025" pathLength="1" strokeDasharray="0.1 0.9" className="motion-gated animate-grid-dash" style={{ animationDelay: '6s', animationDuration: '25s' }} />
                </svg>
            </div>

            {/* 1. Centered Typographic Hero Header area */}
            <div className="relative z-20">
                {/* Concentric Pulsing Blue Circles Behind Text (Moved here to prevent max-w-4xl clipping) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen min-w-[1000px] h-full min-h-[800px] pointer-events-none z-0 [mask-image:linear-gradient(to_bottom,black_10%,black_40%,transparent_85%)] overflow-visible">
                    <div className="motion-gated absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-[520px] md:w-[680px] rounded-full border border-blue-500/10 bg-gradient-to-b from-blue-400/5 to-transparent blur-[1px] dark:border-blue-400/10 dark:from-blue-600/5 animate-breathing" style={{ animationDuration: '7s' }}></div>
                    <div className="motion-gated absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-[320px] md:w-[420px] rounded-full border border-blue-500/16 bg-gradient-to-b from-blue-500/8 to-transparent shadow-[0_0_56px_rgba(59,130,246,0.12)] dark:border-blue-400/16 dark:from-blue-600/8 dark:shadow-[0_0_56px_rgba(59,130,246,0.2)] animate-breathing" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex flex-col items-start text-left">
                    <div className="max-w-4xl">

                        <div className="relative z-10 mb-6 flex flex-wrap items-center justify-start gap-3 text-sm text-slate-500 dark:text-slate-400">
                            <PrefetchLink to="/" className="transition-colors duration-500 hover:text-blue-600 dark:hover:text-blue-400">
                                Trang chủ
                            </PrefetchLink>
                            <Icon name="chevron_right" className="text-[14px]" />
                            <span className="text-slate-900 dark:text-slate-200">Về chúng tôi</span>
                        </div>
                
                        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-normal tracking-tight text-slate-900 dark:text-white leading-[1.2] lg:leading-[1.1] mb-6 transition-colors relative z-10">
                            Về chúng tôi <span className="text-blue-500 dark:text-blue-400 block sm:inline mt-2 sm:mt-0">— Tabo ERP</span>
                        </h1>

                        <p className="text-base text-slate-500 dark:text-slate-400 font-normal leading-relaxed max-w-2xl lg:max-w-none lg:whitespace-nowrap relative z-10 block lg:inline-block lg:w-fit">
                            Tabo ra đời từ khát vọng kiến tạo một hệ điều hành doanh nghiệp "tất cả trong một", giúp đồng bộ dữ liệu và quy trình một cách hiệu quả nhất.
                        </p>
                    </div>
                </div>
        </div>

            {/* Small Floating Decorations with Animations - Restored */}
            <div className="motion-gated absolute top-[15%] left-[15%] w-2 h-2 bg-blue-500 rounded-full opacity-35 pointer-events-none animate-bounce" style={{ animationDuration: '5s' }}></div>
            <div className="motion-gated absolute top-[25%] right-[20%] opacity-25 text-blue-600 pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}>
                <Icon name="star" className="text-[18px]" />
            </div>

            {/* Bottom Gradient for smooth transition - Simplified to avoid 'bright line' edge */}
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#F7F8F8] to-transparent dark:from-slate-950 dark:to-transparent pointer-events-none z-10 transition-colors duration-500"></div>
        </section>
    );
};

export default AboutHero;
