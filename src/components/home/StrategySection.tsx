import React from 'react';
import Icon from '../common/Icon';

const StrategySection: React.FC = () => {
    return (
        <section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }}></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-normal text-slate-900 mb-8 tracking-tight leading-[1.15]">
                        Thúc đẩy thành công qua <span className="text-blue-500">quản trị thông minh.</span>
                    </h2>
                    <p className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
                        Chúng tôi không chỉ cung cấp phần mềm, mà mang đến một tư duy quản trị mới - nơi mọi quyết định đều dựa trên dữ liệu thực tế.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[240px]">
                    {/* Main Card: Data Architecture */}
                    <div className="lg:col-span-8 lg:row-span-2 bg-slate-900 rounded-[32px] p-10 relative overflow-hidden group">
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center mb-6">
                                <Icon name="layers" className="text-white text-2xl" />
                            </div>
                            <h3 className="text-3xl font-normal text-white mb-4 tracking-tight">Kiến trúc dữ liệu lõi</h3>
                            <p className="text-slate-400 font-light text-lg max-w-md leading-relaxed">
                                Xây dựng nền tảng thông tin đồng bộ cho tất cả các phòng ban, loại bỏ hoàn toàn các ốc đảo dữ liệu.
                            </p>
                            <div className="mt-auto pt-10 flex gap-4 overflow-hidden">
                                {[1, 2, 3, 4, 5].map((_, i) => (
                                    <div key={i} className="flex-1 h-32 bg-white/5 rounded-t-xl border-x border-t border-white/10 flex items-end p-3 group-hover:bg-white/10 transition-colors">
                                        <div className="w-full bg-blue-500/40 rounded-sm" style={{ height: `${20 + (i * 15)}%` }}></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                    </div>

                    {/* Card 2: Automation */}
                    <div className="lg:col-span-4 lg:row-span-1 bg-slate-50 rounded-[32px] p-8 border border-slate-100 hover:border-blue-500/30 transition-all duration-500 overflow-hidden relative group">
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-slate-100">
                                    <Icon name="smart_toy" className="text-blue-500 text-xl" />
                                </div>
                                <h4 className="text-xl font-normal text-slate-900 tracking-tight">Tự động hóa</h4>
                            </div>
                            <p className="text-slate-500 font-light text-[15px]">Giải phóng nhân lực khỏi các công việc lặp lại nhàm chán bằng AI.</p>
                        </div>
                        <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
                            <Icon name="settings" className="text-9xl" />
                        </div>
                    </div>

                    {/* Card 3: RT Reports */}
                    <div className="lg:col-span-4 lg:row-span-1 bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden relative group">
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100/50">
                                    <Icon name="insights" className="text-blue-500 text-xl" />
                                </div>
                                <h4 className="text-xl font-normal text-slate-900 tracking-tight">Báo cáo đa chiều RT</h4>
                            </div>
                            <div className="mt-2 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Data Stream</span>
                            </div>
                        </div>
                        <div className="absolute bottom-6 right-6 flex items-end gap-1">
                            {[20, 40, 30, 60, 45].map((h, i) => (
                                <div key={i} className="w-2 bg-slate-100 rounded-t-sm group-hover:bg-blue-100 transition-colors" style={{ height: `${h}px` }}></div>
                            ))}
                        </div>
                    </div>

                    {/* Card 4: Scalability */}
                    <div className="lg:col-span-12 lg:row-span-1 bg-blue-600 rounded-[32px] p-8 relative overflow-hidden group">
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between h-full gap-8">
                            <div className="max-w-md text-center md:text-left">
                                <h4 className="text-2xl font-normal text-white mb-2 tracking-tight">Khả năng mở rộng vô hạn</h4>
                                <p className="text-blue-100 font-light text-[15px]">
                                    Hệ thống sẵn sàng cho hàng triệu giao dịch, dễ dàng tích hợp thêm các phân hệ mới bất cứ lúc nào.
                                </p>
                            </div>
                            <div className="flex gap-4 self-center md:self-auto">
                                <div className="px-6 py-2 bg-white/10 rounded-full border border-white/20 text-white text-[13px] backdrop-blur-sm">Multi-branch</div>
                                <div className="px-6 py-2 bg-white/10 rounded-full border border-white/20 text-white text-[13px] backdrop-blur-sm">Cloud Native</div>
                                <div className="px-6 py-2 bg-white/10 rounded-full border border-white/20 text-white text-[13px] backdrop-blur-sm">API Ready</div>
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250px_250px] animate-[pulse_5s_infinite]"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StrategySection;
