import React, { useState, useEffect } from 'react';
import Button from '../../../atoms/Button';
import Typography from '../../../atoms/Typography';
import Icon from '../../../atoms/Icon';
import { CircleAlert, Pencil } from 'lucide-react';
import SidePage from '../../../organisms/SidePage';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
    editService,
    putStaffToService,
    getAssignedStaffForService
} from '../../../../api/services';
import Input from '../../../atoms/Input';
import { useBusiness } from '../../../../context/BusinessContext';
import SpecialistsList from './SpecialistsList';

interface EditServiceProps {
    service: any;
}

export default function EditService({ service }: EditServiceProps) {
    const [isOpen, setIsOpen] = useState(false);
    const queryClient = useQueryClient();
    const { selectedBusiness } = useBusiness();

    const [name, setName] = useState(service.name || '');
    const [description, setDescription] = useState(service.description || '');
    const [price, setPrice] = useState(service.price ?? '');
    const [duration, setDuration] = useState(service.duration_minutes ?? 0);
    const [bufferBefore, setBufferBefore] = useState(
        service.buffer_before_minutes ?? 0
    );
    const [bufferAfter, setBufferAfter] = useState(
        service.buffer_after_minutes ?? 0
    );
    const [isActive, setIsActive] = useState(service.is_active ?? true);

    const [selectedStaffIds, setSelectedStaffIds] = useState<number[]>(
        service.staff_ids || []
    );

    const { data: assignedStaffData, isFetching: isAssignedLoading } = useQuery(
        {
            queryKey: ['assignedStaff', service.id],
            queryFn: () => getAssignedStaffForService(service.id),
            enabled: isOpen
        }
    );

    useEffect(() => {
        if (assignedStaffData?.data) {
            const ids = assignedStaffData.data.map((staff: any) => staff.id);
            setSelectedStaffIds(ids);
        }
    }, [assignedStaffData]);

    const editMutation = useMutation({
        mutationFn: () =>
            editService(
                service.id,
                name,
                description,
                Number(price),
                Number(duration),
                Number(bufferBefore),
                Number(bufferAfter),
                isActive
            ),
        onSuccess: async () => {
            try {
                await putStaffToService(service.id, selectedStaffIds);
            } catch (error) {
                console.error('Ошибка при обновлении мастеров:', error);
            }

            queryClient.invalidateQueries({ queryKey: ['services'] });
            setIsOpen(false);
        },
        onError: (error) => {
            console.error('Ошибка при редактировании:', error);
            alert('Произошла ошибка при сохранении изменений.');
        }
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        editMutation.mutate();
    };

    if (!selectedBusiness) {
        return (
            <div className="">
                Пожалуйста, выберите бизнес из списка сверху...
            </div>
        );
    }

    const businessesId = Number(selectedBusiness.id);

    return (
        <>
            <Button
                className="cursor-pointer text-slate-500 hover:text-indigo-600 transition-colors"
                onClick={() => setIsOpen(true)}
            >
                <Icon icon={Pencil} size={20} />
            </Button>

            <SidePage
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Редактировать услугу"
                description="Редактируйте услугу для выбранного бизнеса"
            >
                <form className="flex flex-col h-full" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6 flex-1">
                        <div className="flex justify-start items-center px-4 py-2 bg-[#eff4ff] rounded-xl border border-[#c7c4d8] gap-4 ">
                            <div>
                                <Icon
                                    icon={CircleAlert}
                                    className="text-[#4F46E5]"
                                />
                            </div>
                            <div className="flex flex-col ">
                                <Typography
                                    className="text-md font-medium tracking-normal"
                                    text={`Бизнес: ${selectedBusiness?.label || 'Выберите бизнес.'}`}
                                />
                                <Typography
                                    className="text-sm text-gray-700"
                                    text={
                                        'Услуга будет обновлена только для этого бизнеса'
                                    }
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <Typography
                                className="text-sm font-medium text-slate-800"
                                text={'Название услуги'}
                            />
                            <Input
                                type="text"
                                value={name}
                                placeholder="Мужская стрижка"
                                className="w-full px-4 py-3 rounded-lg border border-[#d6d4e1] bg-[#f8f9ff] text-slate-900 focus:outline-none focus:border-[#5955e8] focus:ring focus:ring-[#5955e8] font-normal"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <Typography
                                className="text-sm font-medium text-slate-800"
                                text={'Описание'}
                            />
                            <textarea
                                rows={3}
                                value={description}
                                placeholder="Опишите услугу"
                                className="w-full px-4 py-3 rounded-lg border border-[#d6d4e1] bg-[#f8f9ff] text-slate-900 focus:outline-none focus:border-[#5955e8] focus:ring-1 focus:ring-[#5955e8] resize-none placeholder:font-medium placeholder:text-[#858585]"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <div className="flex flex-col gap-1.5">
                                <Typography
                                    className="text-sm font-medium text-slate-800"
                                    text={'Цена'}
                                />
                                <div className="relative flex items-center">
                                    <Input
                                        type="text"
                                        value={price}
                                        className="w-full pl-4 pr-10 py-3 rounded-lg border border-[#d6d4e1] bg-[#f8f9ff] text-slate-900 focus:outline-none focus:border-[#5955e8] focus:ring-1 focus:ring-[#5955e8] font-normal"
                                        placeholder="0"
                                        onChange={(e) =>
                                            setPrice(e.target.value)
                                        }
                                    />
                                    <span className="absolute right-4 text-sm text-slate-500 pointer-events-none">
                                        ₸
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <Typography
                                    className="text-sm font-medium text-slate-800"
                                    text={'Длительность'}
                                />
                                <div className="relative flex items-center">
                                    <Input
                                        type="text"
                                        value={duration}
                                        className="w-full pl-4 pr-12 py-3 rounded-lg border border-[#d6d4e1] bg-[#f8f9ff] text-slate-900 focus:outline-none focus:border-[#5955e8] focus:ring-1 focus:ring-[#5955e8] font-normal"
                                        placeholder="0"
                                        onChange={(e) =>
                                            setDuration(Number(e.target.value))
                                        }
                                    />
                                    <span className="absolute right-4 text-sm text-slate-500 pointer-events-none">
                                        мин
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5 ">
                                <Typography
                                    className="text-sm font-medium text-slate-800"
                                    text={'Буфер до услуги'}
                                />
                                <div className="relative flex items-center">
                                    <Input
                                        type="text"
                                        value={bufferBefore}
                                        className="w-full pl-4 pr-12 py-3 rounded-lg border border-[#d6d4e1] bg-[#f8f9ff] text-slate-900 focus:outline-none focus:border-[#5955e8] focus:ring-1 focus:ring-[#5955e8] font-normal"
                                        placeholder="0"
                                        onChange={(e) =>
                                            setBufferBefore(
                                                Number(e.target.value)
                                            )
                                        }
                                    />
                                    <Typography
                                        className="absolute right-4 text-sm text-slate-500 pointer-events-none"
                                        text={'мин'}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <Typography
                                    className="text-sm font-medium text-slate-800"
                                    text={'Буфер после услуги'}
                                />
                                <div className="relative flex items-center">
                                    <Input
                                        type="text"
                                        value={bufferAfter}
                                        className="w-full pl-4 pr-12 py-3 rounded-lg border border-[#d6d4e1] bg-[#f8f9ff] text-slate-900 focus:outline-none focus:border-[#5955e8] focus:ring-1 focus:ring-[#5955e8] font-normal"
                                        placeholder={'0'}
                                        onChange={(e) =>
                                            setBufferAfter(
                                                Number(e.target.value)
                                            )
                                        }
                                    />
                                    <Typography
                                        className="absolute right-4 text-sm text-slate-500 pointer-events-none"
                                        text={'мин'}
                                    />
                                </div>
                            </div>
                        </div>

                        <hr className="border-t border-[#f0f0f5] mt-2 mb-1" />

                        <div className="flex justify-between items-center">
                            <Typography
                                className="text-sm font-medium text-slate-800"
                                text={'Услуга активна'}
                            />
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={isActive}
                                    onChange={(e) =>
                                        setIsActive(e.target.checked)
                                    }
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5955e8]"></div>
                            </label>
                        </div>
                    </div>

                    <div className="flex justify-start items-center gap-5 mt-10 w-full">
                        {isAssignedLoading ? (
                            <Typography
                                text="Загрузка привязанных мастеров..."
                                className="text-sm text-slate-500"
                            />
                        ) : (
                            <SpecialistsList
                                businessId={businessesId}
                                selectedIds={selectedStaffIds}
                                onChangeSelected={setSelectedStaffIds}
                            />
                        )}
                    </div>

                    <div className="sticky bottom-0 -mx-6 -mb-6 px-6 pt-5 pb-8 bg-white border-t border-[#f0f0f5] flex justify-end items-center gap-3 mt-8 z-10">
                        <Button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="px-6 py-2.5 bg-white border border-[#c7c4d8] hover:bg-slate-50 rounded-xl transition-colors"
                        >
                            <Typography
                                text={'Отмена'}
                                className="font-semibold text-sm text-slate-700 whitespace-nowrap"
                            />
                        </Button>
                        <Button
                            type="submit"
                            disabled={editMutation.isPending}
                            className="px-6 py-2.5 bg-[#4F46E5] hover:bg-indigo-600 disabled:bg-gray-400 rounded-xl transition-colors shadow-sm"
                        >
                            <Typography
                                text={
                                    editMutation.isPending
                                        ? 'Сохранение...'
                                        : 'Сохранить'
                                }
                                className="font-semibold text-sm text-white whitespace-nowrap"
                            />
                        </Button>
                    </div>
                </form>
            </SidePage>
        </>
    );
}
