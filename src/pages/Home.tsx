import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/common/Icon';



interface ServiceCardProps {
    variant?: "split" | "solid-blue" | "solid-white";
    icon: React.ReactNode;
    title: React.ReactNode;
    items: string[];
    linkText?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ variant = "solid-white", icon, title, items, linkText = "Tìm Hiểu Thêm" }) => {
    if (variant === "split") {
        return (
            <div className="bg-[#F7F8F8] rounded-xl hover:-translate-y-2 transition-transform duration-300 overflow-hidden shadow-sm group flex flex-col border border-slate-200/60 h-full">
                <div className="bg-white p-10 flex flex-col justify-between">
                    <div className="mb-14 h-14 w-14 flex items-center">{icon}</div>
                    <h4 className="text-[32px] font-medium text-slate-900 leading-tight font-sans tracking-tight">{title}</h4>
                </div>
                <div className="p-10 flex-1 flex flex-col justify-between">
                    <ul className="space-y-4 mb-10 text-slate-700 font-medium text-[15px]">
                        {items.map((item, i) => (
                            <li key={i} className="flex items-start">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 mt-0.5 mr-4 shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <Link to="#" className="w-full bg-white flex items-center justify-between text-slate-900 font-medium px-6 py-4 rounded-lg group-hover:text-primary-600 transition-colors shadow-sm border border-slate-100">
                        {linkText}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>
                </div>
            </div>
        );
    }

    if (variant === "solid-blue") {
        return (
            <div className="bg-primary-600 rounded-xl hover:-translate-y-2 transition-transform duration-300 shadow-lg group border border-transparent flex flex-col h-full container-smooth">
                <div className="p-10 pb-6 flex flex-col justify-between">
                    <div className="mb-14 h-14 w-14 flex items-center">{icon}</div>
                    <h4 className="text-[32px] font-medium text-white leading-tight font-sans tracking-tight">{title}</h4>
                </div>
                <div className="p-10 pt-4 flex-1 flex flex-col justify-between">
                    <ul className="space-y-4 mb-10 text-white font-medium text-[15px] opacity-90">
                        {items.map((item, i) => (
                            <li key={i} className="flex items-start">
                                <span className="flex items-center justify-center h-[18px] w-[18px] rounded-full border border-blue-400 shrink-0 mr-4 mt-0.5">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <Link to="#" className="w-full bg-transparent flex items-center justify-between text-blue-700 font-medium py-2 rounded-lg group-hover:text-blue-200 transition-colors">
                        {linkText}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700 group-hover:text-blue-200 transition-colors"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl hover:-translate-y-2 transition-transform duration-300 border border-slate-100 shadow-sm group flex flex-col h-full">
            <div className="p-10 pb-6 flex flex-col justify-between">
                <div className="mb-14 h-14 w-14 flex items-center">{icon}</div>
                <h4 className="text-[32px] font-medium text-primary-600 leading-tight font-sans tracking-tight">{title}</h4>
            </div>
            <div className="p-10 pt-4 flex-1 flex flex-col justify-between">
                <ul className="space-y-4 mb-10 text-slate-700 font-medium text-[15px]">
                    {items.map((item, i) => (
                        <li key={i} className="flex items-start">
                            <span className="flex items-center justify-center h-[18px] w-[18px] rounded-full border border-slate-200 shrink-0 mr-4 mt-0.5">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </span>
                            {item}
                        </li>
                    ))}
                </ul>
                <Link to="#" className="w-full bg-transparent flex items-center justify-between text-primary-600 font-medium py-2 rounded-lg group-hover:text-blue-500 transition-colors">
                    {linkText}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 group-hover:text-blue-500 transition-colors"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
            </div>
        </div>
    );
};

const Home: React.FC = () => {
    return (
        <div className="font-sans text-gray-900 bg-[#F7F8F8]">
            {/* 1. Hero Section */}
            {/* 1. Hero Section */}
            <section className="relative bg-[#FAFAFA] pt-40 pb-32 lg:pt-48 lg:pb-40 overflow-hidden min-h-screen flex items-center justify-center">
                {/* Vertical Grid Lines Background */}
                <div className="absolute inset-0 z-0 flex justify-evenly pointer-events-none opacity-[0.03]">
                    <div className="w-[1px] h-full bg-slate-900"></div>
                    <div className="w-[1px] h-full bg-slate-900"></div>
                    <div className="w-[1px] h-full bg-slate-900"></div>
                    <div className="w-[1px] h-full bg-slate-900"></div>
                    <div className="w-[1px] h-full bg-slate-900"></div>
                    <div className="w-[1px] h-full bg-slate-900"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">

                    {/* Centered Content */}
                    <div className="text-center max-w-4xl mx-auto flex flex-col items-center relative z-20">
                        {/* Sparkles Decoration */}
                        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent blur-3xl"></div>

                        <span className="bg-[#E4F8DD] text-[#4A8A34] font-medium text-xs px-4 py-1.5 rounded-full mb-8 inline-block">Tính Năng ERP</span>

                        <h1 className="text-5xl md:text-[68px] leading-[1.1] font-medium tracking-tight mb-6 text-slate-900 font-sans">
                            Cập nhật hệ thống thông qua <span className="text-blue-500">giải pháp</span> quản trị lõi.
                        </h1>

                        <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl font-light">
                            Luôn cập nhật dữ liệu tài chính, kho bãi và tiến độ công việc theo thời gian thực để đưa ra các quyết định chiến lược chuẩn xác nhất.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Link to="/contact" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3.5 px-8 rounded-full transition-colors duration-300 shadow-lg shadow-blue-500/30">
                                Bắt đầu ngay
                            </Link>
                            <Link to="/about" className="bg-white hover:bg-slate-50 text-slate-700 font-medium py-3.5 px-8 rounded-full border border-slate-200 transition-colors duration-300 shadow-sm">
                                Dùng thử miễn phí
                            </Link>
                        </div>

                        {/* Trusted by */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <div className="flex -space-x-3">
                                <img src="https://i.pravatar.cc/100?img=11" alt="User" className="w-10 h-10 rounded-full border-2 border-[#FAFAFA] object-cover" />
                                <img src="https://i.pravatar.cc/100?img=12" alt="User" className="w-10 h-10 rounded-full border-2 border-[#FAFAFA] object-cover" />
                                <img src="https://i.pravatar.cc/100?img=33" alt="User" className="w-10 h-10 rounded-full border-2 border-[#FAFAFA] object-cover" />
                                <div className="w-10 h-10 rounded-full border-2 border-[#FAFAFA] bg-[#A4F455] flex items-center justify-center text-xs font-bold text-slate-800">
                                    99+
                                </div>
                            </div>
                            <div className="text-left text-xs text-slate-500">
                                <p className="font-bold text-slate-700">Được tin dùng bởi 20k+</p>
                                <p>Doanh nghiệp tự hào sử dụng</p>
                            </div>
                        </div>
                    </div>

                    {/* Floating Element: Left Top Card (Sales total) */}
                    <div className="hidden lg:block absolute left-[-2%] top-[5%] -rotate-[8deg] bg-white p-5 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] w-[260px] transform transition-transform hover:scale-105 hover:-rotate-3 border border-slate-100/50 z-30">
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
                    <div className="hidden lg:flex absolute left-[5%] bottom-[5%] rotate-12 bg-[#1A1A1A] p-5 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] flex-col items-center justify-center w-44 text-center transform transition-transform hover:scale-105 hover:rotate-6 border border-slate-800 z-30">
                        <div className="flex justify-center -space-x-2 mb-3">
                            <img src="https://i.pravatar.cc/100?img=4" alt="User" className="w-8 h-8 rounded-full border border-[#1A1A1A] object-cover" />
                            <img src="https://i.pravatar.cc/100?img=5" alt="User" className="w-8 h-8 rounded-full border border-[#1A1A1A] object-cover" />
                            <img src="https://i.pravatar.cc/100?img=6" alt="User" className="w-8 h-8 rounded-full border border-[#1A1A1A] object-cover" />
                        </div>
                        <h4 className="font-bold text-white text-lg">100K+</h4>
                        <p className="text-[10px] text-slate-400">Khách hàng hài lòng</p>
                    </div>

                    {/* Floating Element: Right Top Card (Profile Balance) */}
                    <div className="hidden lg:block absolute right-[-2%] top-[15%] rotate-6 bg-[#1A1A1A] p-5 rounded-[24px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] w-72 transform transition-transform hover:scale-105 hover:rotate-3 border border-slate-800 z-30">
                        <div className="flex items-center gap-3 mb-6">
                            <img src="https://i.pravatar.cc/100?img=11" alt="Profile" className="w-12 h-12 rounded-full border border-slate-700 object-cover" />
                            <div>
                                <h4 className="font-medium text-white text-[15px]">Nguyễn Trần</h4>
                                <p className="text-slate-400 text-xs">Giám đốc Tài chính</p>
                            </div>
                        </div>
                        <div className="w-full h-px bg-slate-700/50 mb-4"></div>
                        <p className="text-slate-400 text-xs mb-1">Số dư hiện tại</p>
                        <h3 className="font-medium text-white text-2xl tracking-tight">$2,454,500.00</h3>
                    </div>

                    {/* Floating Element: Right Bottom Card (Line Chart) */}
                    <div className="hidden lg:block absolute right-[3%] bottom-[15%] -rotate-6 bg-white p-5 rounded-[24px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] w-64 transform transition-transform hover:scale-105 hover:-rotate-3 border border-slate-100/50 z-30">
                        <div className="relative h-20 w-full flex items-end">
                            <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                                <path d="M0 35 Q 5 25, 10 30 T 20 20 T 30 35 T 40 10 T 50 25 T 60 15 T 70 30 T 80 5 T 90 20 T 100 15" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="absolute right-8 top-0 bg-[#1A1A1A] text-white text-[9px] px-2.5 py-1 rounded-full font-bold shadow-lg">
                                $108.00
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 2. Trust Bar */}
            <section className="bg-blue-500 py-6 border-b border-primary-600/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div className="text-sm font-bold tracking-widest text-primary-600 uppercase shrink-0">
                            Điểm Tựa Vững Chắc
                        </div>
                        <div className="flex flex-wrap justify-center lg:justify-end gap-x-12 gap-y-4 w-full">
                            {[
                                { text: "Chiến Lược Dữ Liệu", icon: "pie_chart" },
                                { text: "Kết Quả Thực Tế", icon: "track_changes" },
                                { text: "Tăng Trưởng Mở Rộng", icon: "trending_up" },
                                { text: "Chuyên Môn Tin Cậy", icon: "gpp_good" }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center text-primary-600">
                                    <Icon name={item.icon} className="text-[20px] mr-3 opacity-80" />
                                    <span className="font-semibold">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Expert Advice / Services */}
            <section className="py-24 bg-[#F7F8F8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 max-w-3xl">
                        <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">Dịch Vụ Của Chúng Tôi</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-primary-600 leading-tight mb-6 font-serif">
                            Chuyên Môn Tư Vấn, Xây Dựng Cho Bạn
                        </h3>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Với nhiều năm kinh nghiệm và phương pháp tiếp cận tập trung vào kết quả, chúng tôi trang bị cho doanh nghiệp khả năng điều hướng sự phức tạp và đạt được mục tiêu.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ServiceCard
                            variant="split"
                            icon={(
                                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                    <path d="M16 16L32 32" stroke="#009AE4" strokeWidth="3" strokeLinecap="round" />
                                    <path d="M16 48L32 32M32 32L48 48" stroke="#009AE4" strokeWidth="3" strokeLinecap="round" />
                                    <path d="M32 32L48 16" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            )}
                            title={<>Tư Vấn<br />Doanh Nghiệp</>}
                            items={[
                                "Phát triển chiến lược & tăng trưởng",
                                "Nghiên cứu thị trường & đối thủ",
                                "Quản lý rủi ro"
                            ]}
                        />
                        <ServiceCard
                            variant="split"
                            icon={(
                                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#009AE4]">
                                    <path d="M16 48L48 16" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M48 48V16H16" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                            title={<>Marketing,<br />Bán Hàng &<br />Giữ Chân</>}
                            items={[
                                "Định vị thương hiệu & thông điệp",
                                "Tạo khách hàng tiềm năng & sales",
                                "Lòng trung thành khách hàng"
                            ]}
                        />
                        <ServiceCard
                            variant="split"
                            icon={<Icon name="bolt" className="text-[56px] text-blue-500 font-light" />}
                            title={<>Quản Trị<br />Vận Hành</>}
                            items={[
                                "Tối ưu hóa quy trình làm việc",
                                "Giảm chi phí & tăng hiệu quả",
                                "Theo dõi KPI & Insights"
                            ]}
                        />
                        <ServiceCard
                            variant="split"
                            icon={<Icon name="group" className="text-[56px] text-blue-500 font-light" />}
                            title={<>Quản Lý<br />Nhân Tài</>}
                            items={[
                                "Tuyển dụng & khai thác nguồn",
                                "Xây dựng thương hiệu tuyển dụng",
                                "Lên kế hoạch lực lượng lao động"
                            ]}
                        />
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
