type TypographyProps = {
    text: string | number;
    className?: string;
};

export default function Typography({ text, className }: TypographyProps) {
    return (
        <span className={className || 'text-lg text-[#121212]'}>{text}</span>
    );
}
