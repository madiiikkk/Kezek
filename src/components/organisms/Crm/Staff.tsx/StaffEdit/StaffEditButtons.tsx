import { CalendarClock, FileText, UserX, Trash2 } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom'; // <-- Импортируем хуки роутера
import Button from '../../../../atoms/Button';
import Icon from '../../../../atoms/Icon';
import Typography from '../../../../atoms/Typography';
import { deleteMasters } from '../../../../../api/staff';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function StaffEditButtons() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const deleteMutation = useMutation({
        mutationFn: deleteMasters,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['masters'] });
            navigate('/crm/staff');
        },
        onError: (error) => {
            console.error('Ошибка при удалении мастера:', error);
            alert('Произошла ошибка при удалении.');
        }
    });

    const handleDelete = () => {
        if (!id) return;

        const isConfirmed = window.confirm(
            'Вы уверены, что хотите удалить этого сотрудника?'
        );
        if (isConfirmed) {
            deleteMutation.mutate(Number(id));
        }
    };

    return (
        <div className="w-full bg-white rounded-3xl border border-[#c7c4d8] p-6 sm:p-8 flex flex-col">
            <Typography
                text="БЫСТРЫЕ ДЕЙСТВИЯ"
                className="text-[13px] font-bold text-[#475569] uppercase tracking-wider mb-6"
            />

            <div className="flex flex-col gap-5">
                <Button className="flex items-center gap-4 w-full justify-start bg-transparent hover:bg-slate-50 p-2 -ml-2 rounded-xl transition-colors border-none shadow-none cursor-pointer">
                    <Icon
                        icon={CalendarClock}
                        className="text-[#3B28CC] w-[22px] h-[22px]"
                    />
                    <Typography
                        text="Настроить расписание"
                        className="text-[#0F172A] font-medium text-[15px]"
                    />
                </Button>

                <Button className="flex items-center gap-4 w-full justify-start bg-transparent hover:bg-slate-50 p-2 -ml-2 rounded-xl transition-colors border-none shadow-none cursor-pointer">
                    <Icon
                        icon={FileText}
                        className="text-[#3B28CC] w-[22px] h-[22px]"
                    />
                    <Typography
                        text="Посмотреть записи"
                        className="text-[#0F172A] font-medium text-[15px]"
                    />
                </Button>

                <Button className="flex items-center gap-4 w-full justify-start bg-transparent hover:bg-slate-50 p-2 -ml-2 rounded-xl transition-colors border-none shadow-none cursor-pointer">
                    <Icon
                        icon={UserX}
                        className="text-[#1E293B] w-[22px] h-[22px]"
                    />
                    <Typography
                        text="Временно отключить"
                        className="text-[#0F172A] font-medium text-[15px]"
                    />
                </Button>
            </div>

            <div className="w-full border-t border-[#E2E8F0] my-6"></div>

            <Button
                className="flex items-center gap-4 w-full justify-start bg-transparent hover:bg-red-50 p-2 -ml-2 rounded-xl transition-colors border-none shadow-none group cursor-pointer"
                onClick={handleDelete}
                disabled={deleteMutation.isPending}
            >
                <Icon
                    icon={Trash2}
                    className="text-[#DC2626] w-[22px] h-[22px] group-hover:text-red-700 transition-colors"
                />
                <Typography
                    text={
                        deleteMutation.isPending
                            ? 'Удаление...'
                            : 'Удалить мастера'
                    }
                    className="text-[#DC2626] font-medium text-[15px] group-hover:text-red-700 transition-colors"
                />
            </Button>
        </div>
    );
}
