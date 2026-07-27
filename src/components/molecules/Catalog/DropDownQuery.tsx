import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Typography from '../../atoms/Typography';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import type { ReactNode } from 'react';

type DropDownQueryProps = {
    title: string;
    children: ReactNode;
};

export default function DropDownQuery({ title, children }: DropDownQueryProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div>
            <div className="w-40 md:w-full rounded-3xl py-2 flex flex-col gap-5 bg-white">
                <div className="flex justify-between items-center">
                    <Typography text={title} className="text-lg" />
                    <Button onClick={toggleOpen}>
                        <Icon
                            icon={ChevronDown}
                            className={`text-[#8c8c8c] transition-transform duration-200 cursor-pointer ${
                                !isOpen ? 'rotate-180' : ''
                            }`}
                        />
                    </Button>
                </div>
                {!isOpen && <div>{children}</div>}
            </div>
        </div>
    );
}
