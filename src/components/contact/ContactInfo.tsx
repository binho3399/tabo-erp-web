import React from 'react';
import Icon from '../common/Icon';
import Button from '../common/Button';

const ContactInfo: React.FC = () => {
    return (
        <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col gap-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        {/* Col 1: Header + Trụ sở chính */}
                        <div className="flex flex-col w-full gap-5 h-full">
                            <div className="flex-1">
                                <h3 className="text-[28px] md:text-[42px] font-normal text-slate-900 tracking-tight mb-4 md:mb-5">Thông tin <span className="text-blue-500">liên hệ</span></h3>
                                <p className="text-slate-500 font-normal text-base">Kết nối với chúng tôi qua các kênh dưới đây <br className="hidden md:block" /> để nhận được sự hỗ trợ nhanh nhất.</p>
                            </div>

                            {/* Trụ sở chính Card */}
                            <div className="flex flex-col w-full gap-4 lg:gap-8 p-4 lg:p-6 bg-white rounded-[20px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="w-11 h-11 lg:w-14 lg:h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                                    <Icon name="location_on" className="text-2xl text-blue-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-[20px] lg:text-[28px] font-normal text-slate-900 tracking-tight mb-4">Trụ sở chính</h4>
                                    <p className="text-slate-500 font-normal text-base leading-relaxed line-clamp-2">
                                        Tòa nhà Landmark 81, Vinhomes Central Park, Phường 22, Bình Thạnh, TP. Hồ Chí Minh
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Col 2: Hotline + Email */}
                        <div className="flex flex-col w-full gap-5 h-full">
                            {/* Đường dây nóng Card */}
                            <div className="flex flex-col w-full gap-4 lg:gap-8 p-4 lg:p-6 bg-white rounded-[20px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="w-11 h-11 lg:w-14 lg:h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                                    <Icon name="phone_in_talk" className="text-2xl text-blue-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-[20px] lg:text-[28px] font-normal text-slate-900 tracking-tight mb-4">Đường dây nóng</h4>
                                    <div className="space-y-1">
                                        <p className="text-slate-500 font-normal text-base leading-relaxed">
                                            Doanh nghiệp: <strong>1900 1234</strong>
                                        </p>
                                        <p className="text-slate-500 font-normal text-base leading-relaxed">
                                            Kỹ thuật: <strong>(028) 3888 9999</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Email hỗ trợ Card */}
                            <div className="flex flex-col gap-4 lg:gap-8 p-4 lg:p-6 bg-white rounded-[20px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="w-11 h-11 lg:w-14 lg:h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                                    <Icon name="mail" className="text-2xl text-blue-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-[20px] lg:text-[28px] font-normal text-slate-900 tracking-tight mb-4">Email hỗ trợ</h4>
                                    <div className="space-y-1">
                                        <p className="text-slate-500 font-normal text-base leading-relaxed">
                                            Kinh doanh: <a href="mailto:sales@tabo.vn" className="text-blue-500 hover:text-blue-600 transition-colors">sales@tabo.vn</a>
                                        </p>
                                        <p className="text-slate-500 font-normal text-base leading-relaxed">
                                            Truyền thông: <a href="mailto:press@tabo.vn" className="text-blue-500 hover:text-blue-600 transition-colors">press@tabo.vn</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Col 3: Package CTA */}
                        <div className="w-full h-full">
                            <div className="bg-[#0057E7] w-full p-4 lg:p-6 rounded-[20px] flex flex-col gap-4 lg:gap-6 h-full relative overflow-hidden group">
                                {/* Intense Gradient & Mesh Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700 opacity-90"></div>
                                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-400/20 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none animate-pulse"></div>
                                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/30 rounded-full blur-[80px] -ml-24 -mb-24 pointer-events-none"></div>

                                {/* Decorative Rings */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-white/10 rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-[1500ms]"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-[2000ms]"></div>

                                {/* Light Sweep Beam */}
                                <div className="absolute inset-0 opacity-20 pointer-events-none">
                                    <div className="absolute top-[-50%] left-[-50%] w-[50%] h-[200%] bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-[35deg] transform translate-x-[-100%] group-hover:translate-x-[400%] transition-transform duration-[1500ms] ease-in-out"></div>
                                </div>

                                {/* Abstract Dots Decoration */}
                                <div className="absolute top-10 right-10 flex gap-2 opacity-20">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                </div>

                                {/* Background icons - Re-positioned and enhanced */}
                                <div className="absolute -right-12 bottom-0 opacity-[0.12] pointer-events-none group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-700">
                                    <Icon name="shield" className="text-[260px] text-white" filled />
                                </div>
                                <div className="absolute -left-16 top-1/4 opacity-[0.08] pointer-events-none group-hover:scale-110 group-hover:translate-x-4 transition-all duration-700 -rotate-12">
                                    <Icon name="favorite" className="text-[180px] text-white" filled />
                                </div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-8">
                                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6">
                                            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                                            <span className="text-[11px] font-bold text-white tracking-widest uppercase">TABO ERP</span>
                                        </div>
                                        <h4 className="text-[20px] lg:text-[28px] font-normal text-white mb-4 underline underline-offset-8 decoration-white/20">Giải pháp doanh nghiệp</h4>
                                        <p className="text-white/90 font-normal text-base leading-relaxed">
                                            Bắt đầu trải nghiệm giải pháp quản trị doanh nghiệp toàn diện ngay hôm nay.
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-3 mt-auto relative z-10">
                                        <Button 
                                            variant="secondary" 
                                            fullWidth 
                                            size="md" 
                                            className="!bg-white hover:!bg-slate-50 !text-blue-600 shadow-xl shadow-blue-900/20 hover:shadow-blue-900/40 transition-all active:scale-[0.98]"
                                        >
                                            Dùng thử Miễn Phí
                                        </Button>
                                        <Button 
                                            variant="outline" 
                                            fullWidth 
                                            size="md" 
                                            className="!bg-transparent border-white/40 !text-white hover:!bg-white/10 transition-all active:scale-[0.98]"
                                        >
                                            Liên hệ tư vấn
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map (Bottom) */}
                    <div className="w-full h-[400px] md:h-[500px] bg-slate-200 rounded-[20px] overflow-hidden relative shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-slate-200">
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
