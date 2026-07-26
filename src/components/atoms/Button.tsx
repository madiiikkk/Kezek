import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

export default function Button({
    children,
    className = '',
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            className={`transition-colors duration-200 ${className}`.trim()}
        >
            {children}
        </button>
    );
}
