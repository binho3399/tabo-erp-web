import React, { type ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    to?: string; // Tùy chọn truyền đường dẫn để biến Button thành <Link>
    children: React.ReactNode;
}

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
        return (
            <Link to={to} className={combinedClasses} {...(props as any)}>
                {children}
            </Link>
        );
    }

    // Nếu không có, mặc định trả về thẻ button HTML
    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    );
};

export default Button;
