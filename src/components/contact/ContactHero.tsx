import React from 'react';
import { Icon, Badge } from '@/components/ui';

const ContactHero: React.FC = () => {
    return (
        <section className="relative bg-[#F7F8F8] dark:bg-slate-950 pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden min-h-[40vh] flex items-center justify-center transition-colors duration-500">
            {/* Ambient Blurry Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen transition-all duration-700"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-cyan-300/20 dark:bg-cyan-600/10 blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen transition-all duration-700"></div>
            <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-purple-300/10 dark:bg-purple-600/5 blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen transition-all duration-700"></div>

            {/* Small Floating Decorations with Animations */}
            <div className="absolute top-[15%] left-[15%] w-2 h-2 bg-blue-500 rounded-full opacity-40 pointer-events-none animate-bounce" style={{ animationDuration: '4s' }}></div>
            <div className="absolute bottom-[25%] right-[15%] border-[1.5px] border-indigo-400 w-3 h-3 rounded-sm opacity-30 rotate-45 pointer-events-none animate-[spin]" style={{ animationDuration: '6s' }}></div>
            <div className="absolute top-[25%] right-[20%] opacity-30 text-blue-600 pointer-events-none animate-pulse" style={{ animationDuration: '3s' }}>
                <Icon name="star" className="text-[18px]" />
            </div>
            <div className="absolute bottom-[35%] left-[10%] opacity-30 text-cyan-600 pointer-events-none -rotate-12 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                <Icon name="change_history" className="text-[20px]" />
            </div>
            <div className="absolute top-[10%] left-[80%] w-2 h-2 bg-orange-400 rounded-full opacity-40 pointer-events-none animate-pulse" style={{ animationDuration: '2s' }}></div>

            {/* Decorative Background Layer - Option 1: The Connective Pulse */}
            <div 
                className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
                style={{
                    maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
                }}
            >
                {/* Subtle Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

                {/* Central Radar Pulse Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-60 dark:opacity-40 animate-breathing">
                    <div className="absolute w-[300px] h-[300px] border border-blue-400/40 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
                    <div className="absolute w-[600px] h-[600px] border border-blue-400/20 rounded-full animate-ping" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
                    <div className="absolute w-[900px] h-[900px] border border-blue-400/10 rounded-full animate-ping" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
                </div>

                {/* Network Nodes & Connecting Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full animate-breathing" preserveAspectRatio="none" viewBox="0 0 100 100" style={{ animationDuration: '10s' }}>
                    <defs>
                        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                        </radialGradient>
                    </defs>

                    {/* Connection Lines (Static/Subtle) */}
                    <g className="stroke-blue-500/15 dark:stroke-blue-400/10" strokeWidth="0.1" fill="none">
                        <path id="path1" d="M 10 20 L 25 45 L 15 75 L 30 85" />
                        <path id="path2" d="M 85 15 L 70 50 L 90 85 L 75 95" />
                        <path id="path3" d="M 5 60 L 20 80 L 50 65 L 80 80 L 95 65" />
                        <path id="path4" d="M 45 5 L 55 40 L 40 90" />
                        <path id="path5" d="M 30 10 L 15 30 L 40 45 L 60 30 L 80 15" />
                    </g>

                    {/* Animated Data Pulses (Tia sáng chạy trên line) */}
                    <g className="stroke-blue-400/50 dark:stroke-blue-400/30" strokeWidth="0.2" fill="none" strokeDasharray="0.05 0.95" pathLength="1">
                        <path d="M 10 20 L 25 45 L 15 75 L 30 85" className="animate-grid-dash" style={{ animationDuration: '4s' }} />
                        <path d="M 85 15 L 70 50 L 90 85 L 75 95" className="animate-grid-dash" style={{ animationDuration: '6s', animationDelay: '1s' }} />
                        <path d="M 5 60 L 20 80 L 50 65 L 80 80 L 95 65" className="animate-grid-dash" style={{ animationDuration: '8s', animationDelay: '2s' }} />
                        <path d="M 45 5 L 55 40 L 40 90" className="animate-grid-dash" style={{ animationDuration: '5s', animationDelay: '3s' }} />
                        <path d="M 30 10 L 15 30 L 40 45 L 60 30 L 80 15" className="animate-grid-dash" style={{ animationDuration: '7s', animationDelay: '0.5s' }} />
                    </g>

                    {/* Moving Nodes (Data Particles traveling along paths) */}
                    {[1, 2, 3, 4, 5].map((id) => (
                        <circle key={id} r="0.6" fill="url(#nodeGlow)" className="opacity-80">
                            <animateMotion 
                                dur={`${3 + id}s`} 
                                repeatCount="indefinite" 
                                rotate="auto" 
                                path={
                                    id === 1 ? "M 10 20 L 25 45 L 15 75 L 30 85" :
                                    id === 2 ? "M 85 15 L 70 50 L 90 85 L 75 95" :
                                    id === 3 ? "M 5 60 L 20 80 L 50 65 L 80 80 L 95 65" :
                                    id === 4 ? "M 45 5 L 55 40 L 40 90" :
                                    "M 30 10 L 15 30 L 40 45 L 60 30 L 80 15"
                                }
                                begin={`${id * 0.5}s`}
                            />
                        </circle>
                    ))}

                    {/* Pulse Nodes (Static glowing dots at intersections) */}
                    {[
                        { x: 10, y: 20 }, { x: 25, y: 45 }, { x: 15, y: 75 }, { x: 30, y: 85 },
                        { x: 85, y: 15 }, { x: 70, y: 50 }, { x: 90, y: 85 }, { x: 75, y: 95 },
                        { x: 5, y: 60 }, { x: 20, y: 80 }, { x: 50, y: 65 }, { x: 80, y: 80 }, { x: 95, y: 65 },
                        { x: 45, y: 5 }, { x: 55, y: 40 }, { x: 40, y: 90 },
                        { x: 30, y: 10 }, { x: 15, y: 30 }, { x: 40, y: 45 }, { x: 60, y: 30 }, { x: 80, y: 15 }
                    ].map((node, i) => (
                        <circle 
                            key={i} 
                            cx={`${node.x}%`} 
                            cy={`${node.y}%`} 
                            r="0.5" 
                            fill="url(#nodeGlow)" 
                            className="animate-pulse opacity-60"
                            style={{ animationDelay: `${i * 0.2}s`, animationDuration: '4s' }}
                        />
                    ))}
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex flex-col items-center text-center mt-8 lg:mt-0">
                {/* Sparkles Decoration */}
                <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent blur-3xl"></div>
                
                <Badge variant="primary" className="mb-6 uppercase shadow-sm relative z-10 select-none">
                    LIÊN HỆ
                </Badge>

                <h1 className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.2] lg:leading-[1.1] font-normal tracking-tight mb-6 text-slate-900 dark:text-white transition-colors relative z-10">
                    Sẵn sàng hỗ trợ <br className="md:hidden" /> <span className="text-blue-500 dark:text-blue-400">doanh nghiệp bạn.</span>
                </h1>
                <p className="text-base text-slate-500 dark:text-slate-400 max-w-2xl font-normal transition-colors">
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
