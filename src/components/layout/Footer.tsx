import React from 'react';
import { PrefetchLink } from '@/components/ui';
import { legalLinks, siteMetadata, siteRoutes } from '@/config/site';
import logoWhite from '../../assets/Logo-white.png';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#020408] dark:bg-slate-950 text-gray-500 pt-16 pb-6 md:py-16 relative z-20 transition-colors duration-500">
            {/* Background Glow Container (Safe overflow) */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 dark:bg-blue-500/5 blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-full bg-blue-900/10 dark:bg-blue-900/5 blur-[100px]"></div>

                {/* Large Background Text Watermark */}
                <div className="absolute inset-x-0 bottom-0 top-0 flex items-center justify-center pointer-events-none select-none overflow-visible uppercase font-bold">
                    <div className="max-w-[1216px] w-full mx-auto h-full flex flex-col lg:flex-row items-start lg:items-center justify-end lg:justify-between px-4 lg:px-0 opacity-100 bg-clip-text text-transparent bg-gradient-to-b from-white/10 dark:from-white/5 to-transparent pointer-events-none overflow-visible">
                        {/* Left Group: TABO */}
                        <div className="flex w-full lg:w-auto justify-start gap-4 lg:gap-[2.5em] overflow-visible">
                            <span className="text-[clamp(2.5rem,32vw,200px)] leading-none -ml-[0.14em]">T</span>
                            <span className="text-[clamp(2.5rem,32vw,200px)] leading-none">A</span>
                            <span className="text-[clamp(2.5rem,32vw,200px)] leading-none">B</span>
                            <span className="text-[clamp(2.5rem,32vw,200px)] leading-none">O</span>
                        </div>
                        
                        {/* Right Group: ERP */}
                        <div className="flex w-full lg:w-auto justify-start gap-4 lg:gap-[2.5em] overflow-visible">
                            <span className="text-[clamp(2.5rem,32vw,200px)] leading-none">E</span>
                            <span className="text-[clamp(2.5rem,32vw,200px)] leading-none">R</span>
                            <span className="text-[clamp(2.5rem,32vw,200px)] leading-none -mr-[0.05em]">P</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Light Beam Effect - Moved slightly up with Soft Pulse Animation */}
            <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-40 animate-soft-pulse"></div>
            <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent z-40 mt-[0.5px] animate-soft-pulse" style={{ animationDelay: '1s' }}></div>

            {/* Decorative Fading Lines - 6 tiers stacking towards footer */}
            <div className="absolute -top-[40px] md:-top-[80px] left-0 w-full pointer-events-none select-none z-30">
                <div className="flex flex-col items-center gap-1.5 overflow-hidden">
                    <div className="w-full h-[1.5px] bg-[#020408] dark:bg-slate-950 opacity-[0.15]"></div>
                    <div className="w-full h-[4px] bg-[#020408] dark:bg-slate-950 opacity-[0.35]"></div>
                    <div className="w-full h-[10px] bg-[#020408] dark:bg-slate-950 opacity-[0.65]"></div>
                    <div className="w-full h-[15px] bg-[#020408] dark:bg-slate-950 opacity-[0.8]"></div>
                    <div className="w-full h-[24px] bg-[#020408] dark:bg-slate-950 opacity-[0.9]"></div>
                    <div className="w-full h-[32px] bg-[#020408] dark:bg-slate-950"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Row: Logo and Nav */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
                    <PrefetchLink to="/" className="transition-transform hover:scale-[1.02]">
                        <img
                            src={logoWhite}
                            alt={siteMetadata.name}
                            width="131"
                            height="44"
                            loading="lazy"
                            decoding="async"
                            className="h-[44px] w-auto opacity-90 transition-transform hover:scale-[1.02]"
                        />
                    </PrefetchLink>

                    <nav className="grid grid-cols-2 w-full md:w-auto md:flex md:flex-row justify-start md:justify-end gap-4 md:gap-x-8 md:gap-y-4">
                        {siteRoutes.map((link) => (
                            <PrefetchLink
                                key={link.path}
                                to={link.path}
                                className="group relative text-[16px] font-medium text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors py-1"
                            >
                                <span>{link.label}</span>
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                            </PrefetchLink>
                        ))}
                    </nav>
                </div>

                {/* Bottom Row: Copyright */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <p className="text-[16px] font-medium text-gray-500 dark:text-gray-400">
                        &copy; {new Date().getFullYear()} {siteMetadata.shortName} <span className="text-blue-500 dark:text-blue-400 uppercase">ERP</span>. Bao luu moi quyen.
                    </p>
                    <div className="grid grid-cols-2 w-full md:w-auto md:flex md:flex-row gap-4 md:gap-6 text-[16px] text-gray-500 dark:text-gray-400 font-medium">
                        {legalLinks.map((link) => (
                            <a key={link.label} href={link.href} className="group relative cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors py-1">
                                <span>{link.label}</span>
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
