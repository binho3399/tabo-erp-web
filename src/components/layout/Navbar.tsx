import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../common/Icon';
import logo from '../../assets/logo.png';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

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
        <nav className="absolute w-full top-0 z-50 bg-transparent text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 border-b border-white/10">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <img src={logo} alt="Tabo ERP Logo" className="h-[40px] w-auto object-contain" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-sm text-slate-200 hover:text-white font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link
                            to="/contact"
                            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded-sm font-semibold text-sm inline-flex items-center transition-all group"
                        >
                            Liên Hệ Ngay
                            <Icon name="arrow_forward" className="ml-2 text-[16px] transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
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
                <div className="lg:hidden absolute top-20 left-0 w-full bg-slate-900 border-b border-white/10 shadow-xl">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="block px-3 py-3 text-base text-slate-200 hover:text-white hover:bg-white/5 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="px-3 pt-4">
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="w-full bg-blue-700 hover:bg-blue-800 text-white px-4 py-3 rounded-sm font-semibold inline-flex items-center justify-center transition-all"
                            >
                                Liên Hệ Ngay
                                <Icon name="arrow_forward" className="ml-2 text-[16px]" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
