import { ArrowRight } from 'lucide-react';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import Typography from '../../atoms/Typography';
import Searchbar from '../../molecules/Home/Searchbar';
import LocationSelect from '../../molecules/Home/LocationSelect';

export default function GlobalSearchBar() {
    return (
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-3 md:gap-5 items-center p-3 border border-[#c7c4d8] rounded-2xl shadow-xl bg-transparent">
            <div className="flex-1 w-full">
                <Searchbar
                    placeholder="Услуга, специалист или салон"
                    className="flex p-3 w-full gap-3 rounded-xl bg-[#fff] md:bg-[#fff]"
                />
            </div>

            <div className="flex gap-3 w-full md:w-auto md:shrink-0">
                <div className="flex-1 md:flex-none flex items-center">
                    <LocationSelect />
                </div>

                <Button className="bg-[#4F46E5] flex-1 md:flex-none justify-center items-center flex gap-2 rounded-xl px-4 md:px-10 cursor-pointer hover:bg-[#3731aa]">
                    <Typography text={'Найти'} className="text-white text-md" />
                    <Icon icon={ArrowRight} className="text-white" />
                </Button>
            </div>
        </div>
    );
}
