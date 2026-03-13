import React from 'react';
import Icon from '../common/Icon';
import Button from '../common/Button';

const PricingSection: React.FC = () => {
    const plans = [
        {
            name: "Gói Miễn Phí",
            tagline: "Gói khởi đầu",
            price: "0",
            period: "/ mãi mãi",
            desc: "Giải pháp cơ bản cho hộ kinh doanh nhỏ.",
            buttonText: "Bắt đầu ngay",
            variant: "secondary" as const,
            features: ["1 kho", "100 mã", "Chuẩn", "Cơ bản", "Cộng đồng", "Cơ bản"]
        },
        {
            name: "Gói Doanh Nghiệp",
            tagline: "Gói toàn diện",
            price: "Liên hệ",
            period: "",
            desc: "Giải pháp ERP may đo cho tập đoàn lớn.",
            buttonText: "Liên hệ tư vấn",
            variant: "primary" as const,
            highlight: true,
            features: ["Vô hạn", "Vô hạn", "Đa chiều RT", "AI toàn diện", "Chuyên gia riêng", "Tùy biến sâu"]
        }
    ];

    const comparisonFeatures = [
        "Quản lý kho hàng",
        "Mã danh mục sản phẩm",
        "Hệ thống báo cáo",
        "AI & Tự động hóa",
        "Dịch vụ hỗ trợ",
        "Khả năng mở rộng"
    ];

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-blue-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Bảng giá minh bạch</span>
                    <h3 className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15]">
                        Đầu tư thông minh cho <br /><span className="text-blue-500">tương lai doanh nghiệp.</span>
                    </h3>
                </div>

                {/* Main Grid Layout */}
                <div className="relative">
                    {/* Header Row with Plan Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-2">
                        {/* Title corner */}
                        <div className="hidden md:flex flex-col justify-end pb-8">
                            <h4 className="text-xl font-normal text-slate-900 tracking-tight">Tính năng chi tiết</h4>
                        </div>

                        {plans.map((plan, idx) => (
                            <div 
                                key={idx} 
                                className={`rounded-[20px] p-6 flex flex-col relative transition-all duration-500 hover:-translate-y-1 ${
                                    plan.highlight 
                                    ? 'bg-[#0F172A] text-white shadow-[0_20px_50px_-15px_rgba(0,112,243,0.3)]' 
                                    : 'bg-slate-50/50 border border-slate-100/80 text-slate-900'
                                }`}
                            >
                                {plan.highlight && (
                                    <>
                                        {/* Background Effects Wrapper - handles the gradients overflow */}
                                        <div className="absolute inset-0 rounded-[20px] overflow-hidden pointer-events-none">
                                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.3),transparent_70%)] opacity-70"></div>
                                            <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(45deg,rgba(168,85,247,0.1),transparent_40%)]"></div>
                                        </div>
                                        
                                        {/* Badge is now visible because main container isn't overflow-hidden */}
                                        <div className="absolute -top-[12px] left-1/2 -translate-x-1/2 z-30">
                                            <span className="bg-blue-600 text-white text-[10px] font-bold px-5 py-1.5 rounded-full uppercase tracking-widest shadow-lg">Đề xuất</span>
                                        </div>
                                    </>
                                )}
                                
                                <div className="relative z-10 h-full flex flex-col">
                                    <span className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block ${plan.highlight ? 'text-blue-400' : 'text-slate-400'}`}>
                                        {plan.tagline}
                                    </span>
                                    <h5 className="text-3xl font-normal mb-8 tracking-tight">{plan.name}</h5>
                                    
                                    <div className="flex items-baseline gap-1 mb-2">
                                        <span className={`text-5xl font-normal tracking-tighter ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                                            {plan.price}
                                        </span>
                                        <span className={`text-sm font-light ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                                            {plan.period}
                                        </span>
                                    </div>
                                    
                                    <p className={`text-[14px] font-light leading-relaxed mb-10 ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                                        {plan.desc}
                                    </p>

                                    <div className="mt-auto">
                                        <Button 
                                            to="/contact" 
                                            variant={plan.highlight ? 'primary' : 'outline'} 
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
                                className={`grid grid-cols-3 gap-8 py-6 border-b border-slate-100/60 items-center transition-colors hover:bg-slate-50/30 px-6 -mx-6 rounded-xl`}
                            >
                                <div className="text-[14px] text-slate-500 font-light">{feature}</div>
                                {plans.map((plan, pIdx) => (
                                    <div key={pIdx} className="text-center">
                                        {typeof plan.features[fIdx] === 'string' && plan.features[fIdx] !== '-' ? (
                                            <span className={`text-[15px] font-normal ${plan.highlight ? 'text-slate-900' : 'text-slate-600'}`}>
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
