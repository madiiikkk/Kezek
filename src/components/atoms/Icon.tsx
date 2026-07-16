import type { LucideIcon } from 'lucide-react';

type IconProps = {
    icon: LucideIcon;
    className?: string;
    size?: number | string;
};

export default function Icon({
    icon: IconComponent,
    className,
    size
}: IconProps) {
    return (
        <div className="flex justify-center items-center">
            <IconComponent size={size || 24} className={className || ''} />
        </div>
    );
}
