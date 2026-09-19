import React from 'react';
import SectionContainer from '@/components/common/SectionContainer';
import SurfaceCard from '@/components/common/SurfaceCard';
import { Icon, Badge, Button } from '@/components/ui';
import type { IconName } from '@/components/ui/Icon';

/** Wavy silhouette: varying column heights (% of card). `glow` adds soft pulse + cyan bloom on that line. */
const CTA_STRIPE_LINES: ReadonlyArray<{ h: number; glow: boolean; delayMs?: number }> = [
    { h: 54, glow: true, delayMs: 0 },
    { h: 78, glow: false },
    { h: 42, glow: false },
    { h: 91, glow: true, delayMs: 280 },
    { h: 63, glow: false },
    { h: 86, glow: true, delayMs: 620 },
    { h: 48, glow: false },
    { h: 72, glow: false },
    { h: 95, glow: true, delayMs: 140 },
    { h: 56, glow: false },
    { h: 81, glow: false },
    { h: 67, glow: true, delayMs: 900 },
    { h: 44, glow: false },
    { h: 88, glow: false },
    { h: 59, glow: true, delayMs: 450 },
    { h: 76, glow: false },
];

const StrategySection: React.FC = () => {
    const strategies: Array<{ title: string; desc: string; icon: IconName }> = [
        {
            title: "Kiến trúc dữ liệu lõi",
            desc: "Đồng bộ hóa dữ liệu giữa các phòng ban, xóa bỏ rào cản thông tin và tối ưu hóa quản trị.",
            icon: "layers"
        },
        {
            title: "Tự động hóa quy trình",
            desc: "Giải phóng nhân lực khỏi các công việc lặp lại nhàm chán bằng AI thông minh.",
            icon: "smart_toy"
        },
        {
            title: "Báo cáo đa chiều RT",
            desc: "Hệ thống báo cáo tức thì với Live Data Stream, hỗ trợ ra quyết định chính xác.",
            icon: "insights"
        },
        {
            title: "Khả năng mở rộng vô hạn",
            desc: "Hệ thống sẵn sàng cho hàng triệu giao dịch và tích hợp phân hệ mới dễ dàng.",
            icon: "rocket_launch"
        },
        {
            title: "Bảo mật đa tầng",
            desc: "Bảo vệ thông tin doanh nghiệp với các tiêu chuẩn mã hóa và an ninh hàng đầu.",
            icon: "security"
        },
        {
            title: "Hệ sinh thái API",
            desc: "Kết nối không giới hạn với các nền tảng bên thứ ba thông qua cổng API mạnh mẽ.",
            icon: "api"
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800 relative overflow-hidden text-left transition-colors duration-500">
            <SectionContainer className="relative z-10">
                {/* Section Header Badge */}
                <Badge variant="primary" className="section-kicker">CHIẾN LƯỢC TĂNG TRƯỞNG</Badge>

                {/* Header Row: Split Title & Desc */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] mb-16 items-end">
                    <div className="text-left">
                        <h2 className="section-title mb-4 md:mb-0">
                            Thúc đẩy thành công qua <br />
                            <span className="text-blue-500 dark:text-blue-400 font-normal">quản trị thông minh.</span>
                        </h2>
                    </div>
                    <div className="text-left pb-2">
                        <p className="section-description">
                            Chúng tôi mang đến tư duy quản trị mới, giải pháp thực tiễn và lộ trình triển khai tối ưu giúp mọi quyết định dựa trên dữ liệu thực tế.
                        </p>
                    </div>
                </div>

                {/* Grid Layout inspired by Figure 2: 4 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {strategies.map((item, i) => (
                        <SurfaceCard key={i} className="group p-4 lg:p-6 flex flex-col h-full">
                            <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-500 dark:text-blue-400 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 ease-out shadow-sm mb-4">
                                <Icon name={item.icon} className="text-xl lg:text-2xl" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-[20px] lg:text-[28px] font-normal text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors h-auto lg:h-[68px] flex items-start">
                                    {item.title}
                                </h3>
                                <p className="text-base text-slate-500 dark:text-slate-400 font-normal leading-relaxed transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        </SurfaceCard>
                    ))}

                    {/* Big CTA Card: Spans 2 columns on large screens */}
                    <div className="sm:col-span-2 lg:col-span-2 bg-[#001D3D] dark:bg-slate-900 rounded-[20px] p-4 lg:p-6 relative overflow-hidden flex flex-col group shadow-xl h-full border border-transparent dark:border-slate-800">
                        <div className="relative z-10 text-left pt-2 flex flex-col h-full">
                            <h3 className="text-[20px] lg:text-[28px] font-normal text-white mb-6 leading-[1.2] max-w-sm h-auto lg:h-[68px] flex items-start">
                                Liên hệ tư vấn chiến lược <br /> miễn phí ngay hôm nay
                            </h3>
                            
                            <div className="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 w-full pt-8">
                                {/* Success/Social Proof Widget (Bottom Left) - Creative UI */}
                                <div className="group/widget flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-2.5 pr-6 backdrop-blur-md transition-all duration-500 cursor-default shadow-2xl relative overflow-hidden">
                                    {/* Top reflection line */}
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>
                                    
                                    <div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-blue-500/20 to-blue-600/10 text-blue-400 border border-blue-500/20 flex items-center justify-center group-hover/widget:scale-105 group-hover/widget:text-blue-300 group-hover/widget:bg-blue-500/30 transition-all duration-500 relative">
                                        <Icon name="rocket_launch" className="text-xl transition-transform duration-500 group-hover/widget:-translate-y-1 group-hover/widget:translate-x-1" />
                                        <div className="absolute -top-1 -right-1 flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="flex items-baseline gap-1">
                                            <span className="text-[26px] font-normal text-white tracking-tight leading-none">500</span>
                                            <span className="text-blue-500 font-bold text-xl leading-none">+</span>
                                        </span>
                                        <span className="text-slate-400 text-[13px] font-normal mt-1">
                                            Doanh nghiệp tin dùng
                                        </span>
                                    </div>
                                </div>

                                {/* CTA Button (Bottom Right) */}
                                <Button to="/contact" variant="primary" size="md" className="bg-blue-500 hover:bg-blue-400 border-none px-6 lg:px-10 shadow-lg shadow-blue-500/20 w-full sm:w-fit shrink-0 font-medium">
                                    Đăng ký tư vấn ngay
                                </Button>
                            </div>
                        </div>
                        
                        {/* Wavy vertical stripes (varying height) + random-ish glow pulses */}
                        <div
                            className="absolute inset-0 pointer-events-none overflow-hidden rounded-[20px]"
                            aria-hidden
                        >
                            <div
                                className="absolute inset-y-0 right-0 flex w-[58%] max-w-md items-end justify-end gap-1.5 pr-5 pt-8 pb-0 pl-10 sm:gap-2.5 sm:pr-10 [mask-image:linear-gradient(to_left,black_50%,transparent)]"
                            >
                                {CTA_STRIPE_LINES.map((line, i) => (
                                    <div
                                        key={i}
                                        className="flex h-full min-h-[100px] w-[2px] shrink-0 flex-col justify-end sm:w-[3px]"
                                    >
                                        <div
                                            className={
                                                line.glow
                                                    ? 'w-full origin-bottom rounded-full bg-gradient-to-b from-sky-300/85 via-blue-400/45 to-blue-900/25 shadow-[0_0_10px_rgba(56,189,248,0.5),0_0_22px_rgba(59,130,246,0.18)] motion-safe:animate-cta-line-glow motion-reduce:animate-none'
                                                    : 'w-full origin-bottom rounded-full bg-white/[0.09]'
                                            }
                                            style={{
                                                height: `${line.h}%`,
                                                ...(line.glow && line.delayMs !== undefined
                                                    ? { animationDelay: `${line.delayMs}ms` }
                                                    : {}),
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </section>
    );
};

export default StrategySection;
