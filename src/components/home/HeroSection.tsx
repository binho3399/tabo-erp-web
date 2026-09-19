import React from 'react';
import { Icon, Button, Badge } from '@/components/ui';
import { heroAvatarBadges, heroTickerItems } from '@/content/home';
import { useViewportActivity } from '@/hooks/useViewportActivity';
import { AvatarBadge } from '@/components/home/hero/AvatarBadge';

const HeroSection: React.FC = () => {
    const { ref: sectionRef, isActive } = useViewportActivity<HTMLElement>();

    return (
        <section
            ref={sectionRef}
            data-motion-active={isActive}
            className="relative bg-[#F7F8F8] dark:bg-slate-950 pt-32 pb-16 lg:pt-[164px] lg:pb-24 overflow-hidden min-h-[85vh] lg:min-h-[80vh] flex items-center justify-center"
        >
            {/* Ambient Blurry Blobs */}
            <div className="absolute top-[-8%] left-[-8%] hidden lg:block h-[42%] w-[42%] rounded-full bg-blue-400/16 blur-[88px] pointer-events-none dark:bg-blue-600/8"></div>
            <div className="absolute bottom-[-8%] right-[-4%] hidden lg:block h-[34%] w-[34%] rounded-full bg-cyan-300/14 blur-[80px] pointer-events-none dark:bg-cyan-600/8"></div>

            <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_72%)] lg:hidden"></div>

            {/* Small Floating Decorations with Animations */}
            <div className="motion-gated absolute top-[18%] left-[16%] hidden lg:block w-2 h-2 bg-blue-500 rounded-full opacity-35 pointer-events-none animate-bounce" style={{ animationDuration: '5s' }}></div>
            <div className="motion-gated absolute top-[25%] right-[20%] hidden lg:block opacity-25 text-blue-600 dark:text-blue-400 pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}>
                <Icon name="star" className="text-[18px]" />
            </div>

            {/* Subtle Grid Pattern Overlay with Animated SVG Beams */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="ambient-grid absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"></div>

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
                        d="M 45 0 V 15 H 55 V 35 H 40 V 60 H 60 V 80 H 50 V 100"
                        fill="none"
                        stroke="url(#beamGradient)"
                        strokeWidth="0.025"
                        pathLength="1"
                        strokeDasharray="0.1 0.9"
                        className="motion-gated animate-grid-dash"
                        style={{ animationDelay: '6s', animationDuration: '25s' }}
                    />
                    <path
                        d="M 65 0 V 45 H 55 V 100"
                        fill="none"
                        stroke="url(#beamGradient)"
                        strokeWidth="0.025"
                        pathLength="1"
                        strokeDasharray="0.08 0.92"
                        className="motion-gated animate-grid-dash"
                        style={{ animationDelay: '9s', animationDuration: '30s' }}
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-start lg:items-center">

                {/* Centered Content */}
                <div className="text-left lg:text-center max-w-3xl w-full flex flex-col items-start lg:items-center relative z-20">
                    {/* Sparkles Decoration */}
                    <div className="absolute top-[-90px] left-1/2 hidden lg:block -translate-x-1/2 w-full max-w-[700px] h-[240px] pointer-events-none opacity-16 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent blur-2xl"></div>
                    <Badge variant="primary" className="mb-4 uppercase shadow-sm relative z-10 select-none">
                        HỆ ĐIỀU HÀNH DOANH NGHIỆP
                    </Badge>
                    <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.25] lg:leading-[1.1] font-normal tracking-tight mb-4 text-slate-900 dark:text-white font-sans w-full transition-colors relative z-10">
                        Quản lý <span className="text-blue-500">bán hàng</span> và <br className="hidden md:block" /><span className="text-blue-500">vận hành</span> doanh nghiệp trên <br className="hidden md:block" />một <span className="text-blue-500">nền tảng duy nhất.</span>
                    </h1>

                    <p className="text-base text-slate-500 dark:text-slate-400 mb-6 max-w-2xl font-normal transition-colors relative z-10">
                        Luôn cập nhật dữ liệu tài chính, kho bãi và tiến độ công việc theo thời gian thực <br className="hidden md:block" />để đưa ra các quyết định chiến lược chuẩn xác nhất.
                    </p>

                    <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center justify-start lg:justify-center gap-4 mb-8 lg:mb-20 relative z-10">
                        <Button to="/contact" variant="primary" size="md" className="w-full sm:w-auto text-center justify-center lg:px-10 lg:py-4 lg:text-lg">
                            Bắt đầu ngay
                        </Button>
                        <Button to="/about" variant="outline" size="md" className="w-full sm:w-auto text-center justify-center lg:px-10 lg:py-4 lg:text-lg dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
                            Dùng thử miễn phí
                        </Button>
                    </div>

                    {/* Auto-scrolling Features Ticker */}
                    <div
                        className="relative w-full max-w-2xl mx-auto overflow-hidden mt-2 z-10"
                        style={{
                            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                        }}
                    >
                        <div
                            className="motion-gated flex gap-6 lg:gap-10 whitespace-nowrap animate-[marquee_25s_linear_infinite] w-max"
                            style={{ animationPlayState: isActive ? 'running' : 'paused' }}
                        >
                            {Array.from({ length: 2 }).map((_, i) => (
                                <div key={i} className="flex gap-6 lg:gap-10 items-center">
                                    {heroTickerItems.map((item, index) => (
                                        <div key={`${i}-${index}`} className="flex items-center text-slate-400 dark:text-slate-500 hover:text-primary-600 dark:hover:text-blue-400 transition-colors cursor-default">
                                            <Icon name={item.icon} className="text-[18px] lg:text-[24px] mr-2 opacity-70" />
                                            <span className="font-normal text-sm lg:text-base leading-6 uppercase tracking-[0.18em] lg:tracking-wider">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-[124px] w-full lg:hidden mt-6 overflow-visible">
                        <div className="absolute inset-x-0 bottom-[-74px] flex items-end justify-center">
                            <div className="relative h-[230px] w-full max-w-[392px]">
                                <div className="absolute left-1/2 bottom-6 z-10 w-[168px] -translate-x-[156px] rotate-[-14deg] rounded-[18px] border border-slate-100/80 bg-white p-3 shadow-[0_18px_36px_-18px_rgba(15,23,42,0.14)] dark:border-[#2B4E7A]/45 dark:bg-[#0F1D35]/80 dark:shadow-[0_14px_34px_rgba(7,18,38,0.55)]">
                                    <div className="mb-1 flex items-center justify-between">
                                        <h4 className="text-[10px] font-bold text-slate-800 dark:text-[#EAF2FF]">Doanh thu tổng</h4>
                                        <span className="text-[9px] text-slate-400 dark:text-[#9FB5D1]">20%</span>
                                    </div>
                                    <div className="flex items-baseline gap-1 text-slate-800 dark:text-[#EAF2FF]">
                                        <span className="text-[22px] font-bold leading-none">5.23</span>
                                        <span className="text-[10px] font-medium text-slate-400 dark:text-[#9FB5D1]">triệu đ</span>
                                    </div>
                                    <div className="mt-2.5 flex h-8 items-end justify-between gap-1">
                                        <div className="h-[30%] w-full rounded-t-sm bg-blue-300 dark:bg-[#1D4ED8]/60"></div>
                                        <div className="h-[45%] w-full rounded-t-sm bg-blue-400 dark:bg-[#2563EB]/65"></div>
                                        <div className="h-[80%] w-full rounded-t-sm bg-blue-500 dark:bg-[#2563EB]/80"></div>
                                        <div className="h-[60%] w-full rounded-t-sm bg-blue-400 dark:bg-[#1D4ED8]/70"></div>
                                        <div className="h-[100%] w-full rounded-t-sm bg-blue-600 dark:bg-[#2563EB]"></div>
                                    </div>
                                </div>

                                <div className="absolute left-1/2 bottom-8 z-20 flex w-[168px] -translate-x-[96px] rotate-[-5deg] flex-col items-center justify-center rounded-[18px] border border-slate-800 bg-[#1A1A1A] p-3 text-center text-white shadow-[0_22px_40px_-20px_rgba(15,23,42,0.4)] dark:border-[#2B4E7A]/45 dark:bg-[#0F1D35]/80 dark:shadow-[0_14px_34px_rgba(7,18,38,0.55)]">
                                    <div className="mb-2.5 flex justify-center -space-x-2">
                                        {heroAvatarBadges.map((avatar) => (
                                            <AvatarBadge key={avatar.initials} initials={avatar.initials} className={`${avatar.className} text-[9px]`} sizeClassName="h-6 w-6" />
                                        ))}
                                    </div>
                                    <h4 className="text-[22px] font-bold leading-none">100K+</h4>
                                    <p className="mt-1 text-[10px] text-slate-400 dark:text-[#9FB5D1]">Khách hàng hài lòng</p>
                                </div>

                                <div className="absolute left-1/2 bottom-10 z-30 w-[184px] -translate-x-1/2 rounded-[20px] border border-slate-800 bg-[#1A1A1A] p-3 shadow-[0_28px_48px_-24px_rgba(15,23,42,0.45)] dark:border-[#2B4E7A]/45 dark:bg-[#0F1D35]/80 dark:shadow-[0_14px_34px_rgba(7,18,38,0.55)]">
                                    <div className="mb-2.5 flex items-start gap-2.5">
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sky-400/40 bg-sky-400/15 dark:border-[#38BDF8]/45 dark:bg-[#38BDF8]/18">
                                            <Icon name="account_balance_wallet" className="text-[16px] text-sky-400 dark:text-[#7DC3FF]" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-[9px] uppercase tracking-[0.16em] text-slate-400 dark:text-[#9FB5D1]">Sổ quỹ doanh nghiệp</p>
                                            <p className="mt-1 text-[17px] font-bold leading-none tracking-tight text-white dark:text-[#EAF2FF]">
                                                4.25B <span className="text-[11px] font-medium text-slate-400 dark:text-[#9FB5D1]">₫</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rounded-2xl bg-slate-800/80 px-2.5 py-2 dark:bg-[#13284A]/78">
                                        <div className="flex items-center justify-between">
                                            <span className="max-w-[84px] text-[10px] leading-[1.2] text-slate-400 dark:text-[#9FB5D1]">Ngân quỹ ổn định</span>
                                            <span className="text-[10px] font-semibold text-emerald-600 dark:text-[#34D399]">+20%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute left-1/2 bottom-6 z-20 w-[170px] translate-x-[12px] rotate-[12deg] rounded-[18px] border border-slate-100/80 bg-white p-3 shadow-[0_18px_36px_-18px_rgba(15,23,42,0.14)] dark:border-[#2B4E7A]/45 dark:bg-[#0F1D35]/80 dark:shadow-[0_14px_34px_rgba(7,18,38,0.55)]">
                                    <div className="mb-2.5 flex items-center gap-2">
                                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-50 dark:bg-[#6366F1]/18">
                                            <Icon name="storefront" className="text-[14px] text-indigo-500 dark:text-[#8B5CF6]" />
                                        </div>
                                        <div>
                                            <h4 className="text-[11px] font-bold leading-tight text-slate-800 dark:text-[#EAF2FF]">Mạng lưới</h4>
                                            <p className="text-[9px] text-slate-400 dark:text-[#9FB5D1]">Chi nhánh đồng bộ</p>
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <div className="flex items-center justify-between rounded-lg bg-slate-50 px-2 py-1.5 text-[10px] dark:bg-[#13284A]/78">
                                            <span className="flex items-center gap-1 text-slate-600 dark:text-[#9FB5D1]">
                                                <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                                HCM
                                            </span>
                                            <span className="font-semibold text-emerald-600 dark:text-[#34D399]">Mở cửa</span>
                                        </div>
                                        <div className="flex items-center justify-between rounded-lg bg-slate-50 px-2 py-1.5 text-[10px] dark:bg-[#13284A]/78">
                                            <span className="flex items-center gap-1 text-slate-600 dark:text-[#9FB5D1]">
                                                <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                                Hà Nội
                                            </span>
                                            <span className="font-semibold text-emerald-600 dark:text-[#34D399]">Mở cửa</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Floating Elements - Positioned relative to max-w-7xl for core content alignment */}
                
                {/* 1. Doanh thu tổng (Light card) */}
                <div className="absolute left-[0%] lg:left-[-2%] top-[-135px] lg:top-[5%] hidden lg:block -rotate-[8deg] bg-white p-5 rounded-[20px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] w-[260px] transform transition-transform hover:scale-105 hover:-rotate-3 border border-slate-100/50 dark:border-[#2B4E7A]/45 dark:bg-[#0F1D35]/80 dark:shadow-[0_14px_34px_rgba(7,18,38,0.55)] z-0 scale-[0.42] lg:scale-100 pointer-events-none lg:pointer-events-auto origin-left">
                    <div className="flex justify-between items-center mb-1">
                        <h4 className="font-bold text-slate-800 dark:text-[#EAF2FF] text-sm">Doanh thu tổng</h4>
                        <span className="text-[10px] text-slate-400 dark:text-[#9FB5D1]">20%</span>
                    </div>
                    <div className="font-bold text-xl text-slate-800 dark:text-[#EAF2FF] mb-6 flex justify-start items-baseline gap-1">
                        5.230.000 <span className="text-slate-400 dark:text-[#9FB5D1] font-medium text-[16px] border-b-[1px] border-slate-400 dark:border-[#9FB5D1] leading-none pb-0.5">đ</span>
                    </div>
                    <div className="flex items-end justify-between gap-1.5 h-20">
                        <div className="w-full bg-blue-300 dark:bg-[#1D4ED8]/60 rounded-t-sm h-[30%]"></div>
                        <div className="w-full bg-blue-400 dark:bg-[#2563EB]/65 rounded-t-sm h-[45%]"></div>
                        <div className="w-full bg-blue-500 dark:bg-[#2563EB]/80 rounded-t-sm h-[80%]"></div>
                        <div className="w-full bg-blue-400 dark:bg-[#1D4ED8]/70 rounded-t-sm h-[60%]"></div>
                        <div className="w-full bg-blue-600 dark:bg-[#2563EB] rounded-t-sm h-[100%]"></div>
                        <div className="w-full bg-blue-500 dark:bg-[#2563EB]/75 rounded-t-sm h-[35%]"></div>
                        <div className="w-full bg-blue-300 dark:bg-[#1D4ED8]/55 rounded-t-sm h-[20%]"></div>
                    </div>
                    <div className="flex justify-between mt-3 text-[9px] text-slate-400 dark:text-[#9FB5D1] font-medium px-1">
                        <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                    </div>
                </div>

                {/* 2. Khách hàng hài lòng (Dark card) */}
                <div className="absolute left-[0%] lg:left-[5%] bottom-[15%] lg:bottom-[5%] hidden lg:flex rotate-12 bg-[#1A1A1A] p-5 rounded-[20px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] flex-col items-center justify-center w-44 text-center transform transition-transform hover:scale-105 hover:rotate-6 border border-slate-800 dark:border-[#2B4E7A]/45 dark:bg-[#0F1D35]/80 dark:shadow-[0_14px_34px_rgba(7,18,38,0.55)] z-0 scale-[0.5] lg:scale-100 pointer-events-none lg:pointer-events-auto origin-bottom-left transition-colors">
                    <div className="flex justify-center -space-x-2 mb-3">
                        {heroAvatarBadges.map((avatar) => (
                            <AvatarBadge key={avatar.initials} initials={avatar.initials} className={`${avatar.className} text-xs`} sizeClassName="h-8 w-8" />
                        ))}
                    </div>
                    <h4 className="font-bold text-white dark:text-[#EAF2FF] text-lg">100K+</h4>
                    <p className="text-[10px] text-slate-400 dark:text-[#9FB5D1]">Khách hàng hài lòng</p>
                </div>

                {/* 3. Sổ quỹ doanh nghiệp (Dark card) */}
                <div className="absolute right-[-2%] lg:right-[-2%] top-[-80px] lg:top-[10%] hidden lg:block rotate-6 bg-[#1A1A1A] p-5 rounded-[20px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] w-[280px] transform transition-transform hover:scale-105 hover:rotate-3 border border-slate-800 dark:border-[#2B4E7A]/45 dark:bg-[#0F1D35]/80 dark:shadow-[0_14px_34px_rgba(7,18,38,0.55)] z-0 scale-[0.45] lg:scale-100 pointer-events-none lg:pointer-events-auto origin-right transition-colors">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-11 h-11 rounded-full border border-sky-400/40 bg-sky-400/15 dark:border-[#38BDF8]/45 dark:bg-[#38BDF8]/18 flex items-center justify-center shrink-0">
                            <Icon name="account_balance_wallet" className="text-sky-400 dark:text-[#7DC3FF] text-[22px]" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white dark:text-[#EAF2FF] text-[15px] leading-tight">Sổ quỹ doanh nghiệp</h4>
                            <p className="text-slate-400 dark:text-[#9FB5D1] text-[11px] mt-0.5">Tiền mặt & Ngân hàng</p>
                        </div>
                    </div>
                    <div className="w-full h-px bg-slate-700/50 dark:bg-[#2B4E7A]/45 mb-3.5"></div>
                    <p className="text-slate-400 dark:text-[#9FB5D1] text-[11px] mb-1 uppercase tracking-wider font-semibold">Số dư hiện tại</p>
                    <h3 className="font-bold text-white dark:text-[#EAF2FF] text-[24px] tracking-tight">
                        4.250.500.000 <span className="text-slate-400 dark:text-[#9FB5D1] font-medium text-lg ml-0.5">₫</span>
                    </h3>
                </div>

                {/* 4. Mạng lưới chi nhánh (Light card) */}
                <div className="absolute right-[-5%] lg:right-[3%] bottom-[13%] lg:bottom-[5%] hidden lg:block rotate-[-4deg] bg-white p-4 rounded-[20px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] w-[230px] transform transition-transform hover:scale-105 hover:-rotate-3 border border-slate-100/50 dark:border-[#2B4E7A]/45 dark:bg-[#0F1D35]/80 dark:shadow-[0_14px_34px_rgba(7,18,38,0.55)] z-0 scale-[0.55] lg:scale-100 pointer-events-none lg:pointer-events-auto origin-bottom-right transition-colors">
                    <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-9 h-9 rounded-full bg-indigo-50 dark:bg-[#6366F1]/18 flex items-center justify-center shrink-0">
                            <Icon name="storefront" className="text-indigo-500 dark:text-[#8B5CF6] text-[18px]" />
                        </div>
                        <div>
                            <h4 className="text-slate-800 dark:text-[#EAF2FF] text-[13px] font-bold leading-tight">Mạng lưới chi nhánh</h4>
                            <p className="text-slate-400 dark:text-[#9FB5D1] text-[9px] mt-0.5">Đồng bộ thời gian thực</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between bg-slate-50 dark:bg-[#13284A]/78 px-2.5 py-2 rounded-lg border border-slate-100 dark:border-[#2B4E7A]/40">
                            <span className="text-slate-600 dark:text-[#9FB5D1] text-[11px] flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                Chi nhánh HCM
                            </span>
                            <span className="text-slate-800 dark:text-[#EAF2FF] text-[11px] font-semibold text-right">Mở cửa</span>
                        </div>
                        <div className="flex items-center justify-between bg-slate-50 dark:bg-[#13284A]/78 px-2.5 py-2 rounded-lg border border-slate-100 dark:border-[#2B4E7A]/40">
                            <span className="text-slate-600 dark:text-[#9FB5D1] text-[11px] flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                Chi nhánh Hà Nội
                            </span>
                            <span className="text-slate-800 dark:text-[#EAF2FF] text-[11px] font-semibold text-right">Mở cửa</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient for smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-[#FBFCFE] to-transparent dark:from-slate-950 dark:via-slate-950/92 dark:to-transparent pointer-events-none z-10 transition-colors"></div>
        </section>
    );
};

export default HeroSection;
