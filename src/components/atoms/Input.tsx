import type { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    type: string;
    placeholder: string;
};

export default function Input({
    type,
    placeholder,
    className,
    ...props
}: InputProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`outline-0 placeholder:font-medium placeholder:text-[#858585] text-[#4F46E5] font-medium w-full ${className || ''}`}
            {...props}
        />
    );
}
