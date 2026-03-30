import React from 'react';

const AboutMission: React.FC = () => {
    return (
        <section className="py-16 lg:py-24 relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start mb-24 lg:mb-0">
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
            </div>
        </section>
    );
};

export default AboutMission;
