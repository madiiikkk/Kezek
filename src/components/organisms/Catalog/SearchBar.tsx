import Icon from '../../atoms/Icon';
import { Search } from 'lucide-react';
import Input from '../../atoms/Input';

export default function SearchBar() {
    return (
        <div className="flex w-full">
            <div className="flex items-center py-4 px-5 border border-[#c7c4d8] bg-[#fff] w-full rounded-3xl">
                <div className="flex items-center gap-3 w-full">
                    <div>
                        <Icon icon={Search} className="text-[#858585]" />
                    </div>
                    <div className="flex w-full">
                        <Input
                            type={'text'}
                            placeholder={'Search by name or keyword'}
                            className="outline-0 bg-transparent placeholder:font-medium placeholder:text-[#858585] text-[#4F46E5] font-medium w-full text-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
