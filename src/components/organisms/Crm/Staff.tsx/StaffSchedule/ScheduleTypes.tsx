import { useState } from 'react';

export default function ScheduleTypes() {
    const [activeFilter, setActiveFilter] = useState<
        'Рабочие часы' | 'Перерывы' | 'Выходные'
    >('Рабочие часы');

    return (
        <div className="flex gap-3 p-2 rounded-3xl w-fit border  border-[#c7c4d8] bg-white ">
            {['Рабочие часы', 'Перерывы', 'Выходные'].map((filter) => (
                <button
                    key={filter}
                    type="button"
                    onClick={() =>
                        setActiveFilter(filter as typeof activeFilter)
                    }
                    className={`px-5 py-2 rounded-2xl text-sm font-medium cursor-pointer transition-colors ${
                        activeFilter === filter
                            ? 'bg-[#4F46E5] text-white'
                            : 'text-gray-500 hover:text-gray-900 bg-transparent'
                    }`}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}
