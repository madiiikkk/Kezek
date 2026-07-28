import { Search } from 'lucide-react';
import Icon from '../../../atoms/Icon';
import Input from '../../../atoms/Input';

export default function Searchbar() {
    return (
        <form className="flex gap-2 rounded-xl border border-[#c7c4d8] bg-[#f1f5f9] py-2 px-2 w-full">
            <Icon icon={Search} className="text-[#222222]" />
            <Input type={'text'} placeholder={'Поиск по системе...'} />
        </form>
    );
}
