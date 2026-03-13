import React from 'react';
import Icon from '../common/Icon';
import Button from '../common/Button';

const SolutionsSection: React.FC = () => {
    const solutions = [
        {
            id: "01",
            title: "Dữ liệu phân tán",
            desc: "Nhanh chóng hợp nhất và làm sạch dữ liệu từ mọi nguồn, tạo ra một 'phiên bản sự thật duy nhất'.",
            items: [
                'Hợp nhất danh mục hàng hóa',
                'Đồng bộ tồn kho liên chi nhánh',
                'Quản lý công nợ tập trung',
                'Hệ thống báo cáo tự động'
            ],
            color: "blue"
        },
        {
            id: "02",
            title: "Khó khăn mở rộng",
            desc: "Quy trình cũ không bắt kịp tốc độ tăng trưởng, gây nghẽn cổ chai tại các khâu then chốt.",
            items: [
                'Quy trình chuẩn hóa ISO',
                'Mở rộng chi nhánh không giới hạn',
                'Phân quyền linh hoạt',
                'Hạ tầng Cloud sẵn sàng'
            ],
            color: "indigo"
        },
        {
            id: "03",
            title: "Thất thoát tài sản",
            desc: "Thiếu cơ chế kiểm soát chéo dẫn đến thất thoát hàng hóa và tài chính không rõ nguyên nhân.",
            items: [
                'Kiểm kê kho tự động',
                'Cảnh báo gian lận Real-time',
                'Đối soát dòng tiền chính xác',
                'Truy xuất lịch sử giao dịch'
            ],
            color: "slate"
        }
    ];

    return (
        <section className="py-24 bg-white border-y border-slate-100 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Left Column: Text + CTA */}
                    <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left pt-10 sticky top-24">
                        <h2 className="text-4xl md:text-5xl font-normal text-slate-900 mb-8 tracking-tight leading-[1.15]">
                            Giải quyết mọi <br /><span className="text-blue-500">nỗi đau</span> doanh nghiệp.
                        </h2>
                        <p className="text-slate-500 font-light text-base mb-12 leading-relaxed">
                            Chuẩn hóa quy trình và minh bạch dữ liệu để doanh nghiệp <br /> vận hành trơn tru, ổn định và hiệu quả lâu dài.
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
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-sm font-bold text-blue-500 bg-blue-50 px-3 py-1 rounded-full">{sol.id}</span>
                                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                        <Icon name={i === 0 ? "account_tree" : i === 1 ? "trending_up" : "security"} className="text-xl" />
                                    </div>
                                </div>

                                <h3 className="text-2xl lg:text-[28px] font-normal text-slate-900 mb-4 tracking-tight">{sol.title}</h3>
                                <p className="text-base text-slate-500 font-light mb-8 leading-relaxed max-w-xl">
                                    {sol.desc}
                                </p>

                                <div className="space-y-3 mt-auto pt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
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
