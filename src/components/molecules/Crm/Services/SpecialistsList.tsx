import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { CalendarDays, Check, Search } from 'lucide-react';
import Typography from '../../../atoms/Typography';
import Icon from '../../../atoms/Icon';
import { searchStaff, type StaffMember } from '../../../../api/services';

interface SpecialistsListProps {
    businessId: number;
    selectedIds: number[];
    onChangeSelected: (ids: number[]) => void;
}

export default function SpecialistsList({
    businessId,
    selectedIds,
    onChangeSelected
}: SpecialistsListProps) {
    const [activeFilter, setActiveFilter] = useState<
        'Все' | 'Активные' | 'Отключённые'
    >('Все');
    const [searchQuery, setSearchQuery] = useState('');

    const { data, isLoading, isError } = useQuery({
        queryKey: ['staff', businessId, searchQuery],
        queryFn: () => searchStaff(businessId, searchQuery),
        enabled: !!businessId
    });

    const toggleCheckbox = (id: number) => {
        onChangeSelected(
            selectedIds.includes(id)
                ? selectedIds.filter((item) => item !== id)
                : [...selectedIds, id]
        );
    };

    const specialistsList: StaffMember[] = data?.data || [];

    const filteredSpecialists = specialistsList.filter((specialist) => {
        if (activeFilter === 'Активные') return specialist.is_active;
        if (activeFilter === 'Отключённые') return !specialist.is_active;
        return true;
    });

    const getInitials = (firstName: string, lastName: string) => {
        return `${firstName?.charAt(0) || ''}${lastName?.charAt(0) || ''}`.toUpperCase();
    };

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder="Поиск мастера..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5] sm:text-sm transition-colors"
                />
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex justify-start items-center gap-2">
                    {['Все', 'Активные', 'Отключённые'].map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            onClick={() =>
                                setActiveFilter(filter as typeof activeFilter)
                            }
                            className={`px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                                activeFilter === filter
                                    ? 'bg-[#4F46E5] text-white'
                                    : 'text-gray-500 hover:text-gray-900 bg-transparent'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
                <hr className="border-t border-gray-100" />
            </div>

            <div className="flex flex-col gap-3">
                {isLoading && (
                    <div className="text-gray-500 text-sm py-4">
                        Загрузка мастеров...
                    </div>
                )}
                {isError && (
                    <div className="text-red-500 text-sm py-4">
                        Ошибка при загрузке данных.
                    </div>
                )}
                {!isLoading && !isError && filteredSpecialists.length === 0 && (
                    <div className="text-gray-400 text-sm py-4">
                        Мастера не найдены.
                    </div>
                )}

                {filteredSpecialists.map((specialist) => {
                    const isChecked = selectedIds.includes(specialist.id);
                    const fullName = `${specialist.first_name} ${specialist.last_name}`;

                    return (
                        <div
                            key={specialist.id}
                            className="flex items-center justify-between p-4 bg-white border border-[#e5e7eb] rounded-2xl hover:border-[#c7c4d8] transition-shadow"
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    onClick={() =>
                                        toggleCheckbox(specialist.id)
                                    }
                                    className={`w-5 h-5 rounded-[4px] flex items-center justify-center cursor-pointer transition-colors border ${
                                        isChecked
                                            ? 'bg-[#4F46E5] border-[#4F46E5] text-white'
                                            : 'border-[#d1d5db] bg-white'
                                    }`}
                                >
                                    {isChecked && (
                                        <Check size={14} strokeWidth={3} />
                                    )}
                                </div>

                                {specialist.photo ? (
                                    <img
                                        src={specialist.photo}
                                        alt={fullName}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-[#e0e7ff] text-[#4F46E5] flex items-center justify-center text-sm font-semibold tracking-wide">
                                        {getInitials(
                                            specialist.first_name,
                                            specialist.last_name
                                        )}
                                    </div>
                                )}

                                <div className="flex flex-col">
                                    <Typography
                                        text={fullName}
                                        className="text-sm font-semibold text-slate-800"
                                    />
                                    <Typography
                                        text={
                                            specialist.position ||
                                            'Должность не указана'
                                        }
                                        className="text-xs text-slate-500 mt-0.5"
                                    />
                                    <div className="flex items-center gap-1.5 mt-1.5 text-slate-400">
                                        <Icon icon={CalendarDays} size={13} />
                                        <Typography
                                            text={
                                                specialist.description ||
                                                'Нет описания'
                                            }
                                            className="text-xs text-slate-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`px-2.5 py-1 text-[11px] font-semibold rounded-md ${
                                    specialist.is_active
                                        ? 'bg-[#eff4ff] text-[#4F46E5]'
                                        : 'bg-gray-100 text-gray-500'
                                }`}
                            >
                                {specialist.is_active ? 'Активен' : 'Отключён'}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
