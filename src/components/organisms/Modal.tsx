import type { ReactNode } from 'react';
import Icon from '../atoms/Icon';
import { X } from 'lucide-react';
import Button from '../atoms/Button';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    maxWidth?: string;
};

export default function Modal({
    isOpen,
    onClose,
    children,
    maxWidth = 'max-w-3xl'
}: ModalProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <div
                className={`relative w-full ${maxWidth} max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl p-6`}
                onClick={(e) => e.stopPropagation()}
            >
                <Button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                >
                    <Icon icon={X} />
                </Button>
                <div className="mt-2">{children}</div>
            </div>
        </div>
    );
}
