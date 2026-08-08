import Icon from '../../../../atoms/Icon';
import { Camera } from 'lucide-react';
import Typography from '../../../../atoms/Typography';

export default function StaffImage() {
    return (
        <div className="flex flex-col items-center justify-center p-5 sm:p-8 bg-[white] border border-[#c7c4d8] rounded-2xl sm:rounded-3xl w-full">
            <label className="flex flex-col items-center justify-center cursor-pointer group w-full">
                <div className="flex items-center justify-center w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] mb-4 sm:mb-5 bg-[#f8f9ff] border-2 border-dashed border-[#C3D2EF] rounded-full group-hover:bg-[#E2EAF6] transition-colors">
                    <Icon icon={Camera} />
                </div>

                <div className="flex flex-col text-center">
                    <Typography
                        className="text-[14px] sm:text-[15px] font-medium text-[#1E293B] mb-1"
                        text={'Фотография профиля'}
                    />
                    <Typography
                        className="text-[12px] sm:text-[13px] text-[#64748B] leading-snug"
                        text={'Рекомендуемый размер \n 500x500px, до 2MB.'}
                    />
                </div>

                <input type="file" className="hidden" accept="image/*" />
            </label>
        </div>
    );
}
