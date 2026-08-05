import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout } from '../../../api/auth';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import Typography from '../../atoms/Typography';
import { LogOut } from 'lucide-react';

export default function Logout() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutate: handleLogout, isPending } = useMutation({
        mutationFn: logout,
        onSuccess: () => {
            queryClient.clear();

            navigate('/auth/login');
        },
        onError: (error) => {
            console.error('Не удалось выйти из системы:', error);
        }
    });

    return (
        <Button
            onClick={() => handleLogout()}
            disabled={isPending}
            className={`flex items-center px-4 py-3 w-full rounded-xl gap-3 transition-colors bg-transparent text-red-500 hover:bg-red-50 cursor-pointer ${
                isPending ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
            <Icon icon={LogOut} size={24} />
            <Typography
                className="text-lg font-medium"
                text={isPending ? 'Выход...' : 'Выйти'}
            />
        </Button>
    );
}
