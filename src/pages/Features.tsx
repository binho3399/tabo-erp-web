import React from 'react';
import Icon from '../components/common/Icon';
import { Link } from 'react-router-dom';

const Features: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <section className="relative bg-primary-600 text-white pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center space-x-2 bg-blue-700/50 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-500/30 mb-8">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            <span className="text-sm font-semibold tracking-wider text-blue-200 uppercase">Hệ Sinh Thái Tabo</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif leading-tight">
                            Nền Tảng ERP <span className="text-blue-500 italic">Toàn Diện.</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light">
                            Khám phá bộ giải pháp vượt trội từ Tabo ERP giúp doanh nghiệp bạn số hóa toàn diện quy trình vận hành và bứt phá doanh thu.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Features Grid */}
            <section className="py-24 bg-[#F7F8F8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-4 opacity-60">Các Phân Hệ Nổi Bật</h2>
                        <h3 className="text-4xl lg:text-5xl font-bold text-primary-600 font-serif leading-tight">
                            Giải Pháp Chuyên Sâu Theo Từng Nghiệp Vụ
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "calculate",
                                title: "Kế Toán & Tài Chính",
                                desc: "Tự động hóa ghi nhận giao dịch, lập báo cáo tài chính chuẩn xác và dự phòng rủi ro dòng tiền.",
                                benefits: ["Quản lý thu chi", "Lập báo cáo thuế", "Quản lý công nợ"]
                            },
                            {
                                icon: "inventory_2",
                                title: "Quản Lý Kho Chuyên Sâu",
                                desc: "Tối ưu mức tồn kho, theo dõi vị trí theo thời gian thực và quản lý xuất nhập tồn đa kho hiệu quả.",
                                benefits: ["Kiểm kê tự động", "Cảnh báo hết hạn", "QR Code / Barcode"]
                            },
                            {
                                icon: "group",
                                title: "Quản Trị Nhân Sự (HRM)",
                                desc: "Phát triển nhân tài, đánh giá KPI, và tối ưu quy trình tính lương (Payroll) một cách hiệu quả.",
                                benefits: ["Tuyển dụng", "Đánh giá năng lực", "Chấm công tự động"]
                            },
                            {
                                icon: "handshake",
                                title: "Quan Hệ Khách Hàng (CRM)",
                                desc: "Nắm bắt mọi thông tin vòng đời khách hàng, nuôi dưỡng lead và gia tăng tỷ lệ chuyển đổi sales.",
                                benefits: ["Quản lý Lead", "Chăm sóc khách hàng", "Tích hợp đa kênh"]
                            },
                            {
                                icon: "show_chart",
                                title: "Thương Mại & Bán Hàng",
                                desc: "Quản lý xuyên suốt từ lên báo giá, chốt đơn hàng đến giao hàng và thanh toán trên một nền tảng.",
                                benefits: ["Quản lý báo giá", "Theo dõi đơn hàng", "Chiết khấu linh hoạt"]
                            },
                            {
                                icon: "bar_chart",
                                title: "Báo Cáo Phân Tích (BI)",
                                desc: "Cung cấp cái nhìn trực quan 360 độ về sức khỏe doanh nghiệp thông qua hệ thống dashboard thông minh.",
                                benefits: ["Dashboard tùy chỉnh", "Báo cáo Real-time", "Phân tích dự báo"]
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-slate-100 group">
                                <div className="h-16 w-16 bg-blue-500/10 rounded-lg flex items-center justify-center mb-8 border border-blue-500/20 group-hover:bg-blue-500 transition-colors">
                                    <Icon name={feature.icon} className="text-[32px] text-blue-500 group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="text-2xl font-bold mb-4 text-primary-600 font-serif">{feature.title}</h4>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    {feature.desc}
                                </p>
                                <ul className="space-y-3">
                                    {feature.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-center text-slate-700 font-medium">
                                            <Icon name="check_circle" className="text-[20px] text-blue-500 mr-3 shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration Details section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-4">Khả Năng Tích Hợp</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-primary-600 font-serif leading-tight mb-8">
                                Kết Nối Không Giới Hạn Với Hệ Thống Hiện Tại Của Bạn
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Tabo ERP được xây dựng trên nền tảng mở (Open API), cho phép dễ dàng giao tiếp và đồng bộ dữ liệu với hàng trăm ứng dụng phổ biến mà doanh nghiệp bạn đang tin dùng.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: "account_balance_wallet", title: "Cổng Thanh Toán", desc: "Tích hợp OnePay, VNPay, Momo, ZaloPay..." },
                                    { icon: "gpp_good", title: "Hóa Đơn Điện Tử", desc: "Tương thích VNPT Invoice, Viettel, MISA meInvoice." },
                                    { icon: "savings", title: "Ngân Hàng Điện Tử", desc: "Đồng bộ sao kê thời gian thực từ VCB, Techcombank, ACB." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="h-12 w-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500">
                                                <Icon name={item.icon} className="text-[24px]" />
                                            </div>
                                        </div>
                                        <div className="ml-6">
                                            <h4 className="text-xl font-bold text-primary-600 mb-1">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-[#F7F8F8] rounded-full absolute -inset-4 transform -translate-x-12 translate-y-12"></div>
                            <div className="relative bg-primary-600 rounded-2xl p-12 shadow-2xl overflow-hidden aspect-[4/5] flex flex-col justify-center">
                                {/* Decor details */}
                                <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
                                <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-700 rounded-full blur-3xl opacity-50"></div>

                                <div className="relative z-10 space-y-8">
                                    <div className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-xl flex items-center">
                                        <div className="w-12 h-12 bg-blue-500 rounded-xl mr-4 flex items-center justify-center font-bold text-white">ERP</div>
                                        <div className="flex-1">
                                            <div className="h-2 bg-white/30 rounded w-full mb-2"></div>
                                            <div className="h-2 bg-white/20 rounded w-2/3"></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center my-4">
                                        <div className="h-16 w-0.5 bg-gradient-to-b from-blue-500 to-transparent"></div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-xl flex items-center transform translate-x-12">
                                        <div className="w-12 h-12 bg-blue-700 rounded-xl mr-4 flex items-center justify-center text-white"><Icon name="calculate" className="text-[24px]" /></div>
                                        <div className="flex-1">
                                            <div className="h-2 bg-white/30 rounded w-full mb-2"></div>
                                            <div className="h-2 bg-white/20 rounded w-1/2"></div>
                                        </div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-xl flex items-center transform -translate-x-6">
                                        <div className="w-12 h-12 bg-white rounded-xl mr-4 flex items-center justify-center text-primary-600"><Icon name="group" className="text-[24px]" /></div>
                                        <div className="flex-1">
                                            <div className="h-2 bg-white/30 rounded w-full mb-2"></div>
                                            <div className="h-2 bg-white/20 rounded w-3/4"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to action */}
            <section className="py-24 bg-blue-500 text-white relative overflow-hidden text-center">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif leading-tight">
                        Sẵn Sàng Để Trải Nghiệm Sức Mạnh Của Tabo ERP?
                    </h2>
                    <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        Tham gia cùng những mảng kinh doanh hàng đầu đã và đang chuyển dịch doanh nghiệp với nền tảng ERP hệ mới của chúng tôi.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/contact" className="inline-flex items-center justify-center bg-primary-600 hover:bg-black text-white font-bold py-4 px-10 rounded-sm transition-colors w-full sm:w-auto text-lg border border-primary-600">
                            Yêu Cầu Demo <Icon name="arrow_forward" className="ml-2 text-[20px]" />
                        </Link>
                        <Link to="/about" className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white font-bold py-4 px-10 rounded-sm border-2 border-white transition-colors w-full sm:w-auto text-lg">
                            Tìm Hiểu Thêm
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;
