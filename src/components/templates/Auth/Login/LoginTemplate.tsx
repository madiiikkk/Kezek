import { useState } from 'react';
import { User } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';

import Icon from '../../../atoms/Icon';
import Input from '../../../atoms/Input';
import Button from '../../../atoms/Button';
import Typography from '../../../atoms/Typography';
import { loginUser } from '../../../../api/auth';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../../context/UserContext';

export default function LoginTemplate() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useUser();

    const navigate = useNavigate();

    const loginMutation = useMutation({
        mutationFn: () => loginUser(email, password),
        onSuccess: (data) => {
            console.log('Успешный вход', data);

            setUser(data.data);

            navigate('/');
        },
        onError: (error) => {
            console.error('Ошибка', error);
        }
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email && password) {
            loginMutation.mutate();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex">
                <Icon icon={User} />
                <Input
                    type="email"
                    placeholder="Введите почту или номер"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="flex">
                <Icon icon={User} />
                <Input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <Button type="submit" disabled={loginMutation.isPending}>
                <Typography
                    text={loginMutation.isPending ? 'Загрузка...' : 'Войти'}
                />
            </Button>
        </form>
    );
}
