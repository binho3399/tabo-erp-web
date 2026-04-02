import { Icon, Badge } from '@/components/ui';

const TestimonialsSection: React.FC = () => {
    return (
        <section className="py-16 lg:py-24 bg-[#F7F8F8] dark:bg-slate-950 overflow-hidden relative transition-colors duration-500">
            {/* Decorative background elements - subtle for light mode, slightly stronger for dark */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 dark:bg-blue-600/5 blur-[120px] rounded-full pointer-events-none transition-colors duration-500"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/30 dark:bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none transition-colors duration-500"></div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee-slow {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - 1.5rem)); }
                }
                .animate-marquee-slow {
                    animation: marquee-slow 80s linear infinite;
                }
                .animate-marquee-slow:hover {
                    animation-play-state: paused;
                }
                .premium-card {
                    background: white;
                    border: 1px solid rgba(0, 0, 0, 0.03);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.01);
                }
                .dark .premium-card {
                    background: #0f172a;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.3);
                }
                .premium-card:hover {
                    border-color: rgba(59, 130, 246, 0.2);
                    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.08);
                }
                .dark .premium-card:hover {
                    border-color: rgba(59, 130, 246, 0.4);
                    box-shadow: 0 20px 50px -15px rgba(0, 0, 0, 0.5);
                }
                @media (max-width: 1023px) {
                    .animate-marquee-slow {
                        animation: none;
                    }
                }
            `}} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10 text-left lg:text-center">
                <Badge variant="primary" className="mb-4 md:mb-5 uppercase">
                    Hệ sinh thái đối tác
                </Badge>
                <h3 className="text-[28px] md:text-[42px] font-normal text-slate-900 dark:text-white tracking-tight mb-4 md:mb-5 transition-colors">
                    Kiến tạo giá trị <span className="text-blue-500 dark:text-blue-400">vượt trội</span>
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-normal text-base max-w-2xl mx-auto leading-relaxed transition-colors">
                    Hơn 1,000 doanh nghiệp đã chuyển đổi số thành công cùng Tabo ERP. <br className="hidden md:block" /> Hãy nghe họ chia sẻ về hành trình này.
                </p>
            </div>

            <div className="relative flex overflow-x-auto lg:overflow-x-hidden snap-x snap-mandatory px-4 lg:px-0">
                <div className="flex animate-marquee-slow whitespace-normal gap-6 lg:gap-12 px-2 lg:px-6">
                    {[
                        { quote: 'Tabo ERP đã đồng bộ hóa toàn bộ chuỗi cung ứng của chúng tôi, mang lại sự nhất quán hoàn hảo.', highlight: 'Tốc độ mở rộng gấp 3 lần', icon: 'speed' },
                        { quote: 'Việc quản lý 50 chi nhánh trở nên đơn giản như quản lý 1 cửa hàng. Dữ liệu thực rất quan trọng.', highlight: 'Doanh thu tăng 45% sau 6 tháng', icon: 'trending_up' },
                        { quote: 'Không chỉ là phần mềm, đội ngũ hỗ trợ của Tabo thực sự hiểu nghiệp vụ và cực kỳ chuyên nghiệp.', highlight: 'Giảm 30% chi phí vận hành', icon: 'savings' },
                        { quote: 'Chúng tôi tiết kiệm được hàng trăm giờ làm việc mỗi tháng nhờ hệ thống tự động hóa của Tabo.', highlight: 'Tối ưu 70% quy trình', icon: 'settings_suggest' },
                        { quote: 'Chi phí triển khai cực kỳ hợp lý so với những tính năng cao cấp mà hệ thống mang lại.', highlight: 'ROI đạt 200% năm đầu', icon: 'analytics' },
                        { quote: 'Giao diện thân thiện giúp nhân viên của chúng tôi làm quen chỉ sau 2 ngày đào tạo.', highlight: '98% nhân viên hài lòng', icon: 'mood' },
                        { quote: 'Khả năng tuỳ biến linh hoạt của Tabo ERP cho phép chúng tôi tích hợp sâu vào quy trình đặc thù.', highlight: 'Tích hợp 100% nghiệp vụ', icon: 'hub' },
                        { quote: 'Báo cáo thông minh giúp tôi ra quyết định chính xác hơn dựa trên số liệu thực tế.', highlight: 'Tăng 25% hiệu quả quản trị', icon: 'insights' },
                        { quote: 'Khả năng bảo mật tuyệt đối giúp chúng tôi yên tâm hơn khi quản lý dữ liệu khách hàng nhạy cảm.', highlight: 'An tâm bảo mật dữ liệu', icon: 'shield' },
                        { quote: 'Hệ thống chạy mượt mà trên cả mobile giúp đội ngũ kinh doanh chốt đơn mọi lúc mọi nơi.', highlight: 'Vận hành linh hoạt 24/7', icon: 'stay_primary_portrait' },
                    ].concat([
                        { quote: 'Tabo ERP đã đồng bộ hóa toàn bộ chuỗi cung ứng của chúng tôi, mang lại sự nhất quán hoàn hảo.', highlight: 'Tốc độ mở rộng gấp 3 lần', icon: 'speed' },
                        { quote: 'Việc quản lý 50 chi nhánh trở nên đơn giản như quản lý 1 cửa hàng. Dữ liệu thực rất quan trọng.', highlight: 'Doanh thu tăng 45% sau 6 tháng', icon: 'trending_up' },
                        { quote: 'Không chỉ là phần mềm, đội ngũ hỗ trợ của Tabo thực sự hiểu nghiệp vụ và cực kỳ chuyên nghiệp.', highlight: 'Giảm 30% chi phí vận hành', icon: 'savings' },
                        { quote: 'Chúng tôi tiết kiệm được hàng trăm giờ làm việc mỗi tháng nhờ hệ thống tự động hóa của Tabo.', highlight: 'Tối ưu 70% quy trình', icon: 'settings_suggest' },
                        { quote: 'Chi phí triển khai cực kỳ hợp lý so với những tính năng cao cấp mà hệ thống mang lại.', highlight: 'ROI đạt 200% năm đầu', icon: 'analytics' },
                        { quote: 'Giao diện thân thiện giúp nhân viên của chúng tôi làm quen chỉ sau 2 ngày đào tạo.', highlight: '98% nhân viên hài lòng', icon: 'mood' },
                        { quote: 'Khả năng tuỳ biến linh hoạt của Tabo ERP cho phép chúng tôi tích hợp sâu vào quy trình đặc thù.', highlight: 'Tích hợp 100% nghiệp vụ', icon: 'hub' },
                        { quote: 'Báo cáo thông minh giúp tôi ra quyết định chính xác hơn dựa trên số liệu thực tế.', highlight: 'Tăng 25% hiệu quả quản trị', icon: 'insights' },
                        { quote: 'Khả năng bảo mật tuyệt đối giúp chúng tôi yên tâm hơn khi quản lý dữ liệu khách hàng nhạy cảm.', highlight: 'An tâm bảo mật dữ liệu', icon: 'shield' },
                        { quote: 'Hệ thống chạy mượt mà trên cả mobile giúp đội ngũ kinh doanh chốt đơn mọi lúc mọi nơi.', highlight: 'Vận hành linh hoạt 24/7', icon: 'stay_primary_portrait' },
                    ]).map((item, i) => (
                        <div key={i} className="flex-shrink-0 snap-start w-[85vw] max-w-[450px] p-4 lg:p-6 premium-card transition-all duration-500 ease-out hover:-translate-y-1 rounded-[20px] flex flex-col group relative overflow-hidden">
                            {/* Subtle Hover Background Pattern */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 bg-[radial-gradient(#0052FF_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

                            <div className={`w-11 h-11 lg:w-12 lg:h-12 rounded-xl mb-4 flex items-center justify-center transition-all group-hover:scale-110 duration-500 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800 shadow-sm shadow-blue-500/5`}>
                                <Icon name={item.icon} className="text-xl" />
                            </div>

                            <div className="relative mb-4">
                                <div className="text-slate-900 dark:text-white font-normal text-[20px] lg:text-[28px] tracking-tight leading-tight mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {item.highlight}
                                </div>
                                <div className="w-12 h-1 bg-blue-500/20 rounded-full group-hover:w-16 group-hover:bg-blue-500/40 transition-all duration-500"></div>
                            </div>

                            <p className="text-base text-slate-500 dark:text-slate-400 font-normal leading-relaxed mb-4 relative z-10 transition-colors">
                                "{item.quote}"
                            </p>

                            {/* Bottom Decorative Quote */}
                            <div className="mt-2 flex justify-end opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500">
                                <Icon name="format_quote" className="text-5xl text-slate-900 dark:text-white" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
