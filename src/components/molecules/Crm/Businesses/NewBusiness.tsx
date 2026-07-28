import { useState } from 'react';
import {
    Plus,
    Phone,
    Mail,
    MapPin,
    UploadCloud
    // ChevronDown больше не нужен здесь, он внутри твоего Select
} from 'lucide-react';

import Button from '../../../atoms/Button';
import Icon from '../../../atoms/Icon';
import Typography from '../../../atoms/Typography';
import Modal from '../../../organisms/Modal';
import type { SelectOption } from '../../../atoms/Select';
import Select from '../../../atoms/Select';

const CATEGORY_OPTIONS: SelectOption[] = [
    { id: 'beauty', label: 'Салон красоты' },
    { id: 'sport', label: 'Фитнес-клуб' },
    { id: 'food', label: 'Ресторан / Кафе' }
];

const CITY_OPTIONS: SelectOption[] = [
    { id: 'ast', label: 'Астана' },
    { id: 'alm', label: 'Алматы' },
    { id: 'akt', label: 'Актау' }
];

export default function NewBusiness() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isActive, setIsActive] = useState(true);

    const [category, setCategory] = useState<SelectOption>(CATEGORY_OPTIONS[0]);
    const [city, setCity] = useState<SelectOption>(CITY_OPTIONS[0]);

    return (
        <>
            <Button
                className="flex justify-center items-center gap-2 px-1 py-3 bg-[#4F46E5] hover:bg-indigo-600 rounded-xl text-white transition-colors shadow-sm w-full"
                onClick={() => setIsModalOpen(true)}
            >
                <Icon icon={Plus} size={20} />
                <Typography
                    text={'Создать бизнес'}
                    className="font-semibold text-sm"
                />
            </Button>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="w-full max-w-3xl bg-white p-2 text-left">
                    <div className="mb-8">
                        <Typography
                            className="text-lg font-semibold text-[#1e293b] border-b pb-3 mb-5 block"
                            text={'Основная информация'}
                        />

                        <div className="space-y-4">
                            <div>
                                <Typography
                                    className="block text-xs font-semibold text-gray-600 mb-1.5"
                                    text={'Название бизнеса *'}
                                />
                                <input
                                    type="text"
                                    className="w-full px-3 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#4F46E5] focus:bg-white text-sm"
                                    placeholder="Например: Салон красоты 'Элегант'"
                                />
                            </div>

                            <div>
                                <Typography
                                    className="block text-xs font-semibold text-gray-600 mb-1.5"
                                    text={'Категория *'}
                                />
                                <Select
                                    options={CATEGORY_OPTIONS}
                                    value={category}
                                    onChange={setCategory}
                                    className="w-full border border-gray-200 rounded-lg bg-gray-50 focus-within:ring-1 focus-within:ring-[#4F46E5] focus-within:bg-white transition-colors"
                                />
                            </div>

                            <div>
                                <Typography
                                    className="block text-xs font-semibold text-gray-600 mb-1.5"
                                    text={'Описание'}
                                />
                                <textarea
                                    className="w-full px-3 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#4F46E5] focus:bg-white text-sm min-h-[100px] resize-y"
                                    placeholder="Кратко опишите ваш бизнес, услуги и преимущества..."
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <Typography
                            className="text-lg font-semibold text-[#1e293b] border-b pb-3 mb-5 block"
                            text={'Контакты и Адрес'}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Typography
                                    className="block text-xs font-semibold text-gray-600 mb-1.5"
                                    text={'Телефон *'}
                                />
                                <div className="relative">
                                    <Icon
                                        icon={Phone}
                                        className="absolute left-3 top-2.5 text-gray-400"
                                        size={16}
                                    />
                                    <input
                                        type="text"
                                        className="w-full pl-9 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#4F46E5] focus:bg-white text-sm"
                                        placeholder="+7 (___) ___-__-__"
                                    />
                                </div>
                            </div>

                            <div>
                                <Typography
                                    className="block text-xs font-semibold text-gray-600 mb-1.5"
                                    text={'Email'}
                                />
                                <div className="relative">
                                    <Icon
                                        icon={Mail}
                                        className="absolute left-3 top-2.5 text-gray-400"
                                        size={16}
                                    />
                                    <input
                                        type="email"
                                        className="w-full pl-9 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#4F46E5] focus:bg-white text-sm"
                                        placeholder="info@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <Typography
                                    className="block text-xs font-semibold text-gray-600 mb-1.5"
                                    text={'Город *'}
                                />
                                <Select
                                    options={CITY_OPTIONS}
                                    value={city}
                                    onChange={setCity}
                                    className="w-full border border-gray-200 rounded-lg bg-gray-50 focus-within:ring-1 focus-within:ring-[#4F46E5] focus-within:bg-white transition-colors"
                                />
                            </div>

                            <div>
                                <Typography
                                    className="block text-xs font-semibold text-gray-600 mb-1.5"
                                    text={'Адрес *'}
                                />
                                <div className="relative">
                                    <Icon
                                        icon={MapPin}
                                        className="absolute left-3 top-2.5 text-gray-400"
                                        size={16}
                                    />
                                    <input
                                        type="text"
                                        className="w-full pl-9 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#4F46E5] focus:bg-white text-sm"
                                        placeholder="Улица, дом, офис"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <Typography
                            className="text-lg font-semibold text-[#1e293b] border-b pb-3 mb-5 block"
                            text={'Медиа и Настройки'}
                        />

                        <div className="space-y-5">
                            <div>
                                <Typography
                                    className="block text-xs font-semibold text-gray-600 mb-1.5"
                                    text={'Логотип бизнеса'}
                                />

                                <div className="border border-dashed border-[#a5b4fc] rounded-xl p-8 flex flex-col items-center justify-center bg-[#fefeff] hover:bg-indigo-50/30 transition-colors cursor-pointer">
                                    <div className="w-10 h-10 bg-[#e0e7ff] rounded-full flex items-center justify-center mb-3">
                                        <Icon
                                            icon={UploadCloud}
                                            className="text-[#4F46E5]"
                                            size={20}
                                        />
                                    </div>

                                    <div className="text-sm text-gray-600 text-center flex flex-wrap justify-center gap-1">
                                        <Typography
                                            className="text-[#4F46E5] font-medium"
                                            text={'Нажмите для загрузки'}
                                        />
                                        <Typography
                                            text={'или перетащите файл'}
                                            className="text-sm"
                                        />
                                    </div>

                                    <Typography
                                        className="text-xs text-gray-400 mt-1"
                                        text={'PNG, JPG, GIF до 5MB'}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-100 rounded-xl">
                                <div className="flex flex-col">
                                    <Typography
                                        className="text-sm font-semibold text-gray-900"
                                        text={'Статус публикации'}
                                    />
                                    <Typography
                                        className="text-[11px] text-gray-500 mt-0.5"
                                        text={
                                            'Определяет, будет ли бизнес виден клиентам после создания'
                                        }
                                    />
                                </div>

                                <div className="flex items-center gap-3">
                                    <Button
                                        type="button"
                                        onClick={() => setIsActive(!isActive)}
                                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${isActive ? 'bg-[#3b27b5]' : 'bg-gray-300'}`}
                                    >
                                        <span
                                            className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${isActive ? 'translate-x-4' : 'translate-x-1'}`}
                                        />
                                    </Button>

                                    <Typography
                                        className="text-sm font-medium text-gray-800"
                                        text={isActive ? 'Активен' : 'Скрыт'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-5 border-t border-gray-100 mt-2">
                        <Button
                            className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <Typography
                                text={'Сохранить как черновик'}
                                className="text-sm font-medium text-gray-700"
                            />
                        </Button>

                        <Button
                            className="px-5 py-2 bg-[#3b27b5] rounded-lg hover:bg-indigo-800 transition-colors"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <Typography
                                text={'Создать бизнес'}
                                className="text-sm font-medium text-white"
                            />
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
}
