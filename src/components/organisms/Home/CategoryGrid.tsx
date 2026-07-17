import { ChevronRight } from 'lucide-react';
import Icon from '../../atoms/Icon';
import Typography from '../../atoms/Typography';
import { NavLink } from 'react-router-dom';
import CategoryCard from '../../molecules/Home/CategoryCard';

export default function CategoryGrid() {
    return (
        <div className="w-full px-4 md:px-12 lg:px-24 flex flex-col gap-6 md:gap-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div className="flex flex-col gap-1 md:gap-2">
                    <Typography
                        text={'Популярные категории'}
                        className="font-bold text-2xl md:text-3xl text-[#1A1A24]"
                    />
                    <Typography
                        text={'Выберите услугу из каталога'}
                        className="text-sm md:text-lg text-[#6E7191]"
                    />
                </div>

                <div>
                    <NavLink
                        to={'/login'}
                        className={
                            'flex justify-center items-center gap-1 group pb-1 sm:pb-0'
                        }
                    >
                        <Typography
                            text={'Все категории'}
                            className="text-sm md:text-base font-medium text-[#4F46E5] group-hover:underline"
                        />
                        <Icon
                            icon={ChevronRight}
                            size={18}
                            className="text-[#4F46E5]"
                        />
                    </NavLink>
                </div>
            </div>

            <div className="w-full">
                <CategoryCard />
            </div>
        </div>
    );
}
