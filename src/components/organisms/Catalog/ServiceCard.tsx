import { Star, Heart, MapPin } from 'lucide-react';
import Icon from '../../atoms/Icon';
import Typography from '../../atoms/Typography';
import Button from '../../atoms/Button';

interface Ads {
    id: number;
    name: string;
    rating: number;
    category: string;
    address: string;
    desc: string;
    priceby: number;
    image?: string;
}

const ad: Ads[] = [
    {
        id: 1,
        name: 'Chop-Chop Almaty',
        rating: 4.9,
        category: 'Barbershop',
        address: 'пр. Абая 45, Алматы',
        desc: 'Мужские стрижки, бритье опасной бритвой, уход за бородой. Кофе и отличная музыка для каждого гостя.',
        priceby: 5000,
        image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 2,
        name: 'Chop-Chop Almaty',
        rating: 4.7,
        category: 'Barbershop',
        address: 'пр. Абая 45, Алматы',
        desc: 'Мужские стрижки, бритье опасной бритвой, уход за бородой.',
        priceby: 5000,
        image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 3,
        name: 'Chop-Chop Almaty',
        rating: 3.0,
        category: 'Barbershop',
        address: 'пр. Абая 45, Алматы',
        desc: 'Мужские стрижки, бритье опасной бритвой.',
        priceby: 5000,
        image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=600&auto=format&fit=crop'
    }
];

export default function ServiceCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ad.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col h-full w-full border border-[#c7c4d8] rounded-3xl overflow-hidden bg-white hover:shadow-md transition-shadow"
                >
                    <div className="relative w-full h-[220px] p-3 shrink-0">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-2xl"
                        />

                        <div className="absolute top-6 left-6 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-sm">
                            <Icon
                                icon={Star}
                                size={14}
                                className="text-[#FFC107] fill-[#FFC107]"
                            />
                            <span className="text-sm font-bold text-[#111827]">
                                {item.rating}
                            </span>
                        </div>

                        <button className="absolute top-6 right-6 bg-white rounded-full p-2.5 shadow-sm text-[#8c8c8c] hover:text-red-500 transition-colors">
                            <Icon icon={Heart} size={20} />
                        </button>
                    </div>

                    <div className="flex flex-col flex-1 p-5 gap-3">
                        <div className="flex justify-between items-start gap-2">
                            <Typography
                                text={item.name}
                                className="text-xl font-semibold text-[#001D4A] leading-tight"
                            />
                            <div className="bg-[#EEF2FF] text-[#4F46E5] text-xs px-2.5 py-1 rounded font-medium whitespace-nowrap">
                                {item.category}
                            </div>
                        </div>

                        <div className="flex items-center gap-1.5 text-[#6B7280]">
                            <Icon icon={MapPin} size={16} />
                            <Typography
                                text={item.address}
                                className="text-sm"
                            />
                        </div>

                        <Typography
                            text={item.desc}
                            className="text-sm text-[#4B5563] leading-relaxed line-clamp-2"
                        />

                        <div className="mt-auto pt-2">
                            <hr className="border-[#e3e3e3] mb-3" />

                            <div className="flex justify-between items-end">
                                <div className="flex flex-col">
                                    <span className="text-xs text-[#8c8c8c] font-medium mb-0.5">
                                        От
                                    </span>
                                    <span className="text-lg font-bold text-[#001D4A]">
                                        {item.priceby.toLocaleString('ru-RU')} ₸
                                    </span>
                                </div>
                                <Button className="bg-[#3b28cc] hover:bg-[#3120b0] text-white px-6 py-2.5 rounded-xl font-medium transition-colors outline-1 cursor-pointer">
                                    Записаться
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
