import { useState } from 'react';
import Select, { type SelectOption } from '../../atoms/Select';
import Typography from '../../atoms/Typography';
import { Blend, Funnel, type LucideIcon } from 'lucide-react';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import DropDownQuery from '../../molecules/Catalog/DropDownQuery';

interface Filter {
    id: number;
    name: string;
}

interface Category {
    id: number;
    name: string;
    icon: LucideIcon;
}

interface Services {
    id: number;
    name: string;
}

const sortby: Filter[] = [
    { id: 1, name: 'По рейтингу' },
    { id: 2, name: 'По цене: сначала дешевле' },
    { id: 3, name: 'По цене: сначала дороже' },
    { id: 4, name: 'Сначала новые' },
    { id: 5, name: 'Сначала старые' },
    { id: 6, name: 'По количеству отзывов' }
];

const categorys: Category[] = [
    { id: 1, name: 'Красота', icon: Blend },
    { id: 2, name: 'Медицина', icon: Blend },
    { id: 3, name: 'Авто', icon: Blend },
    { id: 4, name: 'Спорт', icon: Blend },
    { id: 4, name: 'Рестораны', icon: Blend }
];

const services: Services[] = [
    {
        id: 1,
        name: 'Мужская стрижка'
    },
    {
        id: 2,
        name: 'Стрижка бороды'
    },
    {
        id: 3,
        name: 'Маникюр'
    },
    {
        id: 4,
        name: 'Педикюр'
    },
    {
        id: 5,
        name: 'Чистка зубов'
    }
];

const sortOptions: SelectOption[] = sortby.map((sort) => ({
    id: sort.id,
    label: sort.name
}));

export default function Sidebar() {
    const [selectedSortby, setSelectSort] = useState<SelectOption>(
        sortOptions[0]
    );

    const handleSortChange = (option: SelectOption) => {
        setSelectSort(option);
    };

    return (
        <div className="flex flex-col gap-5">
            <div>
                <div className="w-40 md:w-full border border-[#e3e3e3] rounded-3xl px-6 py-2 flex flex-col gap-3 bg-white">
                    <DropDownQuery title="Фильтр">
                        <div className="flex flex-col gap-3">
                            <Typography
                                text="Сортировка"
                                className="text-sm pt-4"
                            />
                            <Select
                                options={sortOptions}
                                value={selectedSortby}
                                onChange={handleSortChange}
                                leftIcon={Funnel}
                                className="w-full border border-[#e3e3e3] rounded-xl"
                            />

                            <Typography text="Цена" className="text-sm pt-3" />

                            <div className="flex gap-2">
                                <Input
                                    type={'text'}
                                    placeholder={'От'}
                                    className="px-2 py-1 outline-0 w-full hover:bg-slate-50 rounded-xl border border-[#e3e3e3]"
                                />
                                <Input
                                    type={'text'}
                                    placeholder={'До'}
                                    className="px-2 py-1 outline-0 w-full hover:bg-slate-50 rounded-xl border border-[#e3e3e3]"
                                />
                            </div>

                            <Button className="flex justify-center items-center gap-2 p-3 bg-[#4F46E5] text-white rounded-xl cursor-pointer">
                                <Icon icon={Blend} size={20} />
                                <Typography
                                    text="Расширить"
                                    className="text-sm"
                                />
                            </Button>
                        </div>
                    </DropDownQuery>
                </div>
            </div>

            <div>
                <div className="w-40 md:w-full border border-[#e3e3e3] rounded-3xl px-6 py-4 flex flex-col bg-white">
                    <DropDownQuery title="Категория">
                        {categorys.map((i) => (
                            <Button
                                className="flex justify-start items-center gap-2 p-3 bg-[#4F46E5] text-white w-full rounded-xl cursor-pointer mt-3"
                                key={i.id}
                            >
                                <Icon icon={i.icon} size={20} />
                                <Typography text={i.name} className="text-sm" />
                            </Button>
                        ))}
                    </DropDownQuery>
                </div>
            </div>

            <div>
                <div className="w-40 md:w-full border border-[#e3e3e3] rounded-3xl px-6 py-4 flex flex-col bg-white">
                    <DropDownQuery title="Услуги">
                        <div className="flex flex-col gap-3 mt-4">
                            {services.map((i) => (
                                <label
                                    key={i.id}
                                    className="flex justify-start items-center gap-3 cursor-pointer group"
                                >
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 rounded border-[#e3e3e3] cursor-pointer accent-[#4F46E5]"
                                    />
                                    <Typography
                                        text={i.name}
                                        className="text-sm text-[#111827] group-hover:text-[#4F46E5] transition-colors"
                                    />
                                </label>
                            ))}
                        </div>
                    </DropDownQuery>
                </div>
            </div>
        </div>
    );
}
