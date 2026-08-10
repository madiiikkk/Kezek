import { useNavigate } from 'react-router-dom';
import Button from '../../../atoms/Button';
import Icon from '../../../atoms/Icon';
import { Plus } from 'lucide-react';
import Typography from '../../../atoms/Typography';
import ServiceSelector from '../../../molecules/Crm/Services/ServiceSelector';

export default function StaffHeader() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center gap-5">
            <ServiceSelector />
            <div className="w-px h-8 bg-gray-200"></div>
            <Button
                className="flex justify-center items-center gap-2 px-6 py-3 bg-[#4F46E5] hover:bg-indigo-600 rounded-xl text-white transition-colors shadow-sm w-full "
                onClick={() => navigate('/crm/staff/add')}
            >
                <Icon icon={Plus} size={20} />
                <Typography
                    text={'Добавить мастера'}
                    className="font-semibold text-sm"
                />
            </Button>
        </div>
    );
}
