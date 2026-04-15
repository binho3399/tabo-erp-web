import React from 'react';
import { Icon, PrefetchLink } from '@/components/ui';
import { useViewportActivity } from '@/hooks/useViewportActivity';

const ContactHero: React.FC = () => {
    const { ref: sectionRef, isActive } = useViewportActivity<HTMLElement>({ disabled: true });

    return (
        <section
            ref={sectionRef}
            data-motion-active={isActive}
            className="relative bg-[#F7F8F8] dark:bg-slate-950 pt-24 pb-10 lg:pt-32 lg:pb-14 overflow-hidden min-h-[32vh] flex items-center justify-center transition-colors duration-500"
        >
            {/* Ambient Blurry Blobs */}
            <div className="absolute top-[-8%] left-[-8%] h-[42%] w-[42%] rounded-full bg-blue-400/16 blur-[88px] pointer-events-none transition-all duration-700 dark:bg-blue-600/8"></div>
            <div className="absolute bottom-[-8%] right-[-4%] h-[34%] w-[34%] rounded-full bg-cyan-300/16 blur-[88px] pointer-events-none transition-all duration-700 dark:bg-cyan-600/8"></div>

            {/* Small Floating Decorations with Animations */}
            <div className="motion-gated absolute top-[15%] left-[15%] h-2 w-2 rounded-full bg-blue-500 opacity-35 pointer-events-none animate-bounce" style={{ animationDuration: '5s' }}></div>
            <div className="motion-gated absolute top-[25%] right-[20%] opacity-25 text-blue-600 pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}>
                <Icon name="star" className="text-[18px]" />
            </div>

            {/* Decorative Background Layer - Option 1: The Connective Pulse */}
            <div 
                className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
                style={{
                    maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
                }}
            >
                {/* Subtle Grid Pattern Overlay */}
                <div className="ambient-grid absolute inset-0 opacity-[0.03]"></div>

                    {/* Network Nodes & Connecting Lines (SVG) - Refined Mesh */}
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 400">
                        <defs>
                            <radialGradient id="nodeGlowContact" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                            </radialGradient>
                            <filter id="lineGlow">
                                <feGaussianBlur stdDeviation="2" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                            
                            {/* High-Tech Icon Symbols - Set with fixed aspect ratio */}
                            <symbol id="icon-spark" viewBox="0 0 24 24">
                                <path d="M12,2L14.41,8.39L20.8,10.8L14.41,13.21L12,19.6L9.59,13.21L3.2,10.8L9.59,8.39L12,2Z" fill="currentColor" />
                            </symbol>
                            <symbol id="icon-star" viewBox="0 0 24 24">
                                <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" fill="currentColor" />
                            </symbol>
                            <symbol id="icon-pin" viewBox="0 0 24 24">
                                <path d="M12,2C8.14,2 5,5.14 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9C19,5.14 15.86,2 12,2M12,4C14.76,4 17,6.24 17,9C17,11.88 14.22,16.21 12,19.19C9.77,16.24 7,11.85 7,9C7,6.24 9.24,4 12,4M12,7A2,2 0 0,0 10,9A2,2 0 0,0 12,11A2,2 0 0,0 14,9A2,2 0 0,0 12,7Z" fill="currentColor" />
                            </symbol>
                            <symbol id="icon-call" viewBox="0 0 24 24">
                                <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.68,14.91 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5C20.55,15.5 21,15.95 21,16.5V20C21,20.55 20.55,21 20,21C10.61,21 3,13.39 3,4C3,3.45 3.45,3 4,3H7.5C8.05,3 8.5,3.45 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.09,8.32 8.82,8.59L6.62,10.79Z" fill="currentColor" />
                            </symbol>
                            <symbol id="icon-mail" viewBox="0 0 24 24">
                                <path d="M20,4H4C2.9,4 2.01,4.9 2.01,6L2,18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V6C22,4.9 21.1,4 20,4M20,8L12,13L4,8V6L12,11L20,6V8Z" fill="currentColor" />
                            </symbol>
                        </defs>

                        {/* Connection Lines (Long, Elegant, Spanning Screen - Now all curved) */}
                        <g className="stroke-blue-500/18 dark:stroke-blue-400/12" strokeWidth="1.1" fill="none" filter="url(#lineGlow)">
                            <path d="M -50 80 C 240 80, 360 240, 600 200 C 840 160, 960 320, 1260 320" />
                            <path d="M -50 280 C 240 280, 480 120, 720 160 C 960 200, 1080 40, 1260 40" />
                            <path d="M -50 180 C 150 180, 300 180, 540 100 C 780 20, 900 260, 1260 260" />
                        </g>

                        {/* Animated Data Pulses (Curved Paths) */}
                        <g className="stroke-blue-400/55 dark:stroke-blue-400/30" strokeWidth="1.8" fill="none" strokeDasharray="40 960" pathLength="1000">
                            <path d="M -50 80 C 240 80, 360 240, 600 200 C 840 160, 960 320, 1260 320" className="motion-gated animate-grid-dash" style={{ animationDuration: '10s' }} />
                            <path d="M -50 280 C 240 280, 480 120, 720 160 C 960 200, 1080 40, 1260 40" className="motion-gated animate-grid-dash" style={{ animationDuration: '13s', animationDelay: '1.5s' }} />
                        </g>

                        {/* Contact-themed moving nodes */}
                        <g className="motion-gated text-blue-600/85 dark:text-blue-300/80">
                            <g>
                                <circle cx="0" cy="0" r="12" className="fill-white/90 dark:fill-slate-900/85" />
                                <circle cx="0" cy="0" r="16" className="fill-blue-500/10 dark:fill-blue-400/20" />
                                <use href="#icon-call" x="-5" y="-5" width="10" height="10" />
                                <animateMotion
                                    dur="11s"
                                    repeatCount="indefinite"
                                    rotate="auto"
                                    path="M -50 80 C 240 80, 360 240, 600 200 C 840 160, 960 320, 1260 320"
                                />
                            </g>
                            <g>
                                <circle cx="0" cy="0" r="11" className="fill-white/90 dark:fill-slate-900/85" />
                                <circle cx="0" cy="0" r="14.5" className="fill-cyan-500/10 dark:fill-cyan-400/20" />
                                <use href="#icon-mail" x="-4.5" y="-4.5" width="9" height="9" />
                                <animateMotion
                                    dur="13.5s"
                                    begin="-2.4s"
                                    repeatCount="indefinite"
                                    rotate="auto"
                                    path="M -50 280 C 240 280, 480 120, 720 160 C 960 200, 1080 40, 1260 40"
                                />
                            </g>
                            <g>
                                <circle cx="0" cy="0" r="10.5" className="fill-white/90 dark:fill-slate-900/85" />
                                <circle cx="0" cy="0" r="14" className="fill-indigo-500/10 dark:fill-indigo-400/20" />
                                <use href="#icon-pin" x="-4.8" y="-4.8" width="9.6" height="9.6" />
                                <animateMotion
                                    dur="15s"
                                    begin="-4.2s"
                                    repeatCount="indefinite"
                                    rotate="auto"
                                    path="M -50 180 C 150 180, 300 180, 540 100 C 780 20, 900 260, 1260 260"
                                />
                            </g>
                        </g>

                        {/* Static Pulse Nodes (Dimmed for less contrast - Subtle Pulsing) */}
                        {[
                            { x: 60, y: 80, icon: '#icon-pin', size: 12 }, { x: 360, y: 240, icon: '#icon-spark', size: 15 }, { x: 600, y: 200, icon: '#icon-star', size: 12 }, { x: 960, y: 320, icon: '#icon-pin', size: 10 }, 
                            { x: 120, y: 280, icon: '#icon-star', size: 10 }, { x: 480, y: 120, icon: '#icon-pin', size: 12 }
                        ].map((node, i) => (
                            <g key={i}>
                                <g className="text-blue-500/25 dark:text-blue-400/15">
                                    <use href={node.icon} x={node.x - node.size/2} y={node.y - node.size/2} width={node.size} height={node.size} />
                                    <circle cx={node.x} cy={node.y} r={node.size/2 + 5} fill="url(#nodeGlowContact)" className="opacity-[0.08]" />
                                </g>
                            </g>
                        ))}
                    </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex flex-col items-start text-left mt-8 lg:mt-0">
                {/* Sparkles Decoration */}
                <div className="absolute top-[-90px] left-1/2 -translate-x-1/2 w-full max-w-[700px] h-[240px] pointer-events-none opacity-16 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent blur-2xl"></div>
                
                <div className="relative z-10 mb-6 flex flex-wrap items-center justify-start gap-3 text-sm text-slate-500 dark:text-slate-400">
                    <PrefetchLink to="/" className="transition-colors duration-500 hover:text-blue-600 dark:hover:text-blue-400">
                        Trang chủ
                    </PrefetchLink>
                    <Icon name="chevron_right" className="text-[14px]" />
                    <span className="text-slate-900 dark:text-slate-200">Liên hệ</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.2] lg:leading-[1.1] font-normal tracking-tight mb-6 text-slate-900 dark:text-white transition-colors relative z-10">
                    Sẵn sàng hỗ trợ <br className="md:hidden" /> <span className="text-blue-500 dark:text-blue-400">doanh nghiệp bạn.</span>
                </h1>
                <p className="text-base text-slate-500 dark:text-slate-400 max-w-2xl lg:max-w-none lg:whitespace-nowrap font-normal transition-colors">
                    Dù bạn có thắc mắc về tính năng, giá cả, hay cần tư vấn giải pháp quản trị,
                    đội ngũ chuyên gia từ Tabo luôn sẵn lòng giải đáp.
                </p>
            </div>

            {/* Bottom Gradient for smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F7F8F8] dark:from-slate-950 to-transparent pointer-events-none z-10 transition-colors duration-500"></div>
        </section>
    );
};

export default ContactHero;
