type InputProps = {
    type: string;
    placeholder: string;
    className?: string;
};

export default function Input({ type, placeholder, className }: InputProps) {
    return (
        <input
            type={type}
            className={
                className ||
                'outline-0 placeholder:font-medium placeholder:text-[#858585] text-[#4F46E5] font-medium w-full'
            }
            placeholder={placeholder}
        />
    );
}
