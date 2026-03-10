import React from 'react';
import Icon from '../common/Icon';

const StrategySection: React.FC = () => {
    return (
        <section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }}></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-blue-500/5 rounded-[30px] blur-2xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                                alt="Corporate Strategy Meeting"
                                className="rounded-[24px] shadow-2xl object-cover h-[540px] w-full relative z-10"
                            />
                            <div className="absolute -bottom-8 -right-8 bg-slate-900 p-8 rounded-[20px] shadow-2xl hidden xl:block max-w-[320px] z-20 border border-white/10">
                                <h4 className="text-xl font-normal text-white mb-2 tracking-tight">Thành công số hóa</h4>
                                <p className="text-slate-400 text-sm font-light">Được xây dựng trên nền tảng dữ liệu đồng nhất và quy trình chuẩn hóa.</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:pl-8">
                        <h2 className="text-4xl md:text-5xl font-normal text-slate-900 mb-8 tracking-tight leading-[1.15]">
                            Thúc đẩy thành công qua <span className="text-blue-500">quản trị thông minh.</span>
                        </h2>
                        <p className="text-lg text-slate-500 mb-12 leading-relaxed font-light">
                            Chúng tôi không chỉ cung cấp phần mềm, mà mang đến một tư duy quản trị mới - nơi mọi quyết định đều dựa trên dữ liệu thực tế và tức thì.
                        </p>

                        <div className="space-y-4">
                            {[
                                { title: "Kiến trúc dữ liệu lõi", desc: "Xây dựng nền tảng thông tin đồng bộ cho tất cả các phòng ban." },
                                { title: "Tự động hóa thông minh", desc: "Giải phóng nhân lực khỏi các công việc lặp lại nhàm chán." },
                                { title: "Báo cáo đa chiều RT", desc: "Theo dõi chỉ số kinh doanh mọi lúc, mọi nơi trên mọi thiết bị." },
                                { title: "Khả năng mở rộng vô hạn", desc: "Dễ dàng tích hợp thêm các phân hệ mới khi doanh nghiệp lớn mạnh." }
                            ].map((item, i) => (
                                <div key={i} className="group bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 rounded-[16px] p-5 border border-slate-100">
                                    <div className="flex justify-between items-center cursor-pointer">
                                        <h4 className="text-lg font-normal text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">
                                            {item.title}
                                        </h4>
                                        <Icon name="arrow_forward" className="text-slate-300 group-hover:text-blue-500 transition-all transform group-hover:translate-x-1" />
                                    </div>
                                    <p className="text-slate-500 text-sm mt-2 font-light hidden group-hover:block animate-in fade-in slide-in-from-top-2 duration-300">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StrategySection;
