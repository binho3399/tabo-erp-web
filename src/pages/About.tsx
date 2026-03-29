import React from 'react';
import { Icon, Badge, Button } from '@/components/ui';
import AboutFAQ from '../components/about/AboutFAQ';

const About: React.FC = () => {
    return (
        <div className="font-sans text-gray-900 dark:text-white bg-[#F7F8F8] dark:bg-slate-950 transition-colors duration-500 overflow-x-hidden">
            {/* Hero Section with Ambient Background */}
            <section className="relative pt-32 pb-16 lg:pb-24">
                {/* Background Decorations Container with Smooth Fade Mask */}
                <div className="absolute inset-0 z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]">
                    {/* Ambient Blurry Blobs */}
                    <div className="absolute top-[-5%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-[130px] transition-all duration-700"></div>
                    <div className="absolute bottom-[-15%] right-[-5%] w-[40%] h-[40%] rounded-full bg-cyan-300/20 dark:bg-cyan-600/10 blur-[130px] transition-all duration-700"></div>
                    <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-purple-300/10 dark:bg-purple-600/5 blur-[100px] transition-all duration-700"></div>

                    {/* Subtle Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

                    {/* Animated SVG Beams */}
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <defs>
                            <linearGradient id="beamGradientAbout" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.35" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                        </defs>

                        <path d="M 15 0 V 25 H 30 V 45 H 10 V 70 H 25 V 100" fill="none" stroke="url(#beamGradientAbout)" strokeWidth="0.04" pathLength="1" strokeDasharray="0.12 0.88" className="animate-grid-dash" />
                        <path d="M 85 0 V 35 H 70 V 65 H 90 V 85 H 75 V 100" fill="none" stroke="url(#beamGradientAbout)" strokeWidth="0.04" pathLength="1" strokeDasharray="0.15 0.85" className="animate-grid-dash" style={{ animationDelay: '3s', animationDuration: '20s' }} />
                        <path d="M 45 0 V 15 H 55 V 35 H 40 V 60 H 60 V 80 H 50 V 100" fill="none" stroke="url(#beamGradientAbout)" strokeWidth="0.025" pathLength="1" strokeDasharray="0.1 0.9" className="animate-grid-dash" style={{ animationDelay: '6s', animationDuration: '25s' }} />
                    </svg>
                </div>

                {/* 1. Centered Typographic Hero Header */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col items-center text-center">
                    
                    {/* Concentric Pulsing Blue Circles Behind Text (With Smooth Bottom Fade Mask - Higher Start) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full min-h-[800px] pointer-events-none z-0 [mask-image:linear-gradient(to_bottom,black_10%,black_40%,transparent_85%)]">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] aspect-square rounded-full border border-blue-500/10 dark:border-blue-400/10 bg-gradient-to-b from-blue-400/5 to-transparent dark:from-blue-600/5 blur-[2px] animate-breathing" style={{ animationDuration: '6s' }}></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] md:w-[600px] aspect-square rounded-full border-[1.5px] border-blue-500/15 dark:border-blue-400/15 bg-gradient-to-b from-blue-500/5 to-transparent dark:from-blue-600/5 blur-[1px] animate-breathing" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] aspect-square rounded-full border-2 border-blue-500/20 dark:border-blue-400/20 bg-gradient-to-b from-blue-500/10 to-transparent dark:from-blue-600/10 shadow-[0_0_80px_rgba(59,130,246,0.15)] dark:shadow-[0_0_80px_rgba(59,130,246,0.25)] animate-breathing" style={{ animationDuration: '3s', animationDelay: '2s' }}></div>
                    </div>

                    {/* Floating Left Icon (Shield/Security) */}
                    <div className="hidden md:flex absolute top-[25%] left-[-10%] w-16 h-16 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-white/50 dark:border-slate-700 shadow-xl rounded-[20px] items-center justify-center animate-bounce z-10" style={{ animationDuration: '4s' }}>
                        <Icon name="security" className="text-3xl text-emerald-500 dark:text-emerald-400" />
                    </div>

                    {/* Floating Right Icon (Timer/Performance) */}
                    <div className="hidden md:flex absolute bottom-[15%] right-[-10%] w-16 h-16 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-white/50 dark:border-slate-700 shadow-xl rounded-[20px] items-center justify-center animate-bounce z-10" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                        <Icon name="schedule" className="text-3xl text-blue-500 dark:text-blue-400" />
                    </div>

                    <Badge variant="primary" className="mb-6 uppercase shadow-sm relative z-10 select-none">
                        TỔNG QUAN
                    </Badge>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-normal tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6 transition-colors relative z-10">
                        Về chúng tôi <span className="text-blue-500 dark:text-blue-400 block sm:inline mt-2 sm:mt-0">— Tabo ERP</span>
                    </h1>

                    <p className="text-base text-slate-500 dark:text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto relative z-10">
                        Tabo ra đời từ khát vọng kiến tạo một hệ điều hành doanh nghiệp "tất cả trong một", giúp đồng bộ dữ liệu và quy trình một cách hiệu quả nhất.
                    </p>
                </div>



                {/* Small Floating Decorations with Animations - Restored */}
                <div className="absolute top-[15%] left-[15%] w-2 h-2 bg-blue-500 rounded-full opacity-40 pointer-events-none animate-bounce" style={{ animationDuration: '4s' }}></div>
                <div className="absolute bottom-[25%] right-[15%] border-[1.5px] border-indigo-400 w-3 h-3 rounded-sm opacity-30 rotate-45 pointer-events-none animate-[spin]" style={{ animationDuration: '6s' }}></div>
                <div className="absolute top-[25%] right-[20%] opacity-30 text-blue-600 pointer-events-none animate-pulse" style={{ animationDuration: '3s' }}>
                    <Icon name="star" className="text-[18px]" />
                </div>
                <div className="absolute bottom-[35%] left-[10%] opacity-30 text-cyan-600 pointer-events-none -rotate-12 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                    <Icon name="change_history" className="text-[20px]" />
                </div>
                <div className="absolute top-[10%] left-[80%] w-2 h-2 bg-orange-400 rounded-full opacity-40 pointer-events-none animate-pulse" style={{ animationDuration: '2s' }}></div>

                {/* Bottom Gradient for smooth transition - Simplified to avoid 'bright line' edge */}
                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#F7F8F8] to-transparent dark:from-slate-950 dark:to-transparent pointer-events-none z-10 transition-colors duration-500"></div>
            </section>

            {/* Main Content Container matching Reference Image */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 relative z-20">

                {/* 3. Mission / Introduction */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start mb-24 md:mb-32">
                    <div className="lg:col-span-7">
                        <h2 className="text-[28px] md:text-4xl lg:text-[42px] font-normal tracking-tight text-slate-900 dark:text-white leading-[1.2] transition-colors">
                            Hành trình số hóa <span className="text-blue-500 dark:text-blue-400">đơn giản hóa quản trị</span> và tối ưu vận hành doanh nghiệp.
                        </h2>
                    </div>
                    <div className="lg:col-span-5 lg:pt-2">
                        <p className="text-base text-slate-500 dark:text-slate-400 font-normal leading-relaxed transition-colors">
                            Tabo ra đời từ khát vọng kiến tạo một hệ điều hành doanh nghiệp "tất cả trong một", giúp đồng bộ dữ liệu và quy trình một cách hiệu quả nhất. Với hơn 5 năm kinh nghiệm, chúng tôi cam kết mang lại giá trị thực chất cho hàng ngàn khách hàng.
                        </p>
                    </div>
                </div>

                {/* 4. Grid Content - 3 Columns Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-16 lg:gap-y-0">

                    {/* Left Column (Giải pháp) */}
                    <div className="lg:col-span-1 lg:pr-8">
                        <div className="group">
                            <div className="w-full h-[3px] bg-[#0070F3] dark:bg-blue-500 mb-8 transition-colors"></div>
                            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50/80 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6 shadow-sm transition-colors">
                                <span className="text-sm font-bold text-[#0070F3] dark:text-blue-400 uppercase">Giải pháp</span>
                            </div>
                            <h3 className="text-[28px] font-normal tracking-tight text-slate-900 dark:text-white leading-[1.4] transition-colors">
                                Giải pháp quản trị toàn diện với dấu ấn cá nhân hóa. Chuyển đổi số dễ dàng, liền mạch.
                            </h3>
                        </div>
                    </div>

                    {/* Right Column (Grid 2x2 for others) */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-16 md:gap-y-24">
                            
                            {/* Item 2: Our Core Values (Text) */}
                            <div className="group">
                                <div className="w-full h-[3px] bg-[#0070F3] dark:bg-blue-500 mb-8 transition-colors"></div>
                                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50/80 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6 shadow-sm transition-colors">
                                    <span className="text-sm font-bold text-[#0070F3] dark:text-blue-400 uppercase">Giá trị cốt lõi</span>
                                </div>
                                <div className="text-base text-slate-500 dark:text-slate-400 font-normal leading-relaxed space-y-4 transition-colors">
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
                                <div className="w-full h-[3px] bg-[#0070F3] dark:bg-blue-500 mb-8 transition-colors"></div>
                                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50/80 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6 shadow-sm transition-colors">
                                    <span className="text-sm font-bold text-[#0070F3] dark:text-blue-400 uppercase">Thành tựu</span>
                                </div>
                                <div className="text-base text-slate-500 dark:text-slate-400 font-normal leading-relaxed space-y-4 transition-colors">
                                    <p className="text-slate-800 dark:text-slate-200 font-medium transition-colors">
                                        Phục vụ hàng ngàn doanh nghiệp trên hành trình chuyển đổi số với tỷ lệ hài lòng tuyệt đối.
                                    </p>
                                    <p>
                                        Sự tin tưởng của 1,000+ doanh nghiệp chính là thành tựu đạt được lớn nhất. Hệ thống vận hành luôn hướng tới tính tự động hóa và sự đơn giản, không giới hạn quyền truy cập ở mọi cấp độ nhân sự.
                                    </p>
                                </div>
                            </div>

                            {/* Item 3: Tầm nhìn */}
                            <div className="group">
                                <div className="w-full h-[3px] bg-[#0070F3] dark:bg-blue-500 mb-8 transition-colors"></div>
                                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50/80 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6 shadow-sm transition-colors">
                                    <span className="text-sm font-bold text-[#0070F3] dark:text-blue-400 uppercase">Tầm nhìn</span>
                                </div>
                                <div className="text-base text-slate-500 dark:text-slate-400 font-normal leading-relaxed space-y-4 transition-colors">
                                    <p className="text-slate-800 dark:text-slate-200 font-medium transition-colors">
                                        Định hình tương lai số hóa qua giải pháp quản trị tinh gọn.
                                    </p>
                                    <p>
                                        Khát vọng vươn mình trở thành đối tác chiến lược hàng đầu. Mỗi sản phẩm được tạo ra đều hướng đến sự bền vững, mở ra cánh cửa tiến vào kỷ nguyên dữ liệu hóa.
                                    </p>
                                </div>
                            </div>

                            {/* Item 4: Our Team (Image only) */}
                            <div className="group">
                                <div className="w-full h-[265px] rounded-[16px] overflow-hidden relative border border-transparent dark:border-slate-800">
                                    {/* Minor aesthetic glow map for vibe */}
                                    <div className="absolute -inset-4 bg-blue-100/50 dark:bg-blue-600/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
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
            <section className="bg-[#EAEBE8]/50 dark:bg-slate-900/50 w-full py-20 md:py-32 hover:bg-[#EAEBE8]/80 dark:hover:bg-slate-900/80 transition-colors duration-500 ease-out backdrop-blur-sm relative overflow-hidden group border-y border-transparent dark:border-slate-800">
                {/* Ambient Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-300/10 dark:bg-blue-600/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-300/20 dark:group-hover:bg-blue-600/20 transition-all duration-700"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-300/10 dark:bg-teal-600/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-teal-300/20 dark:group-hover:bg-teal-600/20 transition-all duration-700"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="flex justify-center mb-8 relative z-10">
                        <Icon name="change_history" className="text-slate-400 dark:text-slate-500 text-[28px] transition-colors" />
                    </div>
                    <h2 className="text-[22px] md:text-[34px] lg:text-[42px] font-normal text-slate-900 dark:text-white tracking-tight max-w-3xl mx-auto leading-relaxed mb-10 relative z-10 transition-colors">
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
