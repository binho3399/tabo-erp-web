import React from 'react';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** 
     * The name of the Google Material Symbol 
     * Find names at: https://fonts.google.com/icons
     */
    name: string;
    /**
     * Set to true to use filled icon variant instead of outline
     */
    filled?: boolean;
}

const Icon: React.FC<IconProps> = ({
    name,
    filled = false,
    className = "",
    ...props
}) => {
    return (
        <span
            className={`material-symbols-outlined select-none ${className}`}
            style={{
                fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0",
                ...props.style
            }}
            {...props}
        >
            {name}
        </span>
    );
};

export default Icon;
