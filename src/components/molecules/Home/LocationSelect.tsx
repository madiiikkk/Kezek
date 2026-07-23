import Select, { type SelectOption } from '../../atoms/Select';
import { useState } from 'react';
import { MapPin } from 'lucide-react';

interface City {
    id: number;
    name: string;
}

const cities: City[] = [
    { id: 1, name: 'Астана' },
    { id: 2, name: 'Алматы' },
    { id: 3, name: 'Актау' }
];

const cityOptions: SelectOption[] = cities.map((city) => ({
    id: city.id,
    label: city.name
}));

export default function LocationSelect() {
    const [selectedOption, setSelectedOption] = useState<SelectOption>(
        cityOptions[0]
    );

    const handleCityChange = (option: SelectOption) => {
        setSelectedOption(option);
    };

    return (
        <Select
            options={cityOptions}
            value={selectedOption}
            onChange={handleCityChange}
            leftIcon={MapPin}
            className="w-full md:w-40 rounded-xl "
        />
    );
}
