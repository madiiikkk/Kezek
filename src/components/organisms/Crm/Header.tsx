import Typography from '../../atoms/Typography';

type HeaderProps = {
    label: string;
    rightElement?: React.ReactNode;
};

const description = [
    {
        id: 1,
        desc: 'Отслеживайте ключевые показатели и общую статистику',
        name: 'Дашборд'
    },
    {
        id: 2,
        desc: 'Управляйте всеми своими бизнесами в одном месте',
        name: 'Мои бизнесы'
    },
    {
        id: 3,
        desc: 'Контролируйте расписание, записи клиентов и предстоящие встречи',
        name: 'Назначения'
    },
    {
        id: 4,
        desc: 'Создавайте и редактируйте список предоставляемых услуг и их стоимость',
        name: 'Услуги'
    },
    {
        id: 5,
        desc: 'Управляйте сотрудниками, их графиком работы и правами доступа',
        name: 'Персонал'
    },
    {
        id: 6,
        desc: 'Изменяйте основные параметры системы под нужды вашей компании',
        name: 'Настройки'
    },
    {
        id: 7,
        desc: 'Просматривайте оценки клиентов и отвечайте на их комментарии',
        name: 'Отзывы'
    }
];

export default function Header({ label, rightElement }: HeaderProps) {
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
            <div className="flex gap-5 items-center">
                {rightElement && rightElement}
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 cursor-pointer shrink-0">
                    <img
                        src="https://i.pinimg.com/736x/8e/10/1f/8e101f5200df69299f93e7f12566a113.jpg"
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
