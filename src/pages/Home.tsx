import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/common/Icon';
import Button from '../components/common/Button';





const Home: React.FC = () => {
    return (
        <div className="font-sans text-gray-900 bg-[#F7F8F8]">
            {/* 1. Hero Section */}
            <section className="relative bg-slate-50 pt-40 pb-32 lg:pt-32 lg:pb-24 overflow-hidden min-h-screen lg:min-h-[80vh] flex items-center justify-center">
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
                            Hệ điều hành doanh nghiệp
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-[56px] leading-[1.15] font-normal tracking-tight mb-6 text-slate-900 font-sans max-w-[90%] md:max-w-full">
                            Cập nhật hệ thống thông qua <br className="hidden md:block" /><span className="text-blue-500">giải pháp</span> quản trị lõi.
                        </h1>

                        <p className="text-base text-slate-500 mb-10 max-w-2xl font-light">
                            Luôn cập nhật dữ liệu tài chính, kho bãi và tiến độ công việc theo thời gian thực để đưa ra các quyết định chiến lược chuẩn xác nhất.
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
                        <div className="font-bold text-xl text-slate-800 mb-6">$5,230</div>
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
                    <div className="flex flex-col lg:flex-row items-center lg:items-end mb-16 gap-y-10 lg:gap-5">
                        <div className="max-w-md lg:w-[30%]">
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
                        {/* Col 1 */}
                        <div className="flex flex-col gap-6 w-full lg:w-[22%]">
                            <div className="relative flex-1 rounded-[20px] overflow-hidden group border border-slate-100 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)]">
                                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070" alt="Office Workers" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500"></div>
                            </div>
                            <div className="relative flex-1 rounded-[20px] overflow-hidden group border border-slate-100 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)]">
                                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070" alt="Meeting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500"></div>
                            </div>
                        </div>

                        {/* Col 2 */}
                        <div className="w-full lg:w-[22%]">
                            <div className="relative h-full rounded-[20px] overflow-hidden group border border-slate-100 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)]">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988" alt="Professional" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500"></div>
                            </div>
                        </div>

                        {/* Col 3: Feature Card */}
                        <div className="w-full lg:w-[34%] bg-white rounded-[20px] p-4 border border-slate-100 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] flex flex-col gap-6">
                            <div>
                                <p className="text-slate-400 text-[13px] mb-4 font-normal">Giải pháp ngành hàng</p>
                                <h3 className="text-[30px] lg:text-[32px] font-normal text-slate-900 leading-[1.25] tracking-tight">
                                    Tối ưu hóa cho mọi<br />lĩnh vực kinh doanh.
                                </h3>
                            </div>

                            <div className="bg-[#FAF9F6] rounded-[12px] p-6 overflow-hidden relative">
                                <p className="text-slate-500 text-sm mb-5">Đa dạng ngành nghề</p>
                                <div className="relative overflow-hidden w-full flex flex-col gap-4">
                                    {/* Row 1 */}
                                    <div className="flex animate-marquee whitespace-nowrap gap-3">
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
                                    <div className="flex animate-marquee whitespace-nowrap gap-3" style={{ animationDirection: 'reverse' }}>
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
                                    <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none"></div>
                                    <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none"></div>
                                </div>
                            </div>
                        </div>

                        {/* Col 4 */}
                        <div className="w-full lg:w-[22%]">
                            <div className="relative h-full rounded-[20px] overflow-hidden group border border-slate-100 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)]">
                                <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974" alt="Leader" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-[#D3BCAC]/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Strip Banner */}
            <section className="bg-primary-600 text-white py-20 relative overflow-hidden">
                <div className="absolute right-0 top-0 h-full w-1/3 bg-blue-500 opacity-5 -skew-x-12 transform origin-top-right"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif leading-tight">Thời Gian Cả Bạn Đang Trôi.</h2>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif leading-tight">Chúng Tôi Khiến Nó Trở Nên Đáng Giá.</h2>
                        <p className="text-xl text-slate-300">
                            Hơn 40% thời gian của lãnh đạo bị hao hụt vào các thủ tục phân tán. Cùng tối ưu nó ngay bây giờ.
                        </p>
                    </div>
                    <div className="lg:text-right">
                        <Link to="/about" className="inline-flex items-center bg-white hover:bg-blue-700 text-primary-600 hover:text-white font-bold text-lg py-5 px-10 rounded-sm transition-colors duration-300">
                            Về Chúng Tôi <Icon name="arrow_forward" className="ml-3 text-[20px]" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 5. Content Section - Driving success through strategy */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                                    alt="Corporate Strategy Meeting"
                                    className="rounded-lg shadow-xl object-cover h-[500px] w-full"
                                />
                                <div className="absolute -bottom-10 -right-10 bg-blue-500 p-10 rounded-lg shadow-2xl hidden md:block max-w-sm">
                                    <h4 className="text-2xl font-bold text-primary-600 font-serif mb-2">Thành Công Vững Chắc</h4>
                                    <p className="text-primary-600/80 font-medium">Được xây dựng trên tầm nhìn, chiến lược và con người!</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:pl-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-primary-600 mb-8 font-serif leading-tight">
                                Thúc đẩy thành công qua chiến lược.
                            </h2>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                                Chúng tôi chuyên giúp các doanh nghiệp phát triển mạnh bằng cách cung cấp hướng dẫn chuyên môn trong lập kế hoạch và chiến lược tăng trưởng.
                            </p>

                            <div className="space-y-6">
                                <div className="border-b border-slate-200 pb-4">
                                    <h4 className="text-xl font-bold text-primary-600 mb-2 flex justify-between items-center cursor-pointer">
                                        Chiến Lược Gia Kinh Nghiệm
                                        <Icon name="expand_more" className="text-[20px] text-slate-400" />
                                    </h4>
                                    <p className="text-slate-600 pt-2 hidden">
                                        Đội ngũ chúng tôi kết hợp hàng thập kỷ kinh nghiệm thực tế qua nhiều ngành nghề thị trường.
                                    </p>
                                </div>
                                <div className="border-b border-slate-200 pb-4">
                                    <h4 className="text-xl font-bold text-primary-600 mb-2 flex justify-between items-center cursor-pointer">
                                        Giải Pháp Linh Hoạt
                                        <Icon name="expand_more" className="text-[20px] text-slate-400" />
                                    </h4>
                                </div>
                                <div className="border-b border-slate-200 pb-4">
                                    <h4 className="text-xl font-bold text-primary-600 mb-2 flex justify-between items-center cursor-pointer">
                                        Tiếp Cận Từ Dữ Liệu
                                        <Icon name="expand_more" className="text-[20px] text-slate-400" />
                                    </h4>
                                </div>
                                <div className="border-b border-slate-200 pb-4">
                                    <h4 className="text-xl font-bold text-primary-600 mb-2 flex justify-between items-center cursor-pointer">
                                        Cam Kết Thành Công
                                        <Icon name="expand_more" className="text-[20px] text-slate-400" />
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Value Proposition Vision */}
            <section className="py-24 bg-[#F7F8F8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-6 opacity-60">Tầm Nhìn Chúng Tôi</h2>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-20 max-w-4xl mx-auto leading-tight font-serif text-primary-600">
                        Gia tăng giá trị bằng cách hiểu doanh nghiệp bạn và áp dụng phương pháp triển khai đỉnh cao.
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <Icon name="track_changes" className="text-[40px] text-blue-500 mb-6" />
                            <h3 className="text-2xl font-bold mb-4 text-primary-600 font-serif">Trọng Tâm</h3>
                            <p className="text-slate-600 font-medium">
                                Ưu tiên sự rõ ràng trong chiến lược, tăng trưởng bền vững và các tác động có thể đo lường được, đảm bảo duy trì vị thế dẫn đầu.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <Icon name="lightbulb" className="text-[40px] text-blue-500 mb-6" />
                            <h3 className="text-2xl font-bold mb-4 text-primary-600 font-serif">Cách Tiếp Cận</h3>
                            <p className="text-slate-600 font-medium">
                                Kết hợp dữ liệu cùng giải pháp tinh chỉnh, chúng tôi xây dựng lộ trình thiết thực để biến chiến lược thành kết quả cốt lõi.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <Icon name="apartment" className="text-[40px] text-blue-500 mb-6" />
                            <h3 className="text-2xl font-bold mb-4 text-primary-600 font-serif">Kinh Nghiệm</h3>
                            <p className="text-slate-600 font-medium">
                                Nhiều năm thực chiến giúp các tổ chức tháo gỡ khó khăn, mở khóa tốc độ và hướng đến sự phát triển.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Find the Right Solution (Tabs & Accordion) */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-600 mb-16 text-center font-serif">Tìm Giải Pháp Phù Hợp</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-1 space-y-4">
                            <div className="bg-blue-500/20 p-6 border-l-4 border-primary-600 rounded-r-lg cursor-pointer">
                                <h4 className="text-xl font-bold text-primary-600">1. Doanh Thu Chững Lại</h4>
                            </div>
                            <div className="p-6 border-l-4 border-transparent hover:bg-slate-50 cursor-pointer transition-colors">
                                <h4 className="text-xl font-bold text-primary-600 opacity-60">2. Mở Rộng Quy Mô</h4>
                            </div>
                            <div className="p-6 border-l-4 border-transparent hover:bg-slate-50 cursor-pointer transition-colors">
                                <h4 className="text-xl font-bold text-primary-600 opacity-60">3. Thông Tin Đối Thủ</h4>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <p className="text-xl text-slate-600 mb-10 font-medium">
                                Nhanh chóng xác định và giải quyết các điểm nghẽn doanh thu bằng một cuộc kiểm toán toàn diện, từ đó chúng tôi cung cấp giải pháp chiến lược phục hồi.
                            </p>
                            <div className="space-y-4">
                                {['Chiến Lược Tối Ưu Hóa Doanh Thu', 'Phân Tích Giá Cả & Lợi Nhuận', 'Chiến Lược Giữ Chân Khách Hàng', 'Đánh Giá Hiệu Quả Vận Hành'].map((item, i) => (
                                    <div key={i} className="border border-slate-200 rounded-lg p-6 group cursor-pointer hover:border-primary-600 transition-colors">
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-lg font-bold text-primary-600">{item}</h4>
                                            <Icon name="chevron_right" className="text-[20px] text-slate-400 group-hover:text-blue-500" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8">
                                <Link to="/contact" className="inline-flex items-center justify-center bg-primary-600 hover:bg-black text-white font-medium py-4 px-8 rounded-sm transition-colors duration-300">
                                    Thảo Luận Cùng Chuyên Gia
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Statistics Section */}
            <section className="py-24 bg-primary-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="md:flex md:justify-between items-end mb-16 border-b border-white/20 pb-8 gap-8">
                        <div>
                            <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-4">Khách Hàng Của Chúng Tôi</h2>
                            <h3 className="text-4xl md:text-5xl font-bold max-w-2xl leading-tight font-serif">Được Tin Tưởng Bởi Doanh Nghiệp, Kết Quả Đích Thực.</h3>
                        </div>
                        <div className="mt-8 md:mt-0">
                            <p className="text-slate-300 max-w-sm mb-6">
                                Từ những startup mới nổi cho đến nhà lãnh đạo toàn cầu, tạo ra sự vượt trội cho doanh nghiệp.
                            </p>
                            <Link to="/about" className="inline-flex items-center text-blue-500 font-bold hover:text-white transition-colors">
                                Tìm Hiểu Thêm <Icon name="arrow_forward" className="ml-2 text-[20px]" />
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
                        <div>
                            <div className="text-5xl md:text-6xl font-bold text-blue-500 mb-4">10+</div>
                            <div className="text-lg font-bold text-white mb-2 font-serif">Năm Kinh Nghiệm</div>
                            <div className="text-sm text-slate-300 font-medium">Chuyên gia hàng đầu trong tư vấn chiến lược.</div>
                        </div>
                        <div>
                            <div className="text-5xl md:text-6xl font-bold text-blue-500 mb-4">100+</div>
                            <div className="text-lg font-bold text-white mb-2 font-serif">Khách Hàng Hài Lòng</div>
                            <div className="text-sm text-slate-300 font-medium">Giúp mọi định hướng đều vươn tới thành công.</div>
                        </div>
                        <div>
                            <div className="text-5xl md:text-6xl font-bold text-blue-500 mb-4">$500M</div>
                            <div className="text-lg font-bold text-white mb-2 font-serif">Tăng Trưởng Doanh Thu</div>
                            <div className="text-sm text-slate-300 font-medium">Tối ưu hóa lợi nhuận bền vững.</div>
                        </div>
                        <div>
                            <div className="text-5xl md:text-6xl font-bold text-blue-500 mb-4">95%</div>
                            <div className="text-lg font-bold text-white mb-2 font-serif">Tỷ Lệ Giữ Khách Hàng</div>
                            <div className="text-sm text-slate-300 font-medium">Kết quả thực chứng, chất lượng đảm bảo.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Testimonials */}
            <section className="py-24 bg-[#F7F8F8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-4 opacity-60">Nhận Xét Khách Hàng</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-primary-600 font-serif">Khách Hàng Nói Gì</h3>
                        </div>
                        <Link to="#" className="inline-flex items-center text-primary-600 font-bold hover:text-blue-500 transition-colors border-b border-primary-600 pb-1">
                            Xem Toàn Bộ Đánh Giá
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {[
                            { name: 'John Wolfar', role: 'CEO, Credi Goo', quote: 'Trước khi kết nối với Tabo ERP, hiện diện kỹ thuật số của chúng tôi không nhất quán. Đội ngũ đã mang tới những định hướng rõ ràng.', highlight: '3x Faster Market Expansion' },
                            { name: 'Daniel Foster', role: 'COO, Horizon Retail Group', quote: 'Việc mở rộng kinh doanh có vẻ quá mức cho đến khi chúng tôi chọn hệ thống Tabo ERP. Mọi thứ trở nên mượt mà.', highlight: '45% Revenue Growth After Expansion' },
                            { name: 'Maria Sanchez', role: 'CEO, TAX Com', quote: 'Chúng tôi từng rất khó khăn trong quản lý chuỗi vận hành. Đội ngũ kỹ sư hỗ trợ xuất sắc.', highlight: '30% Cost Reduction' }
                        ].map((item, i) => (
                            <div key={i} className="p-10 bg-white shadow-sm hover:shadow-xl transition-shadow rounded-xl border border-slate-100 flex flex-col h-full">
                                <div className="text-blue-500 font-bold text-xl mb-6 font-serif border-b border-slate-100 pb-4">
                                    {item.highlight}
                                </div>
                                <p className="text-slate-600 mb-8 italic leading-relaxed grow font-medium">
                                    "{item.quote}"
                                </p>
                                <div className="flex items-center mt-auto">
                                    <div className="h-12 w-12 bg-slate-200 rounded-full mr-4 flex items-center justify-center text-primary-600 font-bold">
                                        {item.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-primary-600">{item.name}</div>
                                        <div className="text-sm text-slate-500 font-medium">{item.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. Contact Split */}
            <section className="bg-white border-t border-slate-100">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-16 lg:p-24 lg:pr-32 flex flex-col justify-center">
                        <h2 className="text-4xl lg:text-5xl font-bold text-primary-600 mb-6 font-serif leading-tight">Sự Thay Đổi Bắt Đầu Từ Một Cuộc Trò Chuyện</h2>
                        <p className="text-slate-600 text-lg mb-12 font-medium">Bạn có thách thức hay một ý tưởng lớn? Điền vào biểu mẫu dưới đây và để chúng tôi đề xuất các giải pháp tùy chỉnh.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col border-l-2 border-blue-500 pl-6">
                                <span className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-2">Gọi Chúng Tôi Tại:</span>
                                <span className="text-2xl font-bold text-primary-600">+(84) 1800 356 893</span>
                            </div>
                            <div className="flex flex-col border-l-2 border-blue-500 pl-6">
                                <span className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-2">Ghé Thăm Chúng Tôi:</span>
                                <span className="text-lg font-bold text-primary-600">Quận 1, TP. HCM, VN</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-primary-600 p-16 lg:p-24 text-white">
                        <h3 className="text-3xl font-bold mb-8 font-serif">Đặt Lịch Tư Vấn Miễn Phí</h3>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">Tên</label>
                                    <input type="text" className="w-full bg-primary-600 border-b border-slate-500 focus:border-blue-500 px-0 py-2 outline-none text-white transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">Họ</label>
                                    <input type="text" className="w-full bg-primary-600 border-b border-slate-500 focus:border-blue-500 px-0 py-2 outline-none text-white transition-colors" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                                <input type="email" className="w-full bg-primary-600 border-b border-slate-500 focus:border-blue-500 px-0 py-2 outline-none text-white transition-colors" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Tin Nhắn</label>
                                <textarea rows={2} className="w-full bg-primary-600 border-b border-slate-500 focus:border-blue-500 px-0 py-2 outline-none text-white transition-colors resize-none"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-sm transition-colors mt-8">
                                Gửi Thông Tin
                            </button>
                            <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                                Bằng cách nhấp vào nút này, bạn đồng ý với Chính Sách Bảo Mật. Chúng tôi có thể liên hệ với bạn qua email.
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            {/* 11. Blog / Insights */}
            <section className="py-24 bg-[#F7F8F8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-4 opacity-60">Phân Tích & Thành Công</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-primary-600 font-serif leading-tight">Chiến Lược Chuyên Gia, Xu Hướng Thị Trường & Kết Quả</h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { tag: 'LỜI KHUYÊN', date: '29 Tháng 3, 2025', title: '5 Xu Hướng Thị Trường Chính Mỗi Doanh Nghiệp Nên Xem Năm 2025' },
                            { tag: 'CÂU CHUYỆN THÀNH CÔNG', date: '25 Tháng 3, 2025', title: 'Cách Chúng Tôi Giúp Một Thương Hiệu Bán Lẻ Tăng Doanh Số 45%' },
                            { tag: 'LỜI KHUYÊN', date: '20 Tháng 3, 2025', title: 'Tại Sao Hầu Hết Các Chiến Lược Gặp Thất Bại – Và Cách Tránh.' }
                        ].map((item, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="h-64 bg-slate-200 rounded-xl mb-6 overflow-hidden">
                                    <div className="w-full h-full bg-primary-600/5 group-hover:scale-105 transition-transform duration-500"></div>
                                </div>
                                <div className="flex items-center text-xs font-bold text-slate-400 tracking-wider uppercase mb-3 gap-3">
                                    <span className="text-primary-600">{item.tag}</span>
                                    <span>•</span>
                                    <span>{item.date}</span>
                                </div>
                                <h4 className="text-2xl font-bold text-primary-600 font-serif leading-snug group-hover:text-blue-500 transition-colors">
                                    {item.title}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 12. Newsletter */}
            <section className="py-24 bg-primary-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Luôn Dẫn Đầu.</h2>
                    <h2 className="text-4xl md:text-5xl font-bold mb-10 text-blue-500 font-serif">Đăng Ký Bản Tin Chuyên Gia.</h2>
                    <form className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Địa chỉ email của bạn" className="flex-1 px-6 py-4 rounded-sm border border-white/20 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:border-blue-500" required />
                        <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-sm transition-colors">
                            Đăng Ký
                        </button>
                    </form>
                    <p className="mt-6 text-slate-400 text-sm">Bạn có thể hủy đăng ký bất cứ lúc nào qua liên kết ở phần Footer.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
