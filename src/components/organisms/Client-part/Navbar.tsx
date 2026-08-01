import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Typography from '../../atoms/Typography';
import Searchbar from '../../molecules/Home/Searchbar';

const navigation = [
    {
        id: 1,
        NavLink: 'catalog',
        Typography: 'Каталог'
    },
    {
        id: 2,
        NavLink: 'favorites',
        Typography: 'Избранное'
    },
    {
        id: 3,
        NavLink: 'my-bookings',
        Typography: 'Мои Брони'
    }
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex flex-wrap justify-between items-center w-full px-19 md:px-24 py-2 gap-y-4">
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 lg:gap-15 w-full lg:w-auto justify-between lg:justify-start">
                <NavLink
                    to={'/'}
                    className="cursor-pointer pb-1 shrink-0"
                    onClick={() => console.log('logo')}
                >
                    <Typography
                        text={'Kezek.kz'}
                        className="text-[#4F46E5] text-2xl md:text-3xl font-bold tracking-tight select-none"
                    />
                </NavLink>

                <button
                    className="lg:hidden p-1 text-[#4F46E5]"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <div className="flex justify-center items-center w-full lg:w-auto order-last lg:order-0 mt-2 lg:mt-0">
                    <Searchbar placeholder="Поиск услуг..." />
                </div>
            </div>

            <div
                className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-center justify-between sm:justify-end gap-4 lg:gap-24 xl:gap-40 w-full lg:w-auto mt-4 lg:mt-0`}
            >
                <div className="flex flex-col lg:flex-row gap-4 md:gap-6 items-center w-full lg:w-auto">
                    {navigation.map((item) => (
                        <div key={item.id}>
                            <NavLink
                                to={item.NavLink}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Typography
                                    text={item.Typography}
                                    className="text-[#858585] text-base md:text-lg font-medium tracking-tight select-none hover:border-b-2 border-[#4F46E5] hover:text-[#4F46E5]"
                                />
                            </NavLink>
                        </div>
                    ))}
                </div>

                <div className="pb-2 lg:pb-0 ">
                    <NavLink
                        to={'/auth/login'}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Typography
                            text={'Войти'}
                            className="text-[#4F46E5] text-base md:text-lg font-medium tracking-tight select-none hover:border-b-2 border-[#4F46E5]"
                        />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
