import NewService from '../../../molecules/Crm/Services/NewService';
import ServiceSelector from '../../../molecules/Crm/Services/ServiceSelector';

export default function ServicesHeader() {
    return (
        <div className="flex justify-center items-center gap-5">
            <ServiceSelector />
            <div className="w-px h-8 bg-gray-200"></div>
            <NewService />
        </div>
    );
}
