import Button from '../../../atoms/Button';
import Icon from '../../../atoms/Icon';
import Typography from '../../../atoms/Typography';
import { CircleAlert, Plus } from 'lucide-react';
import SidePage from '../../../organisms/SidePage';
import { useState } from 'react';
import { useBusiness } from '../../../../context/BusinessContext';
import Input from '../../../atoms/Input';
import { useMutation } from '@tanstack/react-query';
import { createService } from '../../../../api/services';

export default function NewService() {
    const [isOpen, setIsOpen] = useState(false);

    const { selectedBusiness } = useBusiness();

    const [serviceName, setServiceName] = useState('');
    const [serviceDesc, setServiceDesc] = useState('');
    const [price, setPrice] = useState('');
    const [duration, setDuration] = useState(0);
    const [bufferBefore, setBufferBefore] = useState(0);
    const [bufferAfter, setBufferAfter] = useState(0);
    const [isActive, setIsActive] = useState(true);

    const NewServiceMutate = useMutation({
        mutationFn: () => {
            if (!selectedBusiness?.id) {
                throw new Error('Бизнес не выбран');
            }
            return createService(
                Number(selectedBusiness.id),
                serviceName,
                serviceDesc,
                Number(price),
                duration,
                bufferBefore,
                bufferAfter,
                isActive
            );
        },
        onSuccess: (data) => {
            console.log('Успешно создано:', data);

            setIsOpen(false);

            setServiceName('');
            setServiceDesc('');
            setPrice('');
            setDuration(0);
            setBufferBefore(0);
            setBufferAfter(0);
            setIsActive(true);
        },
        onError: (error) => {
            console.error('Ошибка создания:', error);
        }
    });

    const handleCreateService = (e: React.FormEvent) => {
        e.preventDefault();

        NewServiceMutate.mutate();
    };

    if (!selectedBusiness) {
        return (
            <div className="p-10 text-center text-gray-500">
                Пожалуйста, выберите бизнес из списка сверху...
            </div>
        );
    }

    return (
        <>
            <Button
                className="flex justify-center items-center gap-2 px-7 py-3 bg-[#4F46E5] hover:bg-indigo-600 rounded-xl text-white transition-colors shadow-sm shrink-0"
                onClick={() => setIsOpen(true)}
            >
                <Icon icon={Plus} size={20} />
                <Typography
                    text={'Создать услугу'}
                    className="font-semibold text-sm whitespace-nowrap"
                />
            </Button>

            <SidePage
                isOpen={isOpen}
                onClose={() => {
                    setIsOpen(false);
                }}
                title="Создать услугу"
                description="Добавьте новую услугу для выбранного бизнеса"
            >
                <form
                    className="flex flex-col h-full"
                    onSubmit={handleCreateService}
                >
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
                                    text={`Бизнес: ${selectedBusiness.label || 'Выберите бизнес.'}`}
                                />
                                <Typography
                                    className="text-sm text-gray-700"
                                    text={
                                        'Услуга будет создана только для этого бизнеса'
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
                                placeholder="Мужская стрижка"
                                className="w-full px-4 py-3 rounded-lg border border-[#d6d4e1] bg-[#f8f9ff] text-slate-900 focus:outline-none focus:border-[#5955e8] focus:ring focus:ring-[#5955e8] font-normal"
                                onChange={(e) => setServiceName(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <Typography
                                className="text-sm font-medium text-slate-800"
                                text={'Описание'}
                            />
                            <textarea
                                rows={3}
                                placeholder="Опишите услугу"
                                className="w-full px-4 py-3 rounded-lg border border-[#d6d4e1] bg-[#f8f9ff] text-slate-900 focus:outline-none focus:border-[#5955e8] focus:ring-1 focus:ring-[#5955e8] resize-none placeholder:font-medium placeholder:text-[#858585]"
                                onChange={(e) => setServiceDesc(e.target.value)}
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

                    <div className="sticky -bottom-6 -mx-6 px-6 pt-5 pb-6 bg-white border-t border-[#f0f0f5] flex justify-end items-center gap-3 mt-6 z-10">
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
                            className="px-6 py-2.5 bg-[#4F46E5] hover:bg-indigo-600 rounded-xl transition-colors shadow-sm"
                        >
                            <Typography
                                text={'Создать'}
                                className="font-semibold text-sm text-white whitespace-nowrap"
                            />
                        </Button>
                    </div>
                </form>
            </SidePage>
        </>
    );
}
