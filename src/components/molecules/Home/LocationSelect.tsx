import { useState, useRef, useEffect } from 'react';
import { MapPin, ChevronDown, Check } from 'lucide-react';
import Icon from '../../atoms/Icon';

interface City {
    id: number;
    name: string;
}

const cities: City[] = [
    {
        id: 1,
        name: 'Астана'
    },
    {
        id: 2,
        name: 'Алматы'
    },
    {
        id: 3,
        name: 'Актау'
    }
];

export default function LocationSelect() {
    const [selectedCity, setSelectedCity] = useState<City>(cities[0]);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (city: City) => {
        setSelectedCity(city);
        setIsOpen(false);
    };

    return (
        <div className="relative w-40" ref={dropdownRef}>
            <div
                className="flex items-center justify-between p-3 bg-white rounded-lg cursor-pointer select-none hover:bg-slate-50 transition-colors"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <div className="flex items-center gap-2">
                    <Icon icon={MapPin} className="text-slate-500 w-5 h-5" />
                    <span className="text-slate-900 font-medium text-sm">
                        {selectedCity.name}
                    </span>
                </div>

                <Icon
                    icon={ChevronDown}
                    className={`text-slate-500 w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 w-full mt-1 bg-white border border-slate-200 rounded-md shadow-md z-50 p-1 overflow-hidden">
                    {cities.map((city) => {
                        const isSelected = selectedCity.id === city.id;

                        return (
                            <div
                                key={city.id}
                                onClick={() => handleSelect(city)}
                                className={`flex items-center justify-between px-2 py-1.5 text-sm cursor-pointer rounded-sm transition-colors duration-150 outline-none
                                    ${
                                        isSelected
                                            ? 'bg-slate-100 text-slate-900 font-medium'
                                            : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                                    }`}
                            >
                                <span>{city.name}</span>

                                {isSelected && (
                                    <Icon
                                        icon={Check}
                                        className="w-4 h-4 text-slate-900"
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

{
    /*  
    import { MapPin } from 'lucide-react';
    import Icon from '../../atoms/Icon';
    
    const city = [
        {
            id: 1,
            name: 'Астана'
        },
        {
            id: 2,
            name: 'Алматы'
        },
        {
            id: 3,
            name: 'Актау'
        }
    ];
    
    export default function LocationSelect() {
        return (
            <div className="flex p-3 bg-[#fff] rounded-lg gap-2">
                <Icon icon={MapPin} className="text-[#858585]" />
                <select name="city" id="cities" className="outline-0 w-40">
                    {city.map((city) => (
                        <option key={city.id} value={city.name}>
                            {city.name}
                        </option>
                    ))}
                </select>
            </div>
        );
    } 
    */
}
