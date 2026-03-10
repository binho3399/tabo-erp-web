import React from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../../assets/Logo-white.png';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#020408] text-gray-500 py-12 relative z-20">
            {/* Decorative Fading Lines - 10 tiers stacking towards footer */}
            <div className="absolute -top-[130px] left-0 w-full pointer-events-none hidden md:block select-none z-30">
                <div className="flex flex-col items-center gap-1.5">
                    <div className="w-full h-[0.5px] bg-[#020408] opacity-[0.05]"></div>
                    <div className="w-full h-[1px] bg-[#020408] opacity-[0.1]"></div>
                    <div className="w-full h-[1.5px] bg-[#020408] opacity-[0.15]"></div>
                    <div className="w-full h-[2.5px] bg-[#020408] opacity-[0.25]"></div>
                    <div className="w-full h-[4px] bg-[#020408] opacity-[0.35]"></div>
                    <div className="w-full h-[6.5px] bg-[#020408] opacity-[0.5]"></div>
                    <div className="w-full h-[10px] bg-[#020408] opacity-[0.65]"></div>
                    <div className="w-full h-[15px] bg-[#020408] opacity-[0.8]"></div>
                    <div className="w-full h-[22px] bg-[#020408] opacity-[0.9]"></div>
                    <div className="w-full h-[32px] bg-[#020408]"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Row: Logo and Nav */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
                    <Link to="/" className="transition-transform hover:scale-[1.02]">
                        <img src={logoWhite} alt="Tabo ERP" className="h-[32px] w-auto opacity-90" />
                    </Link>

                    <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
                        {[
                            { name: 'Trang Chủ', path: '/' },
                            { name: 'Tính Năng', path: '/features' },
                            { name: 'Về Chúng Tôi', path: '/about' },
                            { name: 'Liên Hệ', path: '/contact' }
                        ].map((link, idx) => (
                            <Link
                                key={idx}
                                to={link.path}
                                className="text-[14px] font-medium text-gray-400 hover:text-blue-500 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Bottom Row: Copyright */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[13px] font-medium text-gray-500">
                        &copy; {new Date().getFullYear()} Tabo <span className="text-blue-500 uppercase">ERP</span>. Bảo lưu mọi quyền.
                    </p>
                    <div className="flex gap-6 text-[13px] text-gray-500 font-medium">
                        <span className="cursor-pointer hover:text-blue-500 transition-colors">Chính sách bảo mật</span>
                        <span className="cursor-pointer hover:text-blue-500 transition-colors">Điều khoản dịch vụ</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
