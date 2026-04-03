import React, { startTransition, useState } from 'react';
import { Icon, Badge } from '@/components/ui';

interface FeatureItem {
    name: string;
    free: string | boolean;
    extended: string | boolean;
    enterprise: string | boolean;
}

interface FeatureCategory {
    title: string;
    icon: string;
    features: FeatureItem[];
}

const PricingFeatures: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'free' | 'premium'>('free');

    const categories: FeatureCategory[] = [
        {
            title: "Quản lý Đơn hàng Đa kênh",
            icon: "local_mall",
            features: [
                { name: "Xử lý đơn hàng tập trung", free: "Tối đa 100 đơn", extended: "Tối đa 1000 đơn", enterprise: "Không giới hạn" },
                { name: "Kết nối sàn TMĐT (Shopee, TikTok)", free: false, extended: "Tối đa 3 gian hàng", enterprise: "Đa nền tảng/Không giới hạn" },
                { name: "Lập Báo giá / Đơn hàng B2B", free: false, extended: true, enterprise: "Quy trình duyệt tự động" },
                { name: "Xử lý đổi/trả hàng (Return)", free: "Thủ công", extended: "Cơ bản", enterprise: "Tự động hoàn tiền/kho" },
                { name: "Trạng thái xử lý vận đơn", free: "Cơ bản", extended: "Chi tiết", enterprise: "Real-time Tracking" }
            ]
        },
        {
            title: "Hệ thống POS Sỉ & Lẻ",
            icon: "point_of_sale",
            features: [
                { name: "Sử dụng tại quầy thu ngân (POS)", free: "01 điểm", extended: "Tối đa 03 điểm", enterprise: "Không giới hạn" },
                { name: "Thiết lập bảng giá linh hoạt", free: false, extended: true, enterprise: "Đa chi nhánh/Không giới hạn" },
                { name: "Chế độ bán hàng Offline (Mất mạng)", free: false, extended: true, enterprise: "Đồng bộ siêu tốc" },
                { name: "Quản lý ca làm việc nhân sự", free: "Thủ công", extended: "Báo cáo doanh thu ca", enterprise: "Theo dõi & Phân quyền chặt" },
                { name: "Thanh toán QR Code / Ví điện tử", free: false, extended: true, enterprise: "Tích hợp đa kênh" }
            ]
        },
        {
            title: "Kho bãi & Chuỗi cung ứng",
            icon: "inventory_2",
            features: [
                { name: "Số lượng kho bãi", free: "01 kho", extended: "Tối đa 03 kho", enterprise: "Đa kho, đa chi nhánh" },
                { name: "Lập Phiếu nhập kho", free: "Cơ bản", extended: "Kiểm soát số lô/HSD", enterprise: "Barcode/RFID" },
                { name: "Lập Phiếu xuất kho", free: "Cơ bản", extended: "Kiểm soát số lô/HSD", enterprise: "Barcode/RFID" },
                { name: "Lập Phiếu chuyển kho nội bộ", free: false, extended: true, enterprise: "Theo dõi điều chuyển" },
                { name: "Lập Phiếu kiểm kho", free: "Thủ công", extended: "Quét mã vạch", enterprise: "Cân bằng kho tự động" },
                { name: "Cảnh báo tồn kho tối thiểu", free: false, extended: true, enterprise: true },
                { name: "Quản lý vị trí lưu kho (Bin/Shelf)", free: false, extended: false, enterprise: true }
            ]
        },
        {
            title: "Sổ Quỹ & Đối soát tự động",
            icon: "account_balance_wallet",
            features: [
                { name: "Quản lý Sổ quỹ tiền mặt", free: "01 quỹ", extended: "Đa quỹ", enterprise: "Không giới hạn" },
                { name: "Quản lý Sổ tiền gửi Ngân hàng", free: "01 tài khoản", extended: "Đa tài khoản", enterprise: "Không giới hạn" },
                { name: "Lập Phiếu Thu", free: "Cơ bản", extended: "Mẫu in tùy chỉnh", enterprise: "Tự động lập từ Đơn hàng" },
                { name: "Lập Phiếu Chi", free: "Cơ bản", extended: "Mẫu in tùy chỉnh", enterprise: "Phân quyền duyệt chi" },
                { name: "Công nợ Phải thu (Khách hàng)", free: "Cơ bản", extended: "Cảnh báo quá hạn", enterprise: "Nhắc nợ tự động Zalo/SMS" },
                { name: "Công nợ Phải trả (Nhà cung cấp)", free: "Cơ bản", extended: "Lịch thanh toán", enterprise: "Lập kế hoạch thanh toán" },
                { name: "Đối soát đơn hàng tự động", free: false, extended: "Bán tự động", enterprise: "Tự động 100%" },
                { name: "Gạch nợ qua Smart Banking", free: false, extended: false, enterprise: "Real-time" }
            ]
        },
        {
            title: "Vận chuyển & Giao nhận",
            icon: "local_shipping",
            features: [
                { name: "Tạo đơn sang đối tác vận chuyển", free: false, extended: true, enterprise: "Tích hợp đa nền tảng VC" },
                { name: "Tự động tính & so sánh phí ship", free: false, extended: true, enterprise: "Đề xuất hãng rẻ nhất" },
                { name: "Đồng bộ hành trình đơn hàng", free: false, extended: true, enterprise: "Tự động báo khách Zalo/SMS" },
                { name: "Đối soát COD hãng vận chuyển", free: false, extended: "Bán tự động", enterprise: "Tự động 100%" }
            ]
        },
        {
            title: "Chăm sóc KH (CRM/Loyalty)",
            icon: "groups",
            features: [
                { name: "Lưu trữ tệp khách hàng CRM", free: "Dưới 500 KH", extended: "Dưới 2000 KH", enterprise: "Không giới hạn" },
                { name: "Gửi tin nhắn Zalo ZNS / SMS", free: false, extended: true, enterprise: "Automation Flow" },
                { name: "Thiết lập kịch bản CRM tự động", free: false, extended: "Cơ bản", enterprise: "Chuyên sâu đa kênh" },
                { name: "Thẻ thành viên & Tích điểm", free: false, extended: true, enterprise: "Omni-channel Loyalty" },
                { name: "Khởi tạo Voucher/Mã giảm giá", free: false, extended: true, enterprise: "Theo hành vi cá nhân" }
            ]
        },
        {
            title: "Báo cáo & Phân tích Đa chiều",
            icon: "bar_chart",
            features: [
                { name: "Báo cáo Doanh thu & Lợi nhuận", free: "Cơ bản", extended: "Theo khung thời gian", enterprise: "Phân tích tăng trưởng sâu" },
                { name: "Báo cáo Hiệu quả Kênh bán hàng", free: false, extended: true, enterprise: "So sánh đa chiều Real-time" },
                { name: "Báo cáo Hiệu suất nhân sự", free: false, extended: true, enterprise: "Phân tích KPI từng ca" },
                { name: "Phân khúc Insight Khách hàng", free: false, extended: "Theo nhóm Cơ bản", enterprise: "Phân tích Mô hình RFM/AI" },
                { name: "Giao diện Dashboard Tùy biến", free: false, extended: false, enterprise: "Dashboard Quản trị 360°" }
            ]
        },
        {
            title: "Hỗ trợ & API Thiết kế riêng",
            icon: "support_agent",
            features: [
                { name: "Kênh Tương tác & Hỗ trợ", free: "Cộng đồng", extended: "Chuyên viên tư vấn", enterprise: "Chuyên gia riêng 1-1 24/7" },
                { name: "Tài liệu Hướng dẫn & Đào tạo", free: "Video trực tuyến", extended: "Video trực tuyến", enterprise: "Khoá training thiết kế riêng" },
                { name: "Cập nhật Phiên bản nâng cấp", free: "Định kỳ chung", extended: "Định kỳ chung", enterprise: "Ưu tiên bản Early-bird" },
                { name: "Mở rộng API tích hợp hệ thống", free: false, extended: false, enterprise: "Sẵn sàng các Module" },
                { name: "Mở rộng Tính năng may đo", free: false, extended: false, enterprise: "Có Đội ngũ Support Dev" }
            ]
        }
    ];

    const renderValue = (val: string | boolean) => {
        if (typeof val === 'boolean') {
            return val ? (
                <Icon name="check" className="text-xl text-blue-600 dark:text-blue-400 font-bold transition-colors" />
            ) : (
                <span className="text-slate-300 dark:text-slate-600 font-light transition-colors">—</span>
            );
        }
        return <span className="text-[14px] text-slate-600 dark:text-slate-300 font-medium transition-colors">{val}</span>;
    };

    const headerGridClass = activeTab === 'free'
        ? "hidden md:grid gap-8 px-8 py-4 mb-2 items-center grid-cols-[1fr_150px_150px] lg:grid-cols-[1fr_200px_200px]"
        : "hidden md:grid gap-8 px-8 py-4 mb-2 items-center grid-cols-[1fr_150px] lg:grid-cols-[1fr_200px]";

    const rowGridClass = activeTab === 'free'
        ? "grid gap-4 md:gap-8 px-6 lg:px-8 py-5 border-b border-slate-50 dark:border-slate-800 last:border-b-0 items-center hover:bg-slate-50/30 dark:hover:bg-slate-800/30 transition-colors grid-cols-1 md:grid-cols-[1fr_150px_150px] lg:grid-cols-[1fr_200px_200px]"
        : "grid gap-4 md:gap-8 px-6 lg:px-8 py-5 border-b border-slate-50 dark:border-slate-800 last:border-b-0 items-center hover:bg-slate-50/30 dark:hover:bg-slate-800/30 transition-colors grid-cols-1 md:grid-cols-[1fr_150px] lg:grid-cols-[1fr_200px]";

    return (
        <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden border-t border-slate-100 dark:border-slate-800 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-16">
                    <div className="text-left flex flex-col items-start">
                        <Badge variant="primary" className="mb-4 md:mb-5 uppercase">So sánh chi tiết</Badge>
                        <h2 className="text-[28px] md:text-4xl lg:text-[42px] font-normal text-slate-900 dark:text-white tracking-tight leading-[1.15] transition-colors">
                            Tính năng <span className="text-blue-500 dark:text-blue-400">bứt phá doanh thu.</span>
                        </h2>
                    </div>

                    {/* Toggle Switch */}
                    <div className="flex relative z-20 flex-shrink-0 lg:pb-1">
                        <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-full inline-flex relative border border-slate-200/50 dark:border-slate-700/50 transition-colors">
                            <div
                                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white dark:bg-slate-700 rounded-full shadow-sm transition-transform duration-300 ease-out ${
                                    activeTab === 'free' ? 'translate-x-0' : 'translate-x-full ml-2'
                                }`}
                            ></div>
                            <button
                                onClick={() => startTransition(() => setActiveTab('free'))}
                                className={`relative z-10 w-24 sm:w-32 py-2 text-[13px] sm:text-sm font-semibold rounded-full transition-colors ${
                                    activeTab === 'free' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                            >
                                Miễn phí
                            </button>
                            <button
                                onClick={() => startTransition(() => setActiveTab('premium'))}
                                className={`relative z-10 w-24 sm:w-32 py-2 text-[13px] sm:text-sm font-semibold rounded-full transition-colors ${
                                    activeTab === 'premium' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                            >
                                Nâng cao
                            </button>
                        </div>
                    </div>
                </div>

                {/* Desktop Header for columns */}
                <div className={headerGridClass}>
                    <div className="text-[17px] font-semibold text-slate-900 dark:text-white transition-colors">Nhóm tính năng</div>
                    {activeTab === 'free' ? (
                        <>
                            <div className="text-xs font-bold text-slate-400 dark:text-slate-500 text-center uppercase tracking-widest transition-colors">Gói Miễn Phí</div>
                            <div className="text-xs font-bold text-slate-400 dark:text-slate-500 text-center uppercase tracking-widest transition-colors">Mở Rộng</div>
                        </>
                    ) : (
                        <div className="text-xs font-bold text-slate-400 dark:text-slate-500 text-center uppercase tracking-widest transition-colors">Gói Nâng Cao</div>
                    )}
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100/80 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col transition-colors duration-500">
                    {categories.map((cat, idx) => {
                        const visibleFeatures = cat.features.filter(feat => {
                            if (activeTab === 'free') {
                                return feat.free !== false || feat.extended !== false;
                            }
                            return feat.enterprise !== false;
                        });

                        if (visibleFeatures.length === 0) return null;

                        return (
                            <div key={idx} className="flex flex-col">
                                {/* Category Header Row */}
                                <div className="bg-slate-50/60 dark:bg-slate-800/60 px-6 lg:px-8 py-5 border-y border-slate-100 dark:border-slate-800 first:border-t-0 transition-colors">
                                    <h3 className="text-base font-bold text-blue-600 dark:text-blue-400 transition-colors">{cat.title}</h3>
                                </div>
                                
                                {/* Features List */}
                                <div className="flex flex-col bg-white dark:bg-slate-900 transition-colors">
                                    {visibleFeatures.map((feat, fIdx) => (
                                        <div 
                                            key={fIdx} 
                                            className={rowGridClass}
                                        >
                                            <div className="flex flex-col">
                                                <span className="text-[15px] text-slate-800 dark:text-white font-semibold transition-colors">{feat.name}</span>
                                            </div>
                                            
                                            {/* Mobile Labels */}
                                            {activeTab === 'free' ? (
                                                <div className="md:hidden grid grid-cols-2 gap-4 pt-2">
                                                    <div className="flex flex-col gap-2">
                                                        <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-widest text-left transition-colors">Gói Miễn Phí</span>
                                                        <div className="flex justify-start">{renderValue(feat.free)}</div>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-widest text-left transition-colors">Mở Rộng</span>
                                                        <div className="flex justify-start">{renderValue(feat.extended)}</div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="md:hidden grid grid-cols-1 gap-4 pt-2">
                                                    <div className="flex flex-col gap-2">
                                                        <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-widest text-left transition-colors">Gói Nâng Cao</span>
                                                        <div className="flex justify-start">{renderValue(feat.enterprise)}</div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Desktop Values */}
                                            {activeTab === 'free' ? (
                                                <>
                                                    <div className="hidden md:flex justify-center items-center">{renderValue(feat.free)}</div>
                                                    <div className="hidden md:flex justify-center items-center">{renderValue(feat.extended)}</div>
                                                </>
                                            ) : (
                                                <div className="hidden md:flex justify-center items-center">{renderValue(feat.enterprise)}</div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-50/20 dark:bg-blue-600/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-700"></div>
        </section>
    );
};

export default PricingFeatures;
