import { Camera } from 'lucide-react';
import Icon from '../../../../atoms/Icon';
import Typography from '../../../../atoms/Typography';

export default function EditImage() {
    return (
        <div className="flex flex-col items-center w-[130px]">
            <label className="flex flex-col items-center cursor-pointer group w-full">
                <div className="flex items-center justify-center w-[120px] h-[120px] mb-3 bg-[#f8f9ff] border-[2px] border-dashed border-[#CBD5E1] rounded-full group-hover:bg-[#E2EAF6] transition-colors overflow-hidden relative">
                    <Icon icon={Camera} size={32} />
                </div>

                <div className="text-center">
                    <Typography
                        className="text-[12px] font-medium text-[#64748B]"
                        text={'JPG, PNG до 2MB'}
                    />
                </div>

                <input
                    type="file"
                    className="hidden"
                    accept="image/png, image/jpeg"
                />
            </label>
        </div>
    );
}
