import { Search } from 'lucide-react';
import Icon from '../../../atoms/Icon';
import Input from '../../../atoms/Input';

export default function Searchbar() {
    return (
        <div className="flex bg-white px-3 py-2 gap-3 rounded-xl border border-[#c7c4d8]">
            <Icon icon={Search} className="text-[#929292]" />
            <Input placeholder="Поиск мастера..." type={'text'}></Input>
        </div>
    );
}
