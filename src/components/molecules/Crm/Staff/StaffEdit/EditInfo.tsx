import Input from '../../../../atoms/Input';
import Typography from '../../../../atoms/Typography';

interface EditInfoProps {
    fullName: string;
    onFullNameChange: (value: string) => void;
    position: string;
    onPositionChange: (value: string) => void;
    description: string;
    onDescriptionChange: (value: string) => void;
    isActive: boolean;
    onIsActiveChange: (value: boolean) => void;
}

export default function EditInfo({
    fullName,
    onFullNameChange,
    position,
    onPositionChange,
    description,
    onDescriptionChange,
    isActive,
    onIsActiveChange
}: EditInfoProps) {
    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1">
                    <Typography
                        className="block text-[13.5px] font-medium text-[#475569] mb-2"
                        text={'Имя и Фамилия'}
                    />
                    <Input
                        type="text"
                        className="w-full px-4 py-2.5 border border-[#CBD5E1] rounded-xl bg-white focus:outline-none focus:border-[#4F46E5] text-[15px] text-[#0F172A]"
                        placeholder="Али Сагунов"
                        value={fullName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onFullNameChange(e.target.value)
                        }
                    />
                </div>

                <div className="flex-1">
                    <Typography
                        className="block text-[13.5px] font-medium text-[#475569] mb-2"
                        text={'Должность / Специализация'}
                    />
                    <Input
                        type="text"
                        className="w-full px-4 py-2.5 border border-[#CBD5E1] rounded-xl bg-white focus:outline-none focus:border-[#4F46E5] text-[15px] text-[#0F172A]"
                        placeholder="Топ Барбер"
                        value={position}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onPositionChange(e.target.value)
                        }
                    />
                </div>
            </div>

            <div>
                <Typography
                    className="block text-[13.5px] font-medium text-[#475569] mb-2"
                    text={'Описание (О мастере)'}
                />
                <textarea
                    className="w-full px-4 py-3 border border-[#CBD5E1] rounded-xl bg-white focus:outline-none focus:border-[#4F46E5] text-[15px] text-[#0F172A] min-h-[100px] resize-none"
                    placeholder="Опытный барбер..."
                    value={description}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        onDescriptionChange(e.target.value)
                    }
                />
            </div>

            <div className="flex items-center justify-between p-4 bg-[#F4F6FF] rounded-xl mt-2 border border-[#E2E8F0]">
                <div className="flex flex-col">
                    <Typography
                        className="text-[14.5px] font-semibold text-[#0F172A] mb-0.5"
                        text={'Мастер активен'}
                    />
                    <Typography
                        className="text-[13px] text-[#64748B]"
                        text={'Отображать мастера в виджете онлайн-записи'}
                    />
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={isActive}
                        onChange={(e) => onIsActiveChange(e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-[#CBD5E1] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3B28CC]"></div>
                </label>
            </div>
        </div>
    );
}
