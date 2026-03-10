import React from 'react';
import Icon from '../common/Icon';
import Button from '../common/Button';

const PricingSection: React.FC = () => {
    return (
        <section className="py-32 bg-[#F8FAFC] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-4 block">Bảng giá linh hoạt</span>
                    <h3 className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight mt-4">Lựa chọn gói giải pháp <span className="text-blue-500">phù hợp.</span></h3>
                    <p className="mt-4 text-slate-500 font-light text-base max-w-2xl mx-auto leading-relaxed">
                        Đầu tư vào quy trình hiệu quả, gặt hái kết quả bền vững với các lựa chọn linh hoạt.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto relative pt-8">
                    {/* Free Plan */}
                    <div className="bg-white p-6 rounded-[20px] border border-slate-100 shadow-[0_4px_30px_-5px_rgba(0,0,0,0.03)] flex flex-col group relative transition-all duration-300 hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-6">
                            <h4 className="text-[#0070F3] font-bold tracking-[0.15em] text-[10px] uppercase mt-2">Gói khởi đầu</h4>
                            <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-[12px] flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                                <Icon name="rocket_launch" className="text-slate-400 text-lg" />
                            </div>
                        </div>

                        <h5 className="text-[24px] font-normal text-slate-800 mb-4">Gói Miễn Phí</h5>

                        <div className="flex items-baseline gap-2 mb-6">
                            <div className="flex items-end">
                                <span className="text-[56px] font-normal leading-none text-slate-900 tracking-tighter">0</span>
                                <span className="text-[28px] font-normal leading-none text-slate-900 tracking-tighter relative ml-1 mr-1">
                                    đ
                                    <span className="absolute -bottom-1.5 left-0 w-full h-[3px] bg-slate-900 rounded-sm"></span>
                                </span>
                            </div>
                            <span className="text-slate-400 text-[14px] font-light">/ mãi mãi</span>
                        </div>

                        <div className="flex-grow">
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Quản lý kho hàng cơ bản (1 kho)",
                                    "Số hóa 100 mã danh mục sản phẩm",
                                    "Hệ thống báo cáo bán hàng chuẩn",
                                    "Hỗ trợ cộng đồng & tài liệu hướng dẫn"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-4 text-slate-600 font-light text-[14px]">
                                        <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                            <Icon name="check" className="text-[#0070F3] text-[10px] font-black" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button to="/contact" variant="secondary" fullWidth size="md" className="!rounded-xl shadow-sm">
                            Bắt đầu ngay
                        </Button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-[#0F172A] p-[1px] rounded-[20px] shadow-[0_20px_50px_-15px_rgba(0,112,243,0.15)] flex flex-col relative group transition-all duration-300 hover:-translate-y-1">
                        <div className="bg-[#0F172A] p-6 rounded-[19px] h-full flex flex-col relative">
                            {/* Recommended Badge */}
                            <div className="absolute -top-[16px] left-1/2 -translate-x-1/2 z-30">
                                <span className="bg-[#0070F3] text-white text-[9px] font-bold px-5 py-1.5 rounded-full uppercase tracking-[0.1em] shadow-lg shadow-blue-500/20">
                                    Đề xuất
                                </span>
                            </div>

                            <div className="flex justify-between items-start mb-6">
                                <h4 className="text-[#0070F3] font-bold tracking-[0.15em] text-[10px] uppercase mt-2">Gói toàn diện</h4>
                                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-[12px] flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                                    <Icon name="auto_awesome" className="text-slate-300 text-lg" />
                                </div>
                            </div>

                            <h5 className="text-[24px] font-normal text-white mb-4">Gói Doanh Nghiệp</h5>

                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-[56px] font-normal leading-[0.9] text-white tracking-tighter">Liên hệ</span>
                            </div>

                            <div className="flex-grow">
                                <ul className="space-y-4 mb-8">
                                    {[
                                        "Mở rộng không giới hạn chi nhánh",
                                        "AI chuẩn đoán & dự báo chuỗi cung ứng",
                                        "Tự động hóa 100% quy trình kế toán",
                                        "Hỗ trợ chuyên gia tư vấn riêng 24/7",
                                        "Tùy biến sâu theo yêu cầu doanh nghiệp"
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-center gap-4 text-slate-300 font-light text-[14px]">
                                            <div className="w-4 h-4 rounded-full bg-[#0070F3]/20 flex items-center justify-center flex-shrink-0 border border-[#0070F3]/30">
                                                <Icon name="check" className="text-[#0070F3] text-[10px] font-black" />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Button to="/contact" variant="primary" fullWidth size="md" className="!rounded-xl shadow-[0_8px_20px_-10px_rgba(0,112,243,0.5)]">
                                Liên hệ tư vấn ngay
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
