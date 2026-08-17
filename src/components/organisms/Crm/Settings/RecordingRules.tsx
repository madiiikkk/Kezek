import { useState } from 'react';
import { Clock4 } from 'lucide-react';
import Icon from '../../../atoms/Icon';
import Typography from '../../../atoms/Typography';
import RowItem from '../../../molecules/Crm/Settings/RecordingRules/RowItem';
import type { SelectOption } from '../../../atoms/Select';

const MOCK_SLOT_STEPS: SelectOption[] = [
    { id: 1, label: '15 минут' },
    { id: 2, label: '30 минут' },
    { id: 3, label: '45 минут' },
    { id: 4, label: '1 час' },
    { id: 5, label: '60 минут' }
];

const MOCK_SLOT_STEPS_TWO: SelectOption[] = [
    { id: 1, label: '2' },
    { id: 2, label: '3' },
    { id: 3, label: '4' },
    { id: 4, label: '5' }
];

const MOCK_SLOT_STEPS_THREE: SelectOption[] = [
    { id: 1, label: '2' },
    { id: 2, label: '3' },
    { id: 3, label: '4' },
    { id: 4, label: '5' },
    { id: 5, label: '6' },
    { id: 6, label: '7' },
    { id: 7, label: '8' },
    { id: 8, label: '30' }
];

export default function RecordingRules() {
    const [selectedOption, setSelectedOption] = useState<SelectOption>(
        MOCK_SLOT_STEPS[0]
    );
    const [selectedOptionTwo, setSelectedOptionTwo] = useState<SelectOption>(
        MOCK_SLOT_STEPS_TWO[0]
    );
    const [selectedOptionThree, setSelectedOptionThree] =
        useState<SelectOption>(MOCK_SLOT_STEPS_THREE[0]);

    return (
        <div className="flex w-full items-start">
            <div className="w-full px-4 py-6 sm:px-6 sm:py-9 bg-[#fff] rounded-3xl border border-[#c7c4d8]">
                <div className="flex justify-start items-center gap-3 sm:gap-4">
                    <div className="bg-[#eff4ff] p-2.5 rounded-full flex items-center justify-center shrink-0">
                        <Icon
                            icon={Clock4}
                            className="text-[#4031d0] w-5 h-5 sm:w-6 sm:h-6"
                        />
                    </div>
                    <Typography
                        text={'Правила записи'}
                        className="text-xl sm:text-2xl font-medium"
                    />
                </div>

                <div className="mt-6 flex flex-col gap-6 w-full">
                    <RowItem
                        text={'Шаг слотов'}
                        selectOptions={MOCK_SLOT_STEPS}
                        value={selectedOption}
                        onChange={setSelectedOption}
                        description={
                            'Определяет, с каким интервалом клиент будет видеть свободное время.'
                        }
                    />

                    <RowItem
                        text={'Минимальное время до записи (в часах)'}
                        selectOptions={MOCK_SLOT_STEPS_TWO}
                        value={selectedOptionTwo}
                        onChange={setSelectedOptionTwo}
                        description={
                            'Клиент не сможет записаться раньше указанного количества часов от текущего времени.'
                        }
                    />

                    <RowItem
                        text={'Запись на сколько дней вперёд'}
                        selectOptions={MOCK_SLOT_STEPS_THREE}
                        value={selectedOptionThree}
                        onChange={setSelectedOptionThree}
                        description={
                            'Ограничивает, насколько далеко вперёд клиент может выбрать дату записи.'
                        }
                    />
                </div>
            </div>
        </div>
    );
}
