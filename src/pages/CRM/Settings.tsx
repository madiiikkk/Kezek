import RecordingRules from '../../components/organisms/Crm/Settings/RecordingRules';
import Icon from '../../components/atoms/Icon';
import { Calendar, Lightbulb, UserCheck } from 'lucide-react';
import Typography from '../../components/atoms/Typography';
import ConfirmationOfRecords from '../../components/organisms/Crm/Settings/ConfirmationOfRecords';
import CancellationOfClientRecords from '../../components/organisms/Crm/Settings/CancellationOfClientRecords';

export default function Settings() {
    return (
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full">
            <div className="flex flex-col w-full lg:w-[60%] gap-6 lg:gap-10">
                <RecordingRules />
                <ConfirmationOfRecords />
                <CancellationOfClientRecords />
            </div>

            <div className="w-full lg:w-[40%] flex flex-col gap-6 lg:gap-10 justify-center">
                <div className="p-5 sm:p-6 bg-[#ffffff] rounded-3xl border border-[#c7c4d8]">
                    <div className="flex items-center gap-3 mb-4">
                        <Icon
                            icon={Lightbulb}
                            className="text-[#4031d0] w-6 h-6 shrink-0"
                        />
                        <Typography
                            text={'Как это работает'}
                            className="text-lg font-semibold text-[#1a1a1a]"
                        />
                    </div>
                    <ul className="list-disc pl-5 space-y-3 text-sm text-[#4a4a5a] marker:text-[#4031d0]">
                        <li>
                            Шаг слотов влияет на визуальное отображение
                            расписания для клиента. Меньший шаг дает больше
                            вариантов времени.
                        </li>
                        <li>
                            Минимальное время защищает вас от неожиданных
                            записей &quot;день в день&quot;.
                        </li>
                        <li>
                            Лимит отмены позволяет избежать простоя, если клиент
                            передумал в последний момент.
                        </li>
                    </ul>
                </div>

                <div className="p-5 sm:p-6 bg-[#4031d0] text-white rounded-3xl shadow-sm">
                    <Typography
                        text={'Итоговый результат:'}
                        className="text-lg font-semibold mb-4 block"
                    />
                    <div className="flex flex-col gap-4 text-sm font-medium">
                        <div className="flex items-center gap-3">
                            <div className="bg-white/10 p-2 rounded-full flex items-center justify-center shrink-0">
                                <Icon
                                    icon={Calendar}
                                    className="w-5 h-5 text-white"
                                />
                            </div>
                            <span>Клиент видит слоты каждые 60 минут.</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-white/10 p-2 rounded-full flex items-center justify-center shrink-0">
                                <Icon
                                    icon={UserCheck}
                                    className="w-5 h-5 text-white"
                                />
                            </div>
                            <span>Записи подтверждаются автоматически.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
