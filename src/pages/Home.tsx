import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Users, Shield, Zap } from 'lucide-react';

const Home: React.FC = () => {
    const features = [
        {
            name: 'Phân tích dữ liệu',
            description: 'Hệ thống báo cáo tự động, cung cấp cái nhìn toàn cảnh về tình hình kinh doanh.',
            icon: BarChart3,
        },
        {
            name: 'Quản lý nhân sự',
            description: 'Đồng bộ dữ liệu chấm công, tính lương và đánh giá hiệu suất tự động.',
            icon: Users,
        },
        {
            name: 'Bảo mật tuyệt đối',
            description: 'Dữ liệu được mã hóa đa tầng, đảm bảo an toàn thông tin doanh nghiệp.',
            icon: Shield,
        },
        {
            name: 'Tối ưu quy trình',
            description: 'Loại bỏ thao tác thủ công với các quy trình làm việc được tự động hóa.',
            icon: Zap,
        },
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
                <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56 text-center">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md bg-white">
                            Announcing our next round of funding.{' '}
                            <a href="#" className="font-semibold text-tabo-primary">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-8 leading-tight">
                        Chuyển đổi số toàn diện với <span className="text-transparent bg-clip-text bg-gradient-to-r from-tabo-primary to-indigo-400">Tabo ERP</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                        Nền tảng quản trị doanh nghiệp hợp nhất, giúp bạn tối ưu hóa vận hành, quản lý nguồn lực hiệu quả và thúc đẩy tăng trưởng đột phá trong kỷ nguyên số.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/features"
                            className="rounded-md bg-tabo-primary px-8 py-4 text-sm font-semibold text-white shadow-xl hover:bg-blue-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tabo-primary flex items-center group"
                        >
                            Khám Phá Tính Năng
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/contact" className="text-sm font-semibold leading-6 text-gray-900 hover:text-tabo-primary transition-colors">
                            Liên Hệ Tư Vấn <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Feature Section */}
            <div className="py-24 sm:py-32 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-tabo-primary uppercase tracking-wide">Tăng tốc phát triển</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Nâng tầm quản trị doanh nghiệp
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Tabo ERP cung cấp một hệ sinh thái các công cụ mạnh mẽ, được thiết kế để giải quyết các bài toán phức tạp nhất trong vận hành nội bộ.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-16 group hover:bg-gray-50 p-6 rounded-2xl transition-colors duration-300">
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        <div className="absolute left-4 top-6 flex h-10 w-10 items-center justify-center rounded-lg bg-tabo-primary group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-tabo-secondary py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Sẵn sàng để bứt phá?
                            <br />
                            Trải nghiệm Tabo ERP ngay hôm nay.
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                            Đăng ký ngay để nhận tư vấn miễn phí và bản dùng thử không giới hạn tính năng trong vòng 14 ngày.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                to="/contact"
                                className="rounded-md bg-white px-8 py-4 text-sm font-semibold text-tabo-primary shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300"
                            >
                                Nhận tư vấn ngay
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
