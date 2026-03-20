import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../common/Icon';
import Button from '../common/Button';
import logo from '../../assets/logo-black.png';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { name: 'Trang Chủ', path: '/', icon: 'home' },
        { name: 'Bảng giá', path: '/pricing', icon: 'payments' },
        { name: 'Về Chúng Tôi', path: '/about', icon: 'groups' },
        { name: 'Liên Hệ', path: '/contact', icon: 'contact_support' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isOpen ? 'bg-white border-b border-slate-200 shadow-sm' : isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm' : 'bg-transparent border-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-[76px]">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <img src={logo} alt="Tabo ERP Logo" className="h-[40px] md:h-[44px] w-auto object-contain" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="group relative text-base text-slate-500 hover:text-slate-900 font-medium transition-colors flex items-center py-1"
                            >
                                <span>{link.name}</span>
                                {link.name === 'Bảng giá' && (
                                    <Icon name="add" className="ml-1 text-[18px] text-blue-700 opacity-90" />
                                )}
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Button */}
                    <div className="hidden lg:flex items-center">
                        <Button to="/contact" variant="primary" size="md">
                            Liên hệ ngay
                        </Button>
                    </div>

                    <div className="flex items-center lg:hidden">
                        <Button
                            variant="ghost"
                            onClick={toggleMenu}
                            className={`!p-2 !rounded-xl transition-all duration-200 ${isOpen ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'} focus:outline-none`}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <Icon name="close" className="block text-[24px]" aria-hidden="true" />
                            ) : (
                                <Icon name="menu" className="block text-[24px]" aria-hidden="true" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile menu dropdown */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="px-2 py-4 space-y-2">
                        <div className="grid grid-cols-1 gap-1">
                            {navLinks.map((link, idx) => (
                                <Button
                                    key={link.name}
                                    to={link.path}
                                    variant="ghost"
                                    className="flex items-center justify-start gap-4 !p-2 !rounded-2xl transition-all duration-200 hover:bg-slate-50 active:bg-slate-100 group !h-auto !font-normal border-none"
                                    onClick={() => setIsOpen(false)}
                                    style={{ animationDelay: `${idx * 50}ms` }}
                                >
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <Icon name={link.icon} className="text-xl text-slate-500 group-hover:text-blue-600 transition-colors" />
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <span className="text-[17px] font-medium text-slate-900">{link.name}</span>
                                        <span className="text-[13px] text-slate-500 font-light translate-y-[-2px]">
                                            {link.name === 'Trang Chủ' && 'Khám phá thế giới Tabo'}
                                            {link.name === 'Bảng giá' && 'Giải pháp và bảng giá tối ưu'}
                                            {link.name === 'Về Chúng Tôi' && 'Câu chuyện và sứ mệnh'}
                                            {link.name === 'Liên Hệ' && 'Hỗ trợ 24/7 cho doanh nghiệp'}
                                        </span>
                                    </div>
                                    <Icon name="chevron_right" className="ml-auto text-slate-300 group-hover:text-slate-400 text-lg translate-x-1 opacity-0 group-hover:opacity-100 transition-all" />
                                </Button>
                            ))}
                        </div>
                        
                        <div className="px-4 pt-4 pb-2">
                            <Button
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                variant="primary"
                                size="lg"
                                fullWidth
                            >
                                Liên hệ ngay
                            </Button>
                        </div>

                        {/* Social/Footer Mini in Menu */}
                        <div className="flex items-center justify-center gap-4 pt-6 pb-2 border-t border-slate-50">
                            {['facebook', 'linkedin', 'twitter'].map(social => (
                                <Button 
                                    key={social} 
                                    to="#" 
                                    variant="ghost" 
                                    className="!w-10 !h-10 !p-0 !rounded-full bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all"
                                >
                                    <Icon name="public" className="text-[20px]" />
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
