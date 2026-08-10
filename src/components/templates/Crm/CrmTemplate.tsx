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
    MessageSquareText,
    CalendarClock
} from 'lucide-react';
import BusinessHeader from '../../organisms/Crm/Businesses/BusinessHeader';
import ServicesHeader from '../../organisms/Crm/Services/ServicesHeader';
import { BusinessProvider } from '../../../context/BusinessContext';
import StaffHeader from '../../organisms/Crm/Staff.tsx/StaffHeader';

const navigationData = [
    { id: 1, navigator: 'dashboard', label: 'Дашборд', icon: LayoutDashboard },

    {
        id: 2,
        navigator: 'appointments',
        label: 'Назначения',
        icon: CalendarDays
    },
    {
        id: 3,
        navigator: 'my-businesses',
        label: 'Мои бизнесы',
        icon: Building2,
        rightElement: <BusinessHeader />
    },

    {
        id: 4,
        navigator: 'staff',
        label: 'Персонал',
        icon: Users,
        rightElement: <StaffHeader />
    },
    {
        id: 5,
        navigator: 'services',
        label: 'Услуги',
        icon: Layers,
        rightElement: <ServicesHeader />
    },
    {
        id: 6,
        navigator: 'schedule',
        label: 'График работы',
        icon: CalendarClock
    },
    { id: 7, navigator: 'settings', label: 'Настройки', icon: Settings },
    { id: 8, navigator: 'reviews', label: 'Отзывы', icon: MessageSquareText }
];

export default function Crm() {
    const location = useLocation();

    const activeItem = navigationData.find((item) =>
        location.pathname.includes(item.navigator)
    );

    const headerLabel = activeItem ? activeItem.label : 'Дашборд';
    const headerRightElement = activeItem?.rightElement;

    return (
        <BusinessProvider>
            <main className="h-screen w-full bg-[#f8f9ff] flex overflow-hidden">
                <aside className="flex-none border-r border-[#c7c4d8] h-full overflow-y-auto">
                    <Sidebar navigationItems={navigationData} />
                </aside>

                <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
                    <header className="shrink-0">
                        <Header
                            label={headerLabel}
                            rightElement={headerRightElement}
                        />
                    </header>

                    <section className="flex-1 overflow-y-auto py-9 px-10">
                        <Outlet />
                    </section>
                </div>
            </main>
        </BusinessProvider>
    );
}
