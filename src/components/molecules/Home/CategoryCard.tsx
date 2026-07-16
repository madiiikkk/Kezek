import { Car, BriefcaseMedical, UserRound, ArrowRight } from 'lucide-react';
import Typography from '../../atoms/Typography';
import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button';

const categories = [
    {
        id: 1,
        icon: UserRound,
        title: 'Красота и уход',
        description:
            'Запишитесь к лучшим стилистам и мастерам маникюра в вашем городе.',
        buttonText: 'Выбрать услугу'
    },
    {
        id: 2,
        icon: BriefcaseMedical,
        title: 'Медицина',
        description: 'Консультации врачей, анализы и диагностика без очередей.',
        buttonText: 'Записаться'
    },
    {
        id: 3,
        icon: Car,
        title: 'Автосервис',
        description:
            'Техническое обслуживание, мойка и ремонт вашего автомобиля.',
        buttonText: 'Найти сервис'
    }
];

export default function CategoryCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full p-4 bg-[#FAFAFC]">
            {categories.map((item) => (
                <div
                    key={item.id}
                    className="w-full h-150 bg-white rounded-3xl p-7 flex flex-col shadow-sm hover:shadow-lg  transition-shadow"
                >
                    <div>
                        <Typography
                            text={item.title}
                            className="block text-[#1A1A24] font-bold text-xl mb-2"
                        />
                        <Typography
                            text={item.description}
                            className="block text-[#6E7191] text-sm leading-relaxed"
                        />
                    </div>

                    <div className="flex-1 flex justify-center items-center">
                        <div className="flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#DEDCFF]">
                            <Icon
                                icon={item.icon}
                                size={48}
                                className="text-[#5B44FF]"
                            />
                        </div>
                    </div>

                    <Button className="flex items-center gap-2 bg-[#F3F3F7] hover:bg-[#E5E5EB] transition-colors w-fit px-4 py-2.5 rounded-xl mt-auto cursor-pointer">
                        <Typography
                            text={item.buttonText}
                            className="text-[#1A1A24] font-semibold text-sm"
                        />
                        <Icon
                            icon={ArrowRight}
                            size={16}
                            className="text-[#1A1A24]"
                        />
                    </Button>
                </div>
            ))}
        </div>
    );
}
