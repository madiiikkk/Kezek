import { CalendarDays, Pencil, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Button from '../../../atoms/Button';
import Icon from '../../../atoms/Icon';
import Typography from '../../../atoms/Typography';
import { deleteMasters } from '../../../../api/staff';

export type Staff = {
    id: number;
    first_name: string;
    last_name: string;
    position: string;
    is_active: boolean;
    photo?: string;
    active_services_count?: number;
};

export default function StaffTable({ staffs }: { staffs: Staff[] }) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const deleteMutation = useMutation({
        mutationFn: deleteMasters,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['masters'] });
        },
        onError: (error) => {
            console.error('Ошибка при удалении мастера:', error);
            alert('Произошла ошибка при удалении.');
        }
    });

    const handleDelete = (id: number) => {
        const isConfirmed = window.confirm(
            'Вы уверены, что хотите удалить этого сотрудника?'
        );
        if (isConfirmed) {
            deleteMutation.mutate(id);
        }
    };

    return (
        <div className="flex flex-col overflow-hidden -mx-5 border-t border-[#c7c4d8] bg-[#f8f9ff]">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                        <tr className="border-b border-[#c7c4d8]">
                            <th className="px-6 py-4 text-xs font-semibold text-[#444444] uppercase tracking-wider">
                                Сотрудник
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-[#444444] uppercase tracking-wider">
                                Должность
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-[#444444] uppercase tracking-wider">
                                Статус
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-[#444444] uppercase tracking-wider">
                                Услуги
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-[#444444] uppercase tracking-wider text-right">
                                Действия
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {staffs && staffs.length > 0 ? (
                            staffs.map((staff) => (
                                <tr
                                    key={staff.id}
                                    className="hover:bg-[#f8f9ff] transition-colors"
                                >
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-11 h-11 shrink-0 bg-indigo-50 flex items-center justify-center rounded-full">
                                                {staff.photo ? (
                                                    <img
                                                        src={staff.photo}
                                                        alt={staff.first_name}
                                                        className="w-full h-full rounded-full object-cover border-2 border-indigo-50/50"
                                                    />
                                                ) : (
                                                    <span className="text-indigo-600 font-bold text-lg uppercase">
                                                        {staff.first_name?.charAt(
                                                            0
                                                        ) || '?'}
                                                    </span>
                                                )}

                                                <span
                                                    className={`absolute bottom-0 right-0 w-3.5 h-3.5 border-2 border-white rounded-full ${
                                                        staff.is_active
                                                            ? 'bg-[#10b981]'
                                                            : 'bg-gray-400'
                                                    }`}
                                                ></span>
                                            </div>

                                            <Typography
                                                className="font-semibold text-slate-900 text-base"
                                                text={`${staff.first_name} ${staff.last_name || ''}`.trim()}
                                            />
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
                                        {staff.position || '—'}
                                    </td>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                                        {staff.is_active ? (
                                            <span className="text-[#10b981] font-medium">
                                                Активен
                                            </span>
                                        ) : (
                                            <span className="text-gray-500 font-medium">
                                                Неактивен
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex items-center justify-center px-3 py-1 bg-[#eeebff] text-[#4F46E5] font-semibold text-sm rounded-full">
                                            {staff.active_services_count || '0'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
                                        <div className="flex justify-end items-center gap-5 text-gray-700">
                                            <Button
                                                className="cursor-pointer text-slate-500 hover:text-indigo-600 transition-colors"
                                                onClick={() =>
                                                    navigate(
                                                        `/crm/staff/edit/${staff.id}`
                                                    )
                                                }
                                            >
                                                <Icon icon={Pencil} size={20} />
                                            </Button>

                                            <Button
                                                className="cursor-pointer text-slate-500 hover:text-red-500 transition-colors disabled:opacity-50"
                                                onClick={() =>
                                                    handleDelete(staff.id)
                                                }
                                                disabled={
                                                    deleteMutation.isPending
                                                }
                                            >
                                                <Icon icon={Trash2} size={20} />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="px-6 py-10 text-center text-gray-500"
                                >
                                    Сотрудники не найдены. Добавьте первого
                                    мастера!
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
