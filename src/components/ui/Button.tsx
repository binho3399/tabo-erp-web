import React, { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react';
import PrefetchLink from './PrefetchLink';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    children: React.ReactNode;
}

type ButtonAsButtonProps = ButtonBaseProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        to?: undefined;
    };

type ButtonAsLinkProps = ButtonBaseProps &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
        to: string;
    };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    to,
    children,
    ...props
}) => {
    // 1. Style cốt lõi áp dụng cho mọi nút
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

    // 2. Định nghĩa các kiểu màu sắc (Variant)
    const variants = {
        primary: 'bg-[#0070F3] hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40',
        secondary: 'bg-blue-50 hover:bg-blue-100 text-[#0070F3] dark:bg-blue-900/30 dark:hover:bg-blue-900/50 dark:text-blue-400',
        outline: 'bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 dark:bg-transparent dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800',
        ghost: 'bg-transparent hover:bg-slate-100 text-slate-700 dark:text-slate-300 dark:hover:bg-slate-800',
    };

    // 3. Định nghĩa 3 kích cỡ chuẩn (Size)
    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-2.5 text-base',
        lg: 'px-10 py-4 text-lg',
    };

    const widthClass = fullWidth ? 'w-full' : '';

    const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

    // Nếu có prop "to", render thành react-router-dom Link
    if (to) {
        const linkProps = props as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;
        return (
            <PrefetchLink to={to} className={combinedClasses} {...linkProps}>
                {children}
            </PrefetchLink>
        );
    }

    // Nếu không có, mặc định trả về thẻ button HTML
    const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
        <button className={combinedClasses} {...buttonProps}>
            {children}
        </button>
    );
};

export default Button;
