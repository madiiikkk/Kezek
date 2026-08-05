import React, { useEffect, useRef } from 'react';

interface PopoverProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Popover({ isOpen, onClose, children }: PopoverProps) {
    const popoverRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                popoverRef.current &&
                !popoverRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            ref={popoverRef}
            className="absolute right-0 bottom-[calc(100%+8px)] z-50 w-[240px] p-4 bg-[#4F46E5] border border-gray-200 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] flex flex-col gap-3"
        >
            <div className="absolute -bottom-1.5 right-4 w-3 h-3 bg-[#4F46E5] border-b border-r border-gray-200 rotate-45"></div>

            <div className="relative z-10">{children}</div>
        </div>
    );
}
