import { CircleAlert } from 'lucide-react';
import Icon from '../../../../atoms/Icon';
import Typography from '../../../../atoms/Typography';

interface StaffActiveProps {
    isActive: boolean;
    onChange: (value: boolean) => void;
}

export default function StaffActive({ isActive, onChange }: StaffActiveProps) {
    return (
        <div className="w-full p-5 sm:p-6 bg-[white] border border-[#c7c4d8] rounded-2xl sm:rounded-3xl">
            <div className="flex items-center gap-2 mb-3">
                <Icon
                    icon={CircleAlert}
                    size={16}
                    className="text-indigo-600"
                />
                <Typography
                    text={'Статус'}
                    className="text-[14px] text-gray-500"
                />
            </div>

            <label className="flex items-center cursor-pointer">
                <div className="relative">
                    <input
                        type="checkbox"
                        className="hidden"
                        checked={isActive}
                        onChange={(e) => onChange(e.target.checked)}
                    />

                    <div
                        className={`w-11 h-6 rounded-full transition-colors ${
                            isActive ? 'bg-indigo-600' : 'bg-gray-300'
                        }`}
                    ></div>

                    <div
                        className={`absolute left-[2px] top-[2px] bg-white w-5 h-5 rounded-full transition-transform ${
                            isActive ? 'translate-x-full' : 'translate-x-0'
                        }`}
                    ></div>
                </div>

                <Typography
                    text={isActive ? 'Активен' : 'Неактивен'}
                    className="ml-3 text-[15px] font-medium text-[#1E293B]"
                />
            </label>
        </div>
    );
}
