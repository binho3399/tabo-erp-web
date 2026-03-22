import React, { useState } from 'react';
import Icon from '../common/Icon';
import Badge from '../common/Badge';

interface FeatureItem {
    name: string;
    free: string | boolean;
    enterprise: string | boolean;
}

interface FeatureCategory {
    title: string;
    icon: string;
    features: FeatureItem[];
}

const PricingFeatures: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const categories: FeatureCategory[] = [
        {
            title: "Quản lý Bán hàng & POS",
            icon: "shopping_cart",
            features: [
                { name: "Số lượng điểm bán (POS)", free: "01 điểm", enterprise: "Không giới hạn" },
                { name: "Kênh bán thương mại điện tử", free: false, enterprise: "Shopee, Lazada, TikTok Shop" },
                { name: "Bán hàng đa giá (Sỉ/Lẻ)", free: false, enterprise: true },
                { name: "Quản lý đơn hàng tập trung", free: "Tối đa 100 đơn/tháng", enterprise: "Không giới hạn" },
                { name: "Tự động hóa Zalo ZNS", free: false, enterprise: true }
            ]
        },
        {
            title: "Quản lý Kho & Chuỗi cung ứng",
            icon: "inventory_2",
            features: [
                { name: "Số lượng kho bãi", free: "01 kho", enterprise: "Đa kho, đa chi nhánh" },
                { name: "Kiểm kê kho tự động", free: "Thủ công", enterprise: "Quét mã vạch/RFID" },
                { name: "Cảnh báo tồn kho tối thiểu", free: false, enterprise: true },
                { name: "Lộ trình vận chuyển & Giao nhận", free: false, enterprise: true },
                { name: "Đối soát hãng vận chuyển", free: false, enterprise: true }
            ]
        },
        {
            title: "Tài chính & Dòng tiền",
            icon: "account_balance_wallet",
            features: [
                { name: "Quản lý thu chi, sổ quỹ", free: "Cơ bản", enterprise: "Nâng cao, tự động" },
                { name: "Kết nối Smart Banking", free: false, enterprise: "Tự động gạch nợ" },
                { name: "Báo cáo doanh thu Real-time", free: false, enterprise: true },
                { name: "Quản lý công nợ khách hàng", free: "Cơ bản", enterprise: "Nhắc nợ tự động" }
            ]
        },
        {
            title: "Chăm sóc Khách hàng (CRM)",
            icon: "groups",
            features: [
                { name: "Lưu trữ thông tin khách hàng", free: "Dưới 500 KH", enterprise: "Không giới hạn" },
                { name: "Phân hạng hội viên (Loyalty)", free: false, enterprise: true },
                { name: "Chiến dịch Marketing tập trung", free: false, enterprise: true },
                { name: "Tích điểm & Đổi quà", free: false, enterprise: true }
            ]
        },
        {
            title: "Dịch vụ & Hỗ trợ",
            icon: "support_agent",
            features: [
                { name: "Hình thức hỗ trợ", free: "Cộng đồng", enterprise: "Chuyên gia riêng 24/7" },
                { name: "Mở cổng API tích hợp", free: false, enterprise: true },
                { name: "Đào tạo & Triển khai", free: "Tài liệu online", enterprise: "Trực tiếp & May đo" },
                { name: "Cập nhật tính năng mới", free: "Định kỳ", enterprise: "Ưu tiên sớm nhất" }
            ]
        }
    ];

    const renderValue = (val: string | boolean) => {
        if (typeof val === 'boolean') {
            return val ? (
                <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto">
                    <Icon name="check" className="text-[12px] text-blue-600 font-black" />
                </div>
            ) : (
                <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-300">
                    <Icon name="close" className="text-[10px]" />
                </div>
            );
        }
        return <span className="text-[14px] text-slate-600 font-medium">{val}</span>;
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <Badge variant="primary" className="mb-4 uppercase">So sánh chi tiết</Badge>
                    <h2 className="text-[28px] md:text-4xl font-normal text-slate-900 tracking-tight leading-tight">
                        Mọi tính năng bạn cần <br className="hidden md:block" /> để bứt phá doanh thu.
                    </h2>
                </div>

                {/* Desktop Header for columns */}
                <div className="hidden md:grid grid-cols-[1fr_120px_120px] lg:grid-cols-[1fr_180px_180px] gap-8 px-8 py-4 mb-4 border-b border-slate-100">
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Tính năng</div>
                    <div className="text-sm font-bold text-blue-600 text-center uppercase tracking-wider">Hộ Kinh Doanh</div>
                    <div className="text-sm font-bold text-slate-900 text-center uppercase tracking-wider">Gói Nâng Cao</div>
                </div>

                <div className="space-y-4">
                    {categories.map((cat, idx) => (
                        <div 
                            key={idx} 
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                                openIndex === idx 
                                ? 'bg-white shadow-xl border-blue-100' 
                                : 'bg-slate-50/50 border-slate-100 hover:bg-white'
                            }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-5 lg:p-6 text-left"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                                        openIndex === idx ? 'bg-blue-600 text-white' : 'bg-white text-slate-400 border border-slate-100'
                                    }`}>
                                        <Icon name={cat.icon} className="text-xl" />
                                    </div>
                                    <h3 className={`text-[17px] font-semibold transition-colors duration-300 ${
                                        openIndex === idx ? 'text-slate-900' : 'text-slate-600'
                                    }`}>
                                        {cat.title}
                                    </h3>
                                </div>
                                <div className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-blue-600' : 'text-slate-400'}`}>
                                    <Icon name="expand_more" className="text-2xl" />
                                </div>
                            </button>

                            <div 
                                className={`transition-all duration-300 ease-in-out ${
                                    openIndex === idx ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-5 lg:px-8 pb-8 pt-2">
                                    <div className="space-y-1">
                                        {cat.features.map((feat, fIdx) => (
                                            <div 
                                                key={fIdx} 
                                                className="grid grid-cols-1 md:grid-cols-[1fr_120px_120px] lg:grid-cols-[1fr_180px_180px] gap-4 md:gap-8 py-4 border-b border-slate-50 last:border-0 items-center"
                                            >
                                                <div className="text-[15px] text-slate-600 font-normal">{feat.name}</div>
                                                
                                                {/* Mobile Labels */}
                                                <div className="md:hidden grid grid-cols-2 gap-4 pt-1">
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-[10px] uppercase font-bold text-blue-500/60 tracking-widest">Hộ Kinh Doanh</span>
                                                        <div className="flex justify-start">{renderValue(feat.free)}</div>
                                                    </div>
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Gói Nâng Cao</span>
                                                        <div className="flex justify-start">{renderValue(feat.enterprise)}</div>
                                                    </div>
                                                </div>

                                                {/* Desktop Values */}
                                                <div className="hidden md:block text-center">{renderValue(feat.free)}</div>
                                                <div className="hidden md:block text-center">{renderValue(feat.enterprise)}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-50/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        </section>
    );
};

export default PricingFeatures;
