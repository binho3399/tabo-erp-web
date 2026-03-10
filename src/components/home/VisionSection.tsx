import React from 'react';
import Icon from '../common/Icon';

const VisionSection: React.FC = () => {
    return (
        <section className="py-24 bg-slate-50/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <span className="bg-blue-50 text-blue-600 border border-blue-100 font-semibold tracking-wide text-[10px] px-3 py-1 rounded-full mb-6 inline-flex uppercase">
                    Tầm Nhìn & Sứ Mệnh
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-20 max-w-4xl mx-auto leading-tight tracking-tight text-slate-900">
                    Gia tăng giá trị bằng cách hiểu doanh nghiệp bạn và <span className="text-blue-500">số hóa quy trình</span> tối ưu.
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {[
                        { icon: "track_changes", title: "Trọng Tâm", text: "Ưu tiên sự rõ ràng trong chiến lược, tăng trưởng bền vững và các tác động có thể đo lường được." },
                        { icon: "lightbulb", title: "Cách Tiếp Cận", text: "Kết hợp dữ liệu cùng giải pháp tinh chỉnh, xây dựng lộ trình thiết thực biến chiến lược thành kết quả." },
                        { icon: "apartment", title: "Kinh Nghiệm", text: "Tháo gỡ khó khăn, mở khóa tốc độ và hướng đến sự phát triển vượt bậc cho mọi tổ chức." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-10 rounded-[24px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 group">
                            <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-blue-500 group-hover:border-blue-400 transition-colors duration-500">
                                <Icon name={item.icon} className="text-[28px] text-blue-500 group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="text-2xl font-normal mb-4 text-slate-900 tracking-tight">{item.title}</h3>
                            <p className="text-slate-500 font-light leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VisionSection;
