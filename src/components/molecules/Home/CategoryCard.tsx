import {
    Car,
    BriefcaseMedical,
    UserRound,
    Wrench,
    GraduationCap,
    Scale,
    Dumbbell,
    LayoutGrid
} from 'lucide-react';
import Typography from '../../atoms/Typography';
import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button';

const categories = [
    {
        id: 1,
        icon: UserRound,
        title: 'Красота',
        subtitle: '0 услуг'
    },
    {
        id: 2,
        icon: BriefcaseMedical,
        title: 'Медицина',
        subtitle: '0 специалистов'
    },
    {
        id: 3,
        icon: Car,
        title: 'Авто',
        subtitle: '0 сервисов'
    },
    {
        id: 4,
        icon: Wrench,
        title: 'Ремонт',
        subtitle: '0 мастеров'
    },
    {
        id: 5,
        icon: GraduationCap,
        title: 'Образование',
        subtitle: '0 курсов'
    },
    {
        id: 6,
        icon: Scale,
        title: 'Юристы',
        subtitle: '0 контор'
    },
    {
        id: 7,
        icon: Dumbbell,
        title: 'Спорт',
        subtitle: '0 залов'
    }
];

export default function CategoryCard() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full p-4 bg-white rounded-3xl border border-[#E1E4F5] c7c4d8">
            {categories.map((item) => (
                <Button
                    key={item.id}
                    className="relative w-full h-[] h-35 md:h-62.5 bg-[#F4F6FC] rounded-2xl p-5 flex flex-col justify-between overflow-hidden cursor-pointer hover:shadow-md transition-all border border-transparent hover:border-[#c7c4d8] E1E4F5 group select-none text-left"
                >
                    <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#E6E9FA] rounded-full opacity-60 group-hover:bg-[#c1c6e3] duration-300"></div>

                    <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center relative z-10 shadow-sm">
                        <Icon
                            icon={item.icon}
                            size={35}
                            className="text-[#3624C7]"
                        />
                    </div>

                    <div className="relative z-10">
                        <Typography
                            text={item.title}
                            className="block text-[#111115] font-bold text-xl mb-0.5"
                        />
                        <Typography
                            text={item.subtitle}
                            className="block text-[#868695] text-lg font-medium uppercase tracking-wide"
                        />
                    </div>
                </Button>
            ))}

            <Button className="relative w-full h-35 md:h-62.5 bg-[#3624C7] rounded-2xl p-5 flex flex-col items-center justify-center cursor-pointer hover:bg-[#2F1FB3] hover:shadow-lg transition-all">
                <Icon icon={LayoutGrid} size={35} className="text-white mb-3" />
                <Typography
                    text="Все категории"
                    className="block text-white font-bold text-xl"
                />
            </Button>
        </div>
    );
}
