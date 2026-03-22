import React from 'react';
import Icon from '../components/common/Icon';
import Badge from '../components/common/Badge';
import PricingSection from '../components/home/PricingSection';
import PricingFeatures from '../components/home/PricingFeatures';
import PricingFAQ from '../components/home/PricingFAQ';

const Pricing: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-slate-50 pt-32 pb-0 overflow-hidden">
                {/* Ambient Blurry Blobs */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none mix-blend-multiply"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-cyan-300/20 blur-[120px] pointer-events-none mix-blend-multiply"></div>
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-purple-300/10 blur-[100px] pointer-events-none mix-blend-multiply"></div>

                {/* Small Floating Decorations with Animations */}
                <div className="absolute top-[15%] left-[15%] w-2 h-2 bg-blue-500 rounded-full opacity-40 pointer-events-none animate-bounce" style={{ animationDuration: '4s' }}></div>
                <div className="absolute bottom-[25%] right-[15%] border-[1.5px] border-indigo-400 w-3 h-3 rounded-sm opacity-30 rotate-45 pointer-events-none animate-[spin]" style={{ animationDuration: '6s' }}></div>
                <div className="absolute top-[25%] right-[20%] opacity-30 text-blue-600 pointer-events-none animate-pulse" style={{ animationDuration: '3s' }}>
                    <Icon name="payments" className="text-[18px]" />
                </div>
                <div className="absolute bottom-[35%] left-[10%] opacity-30 text-cyan-600 pointer-events-none -rotate-12 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                    <Icon name="trending_up" className="text-[20px]" />
                </div>

                {/* Subtle Grid Pattern Overlay with Animated SVG Beams */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <defs>
                            <linearGradient id="beamGradientPricing" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.35" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                        </defs>

                        <path
                            d="M 20 0 V 30 H 40 V 50 H 15 V 75 H 35 V 100"
                            fill="none"
                            stroke="url(#beamGradientPricing)"
                            strokeWidth="0.04"
                            pathLength="1"
                            strokeDasharray="0.12 0.88"
                            className="animate-grid-dash"
                        />
                        <path
                            d="M 80 0 V 40 H 65 V 70 H 85 V 90 H 70 V 100"
                            fill="none"
                            stroke="url(#beamGradientPricing)"
                            strokeWidth="0.04"
                            pathLength="1"
                            strokeDasharray="0.15 0.85"
                            className="animate-grid-dash"
                            style={{ animationDelay: '2s', animationDuration: '18s' }}
                        />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex flex-col items-center text-center">
                    <Badge variant="primary" className="mb-4 md:mb-5 font-semibold">
                        BẢNG GIÁ DỊCH VỤ
                    </Badge>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] leading-[1.1] font-normal tracking-tight mb-5 text-slate-900">
                        Đầu tư thông minh cho <br className="hidden md:block" /> sự <span className="text-blue-500">tăng trưởng bền vững.</span>
                    </h1>
                    <p className="text-base text-slate-500 max-w-2xl font-normal">
                        Lựa chọn gói giải pháp tối ưu phù hợp với quy mô doanh nghiệp bạn. <br className="hidden md:block" /> Minh bạch, hiệu quả và không chi phí ẩn.
                    </p>
                </div>

                {/* Bottom Gradient for smooth transition */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
            </section>

            {/* Pricing Table Section */}
            <PricingSection hideHeader />

            {/* Detailed Features Accordion */}
            <PricingFeatures />

            {/* FAQ Section using standardized Accordion */}
            <PricingFAQ />
        </div>
    );
};

export default Pricing;
