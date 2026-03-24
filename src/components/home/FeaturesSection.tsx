import React from 'react';
import Icon from '../common/Icon';
import Badge from '../common/Badge';

const FeaturesSection: React.FC = () => {
    const featureItems = [
        { name: "Tài chính", icon: "account_balance", desc: "Tài chính tổng hợp", color: "blue" },
        { name: "Kho bãi", icon: "inventory_2", desc: "Kiểm soát vật tư", color: "orange" },
        { name: "Nhân sự", icon: "groups", desc: "Chấm công & lương", color: "emerald" },
        { name: "Mua hàng", icon: "local_shipping", desc: "Quản lý nhà cung cấp", color: "purple" },
        { name: "Bán hàng", icon: "point_of_sale", desc: "Đơn hàng & Doanh thu", color: "pink" },
        { name: "Báo cáo", icon: "pie_chart", desc: "Phân tích đa chiều", color: "cyan" },
        { name: "Sản xuất", icon: "precision_manufacturing", desc: "Kế hoạch & Vận hành", color: "red" },
        { name: "CRM", icon: "support_agent", desc: "Chăm sóc khách hàng", color: "teal" },
        { name: "Dự án", icon: "task", desc: "Quản lý tiến độ", color: "indigo" },
        { name: "Tài sản", icon: "category", desc: "Khấu hao & Bảo trì", color: "amber" }
    ];

    const renderFeatureItem = (item: any, idx: number) => {
        const colors: { [key: string]: string } = {
            blue: "bg-blue-50 text-blue-500",
            orange: "bg-orange-50 text-orange-600",
            emerald: "bg-emerald-50 text-emerald-600",
            purple: "bg-purple-50 text-purple-600",
            pink: "bg-pink-50 text-pink-600",
            cyan: "bg-cyan-50 text-cyan-600",
            red: "bg-red-50 text-red-600",
            teal: "bg-teal-50 text-teal-600",
            indigo: "bg-indigo-50 text-indigo-600",
            amber: "bg-amber-50 text-amber-600"
        };
        return (
            <div key={idx} className="flex items-center gap-3 bg-white pr-6 pl-2 py-2 rounded-full shadow-sm hover:shadow-md transition-all cursor-default shrink-0 group">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${colors[item.color]}`}>
                    <Icon name={item.icon} className="text-xl" />
                </div>
                <div className="">
                    <h4 className="text-slate-800 text-[13px] font-normal leading-tight">{item.name}</h4>
                    <p className="text-slate-400 text-[10px] mt-0.5">{item.desc}</p>
                </div>
            </div>
        );
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Row */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end mb-8 lg:mb-16 gap-y-5 lg:gap-5 text-left lg:text-left">
                    <div className="max-w-md lg:w-[35%] flex flex-col items-start lg:items-start">
                        <Badge variant="primary" className="mb-4 md:mb-5">HỆ SINH THÁI</Badge>
                        <h2 className="text-[28px] md:text-[42px] font-normal text-slate-900 leading-[1.15] mb-4 md:mb-5 tracking-tight font-sans">
                            Đa dạng phân hệ,<br />
                            <span className="text-blue-500 font-normal">tùy biến linh hoạt.</span>
                        </h2>
                        <p className="text-slate-500 text-base leading-relaxed max-w-sm">
                            Hàng chục phân hệ chuyên biệt, sẵn sàng mở rộng linh hoạt theo quy mô doanh nghiệp.
                        </p>
                    </div>

                    <div className="w-full lg:w-[70%] flex flex-col lg:items-center pb-4">
                        {/* Desktop Layout: 3 Rows */}
                        <div className="hidden lg:flex flex-col items-center gap-4 w-full">
                            {/* Row 1: 3 items */}
                            <div className="flex flex-wrap justify-center gap-4">
                                {featureItems.slice(0, 3).map(renderFeatureItem)}
                            </div>
                            {/* Row 2: 4 items */}
                            <div className="flex flex-wrap justify-center gap-4">
                                {featureItems.slice(3, 7).map(renderFeatureItem)}
                            </div>
                            {/* Row 3: 3 items */}
                            <div className="flex flex-wrap justify-center gap-4">
                                {featureItems.slice(7, 10).map(renderFeatureItem)}
                            </div>
                        </div>

                        {/* Mobile Layout: 2 Rows + Marquee Animation */}
                        <div className="flex lg:hidden relative overflow-hidden pb-4 -mx-4">
                            <div className="flex flex-col gap-0 w-full mask-image-linear-gradient">
                                {/* Row 1: 5 items */}
                                <div className="flex animate-marquee whitespace-nowrap gap-3 py-2 pl-4">
                                    {featureItems.slice(0, 5).concat(featureItems.slice(0, 5)).map((item, idx) => (
                                        <React.Fragment key={`row1-${idx}`}>
                                            {renderFeatureItem(item, idx)}
                                        </React.Fragment>
                                    ))}
                                </div>
                                {/* Row 2: 5 items */}
                                <div className="flex animate-marquee whitespace-nowrap gap-3 py-2 pl-4" style={{ animationDirection: 'reverse' }}>
                                    {featureItems.slice(5, 10).concat(featureItems.slice(5, 10)).map((item, idx) => (
                                        <React.Fragment key={`row2-${idx}`}>
                                            {renderFeatureItem(item, idx)}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            {/* Gradient Shadows */}
                            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                        </div>
                    </div>
                </div>

                {/* Grid Images Row */}
                <div className="flex flex-col lg:flex-row gap-6 lg:items-start">
                    {/* Col 1: Horizontal Cards */}
                    <div className="flex flex-col gap-6 w-full lg:w-[48%]">
                        {/* Kế toán Card */}
                        <div className="bg-white rounded-[20px] p-4 lg:p-6 flex flex-col lg:flex-row items-center h-auto lg:h-[188px] group transition-all duration-500 shadow-md hover:shadow-xl hover:-translate-y-1 overflow-hidden relative gap-8 lg:gap-10">
                            <div className="relative z-10 flex flex-col w-full lg:w-[45%] text-left">
                                <h4 className="text-[20px] lg:text-[28px] font-normal text-slate-900 tracking-tight mb-4">Tài chính tổng hợp</h4>
                                <p className="text-base text-slate-500 font-normal leading-relaxed">
                                    Hệ thống tự động hóa toàn diện nghiệp vụ tài chính và sổ sách doanh nghiệp.
                                </p>
                            </div>

                            <div className="relative z-10 flex-1 flex flex-col justify-center items-center py-0">
                                <div className="bg-white rounded-xl p-3 shadow-xl border border-slate-50 w-full rotate-2 group-hover:rotate-0 transition-transform duration-500">
                                    <div className="flex justify-between items-start mb-1">
                                        <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">Doanh thu</p>
                                        <Icon name="more_horiz" className="text-slate-300 text-sm" />
                                    </div>
                                    <p className="text-lg font-bold text-slate-900 mb-2 flex items-baseline gap-1">
                                        12.850.000 <span className="text-slate-400 font-medium text-[12px] border-b-[1px] border-slate-400 leading-none pb-0.5">đ</span>
                                    </p>
                                    <div className="flex items-end gap-1 h-8">
                                        {[30, 60, 40, 80, 50, 70, 45].map((h, i) => (
                                            <div key={i} className={`flex-1 rounded-t-[2px] ${i === 3 || i === 5 ? 'bg-blue-500' : 'bg-blue-100'}`} style={{ height: `${h}%` }}></div>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute -top-4 -right-2 bg-slate-900 text-white rounded-xl p-2.5 shadow-2xl -rotate-12 scale-90 group-hover:rotate-0 group-hover:scale-100 transition-all duration-500 z-20">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                                            <Icon name="check" className="text-[8px]" />
                                        </div>
                                        <span className="text-[9px] font-black uppercase tracking-widest">Số liệu chuẩn</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Công nợ Card */}
                        <div className="bg-white rounded-[20px] p-4 lg:p-6 flex flex-col-reverse lg:flex-row-reverse items-center h-auto lg:h-[188px] group transition-all duration-500 shadow-md hover:shadow-xl hover:-translate-y-1 overflow-hidden relative gap-8 lg:gap-10">
                            <div className="relative z-10 flex flex-col w-full lg:w-[45%] text-left">
                                <h4 className="text-[20px] lg:text-[28px] font-normal text-slate-900 tracking-tight mb-4">Quản lý Công nợ</h4>
                                <p className="text-base text-slate-500 font-normal leading-relaxed">
                                    Theo dõi và thu hồi nợ tự động giúp tối ưu dòng tiền lưu động.
                                </p>
                            </div>

                            <div className="relative z-10 flex-1 flex flex-col justify-center items-center py-0">
                                <div className="w-full relative scale-90 translate-x-2 translate-y-6">
                                    <div className="absolute -inset-1 bg-gradient-to-tr from-slate-200 to-slate-100 rounded-[22px] blur-[2px] opacity-30"></div>
                                    <div className="absolute top-4 left-4 right-[-10px] bottom-[-4px] bg-slate-50/80 rounded-xl border border-slate-100 shadow-sm rotate-2"></div>
                                    <div className="relative bg-slate-900 rounded-xl p-4 shadow-2xl border border-white/10 -rotate-1 group-hover:rotate-0 transition-all duration-700">
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Cảnh báo thu hồi</span>
                                                </div>
                                                <Icon name="more_horiz" className="text-slate-500 text-xs" />
                                            </div>

                                            <div className="space-y-3">
                                                {[
                                                    { name: "Sơn Hà JSC", amount: "15.400.000", overdue: "15 ngày", width: "w-[85%]", color: "bg-red-500" },
                                                    { name: "Phạm Văn Tuấn", amount: "3.420.000", overdue: "Vượt hạn mức", width: "w-[70%]", color: "bg-orange-500" }
                                                ].map((item, i) => (
                                                    <div key={i} className="flex flex-col gap-1.5">
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-[11px] text-white/90 font-medium">{item.name}</span>
                                                            <span className="text-[10px] text-white/60">{item.amount} đ</span>
                                                        </div>
                                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                                            <div className={`h-full ${item.color} ${item.width} rounded-full`}></div>
                                                        </div>
                                                        <div className="flex items-center gap-1 text-[8px] text-slate-500 italic">
                                                            <Icon name="history" className="text-[10px]" />
                                                            {item.overdue}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Col 2: Feature Card */}
                    <div className="w-full lg:w-[26%] bg-white rounded-[20px] p-4 lg:p-6 flex flex-col h-auto lg:h-[400px] transition-all duration-500 shadow-md hover:shadow-xl hover:-translate-y-1 overflow-hidden relative">
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-6 text-left">
                                <h3 className="text-[20px] lg:text-[28px] font-normal text-slate-900 leading-[1.2] tracking-tight mb-4">
                                    Tối ưu hóa cho mọi<br className="hidden lg:block" /> lĩnh vực kinh doanh.
                                </h3>
                                <p className="text-base text-slate-500 font-normal leading-relaxed">
                                    Nền tảng linh hoạt đáp ứng đặc thù từng ngành nghề, giúp vận hành chuyên sâu và hiệu quả hơn.
                                </p>
                            </div>

                            <div className="flex-1 flex flex-col justify-center gap-4">
                                <div className="bg-slate-50 rounded-xl p-4 overflow-hidden relative border border-slate-100/50">
                                    <div className="relative overflow-hidden w-full flex flex-col gap-0">
                                        {/* Row 1 */}
                                        <div className="flex animate-marquee whitespace-nowrap gap-3 py-2">
                                            {[
                                                { name: "Thời trang", icon: "checkroom" },
                                                { name: "Điện thoại & Máy tính", icon: "devices" },
                                                { name: "Vật liệu xây dựng", icon: "construction" },
                                                { name: "Nhà thuốc", icon: "medical_services" },
                                                { name: "Mẹ & Bé", icon: "child_care" },
                                                { name: "Sách & Văn phòng phẩm", icon: "menu_book" },
                                                { name: "Sản xuất", icon: "factory" },
                                                { name: "Tạp hóa & Siêu thị", icon: "shopping_cart" },
                                                { name: "Mỹ phẩm", icon: "brush" },
                                                { name: "Nông sản & Thực phẩm", icon: "grass" }
                                            ].concat([
                                                { name: "Thời trang", icon: "checkroom" },
                                                { name: "Điện thoại & Máy tính", icon: "devices" },
                                                { name: "Vật liệu xây dựng", icon: "construction" },
                                                { name: "Nhà thuốc", icon: "medical_services" },
                                                { name: "Mẹ & Bé", icon: "child_care" },
                                                { name: "Sách & Văn phòng phẩm", icon: "menu_book" },
                                                { name: "Sản xuất", icon: "factory" },
                                                { name: "Tạp hóa & Siêu thị", icon: "shopping_cart" },
                                                { name: "Mỹ phẩm", icon: "brush" },
                                                { name: "Nông sản & Thực phẩm", icon: "grass" }
                                            ]).map((sector, idx) => (
                                                <div key={idx} className="bg-white flex items-center gap-3 px-4 py-2.5 rounded-full shadow-sm border border-slate-100 shrink-0">
                                                    <Icon name={sector.icon} className="text-blue-500 text-lg" />
                                                    <span className="text-slate-700 text-[13px] font-medium">{sector.name}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Row 2 */}
                                        <div className="flex animate-marquee whitespace-nowrap gap-3 py-2" style={{ animationDirection: 'reverse' }}>
                                            {[
                                                { name: "Xe, Máy móc", icon: "directions_bike" },
                                                { name: "Nội thất & Gia dụng", icon: "weekend" },
                                                { name: "Hoa & Quà tặng", icon: "card_giftcard" },
                                                { name: "Nhà hàng", icon: "restaurant" },
                                                { name: "Quán ăn", icon: "ramen_dining" },
                                                { name: "Cafe, Trà sữa", icon: "coffee" },
                                                { name: "Karaoke, Bida", icon: "mic" },
                                                { name: "Bar, Pub & Club", icon: "local_bar" },
                                                { name: "Căng tin & Trạm nghỉ", icon: "bakery_dining" },
                                                { name: "Khác", icon: "apps" }
                                            ].concat([
                                                { name: "Xe, Máy móc", icon: "directions_bike" },
                                                { name: "Nội thất & Gia dụng", icon: "weekend" },
                                                { name: "Hoa & Quà tặng", icon: "card_giftcard" },
                                                { name: "Nhà hàng", icon: "restaurant" },
                                                { name: "Quán ăn", icon: "ramen_dining" },
                                                { name: "Cafe, Trà sữa", icon: "coffee" },
                                                { name: "Karaoke, Bida", icon: "mic" },
                                                { name: "Bar, Pub & Club", icon: "local_bar" },
                                                { name: "Căng tin & Trạm nghỉ", icon: "bakery_dining" },
                                                { name: "Khác", icon: "apps" }
                                            ]).map((sector, idx) => (
                                                <div key={idx} className="bg-white flex items-center gap-3 px-4 py-2.5 rounded-full shadow-sm border border-slate-100 shrink-0">
                                                    <Icon name={sector.icon} className="text-blue-500 text-lg" />
                                                    <span className="text-slate-700 text-[13px] font-medium">{sector.name}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Gradient Shadows */}
                                        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
                                        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Col 3: Vertical Card */}
                    <div className="w-full lg:w-[26%] flex flex-col h-full">
                        {/* Thuế Card */}
                        <div className="bg-white rounded-[20px] p-4 lg:p-6 flex flex-col h-auto lg:h-[400px] group transition-all duration-500 shadow-md hover:shadow-xl hover:-translate-y-1 overflow-hidden relative">
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-6 relative h-[165px] flex flex-col justify-center">
                                    <div className="bg-slate-900 rounded-xl p-6 shadow-2xl relative overflow-hidden group-hover:-rotate-1 group-hover:scale-[1.02] transition-all duration-700">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-11 h-11 lg:w-10 lg:h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                                                <Icon name="verified" className="text-white text-lg" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-[12px] font-bold text-white leading-none">Hóa đơn Q4</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4 mb-2">
                                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-500 w-[92%]"></div>
                                            </div>
                                            <div className="flex justify-between text-[10px] text-slate-400">
                                                <span>Sẵn sàng: 482 / 500</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 -right-2 bg-white rounded-xl shadow-lg border border-slate-50 p-2.5 -rotate-6 group-hover:rotate-6 transition-all duration-500">
                                        <Icon name="description" className="text-blue-500 text-xl" />
                                    </div>
                                    <div className="absolute bottom-4 -left-2 bg-green-500 text-white text-[9px] font-black px-3 py-1.5 rounded-full shadow-lg shadow-green-900/20 uppercase tracking-widest rotate-12">
                                        Thuế tự động
                                    </div>
                                </div>

                                <div className="text-left">
                                    <h4 className="text-[20px] lg:text-[28px] font-normal text-slate-900 tracking-tight mb-4">Thuế & Hóa đơn</h4>
                                    <p className="text-base text-slate-500 font-normal leading-relaxed">
                                        Tự động hóa báo cáo thuế và quản lý hóa đơn. Đảm bảo tính pháp lý, giúp tối ưu hồ sơ doanh nghiệp.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
