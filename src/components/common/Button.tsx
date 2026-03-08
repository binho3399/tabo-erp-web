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
    const baseStyles = 'inline-flex items-center justify-center font-medium text-base rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

    // 2. Định nghĩa các kiểu màu sắc (Variant)
    const variants = {
        primary: 'bg-[#0070F3] hover:bg-blue-600 text-white',
        secondary: 'bg-slate-900 hover:bg-black text-white',
        outline: 'bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700',
        ghost: 'bg-transparent hover:bg-slate-100 text-slate-700',
    };

    // 3. Định nghĩa 3 kích cỡ chuẩn (Size)
    const sizes = {
        sm: 'px-4 py-2',             // Cỡ nhỏ: Viền ngắn, h-40px
        md: 'px-6 py-2.5',             // Cỡ vừa: Chuẩn mực cho menu, form, h-44px
        lg: 'px-8 py-3.5',   // Cỡ lớn: Dùng cho Hero Banner, CTA to, h-52px
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
