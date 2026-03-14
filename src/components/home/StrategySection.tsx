import React from 'react';
import Icon from '../common/Icon';
import Badge from '../common/Badge';
import Button from '../common/Button';

const StrategySection: React.FC = () => {
    const strategies = [
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
        <section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden text-left">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header Badge */}
                <Badge variant="primary" className="mb-6">CHIẾN LƯỢC TĂNG TRƯỞNG</Badge>

                {/* Header Row: Split Title & Desc */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] mb-20 items-end">
                    <div className="text-left">
                        <h2 className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] font-sans">
                            Thúc đẩy thành công qua <br />
                            <span className="text-blue-500 font-normal">quản trị thông minh.</span>
                        </h2>
                    </div>
                    <div className="text-left pb-2">
                        <p className="text-base text-slate-500 leading-relaxed font-light">
                            Chúng tôi mang đến tư duy quản trị mới, giải pháp thực tiễn và lộ trình triển khai tối ưu giúp mọi quyết định dựa trên dữ liệu thực tế.
                        </p>
                    </div>
                </div>

                {/* Grid Layout inspired by Figure 2: 4 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {strategies.map((item, i) => (
                        <div key={i} className="bg-white border border-slate-50 rounded-[20px] p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group flex flex-col h-full">
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-sm">
                                    <Icon name={item.icon} className="text-2xl" />
                                </div>
                            </div>
                            <div className="mt-8 text-left">
                                <h3 className="text-[28px] font-normal text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors h-[68px] flex items-start">
                                    {item.title}
                                </h3>
                                <p className="text-base text-slate-500 font-light leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Big CTA Card: Spans 2 columns on large screens */}
                    <div className="sm:col-span-2 lg:col-span-2 bg-[#001D3D] rounded-[20px] p-6 relative overflow-hidden flex flex-col group shadow-xl h-full">
                        <div className="relative z-10 text-left pt-2 flex flex-col h-full">
                            <h3 className="text-[28px] font-normal text-white mb-6 leading-[1.2] max-w-sm h-auto sm:h-[68px] flex items-start">
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
                                        <span className="text-slate-400 text-[13px] font-light mt-1">
                                            Doanh nghiệp tin dùng
                                        </span>
                                    </div>
                                </div>

                                {/* CTA Button (Bottom Right) */}
                                <Button to="/contact" variant="primary" size="lg" className="bg-blue-500 hover:bg-blue-400 border-none px-10 shadow-lg shadow-blue-500/20 w-fit shrink-0">
                                    Đăng ký tư vấn ngay
                                </Button>
                            </div>
                        </div>
                        
                        {/* Decorative Stripes from Figure 2 */}
                        <div className="absolute inset-x-0 top-0 h-full opacity-[0.07] pointer-events-none flex justify-end">
                            <div className="h-full w-1/2 flex gap-5 pr-12">
                                {[...Array(12)].map((_, i) => (
                                    <div key={i} className="h-full w-px bg-white"></div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Glow effect */}
                        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StrategySection;
