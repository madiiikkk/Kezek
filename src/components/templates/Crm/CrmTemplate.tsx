import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../../organisms/Crm/Sidebar';
import Header from '../../organisms/Crm/Header';
import {
    LayoutDashboard,
    Building2,
    CalendarDays,
    Layers,
    Users,
    Settings,
    MessageSquareText
} from 'lucide-react';

const navigationData = [
    { id: 1, navigator: 'dashboard', label: 'Дашборд', icon: LayoutDashboard },
    {
        id: 2,
        navigator: 'my-businesses',
        label: 'Мои бизнесы',
        icon: Building2
    },
    {
        id: 3,
        navigator: 'appointments',
        label: 'Назначения',
        icon: CalendarDays
    },
    { id: 4, navigator: 'services', label: 'Услуги', icon: Layers },
    { id: 5, navigator: 'staff', label: 'Персонал', icon: Users },
    { id: 6, navigator: 'settings', label: 'Настройки', icon: Settings },
    { id: 7, navigator: 'reviews', label: 'Отзывы', icon: MessageSquareText }
];

export default function Crm() {
    const location = useLocation();

    const activeItem = navigationData.find((item) =>
        location.pathname.includes(item.navigator)
    );

    const headerLabel = activeItem ? activeItem.label : 'Дашборд';

    return (
        <main className="h-screen bg-[#f8f9ff] flex overflow-hidden">
            <aside className="flex-none border-r border-[#c7c4d8] h-full">
                <Sidebar navigationItems={navigationData} />
            </aside>

            <div className="flex-1 flex flex-col min-w-0 h-full overflow-y-auto">
                <header className="shrink-0">
                    <Header label={headerLabel} />
                </header>
                <section className="py-9 px-10 flex-1">
                    <Outlet />
                </section>
            </div>
        </main>
    );
}
