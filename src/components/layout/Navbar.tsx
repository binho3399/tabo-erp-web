import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { siteMetadata, siteRoutes } from '@/config/site'
import type { NavRoutePath } from '@/config/routes'
import { useTheme } from '@/context/ThemeContext'
import { blogRepository } from '@/lib/blog/repository'
import { Button, Icon, PrefetchLink, ThemeToggle } from '@/components/ui'

import { DesktopNavigation } from './navbar/DesktopNavigation'
import { MobileNavigation } from './navbar/MobileNavigation'

import logoWhite from '../../assets/Logo-white.png'
import logoBlack from '../../assets/logo-black.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isNewsExpanded, setIsNewsExpanded] = useState(false)
    const [isNewsDropdownOpen, setIsNewsDropdownOpen] = useState(false)
    const newsDropdownCloseTimeoutRef = useRef<number | null>(null)
    const { isDark } = useTheme()
    const location = useLocation()
    const navigate = useNavigate()
    const pathname = location.pathname

    const blogCategories = useMemo(() => blogRepository.listCategories(), [])
    const nonBlogRoutes = useMemo(() => siteRoutes.filter((route) => route.path !== '/blog'), [])
    const isBlogRouteActive = pathname === '/blog' || pathname.startsWith('/blog/')

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (ticking) return;

            ticking = true
            window.requestAnimationFrame(() => {
                setIsScrolled(window.scrollY > 10)
                ticking = false
            })
        }

        handleScroll()

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        if (!isOpen) {
            return
        }

        const closeMenu = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false)
            }
        }

        window.addEventListener('resize', closeMenu, { passive: true })
        return () => window.removeEventListener('resize', closeMenu)
    }, [isOpen])

    useEffect(() => {
        setIsOpen(false)
        setIsNewsExpanded(false)
        setIsNewsDropdownOpen(false)
    }, [pathname])

    useEffect(() => {
        return () => {
            if (newsDropdownCloseTimeoutRef.current !== null) {
                window.clearTimeout(newsDropdownCloseTimeoutRef.current)
            }
        }
    }, [])

    useEffect(() => {
        if (!isOpen) {
            return
        }

        const scrollY = window.scrollY;
        const previousBodyOverflow = document.body.style.overflow;
        const previousBodyPosition = document.body.style.position;
        const previousBodyTop = document.body.style.top;
        const previousBodyLeft = document.body.style.left;
        const previousBodyRight = document.body.style.right;
        const previousBodyWidth = document.body.style.width;
        const previousHtmlOverscroll = document.documentElement.style.overscrollBehavior;

        document.body.style.overflow = 'hidden'
        document.body.style.position = 'fixed'
        document.body.style.top = `-${scrollY}px`
        document.body.style.left = '0'
        document.body.style.right = '0'
        document.body.style.width = '100%'
        document.documentElement.style.overscrollBehavior = 'none'

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false)
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = previousBodyOverflow
            document.body.style.position = previousBodyPosition
            document.body.style.top = previousBodyTop
            document.body.style.left = previousBodyLeft
            document.body.style.right = previousBodyRight
            document.body.style.width = previousBodyWidth
            document.documentElement.style.overscrollBehavior = previousHtmlOverscroll
            window.scrollTo(0, scrollY)
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const clearNewsCloseTimeout = () => {
        if (newsDropdownCloseTimeoutRef.current !== null) {
            window.clearTimeout(newsDropdownCloseTimeoutRef.current)
            newsDropdownCloseTimeoutRef.current = null
        }
    }

    const handleOpenNewsDropdown = () => {
        clearNewsCloseTimeout()
        setIsNewsDropdownOpen(true)
    }

    const handleScheduleCloseNewsDropdown = () => {
        clearNewsCloseTimeout()
        newsDropdownCloseTimeoutRef.current = window.setTimeout(() => {
            setIsNewsDropdownOpen(false)
        }, 160)
    }

    const handleCloseNewsDropdown = () => {
        clearNewsCloseTimeout()
        setIsNewsDropdownOpen(false)
    }

    const closeMobileMenus = () => {
        setIsOpen(false)
        setIsNewsExpanded(false)
    }

    const handleNavClick = (targetPath: NavRoutePath) => (event: React.MouseEvent<HTMLElement>) => {
        const isSamePath = pathname === targetPath
        const isBlogDetailToIndex = targetPath === '/blog' && pathname.startsWith('/blog/')

        if (!isSamePath && !isBlogDetailToIndex) {
            return
        }

        event.preventDefault()
        closeMobileMenus()

        if (isBlogDetailToIndex) {
            void navigate('/blog')
            return
        }

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }

    return (
        <>
            {isOpen && (
                <button
                    type="button"
                    aria-label="Close menu overlay"
                    className="fixed inset-0 z-40 bg-black/70 lg:hidden animate-[fadeInOverlay_260ms_ease-out_forwards]"
                    onClick={closeMobileMenus}
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

                        <DesktopNavigation
                            blogCategories={blogCategories}
                            nonBlogRoutes={nonBlogRoutes}
                            isBlogRouteActive={isBlogRouteActive}
                            pathname={pathname}
                            onNavClick={handleNavClick}
                            isNewsDropdownOpen={isNewsDropdownOpen}
                            onOpenNewsDropdown={handleOpenNewsDropdown}
                            onScheduleCloseNewsDropdown={handleScheduleCloseNewsDropdown}
                            onCloseNewsDropdown={handleCloseNewsDropdown}
                        />

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

                <MobileNavigation
                    blogCategories={blogCategories}
                    nonBlogRoutes={nonBlogRoutes}
                    isBlogRouteActive={isBlogRouteActive}
                    pathname={pathname}
                    isOpen={isOpen}
                    isNewsExpanded={isNewsExpanded}
                    onNavClick={handleNavClick}
                    onToggleNewsExpanded={() => setIsNewsExpanded((current) => !current)}
                    onCloseMenu={closeMobileMenus}
                />
            </nav>
        </>
    )
}

export default Navbar
