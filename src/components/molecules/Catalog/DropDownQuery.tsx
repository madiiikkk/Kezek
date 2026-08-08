import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Typography from '../../atoms/Typography';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import type { ReactNode } from 'react';

type DropDownQueryProps = {
    title: string;
    children: ReactNode;
    className?: string;
    titleClassName?: string;
    contentClassName?: string;
    gapclassName?: string;
};

export default function DropDownQuery({
    title,
    children,
    className = '',
    titleClassName = '',
    contentClassName = '',
    gapclassName = ''
}: DropDownQueryProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className={className}>
            <div className="w-40 md:w-full rounded-3xl py-2 flex flex-col gap-5 bg-white">
                <div
                    className={
                        gapclassName || 'flex justify-between items-center '
                    }
                >
                    <Typography
                        text={title}
                        className={titleClassName || 'text-lg'}
                    />
                    <Button onClick={toggleOpen}>
                        <Icon
                            icon={ChevronDown}
                            className={`text-[#8c8c8c] transition-transform duration-200 cursor-pointer ${
                                !isOpen ? 'rotate-180' : ''
                            }`}
                        />
                    </Button>
                </div>
                {!isOpen && <div className={contentClassName}>{children}</div>}
            </div>
        </div>
    );
}
