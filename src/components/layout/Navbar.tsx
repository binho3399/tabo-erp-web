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
        { name: 'Trang Chủ', path: '/' },
        { name: 'Tính Năng', path: '/features' },
        { name: 'Về Chúng Tôi', path: '/about' },
        { name: 'Liên Hệ', path: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm' : 'bg-transparent border-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-[72px]">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <img src={logo} alt="Tabo ERP Logo" className="h-[32px] w-auto object-contain" />
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
                                {link.name === 'Tính Năng' && (
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

                    {/* Mobile menu button */}
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <Icon name="close" className="block text-[24px]" aria-hidden="true" />
                            ) : (
                                <Icon name="menu" className="block text-[24px]" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu dropdown */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl overflow-hidden">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="block px-3 py-3 text-base text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="px-3 pt-4">
                            <Button
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                variant="primary"
                                size="md"
                                fullWidth
                            >
                                Liên hệ ngay
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
