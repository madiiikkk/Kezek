import Icon from '../../../../atoms/Icon';
import Input from '../../../../atoms/Input';
import { Search } from 'lucide-react';

export default function StaffSearchbar() {
    return (
        <div className="flex items-center gap-3 w-full px-4 py-3 bg-[#f8f9ff] border border-[#E2E8F0] rounded-xl focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all">
            <Icon icon={Search} size={20} className="text-[#64748B] shrink-0" />

            <Input
                type="text"
                placeholder="Поиск услуг..."
                className="w-full bg-transparent border-none outline-none focus:ring-0 p-0 text-[15px] text-[#1E293B] placeholder-[#64748B]"
            />
        </div>
    );
}
