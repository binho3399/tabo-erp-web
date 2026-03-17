import React from 'react';
import Icon from '../common/Icon';
import Button from '../common/Button';
import Badge from '../common/Badge';

const PricingSection: React.FC = () => {
    type Plan = {
        name: string;
        tagline: string;
        price: string;
        period: string;
        desc: string;
        buttonText: string;
        variant: "secondary" | "primary" | "outline";
        highlight?: boolean;
        features: string[];
    };

    const plans: Plan[] = [
        {
            name: "Gói Miễn Phí",
            tagline: "Gói khởi đầu",
            price: "0đ",
            period: "/ mãi mãi",
            desc: "Giải pháp cơ bản cho hộ kinh doanh nhỏ.",
            buttonText: "Bắt đầu ngay",
            variant: "secondary",
            features: [
                "1 kênh bán",
                "Chỉ POS Lẻ",
                "1 Kho tự quản",
                "Sổ tay truyền thống",
                "Thủ công cơ bản",
                "-",
                "Tiêu chuẩn",
                "Cộng đồng hỗ trợ"
            ]
        },
        {
            name: "Gói Doanh Nghiệp",
            tagline: "Gói toàn diện",
            price: "Liên hệ",
            period: "",
            desc: "Giải pháp ERP may đo cho tập đoàn lớn.",
            buttonText: "Liên hệ tư vấn",
            variant: "primary",
            highlight: true,
            features: [
                "Đa nền tảng (Shopee, Web,...)",
                "POS Sỉ & Lẻ, nhiều giá",
                "Đồng bộ đa chi nhánh",
                "Smart Banking tự động",
                "Kết nối Hãng VC & Đối soát",
                "Zalo ZNS, Phân hạng KH",
                "Dashboard Real-time 360°",
                "Chuyên gia riêng & Mở API"
            ]
        }
    ];

    const comparisonFeatures = [
        "Quản lý Đơn hàng Đa kênh",
        "Hệ thống POS Sỉ & Lẻ",
        "Kho bãi & Chuỗi cung ứng",
        "Sổ Quỹ & Đối soát tự động",
        "Vận chuyển & Giao nhận",
        "Chăm sóc KH (CRM/Loyalty)",
        "Báo cáo & Phân tích Đa chiều",
        "Hỗ trợ & API Thiết kế riêng"
    ];

    return (
        <section className="py-32 bg-white relative overflow-clip">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <Badge variant="primary" className="mb-5 uppercase">Bảng giá minh bạch</Badge>
                    <h3 className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15]">
                        Đầu tư thông minh cho <br /><span className="text-blue-500">tương lai doanh nghiệp.</span>
                    </h3>
                </div>

                {/* Main Grid Layout */}
                <div className="relative">
                    {/* Header Row with Plan Cards */}
                    <div className="md:sticky md:top-[72px] z-40 md:bg-white/95 md:backdrop-blur-md pt-6 pb-6 grid grid-cols-1 md:grid-cols-[22%_1fr_1fr] gap-6 lg:gap-8 mb-2 border-b border-transparent">
                        {/* Title corner */}
                        <div className="hidden md:flex flex-col justify-end pb-8">
                            <h4 className="text-[16px] font-semibold text-slate-900 tracking-tight">Tính năng chi tiết</h4>
                        </div>

                        {plans.map((plan, idx) => (
                            <div
                                key={idx}
                                className={`rounded-[20px] p-6 flex flex-col relative transition-all duration-500 hover:-translate-y-1 ${plan.highlight
                                        ? 'bg-[#0F172A] text-white shadow-[0_20px_50px_-15px_rgba(37,99,235,0.4)]'
                                        : 'bg-white shadow-md hover:shadow-xl text-slate-900'
                                    }`}
                            >
                                {plan.highlight && (
                                    <>
                                        {/* Creative Background Effects Wrapper */}
                                        <div className="absolute inset-0 rounded-[20px] overflow-hidden pointer-events-none">
                                            {/* Base dark gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-[#020617]"></div>
                                            
                                            {/* Animated Glowing Orbs */}
                                            <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] bg-blue-600/30 rounded-full blur-[80px]"></div>
                                            <div className="absolute bottom-[10%] -left-[20%] w-[60%] h-[60%] bg-indigo-600/20 rounded-full blur-[80px]"></div>
                                            
                                            {/* Premium Grid Pattern - using CSS gradient for reliable rendering */}
                                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)] opacity-80"></div>
                                            
                                            {/* Glassmorphism Border Reflections */}
                                            <div className="absolute inset-0 rounded-[20px] border border-white/10 mix-blend-overlay"></div>
                                            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"></div>
                                        </div>

                                        {/* Magic Border Badge */}
                                        <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 z-30 group">
                                            <div className="relative flex items-center justify-center p-[1.5px] rounded-full overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.6)]">
                                                {/* Rotating Beam */}
                                                <div className="absolute w-[400%] h-[400%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_280deg,white_360deg)] opacity-100" />
                                                
                                                {/* Badge Content */}
                                                <span className="relative z-10 bg-blue-600 text-white text-[10px] font-bold px-5 py-[5.5px] rounded-full uppercase tracking-widest">
                                                    Đề xuất
                                                </span>
                                            </div>
                                        </div>
                                    </>
                                )}

                                <div className="relative z-10 h-full flex flex-col justify-between gap-8">
                                    <div className="flex justify-between items-center gap-4">
                                        <div className="flex-1">
                                            <h5 className="text-[28px] font-normal tracking-tight">{plan.name}</h5>
                                            <p className={`text-[12px] font-normal leading-relaxed ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                                                {plan.desc}
                                            </p>
                                        </div>

                                        <div className="flex flex-col items-end">
                                            <div className="flex items-baseline gap-1">
                                                <span className={`text-4xl lg:text-5xl font-normal tracking-tighter ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                                                    {plan.price}
                                                </span>
                                                <span className={`text-sm font-normal ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                                                    {plan.period}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <Button
                                            to="/contact"
                                            variant={plan.variant || (plan.highlight ? 'primary' : 'outline')}
                                            fullWidth
                                            size="lg"
                                            className={plan.highlight ? 'shadow-blue-500/20 shadow-lg' : ''}
                                        >
                                            {plan.buttonText}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Comparison Table Part */}
                    <div className="hidden md:block">
                        {comparisonFeatures.map((feature, fIdx) => (
                            <div
                                key={fIdx}
                                className={`grid grid-cols-[22%_1fr_1fr] gap-8 py-6 border-b border-slate-100/60 items-center transition-colors hover:bg-slate-50/30 px-6 -mx-6 rounded-xl`}
                            >
                                <div className="text-[16px] text-slate-500 font-normal">{feature}</div>
                                {plans.map((plan, pIdx) => (
                                    <div key={pIdx} className="text-center">
                                        {typeof plan.features[fIdx] === 'string' && plan.features[fIdx] !== '-' ? (
                                            <span className={`text-[16px] font-normal ${plan.highlight ? 'text-slate-900' : 'text-slate-600'}`}>
                                                {plan.features[fIdx]}
                                            </span>
                                        ) : (
                                            <div className="flex justify-center">
                                                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-blue-500/10' : 'bg-slate-100'}`}>
                                                    <Icon name="check" className={`text-xs font-black ${plan.highlight ? 'text-blue-500' : 'text-slate-400'}`} />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Comparison (Simple list) */}
                    <div className="md:hidden mt-8 space-y-12">
                        {/* Mobile users already see the cards at top, we don't need a heavy table here per modern design rules, but we can list plan highlights if needed */}
                    </div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        </section>
    );
};

export default PricingSection;
