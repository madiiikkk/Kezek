import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/Auth/LoginPage';
import RegistrationPage from '../pages/Auth/RegistrationPage';
import Authorization from '../pages/Auth/Authorization';

import MainAppLayout from '../pages/MainAppLayout';

import Catalog from '../pages/Catalog';
import Crm from '../pages/CRM/Crm';
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

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserProvider } from '../context/UserContext';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <UserProvider>
                <Routes>
                    <Route path="/" element={<MainAppLayout />}>
                        <Route index element={<Home />} />
                        <Route path="catalog" element={<Catalog />} />
                        <Route path="favorites" element={<Favorites />} />
                        <Route path="my-bookings" element={<Mybookings />} />
                    </Route>

                    <Route path="/crm" element={<Crm />}>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route
                            path="my-businesses"
                            element={<Mybusinesses />}
                        />
                        <Route path="appointments" element={<Appointments />} />
                        <Route path="services" element={<Services />} />
                        <Route path="staff" element={<Staff />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="reviews" element={<Reviews />} />
                    </Route>

                    <Route path="/auth" element={<Authorization />}>
                        <Route path="login" element={<LoginPage />} />
                        <Route path="register" element={<RegistrationPage />} />
                    </Route>
                </Routes>
            </UserProvider>
        </QueryClientProvider>
    );
}

export default App;
