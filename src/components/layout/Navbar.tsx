import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Icon, Button, ThemeToggle, PrefetchLink } from '@/components/ui';
import { useTheme } from '@/context/ThemeContext';
import { siteMetadata, siteRoutes } from '@/config/site';
import type { NavRoutePath } from '@/config/routes';
import logoBlack from '../../assets/logo-black.png';
import logoWhite from '../../assets/Logo-white.png';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { isDark } = useTheme();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (ticking) return;

            ticking = true;
            window.requestAnimationFrame(() => {
                setIsScrolled(window.scrollY > 10);
                ticking = false;
            });
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const closeMenu = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', closeMenu, { passive: true });
        return () => window.removeEventListener('resize', closeMenu);
    }, [isOpen]);

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavClick = (targetPath: NavRoutePath) => (event: React.MouseEvent<HTMLElement>) => {
        const isSamePath = location.pathname === targetPath;
        const isBlogDetailToIndex = targetPath === '/blog' && location.pathname.startsWith('/blog/');

        if (!isSamePath && !isBlogDetailToIndex) {
            return;
        }

        event.preventDefault();
        setIsOpen(false);

        if (isBlogDetailToIndex) {
            void navigate('/blog');
            return;
        }

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isOpen && (
                <button
                    type="button"
                    aria-label="Close menu overlay"
                    className="fixed inset-0 z-40 bg-black/70 lg:hidden animate-[fadeInOverlay_260ms_ease-out_forwards]"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <nav className={`fixed top-0 left-0 w-full z-50 ${isOpen ? 'bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm' : 'transition-colors duration-200'} ${isScrolled ? 'bg-white/95 dark:bg-slate-900/95 lg:bg-white/80 lg:dark:bg-slate-900/80 lg:backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 shadow-sm' : 'border-transparent'} ${!isOpen && !isScrolled ? 'bg-transparent' : ''}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center h-[76px]">
                        {/* Logo Section - Aligned Left */}
                        <div className="flex-1 flex items-center">
                            <PrefetchLink to="/" className="flex-shrink-0 flex items-center" aria-label={siteMetadata.name}>
                                <img
                                    src={isDark ? logoWhite : logoBlack}
                                    alt={`${siteMetadata.name} Logo`}
                                    width="131"
                                    height="44"
                                    decoding="async"
                                    fetchPriority="high"
                                    className="h-[40px] md:h-[44px] w-auto object-contain transition-all duration-500"
                                />
                            </PrefetchLink>
                        </div>

                        {/* Desktop Menu Section - Perfectly Centered */}
                        <div className="hidden lg:flex lg:items-center lg:space-x-10">
                            {siteRoutes.map((link) => (
                                <PrefetchLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={handleNavClick(link.path)}
                                    className="group relative text-[15px] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium transition-colors flex items-center py-1"
                                >
                                    <span>{link.label}</span>
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                                </PrefetchLink>
                            ))}
                        </div>

                        {/* Desktop Actions & Mobile Toggle Section - Aligned Right */}
                        <div className="flex-1 flex items-center justify-end gap-6">
                            {/* Desktop Only Actions */}
                            <div className="hidden lg:flex items-center gap-6">
                                <ThemeToggle />
                                <Button to="/contact" variant="primary" size="md" className="shadow-lg shadow-blue-500/20">
                                    Liên hệ ngay
                                </Button>
                            </div>

                            {/* Mobile Side Controls */}
                            <div className="flex items-center gap-3 lg:hidden">
                                <ThemeToggle />
                                <Button
                                    variant="ghost"
                                    onClick={toggleMenu}
                                    className={`!p-2 !rounded-xl transition-all duration-200 ${isOpen ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'} focus:outline-none`}
                                    aria-expanded={isOpen}
                                    aria-controls="mobile-nav-panel"
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
                </div>

                {/* Mobile menu dropdown */}
                {isOpen && (
                    <div
                        id="mobile-nav-panel"
                        className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden animate-[mobileNavEnter_320ms_cubic-bezier(0.22,1,0.36,1)_forwards]"
                    >
                        <div className="px-2 py-4 space-y-2">
                                <div className="grid grid-cols-1 gap-1">
                                {siteRoutes.map((link, idx) => (
                                    <Button
                                        key={link.path}
                                        to={link.path}
                                        variant="ghost"
                                        className="flex items-center justify-start gap-4 !p-2 !rounded-2xl transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-800 active:bg-slate-100 dark:active:bg-slate-700 group !h-auto !font-normal border-none"
                                        onClick={handleNavClick(link.path)}
                                        style={{ animationDelay: `${idx * 50}ms` }}
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                                            <Icon name={link.navIcon} className="text-xl text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                                        </div>
                                        <div className="flex flex-col text-left">
                                            <span className="text-[17px] font-medium text-slate-900 dark:text-slate-100">{link.label}</span>
                                            <span className="text-[13px] text-slate-500 dark:text-slate-400 font-light translate-y-[-2px]">
                                                {link.path === '/' && 'Khám phá giải pháp Tabo ERP'}
                                                {link.path === '/pricing' && 'Giải pháp và bảng giá tối ưu'}
                                                {link.path === '/about' && 'Câu chuyện và sứ mệnh'}
                                                {link.path === '/contact' && 'Hỗ trợ 24/7 cho doanh nghiệp'}
                                                {link.path === '/blog' && 'Kiến thức ERP và vận hành'}
                                            </span>
                                        </div>
                                        <Icon name="chevron_right" className="ml-auto text-slate-300 dark:text-slate-600 group-hover:text-slate-400 dark:group-hover:text-slate-500 text-lg translate-x-1 opacity-0 group-hover:opacity-100 transition-all" />
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
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
