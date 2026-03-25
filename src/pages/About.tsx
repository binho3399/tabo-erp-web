import React from 'react';
import Icon from '../components/common/Icon';
import AboutFAQ from '../components/about/AboutFAQ';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';

const About: React.FC = () => {
    return (
        <div className="font-sans text-gray-900 bg-[#F7F8F8]">
            {/* Hero Section with Ambient Background */}
            <section className="relative pt-32 pb-16 lg:pb-24 overflow-hidden">
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
                            <linearGradient id="beamGradientAbout" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.35" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                        </defs>

                        <path
                            d="M 15 0 V 25 H 30 V 45 H 10 V 70 H 25 V 100"
                            fill="none"
                            stroke="url(#beamGradientAbout)"
                            strokeWidth="0.04"
                            pathLength="1"
                            strokeDasharray="0.12 0.88"
                            className="animate-grid-dash"
                        />
                        <path
                            d="M 85 0 V 35 H 70 V 65 H 90 V 85 H 75 V 100"
                            fill="none"
                            stroke="url(#beamGradientAbout)"
                            strokeWidth="0.04"
                            pathLength="1"
                            strokeDasharray="0.15 0.85"
                            className="animate-grid-dash"
                            style={{ animationDelay: '3s', animationDuration: '20s' }}
                        />
                        <path
                            d="M 45 0 V 15 H 55 V 35 H 40 V 60 H 60 V 80 H 50 V 100"
                            fill="none"
                            stroke="url(#beamGradientAbout)"
                            strokeWidth="0.025"
                            pathLength="1"
                            strokeDasharray="0.1 0.9"
                            className="animate-grid-dash"
                            style={{ animationDelay: '6s', animationDuration: '25s' }}
                        />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                    {/* 1. Hero Header */}
                    <Badge variant="primary" className="mb-4 md:mb-5 uppercase">
                        TỔNG QUAN
                    </Badge>
                    <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-normal tracking-tight text-slate-900 mb-6 md:mb-16">
                        Về chúng tôi <span className="text-blue-500">Tabo ERP</span>
                    </h1>

                    {/* 2. Hero Image */}
                    <div className="w-full aspect-[3/1] rounded-[20px] overflow-hidden relative hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 ease-out group">
                        {/* Glassmorphism Blur behind image just for vibe */}
                        <div className="absolute inset-0 bg-blue-500/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
                            alt="Tabo ERP Office"
                            className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-[20s] ease-out"
                        />
                    </div>
                </div>

                {/* Bottom Gradient for smooth transition to main content */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F7F8F8] to-transparent pointer-events-none z-10"></div>
            </section>

            {/* Main Content Container matching Reference Image */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 relative z-20">

                {/* 3. Mission / Introduction */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start mb-24 md:mb-32">
                    <div className="lg:col-span-7">
                        <h2 className="text-[28px] md:text-4xl lg:text-[42px] font-normal tracking-tight text-slate-900 leading-[1.2]">
                            Hành trình số hóa <span className="text-blue-500">đơn giản hóa quản trị</span> và tối ưu vận hành doanh nghiệp.
                        </h2>
                    </div>
                    <div className="lg:col-span-5 lg:pt-2">
                        <p className="text-base text-slate-500 font-normal leading-relaxed">
                            Tabo ra đời từ khát vọng kiến tạo một hệ điều hành doanh nghiệp "tất cả trong một", giúp đồng bộ dữ liệu và quy trình một cách hiệu quả nhất. Với hơn 5 năm kinh nghiệm, chúng tôi cam kết mang lại giá trị thực chất cho hàng ngàn khách hàng.
                        </p>
                    </div>
                </div>

                {/* 4. Grid Content - 3 Columns Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-16 lg:gap-y-0 mb-32">

                    {/* Left Column (Giải pháp) */}
                    <div className="lg:col-span-1 lg:pr-8">
                        <div className="group">
                            <div className="w-full h-[3px] bg-[#0070F3] mb-8"></div>
                            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 mb-6 shadow-sm">
                                <span className="text-sm font-bold text-[#0070F3] uppercase">Giải pháp</span>
                            </div>
                            <h3 className="text-[28px] font-normal tracking-tight text-slate-900 leading-[1.4]">
                                Giải pháp quản trị toàn diện với dấu ấn cá nhân hóa. Chuyển đổi số dễ dàng, liền mạch.
                            </h3>
                        </div>
                    </div>

                    {/* Right Column (Grid 2x2 for others) */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-16 md:gap-y-24">
                            
                            {/* Item 2: Our Core Values (Text) */}
                            <div className="group">
                                <div className="w-full h-[3px] bg-[#0070F3] mb-8"></div>
                                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 mb-6 shadow-sm">
                                    <span className="text-sm font-bold text-[#0070F3] uppercase">Giá trị cốt lõi</span>
                                </div>
                                <div className="text-base text-slate-500 font-normal leading-relaxed space-y-4">
                                    <p>
                                        Tại Tabo, <strong>chất lượng là danh dự</strong>. Chúng tôi xây dựng hệ thống với tiêu chuẩn khắt khe nhất, đảm bảo vận hành trơn tru và bảo mật tối đa.
                                    </p>
                                    <p>
                                        Khách hàng luôn là trung tâm của mọi sự phát triển. Thay vì tạo ra rào cản từ công nghệ, chúng tôi biến nó thành đòn bẩy vững chắc để mọi doanh nghiệp bứt phá.
                                    </p>
                                </div>
                            </div>

                            {/* Item 3: Stats / Accessibility equivalent */}
                            <div className="group">
                                <div className="w-full h-[3px] bg-[#0070F3] mb-8"></div>
                                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 mb-6 shadow-sm">
                                    <span className="text-sm font-bold text-[#0070F3] uppercase">Thành tựu</span>
                                </div>
                                <div className="text-base text-slate-500 font-normal leading-relaxed space-y-4">
                                    <p className="text-slate-800 font-medium">
                                        Phục vụ hàng ngàn doanh nghiệp trên hành trình chuyển đổi số với tỷ lệ hài lòng tuyệt đối.
                                    </p>
                                    <p>
                                        Sự tin tưởng của 1,000+ doanh nghiệp chính là thành tựu đạt được lớn nhất. Hệ thống vận hành luôn hướng tới tính tự động hóa và sự đơn giản, không giới hạn quyền truy cập ở mọi cấp độ nhân sự.
                                    </p>
                                </div>
                            </div>

                            {/* Item 3: Tầm nhìn */}
                            <div className="group">
                                <div className="w-full h-[3px] bg-[#0070F3] mb-8"></div>
                                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 mb-6 shadow-sm">
                                    <span className="text-sm font-bold text-[#0070F3] uppercase">Tầm nhìn</span>
                                </div>
                                <div className="text-base text-slate-500 font-normal leading-relaxed space-y-4">
                                    <p className="text-slate-800 font-medium">
                                        Định hình tương lai số hóa qua giải pháp quản trị tinh gọn.
                                    </p>
                                    <p>
                                        Khát vọng vươn mình trở thành đối tác chiến lược hàng đầu. Mỗi sản phẩm được tạo ra đều hướng đến sự bền vững, mở ra cánh cửa tiến vào kỷ nguyên dữ liệu hóa.
                                    </p>
                                </div>
                            </div>

                            {/* Item 4: Our Team (Image only with horizontal line) */}
                            <div className="group">
                                <div className="w-full h-[3px] bg-[#0070F3] mb-8"></div>
                                <div className="w-full h-[200px] md:h-[220px] rounded-[16px] overflow-hidden relative">
                                    {/* Minor aesthetic glow map for vibe */}
                                    <div className="absolute -inset-4 bg-blue-100/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                                    <img
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                                        alt="Đội ngũ chuyên gia Tabo"
                                        className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-[15s] ease-out"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </main>

            {/* 5. Bottom CTA Layout */}
            <section className="bg-[#EAEBE8]/50 w-full py-20 md:py-32 hover:bg-[#EAEBE8]/80 transition-colors duration-500 ease-out backdrop-blur-sm relative overflow-hidden group">
                {/* Ambient Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-300/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-300/20 transition-all duration-700"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-300/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-teal-300/20 transition-all duration-700"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="flex justify-center mb-8 relative z-10">
                        <Icon name="change_history" className="text-slate-400 text-[28px]" />
                    </div>
                    <h2 className="text-[22px] md:text-[34px] lg:text-[42px] font-normal text-slate-900 tracking-tight max-w-3xl mx-auto leading-relaxed mb-10 relative z-10">
                        Chúng tôi kiến tạo sự cân bằng hoàn hảo giữa hiệu năng và trải nghiệm. Bắt đầu hành trình chuyển đổi số cùng Tabo ngay hôm nay!
                    </h2>
                    <div className="flex justify-center relative z-10">
                        <Button to="/contact" variant="primary" size="lg" className="gap-2 select-none shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]">
                            Liên hệ ngay <Icon name="arrow_outward" className="text-[18px]" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Existing FAQ component */}
            <AboutFAQ />

        </div>
    );
};

export default About;
