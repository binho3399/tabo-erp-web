import Icon from '../components/common/Icon';
import Badge from '../components/common/Badge';
import AboutFAQ from '../components/about/AboutFAQ';

const About: React.FC = () => {
    return (
        <div className="font-sans text-gray-900 bg-[#F7F8F8]">
            {/* Hero Section */}
            <section className="relative bg-slate-50 pt-32 pb-20 lg:pt-32 lg:pb-24 overflow-hidden min-h-[60vh] flex items-center justify-center">
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

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
                    <Badge variant="primary" className="mb-8 font-semibold">
                        VỀ CHÚNG TÔI
                    </Badge>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] leading-[1.1] font-normal tracking-tight mb-5 text-slate-900">
                        Kiến tạo tương lai quản trị <br className="hidden md:block" />cho <span className="text-blue-500">doanh nghiệp Việt.</span>
                    </h1>
                    <p className="text-base text-slate-500 mb-10 max-w-2xl font-normal">
                        Chúng tôi đơn giản hóa quy trình phức tạp, giúp bạn tập trung <br className="hidden md:block" /> hoàn toàn vào giá trị kinh doanh cốt lõi.
                    </p>
                </div>

                {/* Bottom Gradient for smooth transition */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
            </section>

            {/* Mission Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-normal tracking-tight text-slate-900 leading-[1.2] mb-6">
                                Hành trình <span className="text-blue-500">chuyển đổi số</span>
                            </h2>
                            <p className="text-slate-500 leading-relaxed font-light text-lg mb-6">
                                Bắt đầu từ những trăn trở của các chủ doanh nghiệp khi đối mặt với vô số khó khăn trong việc quản trị dữ liệu, hệ thống lưu trữ rời rạc và quy trình thiếu đồng bộ.
                                Tabo được ra đời với khát vọng tạo ra một hệ điều hành doanh nghiệp “tất cả trong một”, toàn diện nhưng lại cực kỳ dễ sử dụng.
                            </p>
                            <p className="text-slate-500 leading-relaxed font-light text-lg mb-8">
                                Chúng tôi tin rằng công nghệ phải đóng vai trò là đòn bẩy vững chắc thay vì là rào cản. Đó là lý do mọi thiết kế và phân hệ tại Tabo đều hướng đến tính tự động hóa và tối đa hóa trải nghiệm người dùng.
                            </p>
                        </div>
                        <div className="relative h-[480px]">
                            <div className="absolute inset-0 bg-blue-500/5 rounded-[30px] blur-2xl transform -rotate-3"></div>
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" alt="Team collaborating" className="absolute inset-0 w-full h-full object-cover rounded-[24px] shadow-2xl z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="absolute -top-[50%] -left-[10%] w-[50%] h-[150%] bg-white/10 blur-[100px] rounded-full transform -rotate-45 relative z-0"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x border-white/20 text-center">
                        <div className="px-4">
                            <div className="text-4xl md:text-5xl font-normal tracking-tight mb-2">5+</div>
                            <div className="text-blue-200 font-light text-[13px] uppercase tracking-wider">Năm kinh nghiệm</div>
                        </div>
                        <div className="px-4 border-l border-white/20">
                            <div className="text-4xl md:text-5xl font-normal tracking-tight mb-2">1,000+</div>
                            <div className="text-blue-200 font-light text-[13px] uppercase tracking-wider">Doanh nghiệp</div>
                        </div>
                        <div className="px-4 border-l-0 md:border-l border-white/20">
                            <div className="text-4xl md:text-5xl font-normal tracking-tight mb-2">50+</div>
                            <div className="text-blue-200 font-light text-[13px] uppercase tracking-wider">Chuyên gia</div>
                        </div>
                        <div className="px-4 border-l border-white/20">
                            <div className="text-4xl md:text-5xl font-normal tracking-tight mb-2">99%</div>
                            <div className="text-blue-200 font-light text-[13px] uppercase tracking-wider">Hài lòng</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-[#F7F8F8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-normal text-slate-900 tracking-tight">Giá Trị <span className="text-blue-500">Cốt Lõi</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: "verified", title: "Chất lượng là danh dự", desc: "Xây dựng hệ thống với tiêu chuẩn khắt khe nhất, đảm bảo vận hành trơn tru và bảo mật tối đa." },
                            { icon: "handshake", title: "Khách hàng làm trung tâm", desc: "Tập trung tối ưu trải nghiệm và giải quyết sâu sắc các bài toán thực tế của mọi doanh nghiệp." },
                            { icon: "rocket_launch", title: "Không ngừng đổi mới", desc: "Liên tục cập nhật công nghệ mới và tư duy quản trị thông minh để đồng hành cùng sự đột phá." }
                        ].map((value, i) => (
                            <div key={i} className="bg-white p-8 rounded-[24px] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-slate-100/50 hover:-translate-y-1 transition-transform group">
                                <div className="w-14 h-14 bg-blue-50 rounded-[16px] flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                                    <Icon name={value.icon} className="text-2xl text-blue-500 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-normal text-slate-800 tracking-tight mb-3">{value.title}</h3>
                                <p className="text-slate-500 font-light text-[15px] leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reused FAQ Section from Contact page */}
            <AboutFAQ />

        </div>
    );
};

export default About;

