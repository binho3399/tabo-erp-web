import React from 'react';
import Icon from '../common/Icon';

const ContactInfo: React.FC = () => {
    return (
        <section className="pb-24 pt-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

                    {/* Contact Info (Moved to left) */}
                    <div className="flex flex-col gap-10 lg:py-8 w-full lg:pr-8">
                        <div>
                            <h3 className="text-5xl font-normal text-slate-900 tracking-tight mb-4">Thông tin <span className="text-blue-500">liên hệ</span></h3>
                            <p className="text-slate-500 font-light text-base">Kết nối với chúng tôi qua các kênh dưới đây để nhận được sự hỗ trợ nhanh nhất.</p>
                        </div>

                        <div className="flex gap-6 items-start group">
                            <div className="w-12 h-12 rounded-full bg-blue-100/50 flex items-center justify-center shrink-0 group-hover:bg-blue-500 transition-colors duration-300">
                                <Icon name="location_on" className="text-xl text-blue-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div>
                                <h4 className="text-[28px] font-normal text-slate-900 tracking-tight mb-2">Trụ sở chính</h4>
                                <p className="text-slate-500 font-light text-base leading-relaxed">
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
                                <h4 className="text-[28px] font-normal text-slate-900 tracking-tight mb-2">Đường dây nóng</h4>
                                <p className="text-slate-500 font-light text-base leading-relaxed mb-1">
                                    Khách hàng doanh nghiệp: <strong>1900 1234</strong>
                                </p>
                                <p className="text-slate-500 font-light text-base leading-relaxed">
                                    Hỗ trợ kỹ thuật: <strong>(028) 3888 9999</strong>
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start group">
                            <div className="w-12 h-12 rounded-full bg-purple-100/50 flex items-center justify-center shrink-0 group-hover:bg-purple-500 transition-colors duration-300">
                                <Icon name="mail" className="text-xl text-purple-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div>
                                <h4 className="text-[28px] font-normal text-slate-900 tracking-tight mb-2">Email hỗ trợ</h4>
                                <p className="text-slate-500 font-light text-base leading-relaxed mb-1">
                                    Kinh doanh: <a href="mailto:sales@tabo.vn" className="text-blue-500 hover:text-blue-600 transition-colors">sales@tabo.vn</a>
                                </p>
                                <p className="text-slate-500 font-light text-base leading-relaxed">
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
    );
};

export default ContactInfo;
