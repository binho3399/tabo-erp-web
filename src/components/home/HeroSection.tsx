import React from 'react';
import { Icon, Button, Badge } from '@/components/ui';

const HeroSection: React.FC = () => {
    return (
        <section className="relative bg-[#F7F8F8] dark:bg-slate-950 pt-32 pb-16 lg:pt-[164px] lg:pb-24 overflow-hidden min-h-[85vh] lg:min-h-[80vh] flex items-center justify-center">
            {/* Ambient Blurry Blobs */}
            <div className="absolute top-[-10%] left-[-10%] hidden lg:block w-[50%] h-[50%] rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-soft-light"></div>
            <div className="absolute bottom-[-10%] right-[-5%] hidden lg:block w-[40%] h-[40%] rounded-full bg-cyan-300/20 dark:bg-cyan-600/10 blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-soft-light"></div>
            <div className="absolute top-[20%] right-[10%] hidden lg:block w-[30%] h-[30%] rounded-full bg-purple-300/10 dark:bg-purple-600/5 blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-soft-light"></div>

            <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_72%)] lg:hidden"></div>

            {/* Small Floating Decorations with Animations */}
            <div className="absolute top-[15%] left-[15%] hidden lg:block w-2 h-2 bg-blue-500 rounded-full opacity-40 pointer-events-none animate-bounce" style={{ animationDuration: '4s' }}></div>
            <div className="absolute bottom-[25%] right-[15%] hidden lg:block border-[1.5px] border-indigo-400 w-3 h-3 rounded-sm opacity-30 rotate-45 pointer-events-none animate-[spin]" style={{ animationDuration: '6s' }}></div>
            <div className="absolute top-[25%] right-[20%] hidden lg:block opacity-30 text-blue-600 dark:text-blue-400 pointer-events-none animate-pulse" style={{ animationDuration: '3s' }}>
                <Icon name="star" className="text-[18px]" />
            </div>
            <div className="absolute bottom-[35%] left-[10%] hidden lg:block opacity-30 text-cyan-600 dark:text-cyan-400 pointer-events-none -rotate-12 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                <Icon name="change_history" className="text-[20px]" />
            </div>
            <div className="absolute top-[10%] left-[80%] hidden lg:block w-2 h-2 bg-orange-400 rounded-full opacity-40 pointer-events-none animate-pulse" style={{ animationDuration: '2s' }}></div>

            {/* Subtle Grid Pattern Overlay with Animated SVG Beams */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

                <svg className="absolute inset-0 hidden lg:block w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-start lg:items-center">

                {/* Centered Content */}
                <div className="text-left lg:text-center max-w-3xl w-full flex flex-col items-start lg:items-center relative z-20">
                    {/* Sparkles Decoration */}
                    <div className="absolute top-[-100px] left-1/2 hidden lg:block -translate-x-1/2 w-full max-w-[800px] h-[300px] pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent blur-3xl"></div>
                    <Badge variant="primary" className="mb-6 uppercase shadow-sm relative z-10 select-none">
                        HỆ ĐIỀU HÀNH DOANH NGHIỆP
                    </Badge>
                    <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.25] lg:leading-[1.1] font-normal tracking-tight mb-6 text-slate-900 dark:text-white font-sans w-full transition-colors relative z-10">
                        Quản lý <span className="text-blue-500">bán hàng</span> và <br className="hidden md:block" /><span className="text-blue-500">vận hành</span> doanh nghiệp trên <br className="hidden md:block" />một <span className="text-blue-500">nền tảng duy nhất.</span>
                    </h1>

                    <p className="text-base text-slate-500 dark:text-slate-400 mb-6 max-w-2xl font-normal transition-colors relative z-10">
                        Luôn cập nhật dữ liệu tài chính, kho bãi và tiến độ công việc theo thời gian thực <br className="hidden md:block" />để đưa ra các quyết định chiến lược chuẩn xác nhất.
                    </p>

                    <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center justify-start lg:justify-center gap-4 mb-32 lg:mb-20 relative z-10">
                        <Button to="/contact" variant="primary" size="md" className="w-full sm:w-auto text-center justify-center lg:px-10 lg:py-4 lg:text-lg">
                            Bắt đầu ngay
                        </Button>
                        <Button to="/about" variant="outline" size="md" className="w-full sm:w-auto text-center justify-center lg:px-10 lg:py-4 lg:text-lg dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
                            Dùng thử miễn phí
                        </Button>
                    </div>

                    {/* Auto-scrolling Features Ticker */}
                    <div
                        className="relative hidden lg:block w-full max-w-2xl mx-auto overflow-hidden mt-2 z-10"
                        style={{
                            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                        }}
                    >
                        <div className="flex gap-10 whitespace-nowrap animate-[marquee_25s_linear_infinite] w-max">
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex gap-10 items-center">
                                    {[
                                        { text: "Chiến Lược Dữ Liệu", icon: "pie_chart" },
                                        { text: "Kết Quả Thực Tế", icon: "track_changes" },
                                        { text: "Tăng Trưởng Mở Rộng", icon: "trending_up" },
                                        { text: "Chuyên Môn Tin Cậy", icon: "gpp_good" }
                                    ].map((item, index) => (
                                        <div key={`${i}-${index}`} className="flex items-center text-slate-400 dark:text-slate-500 hover:text-primary-600 dark:hover:text-blue-400 transition-colors cursor-default">
                                            <Icon name={item.icon} className="text-[24px] mr-2 opacity-70" />
                                            <span className="font-normal text-base leading-6 uppercase tracking-wider">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-3 lg:hidden">
                        {[
                            { text: "Chiến lược dữ liệu", icon: "pie_chart" },
                            { text: "Kết quả thực tế", icon: "track_changes" },
                            { text: "Tăng trưởng mở rộng", icon: "trending_up" },
                            { text: "Chuyên môn tin cậy", icon: "gpp_good" }
                        ].map((item) => (
                            <div key={item.text} className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 px-4 py-2 text-sm text-slate-500 dark:text-slate-400 shadow-sm">
                                <Icon name={item.icon} className="text-[18px] text-blue-500 dark:text-blue-400" />
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Floating Elements - Positioned relative to max-w-7xl for core content alignment */}
                
                {/* 1. Doanh thu tổng (Light card) */}
                <div className="absolute left-[0%] lg:left-[-2%] top-[-135px] lg:top-[5%] hidden lg:block -rotate-[8deg] bg-white dark:bg-slate-900 p-5 rounded-[20px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] w-[260px] transform transition-transform hover:scale-105 hover:-rotate-3 border border-slate-100/50 dark:border-slate-800 z-0 scale-[0.42] lg:scale-100 pointer-events-none lg:pointer-events-auto origin-left">
                    <div className="flex justify-between items-center mb-1">
                        <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Doanh thu tổng</h4>
                        <span className="text-[10px] text-slate-400">20%</span>
                    </div>
                    <div className="font-bold text-xl text-slate-800 dark:text-white mb-6 flex justify-start items-baseline gap-1">
                        5.230.000 <span className="text-slate-400 font-medium text-[16px] border-b-[1px] border-slate-400 leading-none pb-0.5">đ</span>
                    </div>
                    <div className="flex items-end justify-between gap-1.5 h-20">
                        <div className="w-full bg-blue-300 dark:bg-blue-900 rounded-t-sm h-[30%]"></div>
                        <div className="w-full bg-blue-400 dark:bg-blue-800 rounded-t-sm h-[45%]"></div>
                        <div className="w-full bg-blue-500 dark:bg-blue-700 rounded-t-sm h-[80%]"></div>
                        <div className="w-full bg-blue-400 dark:bg-blue-800 rounded-t-sm h-[60%]"></div>
                        <div className="w-full bg-blue-600 dark:bg-blue-600 rounded-t-sm h-[100%]"></div>
                        <div className="w-full bg-blue-500 dark:bg-blue-700 rounded-t-sm h-[35%]"></div>
                        <div className="w-full bg-blue-300 dark:bg-blue-900 rounded-t-sm h-[20%]"></div>
                    </div>
                    <div className="flex justify-between mt-3 text-[9px] text-slate-400 font-medium px-1">
                        <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                    </div>
                </div>

                {/* 2. Khách hàng hài lòng (Dark card) */}
                <div className="absolute left-[0%] lg:left-[5%] bottom-[15%] lg:bottom-[5%] hidden lg:flex rotate-12 bg-[#1A1A1A] dark:bg-slate-900 p-5 rounded-[20px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] flex-col items-center justify-center w-44 text-center transform transition-transform hover:scale-105 hover:rotate-6 border border-slate-800 z-0 scale-[0.5] lg:scale-100 pointer-events-none lg:pointer-events-auto origin-bottom-left transition-colors">
                    <div className="flex justify-center -space-x-2 mb-3">
                        <img src="https://i.pravatar.cc/100?img=4" alt="User" loading="lazy" className="w-8 h-8 rounded-full border border-[#1A1A1A] dark:border-slate-900 object-cover" />
                        <img src="https://i.pravatar.cc/100?img=5" alt="User" loading="lazy" className="w-8 h-8 rounded-full border border-[#1A1A1A] dark:border-slate-900 object-cover" />
                        <img src="https://i.pravatar.cc/100?img=6" alt="User" loading="lazy" className="w-8 h-8 rounded-full border border-[#1A1A1A] dark:border-slate-900 object-cover" />
                    </div>
                    <h4 className="font-bold text-white text-lg">100K+</h4>
                    <p className="text-[10px] text-slate-400">Khách hàng hài lòng</p>
                </div>

                {/* 3. Sổ quỹ doanh nghiệp (Dark card) */}
                <div className="absolute right-[-2%] lg:right-[-2%] top-[-80px] lg:top-[10%] hidden lg:block rotate-6 bg-[#1A1A1A] dark:bg-slate-900 p-5 rounded-[20px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] w-[280px] transform transition-transform hover:scale-105 hover:rotate-3 border border-slate-800 z-0 scale-[0.45] lg:scale-100 pointer-events-none lg:pointer-events-auto origin-right transition-colors">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-11 h-11 rounded-full border border-blue-500/30 bg-blue-500/10 flex items-center justify-center shrink-0">
                            <Icon name="account_balance_wallet" className="text-blue-400 text-[22px]" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-[15px] leading-tight">Sổ quỹ doanh nghiệp</h4>
                            <p className="text-slate-400 text-[11px] mt-0.5">Tiền mặt & Ngân hàng</p>
                        </div>
                    </div>
                    <div className="w-full h-px bg-slate-700/50 mb-3.5"></div>
                    <p className="text-slate-400 text-[11px] mb-1 uppercase tracking-wider font-semibold">Số dư hiện tại</p>
                    <h3 className="font-bold text-white text-[24px] tracking-tight">
                        4.250.500.000 <span className="text-slate-400 font-medium text-lg ml-0.5">₫</span>
                    </h3>
                </div>

                {/* 4. Mạng lưới chi nhánh (Light card) */}
                <div className="absolute right-[-5%] lg:right-[3%] bottom-[13%] lg:bottom-[5%] hidden lg:block rotate-[-4deg] bg-white dark:bg-slate-900 p-4 rounded-[20px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] w-[230px] transform transition-transform hover:scale-105 hover:-rotate-3 border border-slate-100/50 dark:border-slate-800 z-0 scale-[0.55] lg:scale-100 pointer-events-none lg:pointer-events-auto origin-bottom-right transition-colors">
                    <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-9 h-9 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                            <Icon name="storefront" className="text-indigo-500 dark:text-indigo-400 text-[18px]" />
                        </div>
                        <div>
                            <h4 className="text-slate-800 dark:text-slate-200 text-[13px] font-bold leading-tight">Mạng lưới chi nhánh</h4>
                            <p className="text-slate-400 text-[9px] mt-0.5">Đồng bộ thời gian thực</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 px-2.5 py-2 rounded-lg border border-slate-100 dark:border-slate-700">
                            <span className="text-slate-600 dark:text-slate-400 text-[11px] flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                Chi nhánh HCM
                            </span>
                            <span className="text-slate-800 dark:text-slate-200 text-[11px] font-semibold text-right">Mở cửa</span>
                        </div>
                        <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 px-2.5 py-2 rounded-lg border border-slate-100 dark:border-slate-700">
                            <span className="text-slate-600 dark:text-slate-400 text-[11px] flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                Chi nhánh Hà Nội
                            </span>
                            <span className="text-slate-800 dark:text-slate-200 text-[11px] font-semibold text-right">Mở cửa</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient for smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F7F8F8] dark:from-slate-950 to-transparent pointer-events-none z-10 transition-colors"></div>
        </section>
    );
};

export default HeroSection;
