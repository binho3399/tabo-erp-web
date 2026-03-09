import React from 'react';
import Icon from '../components/common/Icon';

const Contact: React.FC = () => {
    return (
        <div className="font-sans text-gray-900 bg-[#F7F8F8]">
            {/* Hero Section */}
            <section className="relative bg-slate-50 pt-32 pb-20 lg:pt-32 lg:pb-16 overflow-hidden min-h-[40vh] flex items-center justify-center">
                {/* Ambient Blurry Blobs */}
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none mix-blend-multiply"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-cyan-300/20 blur-[120px] pointer-events-none mix-blend-multiply"></div>

                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
                    <span className="bg-blue-50 text-blue-700 border border-blue-100 font-semibold tracking-wide text-xs px-4 py-1.5 rounded-full mb-8 inline-flex items-center shadow-sm">
                        LIÊN HỆ
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] leading-[1.1] font-normal tracking-tight mb-8 text-slate-900">
                        Sẵn sàng hỗ trợ <span className="text-blue-500">doanh nghiệp bạn.</span>
                    </h1>
                    <p className="text-base text-slate-500 mb-10 max-w-2xl font-light">
                        Dù bạn có thắc mắc về tính năng, giá cả, hay cần tư vấn giải pháp quản trị,
                        đội ngũ chuyên gia từ Tabo luôn sẵn lòng giải đáp.
                    </p>
                </div>
            </section>

            {/* Contact Layout */}
            <section className="pb-24 pt-12 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

                        {/* Contact Info (Moved to left) */}
                        <div className="flex flex-col gap-10 lg:py-8 w-full lg:pr-8">
                            <div>
                                <h3 className="text-3xl font-normal text-slate-900 tracking-tight mb-4">Thông tin liên hệ</h3>
                                <p className="text-slate-500 font-light text-base">Kết nối với chúng tôi qua các kênh dưới đây để nhận được sự hỗ trợ nhanh nhất.</p>
                            </div>

                            <div className="flex gap-6 items-start group">
                                <div className="w-12 h-12 rounded-full bg-blue-100/50 flex items-center justify-center shrink-0 group-hover:bg-blue-500 transition-colors duration-300">
                                    <Icon name="location_on" className="text-xl text-blue-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-normal text-slate-900 tracking-tight mb-2">Trụ sở chính</h4>
                                    <p className="text-slate-500 font-light text-[15px] leading-relaxed">
                                        Tòa nhà Landmark 81, Vinhomes Central Park, <br />
                                        Phường 22, Bình Thạnh, TP. Hồ Chí Minh
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start group">
                                <div className="w-12 h-12 rounded-full bg-emerald-100/50 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 transition-colors duration-300">
                                    <Icon name="phone_in_talk" className="text-xl text-emerald-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-normal text-slate-900 tracking-tight mb-2">Đường dây nóng</h4>
                                    <p className="text-slate-500 font-light text-[15px] leading-relaxed mb-1">
                                        Khách hàng doanh nghiệp: <strong>1900 1234</strong>
                                    </p>
                                    <p className="text-slate-500 font-light text-[15px] leading-relaxed">
                                        Hỗ trợ kỹ thuật: <strong>(028) 3888 9999</strong>
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start group">
                                <div className="w-12 h-12 rounded-full bg-purple-100/50 flex items-center justify-center shrink-0 group-hover:bg-purple-500 transition-colors duration-300">
                                    <Icon name="mail" className="text-xl text-purple-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-normal text-slate-900 tracking-tight mb-2">Email hỗ trợ</h4>
                                    <p className="text-slate-500 font-light text-[15px] leading-relaxed mb-1">
                                        Kinh doanh: <a href="mailto:sales@tabo.vn" className="text-blue-500 hover:text-blue-600 transition-colors">sales@tabo.vn</a>
                                    </p>
                                    <p className="text-slate-500 font-light text-[15px] leading-relaxed">
                                        Truyền thông: <a href="mailto:press@tabo.vn" className="text-blue-500 hover:text-blue-600 transition-colors">press@tabo.vn</a>
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Map (Right side) */}
                        <div className="w-full h-[300px] lg:h-auto bg-slate-200 rounded-[24px] overflow-hidden relative shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] border border-slate-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.657512140884!2d106.7118225554199!3d10.798492000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a45fe27d85%3A0xc4eb0a6cf64ac19b!2sLandmark%2081!5e0!3m2!1svi!2s!4v1714032174360!5m2!1svi!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 w-full h-full grayscale-[20%] contrast-125 hover:grayscale-0 transition-all duration-500 cursor-pointer"
                                title="Tabo ERP Location"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-normal text-slate-900 tracking-tight">Câu hỏi <span className="text-blue-500">thường gặp</span></h2>
                        <p className="text-slate-500 mt-4 font-light text-lg">Những câu hỏi phổ biến khi khách hàng liên hệ với Tabo.</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "Thời gian phản hồi thông thường là bao lâu?", a: "Đội ngũ CSKH của chúng tôi cam kết phản hồi các yêu cầu hỗ trợ trong vòng tối đa 2 giờ làm việc kể từ khi nhận được yêu cầu trên hệ thống." },
                            { q: "Tabo có hỗ trợ demo trực tiếp không?", a: "Có, chúng tôi hỗ trợ demo trực tiếp 1-1 qua Google Meet hoặc Zoom để hướng dẫn chi tiết các phân hệ phù hợp với nghiệp vụ doanh nghiệp của bạn." },
                            { q: "Chính sách dùng thử như thế nào?", a: "Tabo cung cấp gói dùng thử 14 ngày miễn phí với đầy đủ phân hệ. Trong thời gian này, bạn sẽ nhận được sự hỗ trợ setup hoàn toàn từ chuyên gia." },
                            { q: "Làm sao để yêu cầu tích hợp tính năng riêng?", a: "Bạn có thể điền form liên hệ và nêu rõ yêu cầu ở phần Lời nhắn, đội ngũ kỹ thuật sẽ trao đổi để khảo sát và đưa ra lộ trình tích hợp (Custom ERP)." }
                        ].map((faq, i) => (
                            <div key={i} className="bg-slate-50 rounded-[20px] p-6 border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
                                <h4 className="text-[17px] font-medium text-slate-800 mb-2 leading-snug">{faq.q}</h4>
                                <p className="text-[15px] text-slate-500 font-light leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
