import { NavLink } from 'react-router-dom';

export default function Logo() {
    return (
        <div className="">
            <div className="">
                <NavLink to={'/crm/my-businesses'}>
                    <div className="flex flex-col justify-center">
                        <span className="text-[#4F46E5] text-2xl md:text-3xl font-bold tracking-tight select-none p-0">
                            Kezek.kz
                        </span>
                        <span className="font-medium select-none text-[#222222]">
                            Bussiness portal
                        </span>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}
