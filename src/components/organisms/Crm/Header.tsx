import Typography from '../../atoms/Typography';

type HeaderProps = {
    label: string;
};

const description = [
    {
        id: 1,
        desc: 'dashboarddd',
        name: 'Дашборд'
    },
    {
        id: 2,
        desc: 'businesssss',
        name: 'Мои бизнесы'
    },
    {
        id: 3,
        desc: 'Назначения',
        name: 'Назначения'
    },
    {
        id: 4,
        desc: 'Услуги',
        name: 'Услуги'
    },
    {
        id: 5,
        desc: 'Персонал',
        name: 'Персонал'
    },
    {
        id: 6,
        desc: 'Настройки',
        name: 'Настройки'
    },
    {
        id: 7,
        desc: 'Отзывы',
        name: 'Отзывы'
    }
];

export default function Header({ label }: HeaderProps) {
    const activeItem = description.find((item) => item.name === label);

    const activeDesc = activeItem ? activeItem.desc : 'Описание по умолчанию';

    return (
        <div className="border-b border-[#c7c4d8] py-5 px-10 min-w-screen">
            <div className="flex flex-col">
                <Typography
                    text={label}
                    className="font-bold text-3xl text-[#222222]"
                />
                <Typography
                    text={`${activeDesc}`}
                    className="font-medium text-xl text-[#222222]"
                />
            </div>
        </div>
    );
}
