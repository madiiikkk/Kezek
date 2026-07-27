import { Outlet } from 'react-router-dom';
import Navbar from '../components/organisms/Client-part/Navbar';

export default function MainAppLayout() {
    return (
        <section className="bg-[#f8f9ff] h-full">
            <nav className="flex  py-4 border-b border-[#c7c4d8] ">
                <Navbar />
            </nav>
            <section className="bg-[#f8f9ff]">
                <Outlet />
            </section>
        </section>
    );
}
