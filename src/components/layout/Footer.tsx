import React from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../../assets/Logo-white.png';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#020408] text-gray-500 py-16 relative z-20">
            {/* Background Glow Container (Safe overflow) */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-full bg-blue-900/10 blur-[100px]"></div>

                {/* Large Background Text Watermark */}
                <div className="absolute inset-x-0 bottom-0 top-0 flex items-center justify-center pointer-events-none select-none overflow-visible">
                    <div className="max-w-[1216px] w-full mx-auto h-full flex items-center justify-between opacity-100 bg-clip-text text-transparent bg-gradient-to-b from-white/10 to-transparent uppercase font-bold pointer-events-none overflow-visible">
                        {/* Left Group: TABO */}
                        <div className="flex gap-[0.4em] lg:gap-[2.5em] overflow-visible">
                            <span className="text-[clamp(1.5rem,15vw,200px)] leading-none -ml-[0.14em]">T</span>
                            <span className="text-[clamp(1.5rem,15vw,200px)] leading-none">A</span>
                            <span className="text-[clamp(1.5rem,15vw,200px)] leading-none">B</span>
                            <span className="text-[clamp(1.5rem,15vw,200px)] leading-none">O</span>
                        </div>
                        
                        {/* Right Group: ERP */}
                        <div className="flex gap-[0.4em] lg:gap-[2.5em] overflow-visible">
                            <span className="text-[clamp(1.5rem,15vw,200px)] leading-none">E</span>
                            <span className="text-[clamp(1.5rem,15vw,200px)] leading-none">R</span>
                            <span className="text-[clamp(1.5rem,15vw,200px)] leading-none -mr-[0.05em]">P</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Light Beam Effect - Moved slightly up with Soft Pulse Animation */}
            <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-40 animate-soft-pulse"></div>
            <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent z-40 mt-[0.5px] animate-soft-pulse" style={{ animationDelay: '1s' }}></div>

            {/* Decorative Fading Lines - 6 tiers stacking towards footer */}
            <div className="absolute -top-[80px] left-0 w-full pointer-events-none hidden md:block select-none z-30">
                <div className="flex flex-col items-center gap-1.5">
                    <div className="w-full h-[1.5px] bg-[#020408] opacity-[0.15]"></div>
                    <div className="w-full h-[4px] bg-[#020408] opacity-[0.35]"></div>
                    <div className="w-full h-[10px] bg-[#020408] opacity-[0.65]"></div>
                    <div className="w-full h-[15px] bg-[#020408] opacity-[0.8]"></div>
                    <div className="w-full h-[24px] bg-[#020408] opacity-[0.9]"></div>
                    <div className="w-full h-[32px] bg-[#020408]"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Row: Logo and Nav */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
                    <Link to="/" className="transition-transform hover:scale-[1.02]">
                        <img src={logoWhite} alt="Tabo ERP" className="h-[44px] w-auto opacity-90 transition-transform hover:scale-[1.02]" />
                    </Link>

                    <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
                        {[
                            { name: 'Trang Chủ', path: '/' },
                            { name: 'Bảng giá', path: '/pricing' },
                            { name: 'Về Chúng Tôi', path: '/about' },
                            { name: 'Liên Hệ', path: '/contact' }
                        ].map((link, idx) => (
                            <Link
                                key={idx}
                                to={link.path}
                                className="group relative text-[16px] font-medium text-gray-400 hover:text-blue-500 transition-colors py-1"
                            >
                                <span>{link.name}</span>
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Bottom Row: Copyright */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[16px] font-medium text-gray-500">
                        &copy; {new Date().getFullYear()} Tabo <span className="text-blue-500 uppercase">ERP</span>. Bảo lưu mọi quyền.
                    </p>
                    <div className="flex gap-6 text-[16px] text-gray-500 font-medium">
                        <span className="group relative cursor-pointer hover:text-blue-500 transition-colors py-1">
                            <span>Chính sách bảo mật</span>
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </span>
                        <span className="group relative cursor-pointer hover:text-blue-500 transition-colors py-1">
                            <span>Điều khoản dịch vụ</span>
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
