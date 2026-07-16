import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import MainAppLayout from '../pages/MainAppLayout';
import Catalog from '../pages/Catalog';
import Crm from '../pages/Crm';
import Favorites from '../pages/Favorites';
import Mybookings from '../pages/Mybookings';
import Dashboard from '../pages/CRM/Dashboard';
import Mybusinesses from '../pages/CRM/Mybusinesses';
import Appointments from '../pages/CRM/Appointments';
import Services from '../pages/CRM/Services';
import Staff from '../pages/CRM/Staff';
import Settings from '../pages/CRM/Settings';
import Reviews from '../pages/CRM/Reviews';
import Home from '../pages/Home';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainAppLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="catalog" element={<Catalog />} />
                <Route path="favorites" element={<Favorites />} />
                <Route path="my-bookings" element={<Mybookings />} />
            </Route>

            <Route path="/crm" element={<Crm />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="my-businesses" element={<Mybusinesses />} />
                <Route path="appointments" element={<Appointments />} />
                <Route path="services" element={<Services />} />
                <Route path="staff" element={<Staff />} />
                <Route path="settings" element={<Settings />} />
                <Route path="reviews" element={<Reviews />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
        </Routes>
    );
}

export default App;
