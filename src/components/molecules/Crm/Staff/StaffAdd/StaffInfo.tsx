import Input from '../../../../atoms/Input';
import Typography from '../../../../atoms/Typography';

interface StaffInfoProps {
    first_name: string;
    onNameChange: (value: string) => void;
    last_name: string;
    onLastNameChange: (value: string) => void;
    position: string;
    onPositionChange: (value: string) => void;
    description: string;
    onDescriptionChange: (value: string) => void;
}

export default function StaffInfo({
    first_name,
    onNameChange,
    last_name,
    onLastNameChange,
    position,
    onPositionChange,
    description,
    onDescriptionChange
}: StaffInfoProps) {
    return (
        <div className="w-full p-6 sm:p-8 bg-[white] border border-[#c7c4d8] rounded-2xl sm:rounded-3xl">
            <Typography
                className="text-xl sm:text-2xl font-medium text-[#1e293b] border-b border-[#c7c4d8] pb-4 mb-6 block"
                text={'Основная информация'}
            />

            <div className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row gap-5">
                    <div className="flex-1">
                        <Typography
                            className="block text-[13px] font-semibold text-[#475569] mb-2"
                            text={'Имя *'}
                        />
                        <Input
                            type="text"
                            className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl bg-[#f8f9ff] focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-[15px] placeholder:text-slate-400"
                            placeholder="Айгерим"
                            value={first_name}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => onNameChange(e.target.value)}
                        />
                    </div>

                    <div className="flex-1">
                        <Typography
                            className="block text-[13px] font-semibold text-[#475569] mb-2"
                            text={'Фамилия *'}
                        />
                        <Input
                            type="text"
                            className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl bg-[#f8f9ff] focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-[15px] placeholder:text-slate-400"
                            placeholder="Айгеримкызы"
                            value={last_name}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => onLastNameChange(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <Typography
                        className="block text-[13px] font-semibold text-[#475569] mb-2"
                        text={'Должность *'}
                    />
                    <Input
                        type="text"
                        className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl bg-[#f8f9ff] focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-[15px] placeholder:text-slate-400"
                        placeholder="Например: Старший барбер"
                        value={position}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onPositionChange(e.target.value)
                        }
                    />
                </div>

                <div>
                    <Typography
                        className="block text-[13px] font-semibold text-[#475569] mb-2"
                        text={'Краткое описание специализации'}
                    />
                    <textarea
                        className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl bg-[#f8f9ff] focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-[15px] placeholder:text-slate-400 min-h-[120px] resize-y placeholder:font-medium text-[#4F46E5] font-medium"
                        placeholder="Опыт работы, ключевые навыки..."
                        value={description}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                            onDescriptionChange(e.target.value)
                        }
                    ></textarea>
                </div>
            </div>
        </div>
    );
}
