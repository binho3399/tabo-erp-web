import React from 'react';
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
                <Icon name="check" className="text-xl text-blue-600 font-bold" />
            ) : (
                <span className="text-slate-300 font-light">—</span>
            );
        }
        return <span className="text-[14px] text-slate-600 font-medium">{val}</span>;
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-left lg:text-center mb-16 flex flex-col items-start lg:items-center">
                    <Badge variant="primary" className="mb-4 uppercase">So sánh chi tiết</Badge>
                    <h2 className="text-[28px] md:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-4 md:mb-5">
                        Mọi tính năng bạn cần <br className="hidden lg:block" /> để <span className="text-blue-500">bứt phá doanh thu.</span>
                    </h2>
                </div>

                {/* Desktop Header for columns */}
                <div className="hidden md:grid grid-cols-[1fr_180px_180px] lg:grid-cols-[1fr_280px_280px] gap-8 px-8 py-4 mb-2 items-center">
                    <div className="text-[17px] font-semibold text-slate-900">Nhóm tính năng</div>
                    <div className="text-xs font-bold text-slate-400 text-center uppercase tracking-widest">Hộ Kinh Doanh</div>
                    <div className="text-xs font-bold text-slate-400 text-center uppercase tracking-widest">Gói Nâng Cao</div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-100/80 shadow-sm overflow-hidden flex flex-col">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="flex flex-col">
                            {/* Category Header Row */}
                            <div className="bg-slate-50/60 px-6 lg:px-8 py-5 border-y border-slate-100 first:border-t-0">
                                <h3 className="text-base font-bold text-blue-600">{cat.title}</h3>
                            </div>
                            
                            {/* Features List */}
                            <div className="flex flex-col bg-white">
                                {cat.features.map((feat, fIdx) => (
                                    <div 
                                        key={fIdx} 
                                        className="grid grid-cols-1 md:grid-cols-[1fr_180px_180px] lg:grid-cols-[1fr_280px_280px] gap-4 md:gap-8 px-6 lg:px-8 py-5 border-b border-slate-50 last:border-b-0 items-center hover:bg-slate-50/30 transition-colors"
                                    >
                                        <div className="flex flex-col">
                                            <span className="text-[15px] text-slate-800 font-semibold">{feat.name}</span>
                                        </div>
                                        
                                        {/* Mobile Labels */}
                                        <div className="md:hidden grid grid-cols-2 gap-4 pt-2">
                                            <div className="flex flex-col gap-2">
                                                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Hộ Kinh Doanh</span>
                                                <div className="flex justify-start">{renderValue(feat.free)}</div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Gói Nâng Cao</span>
                                                <div className="flex justify-start">{renderValue(feat.enterprise)}</div>
                                            </div>
                                        </div>

                                        {/* Desktop Values */}
                                        <div className="hidden md:flex justify-center items-center">{renderValue(feat.free)}</div>
                                        <div className="hidden md:flex justify-center items-center">{renderValue(feat.enterprise)}</div>
                                    </div>
                                ))}
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
