import { useState } from 'react';
import Select, { type SelectOption } from '../../../atoms/Select';

const filterOptions: SelectOption[] = [
    { id: 1, label: 'Все услуги' },
    { id: 2, label: 'Активные' },
    { id: 3, label: 'Неактивные' }
];

export default function Filter() {
    const [selectedFilter, setSelectedFilter] = useState<SelectOption>(
        filterOptions[0]
    );

    return (
        <Select
            options={filterOptions}
            value={selectedFilter}
            onChange={setSelectedFilter}
            className="border border-[#c7c4d8] rounded-xl w-[200px]"
        />
    );
}
