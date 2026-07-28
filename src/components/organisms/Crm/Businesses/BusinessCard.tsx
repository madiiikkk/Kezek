import { Ellipsis, MapPin, Phone, Trash } from 'lucide-react';
import Button from '../../../atoms/Button';
import Icon from '../../../atoms/Icon';
import Typography from '../../../atoms/Typography';

const businesses = [
    {
        id: 1,
        name: 'Prime Barber Almaty 3',
        image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=600&auto=format&fit=crop',
        status: 'АКТИВЕН',
        statusColor: 'bg-[#11c255]',
        address: 'Алматы, пр. Абая 10',
        phone: '+7 (701) 555-0123',
        services: 12,
        masters: 4,
        appointments: 6
    },
    {
        id: 2,
        name: 'Prime Barber Astana',
        image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=600&auto=format&fit=crop',
        status: 'ЧЕРНОВИК',
        statusColor: 'bg-gray-500',
        address: 'Астана, пр. Мангилик Ел 17',
        phone: '+7 (702) 123-4567',
        services: 8,
        masters: 3,
        appointments: 2
    },
    {
        id: 3,
        name: 'Prime Azim',
        image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=600&auto=format&fit=crop',
        status: 'ЧЕРНОВИК',
        statusColor: 'bg-gray-500',
        address: 'Астана, пр. Мангилик Ел 17',
        phone: '+7 (702) 123-4567',
        services: 8,
        masters: 3,
        appointments: 2
    },
    {
        id: 4,
        name: 'Prime Azim',
        image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=600&auto=format&fit=crop',
        status: 'ЧЕРНОВИК',
        statusColor: 'bg-gray-500',
        address: 'Астана, пр. Мангилик Ел 17',
        phone: '+7 (702) 123-4567',
        services: 8,
        masters: 3,
        appointments: 2
    }
];

export default function BusinessCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-9">
            {businesses.map((business) => (
                <div
                    key={business.id}
                    className="w-full h-full bg-white rounded-[20px] border border-[#c7c4d8] overflow-hidden flex flex-col font-sans transition-transform hover:shadow-md"
                >
                    <div className="relative h-50 w-full shrink-0">
                        <img
                            src={business.image}
                            alt={business.name}
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                        <div
                            className={`absolute top-4 left-4 ${business.statusColor} text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 uppercase`}
                        >
                            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                            <Typography
                                text={business.status}
                                className="text-[10px] font-bold tracking-wider uppercase"
                            />
                        </div>

                        <Button className="absolute top-4 right-4 bg-white/30 hover:bg-white/40 transition backdrop-blur-sm p-1.5 rounded-lg text-white cursor-pointer">
                            <Icon icon={Ellipsis} />
                        </Button>

                        <Typography
                            className="absolute bottom-4 left-5 right-5 text-white text-[19px] font-bold leading-tight"
                            text={business.name}
                        />
                    </div>

                    {/* Нижняя контентная часть */}
                    <div className="p-5 flex flex-col flex-1">
                        {/* Адрес и телефон (остаются наверху) */}
                        <div className="flex flex-col gap-3 mb-5 text-[#687387] text-[14px]">
                            <div className="flex items-center gap-3">
                                <Icon
                                    icon={MapPin}
                                    size={19}
                                    className="text-[#687387] shrink-0"
                                />
                                <span className="text-[#687387] truncate">
                                    {business.address}
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon
                                    icon={Phone}
                                    size={17}
                                    className="text-[#687387] shrink-0"
                                />
                                <span className="text-[#687387]">
                                    {business.phone}
                                </span>
                            </div>
                        </div>

                        {/* Блок со статистикой и кнопками (прижимается к низу благодаря mt-auto) */}
                        <div className="mt-auto">
                            <hr className="border-slate-100 mb-4" />

                            <div className="grid grid-cols-3 divide-x divide-slate-100 mb-4 text-center">
                                <div className="flex flex-col">
                                    <Typography
                                        className="text-[18px] font-bold text-[#5c4cf7]"
                                        text={business.services}
                                    />
                                    <Typography
                                        className="text-[10px] font-medium text-slate-500 uppercase tracking-wide mt-1"
                                        text={'Услуги'}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <Typography
                                        className="text-[18px] font-bold text-[#5c4cf7]"
                                        text={business.masters}
                                    />
                                    <Typography
                                        className="text-[10px] font-medium text-slate-500 uppercase tracking-wide mt-1"
                                        text={'Мастера'}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <Typography
                                        className="text-[18px] font-bold text-[#5c4cf7]"
                                        text={business.appointments}
                                    />
                                    <Typography
                                        className="text-[10px] font-medium text-slate-500 uppercase tracking-wide mt-1 leading-tight"
                                        text={'Записи\n(СЕГОДНЯ)'}
                                    />
                                </div>
                            </div>

                            <hr className="border-slate-100 mb-5" />

                            <div className="flex gap-3">
                                <Button className="flex-1 h-[46px] flex items-center justify-center bg-[#f4f6f9] hover:bg-slate-200 text-slate-800 font-medium rounded-xl text-[14px] transition-colors cursor-pointer">
                                    <Typography text={'Редактировать'} />
                                </Button>

                                <Button className="w-[46px] h-[46px] flex items-center justify-center bg-[#fff0f0] hover:bg-red-100 text-red-500 rounded-xl transition-colors shrink-0 cursor-pointer">
                                    <Icon icon={Trash} className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
