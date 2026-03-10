import React from 'react';
import Icon from '../common/Icon';
import Button from '../common/Button';

const SolutionsSection: React.FC = () => {
    return (
        <section className="py-24 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-normal text-slate-900 mb-20 text-center tracking-tight">Giải quyết mọi <span className="text-blue-500">nỗi đau</span> doanh nghiệp.</h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-4 space-y-3">
                        {[
                            { id: "01", title: "Dữ liệu phân tán" },
                            { id: "02", title: "Khó khăn mở rộng" },
                            { id: "03", title: "Thất thoát tài sản" }
                        ].map((tab, i) => (
                            <div key={i} className={`p-6 rounded-[20px] cursor-pointer transition-all duration-300 flex items-center justify-between group ${i === 0 ? 'bg-slate-900 text-white shadow-xl' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}>
                                <div className="flex items-center gap-4">
                                    <span className={`text-xs font-bold ${i === 0 ? 'text-blue-400' : 'text-slate-300'}`}>{tab.id}</span>
                                    <h4 className="text-lg font-normal tracking-tight">{tab.title}</h4>
                                </div>
                                <Icon name="chevron_right" className={`${i === 0 ? 'text-blue-400' : 'text-slate-300 group-hover:translate-x-1 transition-transform'}`} />
                            </div>
                        ))}
                    </div>

                    <div className="lg:col-span-8 bg-slate-50 p-10 lg:p-12 rounded-[32px] border border-slate-100">
                        <p className="text-2xl text-slate-800 mb-12 font-light leading-snug">
                            Nhanh chóng hợp nhất và làm sạch dữ liệu từ mọi nguồn, tạo ra một "phiên bản sự thật duy nhất" hỗ trợ ra quyết định chuẩn xác.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                'Hợp nhất danh mục hàng hóa',
                                'Đồng bộ tồn kho liên chi nhánh',
                                'Quản lý công nợ tập trung',
                                'Hệ thống báo cáo tự động'
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200/50 flex items-center justify-between group cursor-pointer hover:border-blue-500 transition-colors">
                                    <h4 className="text-[15px] font-normal text-slate-700 tracking-tight">{item}</h4>
                                    <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                                        <Icon name="add" className="text-xs" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 flex justify-start">
                            <Button to="/contact" variant="primary">
                                Tư vấn giải pháp miễn phí
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;
