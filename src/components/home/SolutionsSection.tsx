import React from 'react';
import Icon from '../common/Icon';
import Button from '../common/Button';
import Badge from '../common/Badge';

const SolutionsSection: React.FC = () => {
    const solutions = [
        {
            id: "01",
            title: "Dữ liệu phân tán",
            desc: "Hợp nhất và chuẩn hóa nguồn dữ liệu phân tán thành một hệ thống thông tin tập trung duy nhất.",
            items: [
                'Hợp nhất danh mục hàng hóa',
                'Đồng bộ tồn kho liên chi nhánh',
                'Quản lý công nợ tập trung',
                'Hệ thống báo cáo tự động'
            ],
            color: "blue",
            icon: "account_tree"
        },
        {
            id: "02",
            title: "Khó khăn mở rộng",
            desc: "Khắc phục nút thắt vận hành bằng quy trình thông minh, ổn định và sẵn sàng cho sự bứt phá.",
            items: [
                'Quy trình chuẩn hóa ISO',
                'Mở rộng chi nhánh không giới hạn',
                'Phân quyền linh hoạt',
                'Hạ tầng Cloud sẵn sàng'
            ],
            color: "indigo",
            icon: "trending_up"
        },
        {
            id: "03",
            title: "Thất thoát tài sản",
            desc: "Thiết lập cơ chế kiểm soát chéo chặt chẽ, ngăn chặn thất thoát và minh bạch hóa mọi tài sản.",
            items: [
                'Kiểm kê kho tự động',
                'Cảnh báo gian lận Real-time',
                'Đối soát dòng tiền chính xác',
                'Truy xuất lịch sử giao dịch'
            ],
            color: "slate",
            icon: "security"
        },
        {
            id: "04",
            title: "Quy trình làm việc rườm rà",
            desc: "Số hóa và tự động hóa các bước xử lý thủ công, tối ưu hóa năng suất cho toàn bộ đội ngũ.",
            items: [
                'Phê duyệt điện tử',
                'Xử lý đơn hàng tự động',
                'Giao việc thông minh',
                'Cảnh báo đến hạn'
            ],
            color: "cyan",
            icon: "rocket_launch"
        },
        {
            id: "05",
            title: "Thiếu số liệu quyết định",
            desc: "Bảng điều khiển thông minh cung cấp cái nhìn toàn cảnh theo thời gian thực, hỗ trợ lãnh đạo ra quyết định nhanh chóng.",
            items: [
                'Báo cáo đa chiều RT',
                'Phân tích hiệu suất',
                'Dự báo doanh thu',
                'Biểu đồ trực quan'
            ],
            color: "purple",
            icon: "insights"
        }
    ];

    return (
        <section className="py-24 bg-white border-y border-slate-100 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Left Column: Text + CTA */}
                    <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left pt-10 sticky top-24">
                        <Badge variant="primary" className="mb-6">GIẢI PHÁP</Badge>
                        <h2 className="text-4xl md:text-5xl font-normal text-slate-900 mb-8 tracking-tight leading-[1.15]">
                            Giải quyết mọi<br /><span className="text-blue-500">nỗi đau</span> doanh nghiệp.
                        </h2>
                        <p className="text-slate-500 font-light text-base mb-12 leading-relaxed">
                            Chuẩn hóa quy trình và minh bạch dữ liệu để doanh nghiệp <br className="hidden md:block" /> vận hành trơn tru, ổn định và hiệu quả lâu dài.
                        </p>
                        <div className="hidden lg:block">
                            <Button to="/contact" variant="primary" size="lg">
                                Tư vấn giải pháp miễn phí
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Stacked Cards (keeping original UI) */}
                    <div className="lg:col-span-6 flex flex-col gap-8">
                        {solutions.map((sol, i) => (
                            <div key={i} className="group bg-white rounded-[20px] p-6 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm font-bold text-blue-500 bg-blue-50 px-3 py-1 rounded-full">{sol.id}</span>
                                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                        <Icon name={sol.icon} className="text-xl" />
                                    </div>
                                </div>

                                <h3 className="text-2xl lg:text-[28px] font-normal text-slate-900 mb-4 tracking-tight">{sol.title}</h3>
                                <p className="text-base text-slate-500 font-light mb-4 leading-relaxed max-w-xl">
                                    {sol.desc}
                                </p>

                                <div className="space-y-3 mt-auto grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                                    {sol.items.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                                <Icon name="check" className="text-[10px] text-blue-500 font-black" />
                                            </div>
                                            <span className="text-[14px] text-slate-700 font-normal">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile CTA */}
                    <div className="lg:hidden w-full flex justify-center mt-8">
                        <Button to="/contact" variant="primary" size="lg" fullWidth>
                            Tư vấn giải pháp miễn phí
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;
