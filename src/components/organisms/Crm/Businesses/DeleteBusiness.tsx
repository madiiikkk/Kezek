import { useState } from 'react';
import { Trash } from 'lucide-react';
import Button from '../../../atoms/Button';
import Icon from '../../../atoms/Icon';
import Typography from '../../../atoms/Typography';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCardBusinesses } from '../../../../api/businesses';
import Popover from '../../Popover';

interface DeleteBusinessProps {
    businessId: number;
}

export default function DeleteBusiness({ businessId }: DeleteBusinessProps) {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const queryClient = useQueryClient();

    const deleteMutation = useMutation({
        mutationFn: (id: number) => deleteCardBusinesses(id),
        onSuccess: () => {
            console.log(`Бизнес ${businessId} удален нахуй`);
            queryClient.invalidateQueries({ queryKey: ['businesses'] });
            setIsPopoverOpen(false);
        },
        onError: (error) => {
            console.error('Ошибка при удалении бизнеса:', error);
        }
    });

    const handleConfirmDelete = () => {
        deleteMutation.mutate(businessId);
    };

    return (
        <div className="relative">
            <Button
                onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                disabled={deleteMutation.isPending}
                className={`w-[46px] h-[46px] flex items-center justify-center bg-[#fff0f0] hover:bg-red-100 text-red-500 rounded-xl transition-colors shrink-0 cursor-pointer ${
                    deleteMutation.isPending
                        ? 'opacity-50 cursor-not-allowed'
                        : ''
                }`}
            >
                <Icon icon={Trash} className="w-5 h-5" />
            </Button>

            <Popover
                isOpen={isPopoverOpen}
                onClose={() => setIsPopoverOpen(false)}
            >
                <div className="flex flex-col bg-[#]">
                    <Typography
                        text="Удалить бизнес?"
                        className="text-sm font-bold text-white"
                    />
                    <Typography
                        text="Это действие необратимо. Все данные будут потеряны."
                        className="text-xs text-white leading-tight"
                    />
                </div>

                <div className="flex justify-end gap-2 mt-2">
                    <Button
                        onClick={() => setIsPopoverOpen(false)}
                        className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-medium transition-colors"
                    >
                        Отмена
                    </Button>
                    <Button
                        onClick={handleConfirmDelete}
                        disabled={deleteMutation.isPending}
                        className="px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg text-xs font-medium transition-colors disabled:opacity-50"
                    >
                        {deleteMutation.isPending
                            ? 'Удаление...'
                            : 'Да, удалить'}
                    </Button>
                </div>
            </Popover>
        </div>
    );
}
