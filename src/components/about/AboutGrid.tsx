import React from 'react';

const AboutGrid: React.FC = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 relative z-20">
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
        </section>
    );
};

export default AboutGrid;
