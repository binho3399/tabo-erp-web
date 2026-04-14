import React, { useEffect, useRef } from 'react';
import { Icon } from '@/components/ui';
import { useViewportActivity } from '@/hooks/useViewportActivity';

const CTASection: React.FC = () => {
    const { ref: sectionRef, isActive } = useViewportActivity<HTMLElement>();
    const frameRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);

    const handlePointerMove: React.PointerEventHandler<HTMLElement> = (event) => {
        const section = sectionRef.current;

        if (
            !section ||
            !isActive ||
            window.innerWidth < 1024 ||
            window.matchMedia('(pointer: coarse)').matches ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
            return;
        }

        const nextX = (event.clientX - window.innerWidth / 2) / 48;
        const nextY = (event.clientY - window.innerHeight / 2) / 48;

        if (frameRef.current) {
            cancelAnimationFrame(frameRef.current);
        }

        frameRef.current = window.requestAnimationFrame(() => {
            section.style.setProperty('--cta-mouse-x', `${nextX}px`);
            section.style.setProperty('--cta-mouse-y', `${nextY}px`);
        });
    };

    const handlePointerLeave: React.PointerEventHandler<HTMLElement> = () => {
        const section = sectionRef.current;

        if (!section) {
            return;
        }

        if (frameRef.current) {
            cancelAnimationFrame(frameRef.current);
        }

        section.style.setProperty('--cta-mouse-x', '0px');
        section.style.setProperty('--cta-mouse-y', '0px');
    };

    return (
        <section
            ref={sectionRef}
            data-motion-active={isActive}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            className="bg-[#020617] text-white overflow-hidden relative py-16 lg:pt-24 lg:pb-32 border-t border-white/5 [--cta-mouse-x:0px] [--cta-mouse-y:0px]"
        >
            {/* Dynamic Background Animation Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Floating glows with lighter parallax */}
                <div
                    className="motion-gated absolute top-[-20%] left-[-12%] hidden lg:block h-[68%] w-[68%] rounded-full bg-blue-600/18 blur-[96px] transition-transform duration-300 ease-out"
                    style={{ transform: 'translate(calc(var(--cta-mouse-x) * -1), calc(var(--cta-mouse-y) * -1))' }}
                />
                <div
                    className="motion-gated absolute bottom-[-22%] right-[-12%] hidden lg:block h-[58%] w-[58%] rounded-full bg-cyan-500/14 blur-[88px] opacity-80 transition-transform duration-300 ease-out"
                    style={{
                        transform: 'translate(calc(var(--cta-mouse-x) * 0.9), calc(var(--cta-mouse-y) * 0.9))'
                    }}
                />

                <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_70%)] lg:hidden"></div>
                <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_bottom,rgba(37,99,235,0.16),transparent_70%)] lg:hidden"></div>

                <div className="ambient-grid absolute inset-0 opacity-[0.02] lg:opacity-[0.03]"></div>

                <svg className="absolute inset-0 hidden lg:block w-full h-full opacity-[0.14] mix-blend-screen" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M 0 24 H 100" fill="none" stroke="#60a5fa" strokeWidth="0.12" pathLength="1" strokeDasharray="0.15 0.85" className="motion-gated animate-beam-run" style={{ animationDuration: '6s' }} />
                    <path d="M 0 76 H 100" fill="none" stroke="#3b82f6" strokeWidth="0.12" pathLength="1" strokeDasharray="0.1 0.9" className="motion-gated animate-beam-run" style={{ animationDuration: '8s', animationDelay: '-2s' }} />
                    <path d="M 32 0 V 100" fill="none" stroke="#60a5fa" strokeWidth="0.05" pathLength="1" strokeDasharray="0.12 0.88" className="motion-gated animate-beam-run" style={{ animationDuration: '7s', animationDelay: '-1s' }} />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                    {/* Left Side: Text Content */}
                    <div className="text-left">
                        <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold tracking-widest text-[10px] px-4 py-1.5 rounded-full mb-5 inline-flex uppercase">
                            Sẵn sàng để bắt đầu?
                        </span>
                        <h2 className="text-[28px] md:text-[42px] font-normal mb-5 tracking-tight leading-[1.1]">
                            Mọi hành trình lớn đều <br /> bắt đầu từ một <span className="text-blue-500">giải pháp.</span>
                        </h2>
                        <p className="text-slate-400 text-base font-light mb-0 max-w-xl leading-relaxed">
                            Đừng để những rào cản vận hành ngăn cản sự phát triển của bạn. <br /> Liên hệ ngay với Tabo ERP để khai phá tiềm năng tối đa.
                        </p>
                    </div>

                    {/* Right Side: Contact Cards */}
                    <div className="space-y-6 lg:ml-auto w-full max-w-lg">
                        <a href="tel:1800356893" className="group flex items-center gap-4 md:gap-8 p-4 rounded-[20px] bg-white/5 border border-white/5 hover:bg-blue-600 hover:border-blue-500 transition-all duration-500 hover:-translate-y-1">
                            <div className="w-11 h-11 md:w-16 md:h-16 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-500 transform group-hover:rotate-12">
                                <Icon name="call" className="text-2xl md:text-[32px] text-blue-500 group-hover:text-white" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1 group-hover:text-blue-100 transition-colors">Hotline miễn phí</p>
                                <span className="text-[20px] md:text-3xl font-normal text-white tracking-tight">1800 356 893</span>
                            </div>
                        </a>

                        <a href="mailto:contact@tabo.vn" className="group flex items-center gap-4 md:gap-8 p-4 rounded-[20px] bg-white/5 border border-white/5 hover:bg-blue-600 hover:border-blue-500 transition-all duration-500 hover:-translate-y-1">
                            <div className="w-11 h-11 md:w-16 md:h-16 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-500 transform group-hover:-rotate-12">
                                <Icon name="mail" className="text-2xl md:text-[32px] text-blue-500 group-hover:text-white" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1 group-hover:text-blue-100 transition-colors">Email yêu cầu</p>
                                <span className="text-[20px] md:text-3xl font-normal text-white tracking-tight">contact@tabo.vn</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
