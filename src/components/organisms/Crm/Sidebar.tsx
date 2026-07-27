import { NavLink } from 'react-router-dom';
import Logo from '../../molecules/Crm/Logo';
import Typography from '../../atoms/Typography';
import Icon from '../../atoms/Icon';
import { type LucideIcon } from 'lucide-react';

export interface NavType {
    id: number;
    navigator: string;
    label: string;
    icon: LucideIcon;
}

interface SideBarProps {
    navigationItems: NavType[];
}

export default function Sidebar({ navigationItems }: SideBarProps) {
    return (
        <div className="border-r border-[#c7c4d8] py-10 px-6 min-h-screen w-80">
            <aside className="flex flex-col gap-10 w-full">
                <div className="flex flex-col items-start px-4">
                    <Logo />
                </div>

                <div className="flex flex-col gap-3 w-full">
                    {navigationItems.map((item) => (
                        <nav key={item.id} className="w-full">
                            <NavLink
                                to={item.navigator}
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-3 w-full rounded-xl gap-3 transition-colors ${
                                        isActive
                                            ? 'bg-[#4F46E5] text-white'
                                            : 'bg-transparent text-[#222222] hover:bg-[#4F46E5] hover:text-white'
                                    }`
                                }
                            >
                                <Icon icon={item.icon} size={24} className="" />
                                <Typography
                                    className="text-lg font-medium"
                                    text={item.label}
                                />
                            </NavLink>
                        </nav>
                    ))}
                </div>
            </aside>
        </div>
    );
}
