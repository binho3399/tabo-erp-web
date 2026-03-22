import React from 'react';
import Icon from '../common/Icon';

const ContactHero: React.FC = () => {
    return (
        <section className="relative bg-slate-50 pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden min-h-[40vh] flex items-center justify-center">
            {/* Ambient Blurry Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none mix-blend-multiply"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-cyan-300/20 blur-[120px] pointer-events-none mix-blend-multiply"></div>
            <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-purple-300/10 blur-[100px] pointer-events-none mix-blend-multiply"></div>

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

            {/* Subtle Grid Pattern Overlay with Animated SVG Beams */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <defs>
                        <linearGradient id="beamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>

                    {/* Randomized snaking paths flowing top-to-bottom */}
                    <path
                        d="M 15 0 V 25 H 30 V 45 H 10 V 70 H 25 V 100"
                        fill="none"
                        stroke="url(#beamGradient)"
                        strokeWidth="0.04"
                        pathLength="1"
                        strokeDasharray="0.12 0.88"
                        className="animate-grid-dash"
                    />
                    <path
                        d="M 85 0 V 35 H 70 V 65 H 90 V 85 H 75 V 100"
                        fill="none"
                        stroke="url(#beamGradient)"
                        strokeWidth="0.04"
                        pathLength="1"
                        strokeDasharray="0.15 0.85"
                        className="animate-grid-dash"
                        style={{ animationDelay: '3s', animationDuration: '20s' }}
                    />
                    <path
                        d="M 45 0 V 15 H 55 V 35 H 40 V 60 H 60 V 80 H 50 V 100"
                        fill="none"
                        stroke="url(#beamGradient)"
                        strokeWidth="0.025"
                        pathLength="1"
                        strokeDasharray="0.1 0.9"
                        className="animate-grid-dash"
                        style={{ animationDelay: '6s', animationDuration: '25s' }}
                    />
                    <path
                        d="M 65 0 V 45 H 55 V 100"
                        fill="none"
                        stroke="url(#beamGradient)"
                        strokeWidth="0.025"
                        pathLength="1"
                        strokeDasharray="0.08 0.92"
                        className="animate-grid-dash"
                        style={{ animationDelay: '9s', animationDuration: '30s' }}
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex flex-col items-start text-left lg:items-center lg:text-center mt-8 lg:mt-0">
                {/* Sparkles Decoration */}
                <div className="absolute top-[-100px] left-0 lg:left-1/2 lg:-translate-x-1/2 w-full max-w-[800px] h-[300px] pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent blur-3xl"></div>
                <span className="bg-blue-50 text-blue-700 border border-blue-100 font-semibold tracking-wide text-xs px-4 py-1.5 rounded-full mb-4 md:mb-5 inline-flex items-center shadow-sm">
                    LIÊN HỆ
                </span>
                <h1 className="text-[32px] md:text-5xl lg:text-[56px] leading-[1.2] lg:leading-[1.1] font-normal tracking-tight mb-4 lg:mb-5 text-slate-900">
                    Sẵn sàng hỗ trợ <br className="md:hidden" /> <span className="text-blue-500">doanh nghiệp bạn.</span>
                </h1>
                <p className="text-base text-slate-500 max-w-2xl font-normal">
                    Dù bạn có thắc mắc về tính năng, giá cả, hay cần tư vấn giải pháp quản trị,
                    đội ngũ chuyên gia từ Tabo luôn sẵn lòng giải đáp.
                </p>
            </div>

            {/* Bottom Gradient for smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none z-10"></div>
        </section>
    );
};

export default ContactHero;
