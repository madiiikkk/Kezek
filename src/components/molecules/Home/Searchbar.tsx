import { Search } from 'lucide-react';
import Icon from '../../atoms/Icon';
import Input from '../../atoms/Input';

type SearchbarProps = {
    className?: string;
    placeholder: string;
};

export default function Searchbar({ className, placeholder }: SearchbarProps) {
    return (
        <div
            className={
                className ||
                'flex gap-2 border w-full border-[#c7c4d8] px-3 py-2 rounded-3xl '
            }
        >
            <Icon icon={Search} size={22} className="text-[#858585]" />
            <Input type="text" placeholder={placeholder} />
        </div>
    );
}
