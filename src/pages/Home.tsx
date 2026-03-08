import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/common/Icon';
import Button from '../components/common/Button';





const Home: React.FC = () => {
    return (
        <div className="font-sans text-gray-900 bg-[#F7F8F8]">
            {/* 1. Hero Section */}
            <section className="relative bg-slate-50 pt-32 pb-20 lg:pt-32 lg:pb-24 overflow-hidden min-h-[85vh] lg:min-h-[80vh] flex items-center justify-center">
                {/* Ambient Blurry Blobs */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none mix-blend-multiply"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-cyan-300/20 blur-[120px] pointer-events-none mix-blend-multiply"></div>
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-purple-300/10 blur-[100px] pointer-events-none mix-blend-multiply"></div>

                {/* Small Floating Decorations with Animations */}
                <div className="absolute top-[15%] left-[15%] w-2 h-2 bg-blue-500 rounded-full opacity-40 pointer-events-none animate-bounce" style={{ animationDuration: '4s' }}></div>
                <div className="absolute bottom-[25%] right-[15%] border-[1.5px] border-indigo-400 w-3 h-3 rounded-sm opacity-30 rotate-45 pointer-events-none animate-[spin]" style={{ animationDuration: '6s' }}></div>
                <div className="absolute top-[25%] right-[20%] opacity-30 text-blue-600 pointer-events-none animate-pulse" style={{ animationDuration: '3s' }}>
                    <Icon name="star" className="text-[18px]" />
                </div>
                <div className="absolute bottom-[35%] left-[10%] opacity-30 text-cyan-600 pointer-events-none -rotate-12 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                    <Icon name="change_history" className="text-[20px]" />
                </div>
                <div className="absolute top-[10%] left-[80%] w-2 h-2 bg-orange-400 rounded-full opacity-40 pointer-events-none animate-pulse" style={{ animationDuration: '2s' }}></div>

                {/* Subtle Grid Pattern Overlay with Animated SVG Beams */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <defs>
                            <linearGradient id="beamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.35" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                        </defs>

                        {/* Randomized snaking paths flowing top-to-bottom */}
                        <path
                            d="M 15 0 V 25 H 30 V 45 H 10 V 70 H 25 V 100"
                            fill="none"
                            stroke="url(#beamGradient)"
                            strokeWidth="0.04"
                            pathLength="1"
                            strokeDasharray="0.12 0.88"
                            className="animate-grid-dash"
                        />
                        <path
                            d="M 85 0 V 35 H 70 V 65 H 90 V 85 H 75 V 100"
                            fill="none"
                            stroke="url(#beamGradient)"
                            strokeWidth="0.04"
                            pathLength="1"
                            strokeDasharray="0.15 0.85"
                            className="animate-grid-dash"
                            style={{ animationDelay: '3s', animationDuration: '20s' }}
                        />
                        <path
                            d="M 45 0 V 15 H 55 V 35 H 40 V 60 H 60 V 80 H 50 V 100"
                            fill="none"
                            stroke="url(#beamGradient)"
                            strokeWidth="0.025"
                            pathLength="1"
                            strokeDasharray="0.1 0.9"
                            className="animate-grid-dash"
                            style={{ animationDelay: '6s', animationDuration: '25s' }}
                        />
                        <path
                            d="M 65 0 V 45 H 55 V 100"
                            fill="none"
                            stroke="url(#beamGradient)"
                            strokeWidth="0.025"
                            pathLength="1"
                            strokeDasharray="0.08 0.92"
                            className="animate-grid-dash"
                            style={{ animationDelay: '9s', animationDuration: '30s' }}
                        />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">

                    {/* Centered Content */}
                    <div className="text-center max-w-3xl mx-auto flex flex-col items-center relative z-20">
                        {/* Sparkles Decoration */}
                        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent blur-3xl"></div>
                        <span className="bg-blue-50 text-blue-700 border border-blue-100 font-semibold tracking-wide text-xs px-4 py-1.5 rounded-full mb-8 inline-flex items-center shadow-sm">
                            HỆ ĐIỀU HÀNH DOANH NGHIỆP
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] leading-[1.1] font-normal tracking-tight mb-8 text-slate-900 font-sans max-w-[95%] md:max-w-full">
                            Quản lý <span className="text-blue-500">bán hàng</span> và <br className="hidden md:block" /><span className="text-blue-500">vận hành</span> doanh nghiệp trên <br className="hidden md:block" />một <span className="text-blue-500">nền tảng duy nhất.</span>
                        </h1>

                        <p className="text-base text-slate-500 mb-10 max-w-2xl font-light">
                            Luôn cập nhật dữ liệu tài chính, kho bãi và tiến độ công việc theo thời gian thực <br className="hidden md:block" />để đưa ra các quyết định chiến lược chuẩn xác nhất.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Button to="/contact" variant="primary" size="lg">
                                Bắt đầu ngay
                            </Button>
                            <Button to="/about" variant="outline" size="lg">
                                Dùng thử miễn phí
                            </Button>
                        </div>

                        {/* Auto-scrolling Features Ticker */}
                        <div
                            className="relative w-full max-w-2xl mx-auto overflow-hidden mt-2"
                            style={{
                                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                            }}
                        >
                            <div className="flex gap-10 whitespace-nowrap animate-[marquee_25s_linear_infinite] w-max">
                                {[...Array(2)].map((_, i) => (
                                    <div key={i} className="flex gap-10 items-center">
                                        {[
                                            { text: "Chiến Lược Dữ Liệu", icon: "pie_chart" },
                                            { text: "Kết Quả Thực Tế", icon: "track_changes" },
                                            { text: "Tăng Trưởng Mở Rộng", icon: "trending_up" },
                                            { text: "Chuyên Môn Tin Cậy", icon: "gpp_good" }
                                        ].map((item, index) => (
                                            <div key={`${i}-${index}`} className="flex items-center text-slate-400 hover:text-primary-600 transition-colors cursor-default">
                                                <Icon name={item.icon} className="text-[24px] mr-2 opacity-70" />
                                                <span className="font-normal text-base leading-6 uppercase tracking-wider">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Floating Element: Left Top Card (Sales total) */}
                    <div className="hidden lg:block absolute left-[-2%] top-[5%] -rotate-[8deg] bg-white p-5 rounded-[20px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] w-[260px] transform transition-transform hover:scale-105 hover:-rotate-3 border border-slate-100/50 z-30">
                        <div className="flex justify-between items-center mb-1">
                            <h4 className="font-bold text-slate-800 text-sm">Doanh thu tổng</h4>
                            <span className="text-[10px] text-slate-400">20%</span>
                        </div>
                        <div className="font-bold text-xl text-slate-800 mb-6 flex justify-start items-baseline gap-1">
                            5.230.000 <span className="text-slate-400 font-medium text-[16px] border-b-[1px] border-slate-400 leading-none pb-0.5">đ</span>
                        </div>
                        <div className="flex items-end justify-between gap-1.5 h-20">
                            <div className="w-full bg-blue-300 rounded-t-sm h-[30%]"></div>
                            <div className="w-full bg-blue-400 rounded-t-sm h-[45%]"></div>
                            <div className="w-full bg-blue-500 rounded-t-sm h-[80%]"></div>
                            <div className="w-full bg-blue-400 rounded-t-sm h-[60%]"></div>
                            <div className="w-full bg-blue-600 rounded-t-sm h-[100%]"></div>
                            <div className="w-full bg-blue-500 rounded-t-sm h-[35%]"></div>
                            <div className="w-full bg-blue-300 rounded-t-sm h-[20%]"></div>
                        </div>
                        <div className="flex justify-between mt-3 text-[9px] text-slate-400 font-medium px-1">
                            <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                        </div>
                    </div>

                    {/* Floating Element: Left Bottom Card (Satisfied users) */}
                    <div className="hidden lg:flex absolute left-[5%] bottom-[5%] rotate-12 bg-[#1A1A1A] p-5 rounded-[20px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] flex-col items-center justify-center w-44 text-center transform transition-transform hover:scale-105 hover:rotate-6 border border-slate-800 z-30">
                        <div className="flex justify-center -space-x-2 mb-3">
                            <img src="https://i.pravatar.cc/100?img=4" alt="User" className="w-8 h-8 rounded-full border border-[#1A1A1A] object-cover" />
                            <img src="https://i.pravatar.cc/100?img=5" alt="User" className="w-8 h-8 rounded-full border border-[#1A1A1A] object-cover" />
                            <img src="https://i.pravatar.cc/100?img=6" alt="User" className="w-8 h-8 rounded-full border border-[#1A1A1A] object-cover" />
                        </div>
                        <h4 className="font-bold text-white text-lg">100K+</h4>
                        <p className="text-[10px] text-slate-400">Khách hàng hài lòng</p>
                    </div>

                    {/* Floating Element: Right Top Card (Corporate Fund) */}
                    <div className="hidden lg:block absolute right-[-2%] top-[10%] rotate-6 bg-[#1A1A1A] p-5 rounded-[20px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] w-[280px] transform transition-transform hover:scale-105 hover:rotate-3 border border-slate-800 z-30">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-11 h-11 rounded-full border border-blue-500/30 bg-blue-500/10 flex items-center justify-center shrink-0">
                                <Icon name="account_balance_wallet" className="text-blue-400 text-[22px]" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-[15px] leading-tight">Sổ quỹ doanh nghiệp</h4>
                                <p className="text-slate-400 text-[11px] mt-0.5">Tiền mặt & Ngân hàng</p>
                            </div>
                        </div>
                        <div className="w-full h-px bg-slate-700/50 mb-3.5"></div>
                        <p className="text-slate-400 text-[11px] mb-1 uppercase tracking-wider font-semibold">Số dư hiện tại</p>
                        <h3 className="font-bold text-white text-[24px] tracking-tight">
                            4.250.500.000 <span className="text-slate-400 font-medium text-lg ml-0.5">₫</span>
                        </h3>
                    </div>

                    {/* Floating Element: Right Bottom Card (Branch Management) */}
                    <div className="hidden lg:block absolute right-[3%] bottom-[5%] -rotate-6 bg-white p-4 rounded-[20px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] w-[230px] transform transition-transform hover:scale-105 hover:-rotate-3 border border-slate-100/50 z-30">
                        <div className="flex items-center gap-2.5 mb-3">
                            <div className="w-9 h-9 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                                <Icon name="storefront" className="text-indigo-500 text-[18px]" />
                            </div>
                            <div>
                                <h4 className="text-slate-800 text-[13px] font-bold leading-tight">Mạng lưới chi nhánh</h4>
                                <p className="text-slate-400 text-[9px] mt-0.5">Đồng bộ thời gian thực</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <div className="flex items-center justify-between bg-slate-50 px-2.5 py-2 rounded-lg border border-slate-100">
                                <span className="text-slate-600 text-[11px] flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    Chi nhánh HCM
                                </span>
                                <span className="text-slate-800 text-[11px] font-semibold text-right">Mở cửa</span>
                            </div>
                            <div className="flex items-center justify-between bg-slate-50 px-2.5 py-2 rounded-lg border border-slate-100">
                                <span className="text-slate-600 text-[11px] flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    Chi nhánh Hà Nội
                                </span>
                                <span className="text-slate-800 text-[11px] font-semibold text-right">Mở cửa</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Gradient for smooth transition */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
            </section>



            {/* 3. Phân hệ & Tính năng (Modules & Features) */}
            <section className="py-24 bg-white">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Row */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-end mb-16 gap-y-10 lg:gap-5 text-center lg:text-left">
                        <div className="max-w-md lg:w-[30%] flex flex-col items-center lg:items-start">
                            <h2 className="text-4xl md:text-5xl font-normal text-slate-900 leading-[1.15] mb-5 tracking-tight font-sans">
                                Đa dạng phân hệ,<br />
                                <span className="text-blue-500 font-normal">tùy biến linh hoạt.</span>
                            </h2>
                            <p className="text-slate-500 text-[15px] leading-relaxed max-w-sm">
                                Chọn từ hàng chục phân hệ quản trị được thiết kế riêng. Mở rộng trơn tru khi doanh nghiệp của bạn lớn mạnh.
                            </p>
                        </div>

                        <div className="w-full lg:w-[70%] flex flex-col items-center gap-3 lg:gap-4 pb-4">
                            {/* Row 1: 3 items */}
                            <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
                                <div className="flex items-center gap-3 bg-white pr-6 pl-2 py-2 rounded-full border border-slate-200/60 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] hover:shadow-md transition-shadow cursor-default shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100/50">
                                        <Icon name="account_balance" className="text-blue-500 text-xl" />
                                    </div>
                                    <div className="">
                                        <h4 className="text-slate-800 text-[13px] font-normal leading-tight">Tài chính</h4>
                                        <p className="text-slate-400 text-[10px] mt-0.5">Kế toán tổng hợp</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-white pr-6 pl-2 py-2 rounded-full border border-slate-200/60 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] hover:shadow-md transition-shadow cursor-default shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center border border-orange-100/50">
                                        <Icon name="inventory_2" className="text-orange-500 text-xl" />
                                    </div>
                                    <div className="">
                                        <h4 className="text-slate-800 text-[13px] font-normal leading-tight">Kho bãi</h4>
                                        <p className="text-slate-400 text-[10px] mt-0.5">Kiểm soát vật tư</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-white pr-6 pl-2 py-2 rounded-full border border-slate-200/60 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] hover:shadow-md transition-shadow cursor-default shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100/50">
                                        <Icon name="groups" className="text-emerald-500 text-xl" />
                                    </div>
                                    <div className="">
                                        <h4 className="text-slate-800 text-[13px] font-normal leading-tight">Nhân sự</h4>
                                        <p className="text-slate-400 text-[10px] mt-0.5">Chấm công & lương</p>
                                    </div>
                                </div>
                            </div>

                            {/* Row 2: 4 items */}
                            <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
                                <div className="flex items-center gap-3 bg-white pr-6 pl-2 py-2 rounded-full border border-slate-200/60 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] hover:shadow-md transition-shadow cursor-default shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center border border-purple-100/50">
                                        <Icon name="local_shipping" className="text-purple-500 text-xl" />
                                    </div>
                                    <div className="">
                                        <h4 className="text-slate-800 text-[13px] font-normal leading-tight">Mua hàng</h4>
                                        <p className="text-slate-400 text-[10px] mt-0.5">Quản lý nhà cung cấp</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-white pr-6 pl-2 py-2 rounded-full border border-slate-200/60 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] hover:shadow-md transition-shadow cursor-default shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center border border-pink-100/50">
                                        <Icon name="point_of_sale" className="text-pink-500 text-xl" />
                                    </div>
                                    <div className="">
                                        <h4 className="text-slate-800 text-[13px] font-normal leading-tight">Bán hàng</h4>
                                        <p className="text-slate-400 text-[10px] mt-0.5">Đơn hàng & Doanh thu</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-white pr-6 pl-2 py-2 rounded-full border border-slate-200/60 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] hover:shadow-md transition-shadow cursor-default shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center border border-cyan-100/50">
                                        <Icon name="pie_chart" className="text-cyan-500 text-xl" />
                                    </div>
                                    <div className="">
                                        <h4 className="text-slate-800 text-[13px] font-normal leading-tight">Báo cáo</h4>
                                        <p className="text-slate-400 text-[10px] mt-0.5">Phân tích đa chiều</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-white pr-6 pl-2 py-2 rounded-full border border-slate-200/60 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] hover:shadow-md transition-shadow cursor-default shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center border border-red-100/50">
                                        <Icon name="precision_manufacturing" className="text-red-500 text-xl" />
                                    </div>
                                    <div className="">
                                        <h4 className="text-slate-800 text-[13px] font-normal leading-tight">Sản xuất</h4>
                                        <p className="text-slate-400 text-[10px] mt-0.5">Kế hoạch & Vận hành</p>
                                    </div>
                                </div>
                            </div>

                            {/* Row 3: 3 items */}
                            <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
                                <div className="flex items-center gap-3 bg-white pr-6 pl-2 py-2 rounded-full border border-slate-200/60 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] hover:shadow-md transition-shadow cursor-default shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center border border-teal-100/50">
                                        <Icon name="support_agent" className="text-teal-500 text-xl" />
                                    </div>
                                    <div className="">
                                        <h4 className="text-slate-800 text-[13px] font-normal leading-tight">CRM</h4>
                                        <p className="text-slate-400 text-[10px] mt-0.5">Chăm sóc khách hàng</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-white pr-6 pl-2 py-2 rounded-full border border-slate-200/60 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] hover:shadow-md transition-shadow cursor-default shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center border border-indigo-100/50">
                                        <Icon name="task" className="text-indigo-500 text-xl" />
                                    </div>
                                    <div className="">
                                        <h4 className="text-slate-800 text-[13px] font-normal leading-tight">Dự án</h4>
                                        <p className="text-slate-400 text-[10px] mt-0.5">Quản lý tiến độ</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-white pr-6 pl-2 py-2 rounded-full border border-slate-200/60 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] hover:shadow-md transition-shadow cursor-default shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center border border-amber-100/50">
                                        <Icon name="category" className="text-amber-500 text-xl" />
                                    </div>
                                    <div className="">
                                        <h4 className="text-slate-800 text-[13px] font-normal leading-tight">Tài sản</h4>
                                        <p className="text-slate-400 text-[10px] mt-0.5">Khấu hao & Bảo trì</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Grid Images Row */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:items-start">
                        {/* Col 1: Horizontal Cards */}
                        <div className="flex flex-col gap-6 w-full lg:w-[48%]">
                            {/* Kế toán Card */}
                            <div className="bg-white rounded-[20px] p-6 lg:p-4 flex flex-col lg:flex-row items-center h-auto lg:h-[175px] group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden relative shadow-sm gap-8 lg:gap-6">
                                <div className="absolute inset-0 opacity-[0.3]" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}></div>
                                <div className="relative z-10 flex flex-col w-full lg:w-[45%] text-center lg:text-left">
                                    <h4 className="text-[30px] font-normal text-slate-900 tracking-tight mb-3">Kế toán tổng hợp</h4>
                                    <p className="text-base text-slate-500 font-light leading-snug">
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
                            <div className="bg-white rounded-[20px] p-6 lg:p-4 flex flex-col-reverse lg:flex-row-reverse items-center h-auto lg:h-[175px] group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden relative shadow-sm gap-8 lg:gap-6">
                                <div className="absolute inset-0 opacity-[0.3]" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1.2px, transparent 1.2px)', backgroundSize: '16px 16px' }}></div>
                                <div className="relative z-10 flex flex-col w-full lg:w-[45%] text-center lg:text-right">
                                    <h4 className="text-[30px] font-normal text-slate-900 tracking-tight mb-3">Quản lý Công nợ</h4>
                                    <p className="text-base text-slate-500 font-light leading-snug">
                                        Theo dõi và thu hồi nợ tự động giúp tối ưu dòng tiền lưu động.
                                    </p>
                                </div>

                                <div className="relative z-10 flex-1 flex flex-col justify-center items-center py-0">
                                    <div className="w-full relative scale-90 translate-x-2 translate-y-6">
                                        {/* Tầng nền tạo độ dày */}
                                        <div className="absolute -inset-1 bg-gradient-to-tr from-slate-200 to-slate-100 rounded-[22px] blur-[2px] opacity-30"></div>

                                        {/* Lớp bóng đổ ảo */}
                                        <div className="absolute top-4 left-4 right-[-10px] bottom-[-4px] bg-slate-50/80 rounded-xl border border-slate-100 shadow-sm rotate-2"></div>

                                        {/* Nội dung chính Card Công nợ */}
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
                        <div className="w-full lg:w-[26%] bg-white rounded-[20px] p-6 lg:p-4 flex flex-col h-auto lg:h-[375px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden relative shadow-sm">
                            <div className="absolute inset-0 opacity-[0.3]" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}></div>
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-4 text-center lg:text-left">
                                    <h3 className="text-2xl lg:text-3xl font-normal text-slate-900 leading-[1.25] tracking-tight mb-4">
                                        Tối ưu hóa cho mọi<br className="hidden lg:block" />lĩnh vực kinh doanh.
                                    </h3>
                                    <p className="text-base text-slate-500 font-light leading-relaxed">
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
                            <div className="bg-white rounded-[20px] p-6 lg:p-4 flex flex-col h-auto lg:h-[375px] group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden relative shadow-sm">
                                <div className="absolute inset-0 opacity-[0.3]" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}></div>
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-6 relative h-[158px] flex flex-col justify-center">
                                        <div className="bg-slate-900 rounded-xl p-5 shadow-2xl relative overflow-hidden group-hover:-rotate-1 group-hover:scale-[1.02] transition-all duration-700">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center">
                                                    <Icon name="verified" className="text-white text-lg" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-[11px] font-bold text-white leading-none">Hóa đơn Q4</p>
                                                </div>
                                            </div>
                                            <div className="space-y-3 mb-2">
                                                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                                    <div className="h-full bg-blue-500 w-[92%]"></div>
                                                </div>
                                                <div className="flex justify-between text-[9px] text-slate-400">
                                                    <span>Sẵn sàng: 482 / 500</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute top-0 -right-2 bg-white rounded-xl shadow-lg border border-slate-50 p-2 -rotate-6 group-hover:rotate-6 transition-all duration-500">
                                            <Icon name="description" className="text-blue-500 text-lg" />
                                        </div>
                                        <div className="absolute bottom-6 -left-2 bg-green-500 text-white text-[8px] font-black px-2 py-1 rounded-full shadow-lg shadow-green-900/20 uppercase tracking-widest rotate-12">
                                            Thuế tự động
                                        </div>
                                    </div>

                                    <div className="text-center lg:text-left">
                                        <h4 className="text-2xl lg:text-3xl font-normal text-slate-900 tracking-tight mb-4">Thuế & Hóa đơn</h4>
                                        <p className="text-base text-slate-500 font-light leading-relaxed">
                                            Tự động hóa báo cáo thuế và quản lý hóa đơn.
                                            Đảm bảo tính pháp lý chính xác, giúp tối ưu
                                            hồ sơ doanh nghiệp một cách thông minh.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Strip Banner */}
            {/* 4. Strip Banner */}
            <section className="bg-slate-950 text-white py-24 relative overflow-hidden">
                {/* VIVID & IMPRESSIVE Background Decoration */}
                <div className="absolute inset-0 z-0">
                    {/* 1. Base Layer: Deep noise texture */}
                    <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

                    {/* 2. Primary Neon BLOOMS (Brighter & Larger) */}
                    <div className="absolute -top-[20%] -left-[10%] w-[80%] h-[140%] bg-blue-500/30 blur-[120px] rounded-full animate-pulse duration-[6s] opacity-80"></div>
                    <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[120%] bg-indigo-500/25 blur-[100px] rounded-full animate-pulse duration-[8s] delay-700 opacity-70"></div>

                    {/* 3. Intense Light Beams */}
                    <div className="absolute top-0 left-1/3 w-[2px] h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent skew-x-[30deg] blur-[1px]"></div>
                    <div className="absolute top-0 right-1/4 w-[3px] h-full bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent -skew-x-[20deg] blur-[2px]"></div>

                    {/* 4. Enhanced Concentric Geo-Circles */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-blue-500/10 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-blue-500/15 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/20 rounded-full"></div>

                    {/* 5. Clear Grid/Data Layer */}
                    <div className="absolute inset-0 opacity-[0.08]"
                        style={{
                            backgroundImage: `
                                linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
                             `,
                            backgroundSize: '60px 60px'
                        }}></div>

                    {/* 6. Floating 'Sparks' (More visible) */}
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-ping opacity-60"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-indigo-300 rounded-full shadow-[0_0_12px_rgba(129,140,248,0.8)] animate-ping opacity-50 delay-1000"></div>

                    {/* 7. Vivid Edge Accents */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 opacity-60"></div>
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent shadow-[0_0_25px_rgba(59,130,246,0.5)]"></div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent shadow-[0_0_25px_rgba(59,130,246,0.5)]"></div>

                    {/* 8. BRIGHT Connecting Flow Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 1000 400">
                        <defs>
                            <linearGradient id="brightFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="30%" stopColor="rgba(96, 165, 250, 0.7)" />
                                <stop offset="70%" stopColor="rgba(59, 130, 246, 0.7)" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                        </defs>
                        <path d="M 50,150 Q 300,50 600,200 T 950,250" fill="none" stroke="url(#brightFlowGradient)" strokeWidth="2" strokeDasharray="12 12" className="animate-flow-dash" />
                        <path d="M 0,250 C 200,250 400,350 700,250 S 1000,150 1000,150" fill="none" stroke="url(#brightFlowGradient)" strokeWidth="1.5" strokeDasharray="8 16" className="animate-flow-dash opacity-50" style={{ animationDelay: '0.5s' }} />
                        <path d="M 100,350 Q 400,450 800,300" fill="none" stroke="url(#brightFlowGradient)" strokeWidth="2.5" strokeDasharray="15 25" className="animate-flow-dash opacity-30" style={{ animationDuration: '4s' }} />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center relative z-10 gap-20">
                    {/* Left: Content & Button Group */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl md:text-[48px] font-normal tracking-tight leading-[1.2] mb-8">
                            Thời gian là tài sản quý nhất.<br />
                            <span className="text-blue-400">Tabo</span> giúp bạn <span className="text-blue-400">tối ưu hóa nó.</span>
                        </h2>
                        <Button to="/contact" variant="primary" size="lg" className="!bg-blue-600 hover:!bg-blue-500 rounded-2xl shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] border border-blue-400/30 !px-10">
                            Bắt đầu chuyển đổi <Icon name="arrow_forward" className="ml-3" />
                        </Button>
                    </div>

                    {/* Right: Impressive Decoration */}
                    <div className="relative h-[320px] w-full hidden lg:flex items-center justify-center">
                        {/* Central Glowing Icon */}
                        <div className="relative z-20 w-32 h-32 bg-blue-500/10 rounded-[20px] border border-blue-500/20 backdrop-blur-xl flex items-center justify-center animate-bounce shadow-[0_0_60px_-15px_rgba(59,130,246,0.5)]">
                            <Icon name="history" className="text-5xl text-blue-400" />
                            {/* Orbiting particles */}
                            <div className="absolute -top-4 -right-4 w-10 h-10 bg-indigo-500/20 rounded-full blur-xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-sky-500/20 rounded-full blur-lg"></div>
                        </div>

                        {/* Floating Glass Cards */}
                        <div className="absolute top-0 right-0 z-30 p-5 rounded-[20px] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl animate-pulse delay-75 transform hover:scale-105 transition-transform">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-green-500/20 rounded-[10px] flex items-center justify-center">
                                    <Icon name="trending_up" className="text-green-400" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Hiệu suất</p>
                                    <p className="text-xl font-normal text-white">+40%</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 z-30 p-5 rounded-[20px] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl animate-pulse delay-300 transform hover:scale-105 transition-transform">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-blue-500/20 rounded-[10px] flex items-center justify-center">
                                    <Icon name="schedule" className="text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Thời gian tiết kiệm</p>
                                    <p className="text-xl font-normal text-white">4h/ngày</p>
                                </div>
                            </div>
                        </div>

                        {/* Background SVG Decoration */}
                        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 400 400">
                            <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" className="text-blue-500/50" />
                            <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" className="text-indigo-500/40" />
                            <circle cx="200" cy="200" r="60" fill="none" stroke="currentColor" strokeWidth="1" className="text-sky-500/30" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* 5. Content Section - Driving success through strategy */}
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

            {/* 6. Value Proposition Vision */}
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

            {/* 7. Find the Right Solution (Tabs & Accordion) */}
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

            {/* 8. Pricing Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-4 block">Bảng giá linh hoạt</span>
                        <h3 className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight">Lựa chọn gói giải pháp <span className="text-blue-500">phù hợp.</span></h3>
                        <p className="mt-4 text-slate-500 font-light text-lg">Đầu tư vào quy trình hiệu quả, gặt hái kết quả bền vững.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Free Plan */}
                        <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
                            <div className="mb-8">
                                <h4 className="text-xl font-normal text-slate-900 mb-2 tracking-tight">Gói Miễn Phí</h4>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-normal text-slate-900 tracking-tighter">0₫</span>
                                    <span className="text-slate-400 text-sm">/vĩnh viễn</span>
                                </div>
                                <p className="text-slate-500 text-sm mt-4 font-light leading-relaxed">Dành cho cá nhân hoặc hộ kinh doanh nhỏ muốn bước đầu số hóa quản trị.</p>
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {[
                                    "Quản lý kho hàng cơ bản",
                                    "Số hóa danh mục sản phẩm",
                                    "Báo cáo bán hàng theo ngày",
                                    "Hỗ trợ qua cộng đồng"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-600 font-light text-[15px]">
                                        <Icon name="check_circle" className="text-blue-500 text-lg" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link to="/contact" className="w-full flex justify-center py-4 rounded-full border border-slate-200 text-slate-900 hover:bg-slate-50 transition-colors font-medium">
                                Bắt đầu ngay
                            </Link>
                        </div>

                        {/* Paid Plan */}
                        <div className="bg-slate-900 p-10 rounded-[32px] border border-blue-500 shadow-2xl shadow-blue-500/10 flex flex-col relative scale-[1.02] md:scale-105 z-10">
                            <div className="absolute top-6 right-8">
                                <span className="bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Phổ biến nhất</span>
                            </div>
                            <div className="mb-8">
                                <h4 className="text-xl font-normal text-white mb-2 tracking-tight">Gói Doanh Nghiệp</h4>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-normal text-white tracking-tighter">Liên hệ</span>
                                </div>
                                <p className="text-slate-400 text-sm mt-4 font-light leading-relaxed">Giải pháp toàn diện tối ưu hóa mọi quy trình cho doanh nghiệp đang phát triển.</p>
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {[
                                    "Tất cả tính năng gói Miễn Phí",
                                    "Quản lý đa chi nhánh, đa kho",
                                    "Tự động hóa chuỗi cung ứng",
                                    "Phân tích dữ liệu RT & AI",
                                    "Hỗ trợ kỹ thuật 24/7"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300 font-light text-[15px]">
                                        <Icon name="check_circle" className="text-blue-500 text-lg" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link to="/contact" className="w-full flex justify-center py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-lg shadow-blue-600/20 font-medium text-center">
                                Nhận tư vấn Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Testimonials */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                        <div>
                            <span className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-4 block">Đánh giá khách quan</span>
                            <h3 className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight">Đối tác nói gì về <span className="text-blue-500">Tabo ERP</span></h3>
                        </div>
                        <Link to="#" className="group flex items-center text-slate-400 font-medium hover:text-slate-900 transition-colors border-b border-slate-200 pb-2">
                            Xem tất cả 500+ đánh giá <Icon name="arrow_outward" className="ml-2 text-xs opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'John Wolfar', role: 'CEO, Credi Goo', quote: 'Tabo ERP đã đồng bộ hóa toàn bộ chuỗi cung ứng của chúng tôi, mang lại sự nhất quán mà trước đây chúng tôi chưa từng đạt được.', highlight: 'Tốc độ mở rộng gấp 3 lần' },
                            { name: 'Daniel Foster', role: 'COO, Horizon Retail', quote: 'Việc quản lý 50 chi nhánh trở nên đơn giản như quản lý 1 cửa hàng. Dữ liệu thời gian thực là sự thay đổi hoàn hảo.', highlight: 'Doanh thu tăng 45% sau 6 tháng' },
                            { name: 'Maria Sanchez', role: 'CTO, Logistics VN', quote: 'Không chỉ là phần mềm, đội ngũ hỗ trợ của Tabo ERP thực sự hiểu nghiệp vụ và giải quyết vấn đề cực kỳ nhanh chóng.', highlight: 'Giảm 30% chi phí vận hành' }
                        ].map((item, i) => (
                            <div key={i} className="p-10 bg-slate-50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-[32px] border border-slate-100 flex flex-col h-full group">
                                <Icon name="format_quote" className="text-5xl text-blue-500/20 mb-4 group-hover:text-blue-500 transition-colors" />
                                <div className="text-blue-600 font-semibold text-lg mb-6 tracking-tight">
                                    {item.highlight}
                                </div>
                                <p className="text-slate-600 mb-10 font-light leading-relaxed grow text-lg italic">
                                    "{item.quote}"
                                </p>
                                <div className="flex items-center pt-8 border-t border-slate-200/50">
                                    <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg mr-4">
                                        {item.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 tracking-tight">{item.name}</div>
                                        <div className="text-[13px] text-slate-500">{item.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. Final Call to Action - Split Layout */}
            <section className="bg-slate-900 text-white overflow-hidden relative border-t border-white/5 py-32">
                {/* Background effects */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full bg-blue-600/10 blur-[160px] pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* Left Side: Text Content */}
                        <div className="text-left">
                            <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold tracking-widest text-[10px] px-4 py-1.5 rounded-full mb-8 inline-flex uppercase">
                                Sẵn sàng để bắt đầu?
                            </span>
                            <h2 className="text-4xl md:text-[48px] font-normal mb-8 tracking-tight leading-[1.1]">
                                Mọi hành trình lớn đều <br /> bắt đầu từ một <span className="text-blue-500">giải pháp.</span>
                            </h2>
                            <p className="text-slate-400 text-base font-light mb-8 max-w-xl leading-relaxed">
                                Đừng để những rào cản vận hành ngăn cản sự phát triển của bạn. Liên hệ ngay với Tabo ERP để khai phá tiềm năng tối đa.
                            </p>
                            <p className="text-slate-500 text-xs font-light uppercase tracking-widest opacity-50 mt-12 hidden lg:block">
                                Tabo ERP – Đồng hành cùng sự thịnh vượng của doanh nghiệp Việt
                            </p>
                        </div>

                        {/* Right Side: Contact Cards */}
                        <div className="space-y-6">
                            <a href="tel:1800356893" className="group flex items-center gap-8 p-4 rounded-[20px] bg-white/5 border border-white/5 hover:bg-blue-600 hover:border-blue-500 transition-all duration-500 hover:-translate-y-1">
                                <div className="w-16 h-16 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-500 transform group-hover:rotate-12">
                                    <Icon name="call" className="text-[32px] text-blue-500 group-hover:text-white" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1 group-hover:text-blue-100 transition-colors">Hotline miễn phí</p>
                                    <span className="text-2xl md:text-3xl font-normal text-white tracking-tight">1800 356 893</span>
                                </div>
                            </a>

                            <a href="mailto:contact@tabo.vn" className="group flex items-center gap-8 p-4 rounded-[20px] bg-white/5 border border-white/5 hover:bg-blue-600 hover:border-blue-500 transition-all duration-500 hover:-translate-y-1">
                                <div className="w-16 h-16 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-500 transform group-hover:-rotate-12">
                                    <Icon name="mail" className="text-[32px] text-blue-500 group-hover:text-white" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1 group-hover:text-blue-100 transition-colors">Email yêu cầu</p>
                                    <span className="text-2xl md:text-3xl font-normal text-white tracking-tight">contact@tabo.vn</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
