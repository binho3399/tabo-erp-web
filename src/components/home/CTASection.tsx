import React, { useState, useEffect } from 'react';
import { Icon } from '@/components/ui';

const CTASection: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) / 35,
                y: (e.clientY - window.innerHeight / 2) / 35,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="bg-[#020617] text-white overflow-hidden relative py-16 lg:pt-24 lg:pb-32 border-t border-white/5">
            {/* Dynamic Background Animation Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Floating Animated Glows - Significantly more visible with Parallax */}
                <div
                    className="absolute top-[-25%] left-[-15%] w-[80%] h-[80%] rounded-full bg-blue-600/25 blur-[130px] animate-float transition-all duration-300 ease-out"
                    style={{ transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)` }}
                ></div>
                <div
                    className="absolute bottom-[-25%] right-[-15%] w-[70%] h-[70%] rounded-full bg-blue-500/20 blur-[110px] animate-float opacity-80 transition-all duration-300 ease-out"
                    style={{
                        animationDelay: '-5s',
                        animationDirection: 'reverse',
                        transform: `translate(${mousePosition.x * 1.2}px, ${mousePosition.y * 1.2}px)`
                    }}
                ></div>
                <div
                    className="absolute top-[15%] right-[5%] w-[40%] h-[40%] rounded-full bg-indigo-500/15 blur-[90px] animate-float opacity-70 transition-all duration-300 ease-out"
                    style={{
                        animationDelay: '-2s',
                        transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`
                    }}
                ></div>

                {/* Subtle Moving Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

                {/* Animated Light Beams running on Grid - Lower Opacity for Subtlety */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.2] mix-blend-screen" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M 0 20 H 100" fill="none" stroke="#60a5fa" strokeWidth="0.15" pathLength="1" strokeDasharray="0.15 0.85" className="animate-beam-run" style={{ animationDuration: '4s' }} />
                    <path d="M 0 50 H 100" fill="none" stroke="#3b82f6" strokeWidth="0.15" pathLength="1" strokeDasharray="0.1 0.9" className="animate-beam-run" style={{ animationDuration: '7s', animationDelay: '-2s' }} />
                    <path d="M 0 80 H 100" fill="none" stroke="#60a5fa" strokeWidth="0.15" pathLength="1" strokeDasharray="0.2 0.8" className="animate-beam-run" style={{ animationDuration: '5s', animationDelay: '-4s' }} />
                    <path d="M 30 0 V 100" fill="none" stroke="#60a5fa" strokeWidth="0.05" pathLength="1" strokeDasharray="0.12 0.88" className="animate-beam-run" style={{ animationDuration: '6s', animationDelay: '-1s' }} />
                    <path d="M 70 0 V 100" fill="none" stroke="#3b82f6" strokeWidth="0.05" pathLength="1" strokeDasharray="0.15 0.85" className="animate-beam-run" style={{ animationDuration: '8s', animationDelay: '-5s' }} />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                    {/* Left Side: Text Content */}
                    <div className="text-left">
                        <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold tracking-widest text-[10px] px-4 py-1.5 rounded-full mb-5 inline-flex uppercase">
                            Sẵn sàng để bắt đầu?
                        </span>
                        <h2 className="text-[28px] md:text-[48px] font-normal mb-5 tracking-tight leading-[1.1]">
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
