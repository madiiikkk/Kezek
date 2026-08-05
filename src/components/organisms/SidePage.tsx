import React, { type ReactNode, useEffect, useState } from 'react';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import { X } from 'lucide-react';
import Typography from '../atoms/Typography';

type SidePageProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    maxWidth?: string;
    title?: string | ReactNode;
    description?: string | ReactNode;
};

export default function SidePage({
    isOpen,
    onClose,
    children,
    maxWidth = 'max-w-lg',
    title,
    description
}: SidePageProps) {
    const [shouldRender, setShouldRender] = useState(isOpen);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setIsVisible(true);
                });
            });
        } else {
            setIsVisible(false);
        }
    }, [isOpen]);

    const handleTransitionEnd = () => {
        if (!isOpen) setShouldRender(false);
    };

    if (!shouldRender) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-500 ease-in-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            onTransitionEnd={handleTransitionEnd}
        >
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            <div
                className={`relative w-full ${maxWidth} h-full overflow-y-auto bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-in-out rounded-tl-3xl rounded-bl-3xl ${
                    isVisible ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="sticky top-0 z-10 flex justify-between items-start p-6 bg-white/95 backdrop-blur-md border-b border-gray-100">
                    <div className="flex flex-col pr-4">
                        {title && (
                            <Typography
                                className="text-2xl font-semibold text-slate-900"
                                text={`${title}`}
                            />
                        )}
                        {description && (
                            <Typography
                                className="mt-1 text-sm text-slate-500"
                                text={`${description}`}
                            />
                        )}
                    </div>

                    <Button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-700 transition-colors cursor-pointer shrink-0 mt-1"
                    >
                        <Icon icon={X} />
                    </Button>
                </div>

                <div className="p-6 flex-1">{children}</div>
            </div>
        </div>
    );
}
