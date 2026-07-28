import Typography from '../../atoms/Typography';
import BusinessHeader from './Businesses/BusinessHeader';

type HeaderProps = {
    label: string;
};

const description = [
    { id: 1, desc: 'dashboarddd', name: 'Дашборд' },
    {
        id: 2,
        desc: 'Управляйте всеми своими бизнесами в одном месте',
        name: 'Мои бизнесы'
    },
    { id: 3, desc: 'Назначения', name: 'Назначения' },
    { id: 4, desc: 'Услуги', name: 'Услуги' },
    { id: 5, desc: 'Персонал', name: 'Персонал' },
    { id: 6, desc: 'Настройки', name: 'Настройки' },
    { id: 7, desc: 'Отзывы', name: 'Отзывы' }
];

export default function Header({ label }: HeaderProps) {
    const activeItem = description.find((item) => item.name === label);
    const activeDesc = activeItem ? activeItem.desc : 'Описание по умолчанию';

    return (
        <div className="flex justify-between items-center border-b bg-white border-[#c7c4d8] py-5 px-10 w-full gap-5">
            <div className="flex flex-col">
                <Typography
                    text={label}
                    className="font-bold text-3xl text-[#222222]"
                />
                <Typography
                    text={`${activeDesc}`}
                    className="font-medium text-xl text-[#6d6d6d]"
                />
            </div>
            <div className="flex">
                <BusinessHeader />
            </div>
        </div>
    );
}
