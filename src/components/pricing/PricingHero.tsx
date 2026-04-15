import React from 'react';
import { Icon, PrefetchLink } from '@/components/ui';
import { useViewportActivity } from '@/hooks/useViewportActivity';

const PricingHero: React.FC = () => {
    const { ref: sectionRef, isActive } = useViewportActivity<HTMLElement>();

    return (
        <section
            ref={sectionRef}
            data-motion-active={isActive}
            className="relative bg-[#F7F8F8] dark:bg-slate-950 pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden transition-colors"
        >
            {/* Ambient Blurry Blobs */}
            <div className="absolute top-[-8%] left-[-8%] h-[42%] w-[42%] rounded-full bg-blue-400/16 blur-[88px] pointer-events-none transition-all duration-700 dark:bg-blue-600/8"></div>
            <div className="absolute bottom-[-8%] right-[-4%] h-[34%] w-[34%] rounded-full bg-cyan-300/16 blur-[88px] pointer-events-none transition-all duration-700 dark:bg-cyan-600/8"></div>

            {/* Small Floating Decorations with Animations */}
            <div className="motion-gated absolute top-[15%] left-[15%] w-2 h-2 bg-blue-500 rounded-full opacity-35 pointer-events-none animate-bounce" style={{ animationDuration: '5s' }}></div>
            <div className="motion-gated absolute top-[25%] right-[20%] opacity-25 text-blue-600 pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}>
                <Icon name="payments" className="text-[18px]" />
            </div>

            {/* Decorative Background Layer - Option: Growth Roadmap (Follow Image) */}
            <div 
                className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
                style={{
                    maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
                }}
            >
                {/* Perspective Dot Grid (Subtle) */}
                <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                {/* SVG Roadmap Path matching image vibe */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1000 600" style={{ minHeight: '600px' }}>
                    <defs>
                        <linearGradient id="mainPathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#7dd3fc" />   {/* sky-300 */}
                            <stop offset="25%" stopColor="#2563eb" />  {/* blue-600 */}
                            <stop offset="50%" stopColor="#1e3a8a" />  {/* blue-900 for dark depth */}
                            <stop offset="75%" stopColor="#0284c7" />  {/* sky-600 */}
                            <stop offset="100%" stopColor="#4f46e5" /> {/* indigo-600 replacing green */}
                        </linearGradient>
                        <filter id="glowPathPricing">
                            <feGaussianBlur stdDeviation="4" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    {/* Faint Background Routing Lines (Decreased Contrast) */}
                    <g fill="none" stroke="#94a3b8" strokeWidth="1" className="opacity-15 dark:opacity-5">
                        <path d="M -50 450 C 50 450, 50 200, 200 200 C 350 200, 350 600, 550 600 C 750 600, 750 400, 900 400 C 1050 400, 1050 400, 1050 400" />
                        <path d="M -50 300 C 200 300, 200 100, 400 100 C 600 100, 600 450, 800 450 C 1000 450, 1000 300, 1050 300" />
                    </g>

                    {/* Main Snaking Thick Path */}
                    <path 
                        d="M -50 200 C 100 200, 100 400, 200 400 C 300 400, 350 300, 450 300 C 550 300, 600 450, 700 450 C 800 450, 850 250, 900 250 C 950 250, 1050 250, 1050 250" 
                        fill="none" 
                        stroke="url(#mainPathGrad)" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        className="opacity-95 dark:opacity-75"
                        filter="url(#glowPathPricing)"
                    />

                    {/* Data Flow Pulse on Path */}
                    <path 
                        d="M -50 200 C 100 200, 100 400, 200 400 C 300 400, 350 300, 450 300 C 550 300, 600 450, 700 450 C 800 450, 850 250, 900 250 C 950 250, 1050 250, 1050 250" 
                        fill="none" 
                        stroke="white" 
                        strokeWidth="4" 
                        strokeDasharray="40 600"
                        strokeLinecap="round"
                        className="motion-gated opacity-90 animate-[flow-dash_5s_linear_infinite]"
                    />

                    {/* Isometric Pedestals & Glowing Cylinders */}
                    {[
                        { x: 200, y: 400, h: 50, color: '#3b82f6', glowColor: '#60a5fa' }, // blue
                        { x: 450, y: 300, h: 40, color: '#1d4ed8', glowColor: '#3b82f6' }, // darker blue
                        { x: 700, y: 450, h: 60, color: '#0ea5e9', glowColor: '#38bdf8' }, // sky
                        { x: 900, y: 250, h: 45, color: '#6366f1', glowColor: '#818cf8' }  // indigo (replaced green)
                    ].map((point, i) => (
                        <g key={i} transform={`translate(${point.x}, ${point.y})`}>
                            {/* Shadow behind pedestal */}
                            <ellipse cx="0" cy="15" rx="35" ry="10" fill="rgba(0,0,0,0.15)" className="dark:fill-black/50" />
                            
                            {/* Isometric Pedestal (Diamond Base) */}
                            <g>
                                {/* Left Face */}
                                <path d="M -30 0 L 0 15 L 0 22 L -30 7 Z" fill="#f8fafc" className="dark:fill-slate-800" stroke="#cbd5e1" strokeWidth="1" />
                                {/* Right Face */}
                                <path d="M 0 15 L 30 0 L 30 7 L 0 22 Z" fill="#e2e8f0" className="dark:fill-slate-900" stroke="#cbd5e1" strokeWidth="1" />
                                {/* Top Face */}
                                <path d="M 0 -15 L 30 0 L 0 15 L -30 0 Z" fill="white" className="dark:fill-slate-700" stroke="#cbd5e1" strokeWidth="1" />

                                {/* Vertical Gradient Definition for Cylinders */}
                                <defs>
                                    <linearGradient id={`cylGrad-${i}`} x1="0%" y1="100%" x2="0%" y2="0%">
                                        <stop offset="0%" stopColor="transparent" />
                                        <stop offset="100%" stopColor={point.glowColor} />
                                    </linearGradient>
                                </defs>

                                {/* The glowing cylinder tube */}
                                <g transform={`translate(0, -5)`}>
                                    {/* Ambient Glow */}
                                    <rect x="-6" y={-(point.h)} width="12" height={point.h} rx="6" fill={`url(#cylGrad-${i})`} className="opacity-50 blur-[2px]" />
                                    {/* Tube Body */}
                                    <rect x="-4" y={-(point.h)} width="8" height={point.h} rx="4" fill={`url(#cylGrad-${i})`} />
                                    {/* Tube Top Cap (bright) */}
                                    <ellipse cx="0" cy={-(point.h)} rx="4" ry="2" fill={point.color} />
                                </g>
                            </g>
                        </g>
                    ))}
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex flex-col items-start text-left">
                <div className="relative z-10 mb-6 flex flex-wrap items-center justify-start gap-3 text-sm text-slate-500 dark:text-slate-400">
                    <PrefetchLink to="/" className="transition-colors duration-500 hover:text-blue-600 dark:hover:text-blue-400">
                        Trang chủ
                    </PrefetchLink>
                    <Icon name="chevron_right" className="text-[14px]" />
                    <span className="text-slate-900 dark:text-slate-200">Bảng giá</span>
                </div>
                <h1 className="max-w-4xl text-4xl sm:text-5xl lg:max-w-none lg:whitespace-nowrap lg:text-[56px] leading-[1.2] lg:leading-[1.1] font-normal tracking-tight mb-6 text-slate-900 dark:text-white transition-colors relative z-10">
                    Đầu tư thông minh cho sự <span className="text-blue-500 dark:text-blue-400">tăng trưởng bền vững.</span>
                </h1>
                <p className="text-base text-slate-500 dark:text-slate-400 max-w-2xl lg:max-w-none lg:whitespace-nowrap font-normal transition-colors relative z-10">
                    Lựa chọn gói giải pháp tối ưu phù hợp với quy mô doanh nghiệp bạn. Minh bạch, hiệu quả và không chi phí ẩn.
                </p>
            </div>

            {/* Bottom Gradient for smooth transition to PricingSection */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white dark:from-slate-950 to-transparent pointer-events-none z-10 transition-colors duration-500"></div>
        </section>
    );
};

export default PricingHero;
