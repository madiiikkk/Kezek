import { useState } from 'react';
import Select, { type SelectOption } from '../../atoms/Select';
import Typography from '../../atoms/Typography';
import { Blend, ChevronDown, Funnel } from 'lucide-react';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';

interface Filter {
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
                <div className="w-40 md:w-full border border-[#e3e3e3] rounded-3xl px-6 py-4 flex flex-col gap-3 bg-white">
                    <div className="flex justify-between">
                        <Typography text="Фильтр" className="text-lg" />
                        <Button>
                            <Icon
                                icon={ChevronDown}
                                className="text-[#8c8c8c]"
                            />
                        </Button>
                    </div>
                    <Typography text="Сортировка" className="text-sm pt-4" />
                    <Select
                        options={sortOptions}
                        value={selectedSortby}
                        onChange={handleSortChange}
                        leftIcon={Funnel}
                        className="w-full border border-[#e3e3e3] rounded-xl"
                    />

                    <Typography text="Цена" className="text-sm pt-4" />

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
                        <Typography text="Расширить" className="text-sm" />
                    </Button>
                </div>
            </div>

            <div>
                <div className="w-40 md:w-full border border-[#e3e3e3] rounded-3xl px-6 py-4 flex flex-col gap-1 bg-white">
                    <div className="flex justify-between">
                        <Typography text="Категория" className="text-lg" />
                        <Button>
                            <Icon
                                icon={ChevronDown}
                                className="text-[#8c8c8c]"
                            />
                        </Button>
                    </div>

                    <Button className="flex justify-start items-center gap-2 p-3 bg-[#4F46E5] text-white  rounded-xl cursor-pointer mt-3">
                        <Icon icon={Blend} size={20} />
                        <Typography text="Расширить" className="text-sm" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
