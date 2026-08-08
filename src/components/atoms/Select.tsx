import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, type LucideIcon } from 'lucide-react';
import Icon from './Icon';

export interface SelectOption {
    id: string | number;
    label?: string;
    icon?: LucideIcon;
    city?: string;
    ru?: string;
    eng?: string;
}

interface SelectProps {
    options: SelectOption[];
    value: SelectOption;
    onChange: (option: SelectOption) => void;
    leftIcon?: LucideIcon;
    className?: string;
}

export default function Select({
    options,
    value,
    onChange,
    leftIcon,
    className = 'w-40'
}: SelectProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (option: SelectOption) => {
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className={`relative ${className} `} ref={dropdownRef}>
            <div
                className="flex items-center justify-between p-3 rounded-xl cursor-pointer select-none hover:bg-slate-50 transition-colors"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <div className="flex items-center gap-2">
                    {leftIcon && (
                        <Icon
                            icon={leftIcon}
                            className="text-slate-500 w-4 h-4"
                        />
                    )}
                    <span className="text-slate-900 font-medium text-sm">
                        {value.label}
                    </span>
                </div>

                <Icon
                    icon={ChevronDown}
                    className={`text-slate-500 w-4 h-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                />
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 w-full mt-1 bg-white rounded-md shadow-md z-50 p-1 overflow-hidden">
                    {options.map((option) => {
                        const isSelected = value.id === option.id;

                        return (
                            <div
                                key={option.id}
                                onClick={() => handleSelect(option)}
                                className={`flex items-center justify-between px-2 py-1.5 text-sm cursor-pointer rounded-sm transition-colors duration-150 outline-none
                                    ${
                                        isSelected
                                            ? 'bg-slate-100 text-slate-900 font-medium'
                                            : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                                    }`}
                            >
                                <span>{option.label}</span>

                                {isSelected && (
                                    <Icon
                                        icon={Check}
                                        className="w-4 h-4 text-slate-900"
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
