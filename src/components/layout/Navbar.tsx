import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Icon, Button, ThemeToggle, PrefetchLink } from '@/components/ui';
import { useTheme } from '@/context/ThemeContext';
import { siteMetadata, siteRoutes } from '@/config/site';
import type { NavRoutePath } from '@/config/routes';
import { blogRepository } from '@/lib/blog/repository';
import logoBlack from '../../assets/logo-black.png';
import logoWhite from '../../assets/Logo-white.png';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNewsExpanded, setIsNewsExpanded] = useState(false);
    const [isNewsDropdownOpen, setIsNewsDropdownOpen] = useState(false);
    const newsDropdownCloseTimeoutRef = useRef<number | null>(null);
    const { isDark } = useTheme();
    const location = useLocation();
    const navigate = useNavigate();
    const blogCategories = blogRepository.listCategories();
    const nonBlogRoutes = siteRoutes.filter((route) => route.path !== '/blog');
    const isBlogRouteActive = location.pathname === '/blog' || location.pathname.startsWith('/blog/');
    const getCategoryIconName = (slug: string) => {
        switch (slug) {
            case 'kho-van':
                return 'inventory_2';
            case 'tai-chinh':
                return 'account_balance_wallet';
            case 'van-hanh':
                return 'settings_suggest';
            case 'nhan-su':
                return 'groups';
            case 'chuyen-doi-so':
                return 'insights';
            default:
                return 'description';
        }
    };

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
        setIsNewsExpanded(false);
        setIsNewsDropdownOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        return () => {
            if (newsDropdownCloseTimeoutRef.current !== null) {
                window.clearTimeout(newsDropdownCloseTimeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const scrollY = window.scrollY;
        const previousBodyOverflow = document.body.style.overflow;
        const previousBodyPosition = document.body.style.position;
        const previousBodyTop = document.body.style.top;
        const previousBodyLeft = document.body.style.left;
        const previousBodyRight = document.body.style.right;
        const previousBodyWidth = document.body.style.width;
        const previousHtmlOverscroll = document.documentElement.style.overscrollBehavior;

        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.width = '100%';
        document.documentElement.style.overscrollBehavior = 'none';

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousBodyOverflow;
            document.body.style.position = previousBodyPosition;
            document.body.style.top = previousBodyTop;
            document.body.style.left = previousBodyLeft;
            document.body.style.right = previousBodyRight;
            document.body.style.width = previousBodyWidth;
            document.documentElement.style.overscrollBehavior = previousHtmlOverscroll;
            window.scrollTo(0, scrollY);
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

            <nav className={`fixed top-0 left-0 w-full z-50 ${isOpen ? 'bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-sm' : 'transition-colors duration-200'} ${isScrolled && !isOpen ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-[16px] border-b border-slate-200/60 dark:border-slate-800/60 shadow-sm' : 'border-transparent'} ${!isOpen && !isScrolled ? 'bg-transparent' : ''}`}>
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
                            {nonBlogRoutes.map((link) => (
                                <PrefetchLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={handleNavClick(link.path)}
                                    className={`group relative text-[15px] font-medium transition-colors flex items-center py-1 ${
                                        location.pathname === link.path
                                            ? 'text-slate-900 dark:text-white'
                                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                                >
                                    <span>{link.label}</span>
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                                </PrefetchLink>
                            ))}
                            <div
                                className="group relative py-1"
                                onMouseEnter={() => {
                                    if (newsDropdownCloseTimeoutRef.current !== null) {
                                        window.clearTimeout(newsDropdownCloseTimeoutRef.current);
                                    }
                                    setIsNewsDropdownOpen(true);
                                }}
                                onMouseLeave={() => {
                                    newsDropdownCloseTimeoutRef.current = window.setTimeout(() => {
                                        setIsNewsDropdownOpen(false);
                                    }, 160);
                                }}
                                onFocus={() => {
                                    if (newsDropdownCloseTimeoutRef.current !== null) {
                                        window.clearTimeout(newsDropdownCloseTimeoutRef.current);
                                    }
                                    setIsNewsDropdownOpen(true);
                                }}
                                onBlur={(event) => {
                                    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                                        setIsNewsDropdownOpen(false);
                                    }
                                }}
                            >
                                <PrefetchLink
                                    to="/blog"
                                    onClick={handleNavClick('/blog')}
                                    aria-haspopup="menu"
                                    aria-expanded={isNewsDropdownOpen}
                                    aria-controls="desktop-news-menu"
                                    className={`relative flex items-center gap-1 text-[15px] font-medium transition-colors ${isBlogRouteActive ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                                >
                                    <span>Tin tức</span>
                                    <Icon
                                        name={isNewsDropdownOpen ? 'remove' : 'add'}
                                        className="text-base text-blue-600 transition-colors duration-200"
                                        aria-hidden="true"
                                    />
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                                </PrefetchLink>
                                <div
                                    id="desktop-news-menu"
                                    role="menu"
                                    className={`absolute left-1/2 top-full z-30 w-96 -translate-x-1/2 pt-2 transition-all duration-200 ${isNewsDropdownOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
                                >
                                    <div className="rounded-2xl border border-slate-200/70 bg-white/95 p-2 shadow-2xl shadow-slate-900/10 backdrop-blur-md dark:border-slate-700/70 dark:bg-slate-900/95 dark:shadow-black/30">
                                    {blogCategories.map((category) => (
                                        <PrefetchLink
                                            key={category.slug}
                                            to={`/blog/category/${category.slug}`}
                                            role="menuitem"
                                            className="group/item flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-100/80 dark:hover:bg-slate-800/80"
                                        >
                                            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors group-hover/item:bg-blue-50 group-hover/item:text-blue-600 dark:bg-slate-800 dark:text-slate-300 dark:group-hover/item:bg-blue-900/40 dark:group-hover/item:text-blue-300">
                                                <Icon name={getCategoryIconName(category.slug)} className="text-[18px]" aria-hidden="true" />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-sm font-medium text-slate-700 transition-colors group-hover/item:text-slate-900 dark:text-slate-300 dark:group-hover/item:text-white">
                                                    {category.name}
                                                </p>
                                                <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-slate-500 transition-colors group-hover/item:text-slate-600 dark:text-slate-400 dark:group-hover/item:text-slate-300">
                                                    {category.description}
                                                </p>
                                            </div>
                                        </PrefetchLink>
                                    ))}
                                    </div>
                                </div>
                            </div>
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
                        className="lg:hidden fixed inset-x-0 top-[76px] bottom-0 z-50 max-h-[calc(100dvh-76px)] overflow-y-auto overscroll-y-contain touch-pan-y [-webkit-overflow-scrolling:touch] bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-2xl animate-[mobileNavEnter_320ms_cubic-bezier(0.22,1,0.36,1)_forwards]"
                    >
                        <div className="px-2 py-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] space-y-2 min-h-full">
                                <div className="grid grid-cols-1 gap-1">
                                {nonBlogRoutes.map((link, idx) => (
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
                                <button
                                    type="button"
                                    onClick={() => setIsNewsExpanded((current) => !current)}
                                    className="flex w-full items-center justify-start gap-4 rounded-2xl p-2 text-left transition-all duration-200 hover:bg-slate-50 active:bg-slate-100 dark:hover:bg-slate-800 dark:active:bg-slate-700"
                                    aria-expanded={isNewsExpanded}
                                    aria-controls="mobile-news-categories"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 transition-colors dark:bg-slate-800">
                                        <Icon name="menu_book" className="text-xl text-slate-500 dark:text-slate-400" />
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <span className="text-[17px] font-medium text-slate-900 dark:text-slate-100">Tin tức</span>
                                        <span className="translate-y-[-2px] text-[13px] font-light text-slate-500 dark:text-slate-400">
                                            Kiến thức ERP và vận hành
                                        </span>
                                    </div>
                                    <Icon
                                        name={isNewsExpanded ? 'remove' : 'add'}
                                        className="ml-auto text-lg text-blue-600 transition-colors duration-200"
                                        aria-hidden="true"
                                    />
                                </button>
                                <div
                                    id="mobile-news-categories"
                                    className={`overflow-hidden transition-all duration-250 ${isNewsExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="ml-7 mt-1 space-y-1 border-l border-slate-200 pl-5 dark:border-slate-700">
                                        <Button
                                            to="/blog"
                                            variant="ghost"
                                            fullWidth
                                            className="!h-auto !justify-start !rounded-xl !px-3 !py-2 !font-normal text-slate-600 dark:text-slate-300"
                                            onClick={() => {
                                                setIsOpen(false);
                                                setIsNewsExpanded(false);
                                            }}
                                        >
                                            Tất cả bài viết
                                        </Button>
                                        {blogCategories.map((category) => (
                                            <Button
                                                key={category.slug}
                                                to={`/blog/category/${category.slug}`}
                                                variant="ghost"
                                                fullWidth
                                                className="!h-auto !justify-start !rounded-xl !px-3 !py-2 !font-normal text-slate-600 dark:text-slate-300"
                                                onClick={() => {
                                                    setIsOpen(false);
                                                    setIsNewsExpanded(false);
                                                }}
                                            >
                                                {category.name}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
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
