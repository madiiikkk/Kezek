import { useState } from 'react';
import { User, Mail, Lock, Shield } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import Icon from '../../../atoms/Icon';
import Input from '../../../atoms/Input';
import Button from '../../../atoms/Button';
import Typography from '../../../atoms/Typography';
import { registerUser } from '../../../../api/auth';

export default function RegisterTemplate() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [validationError, setValidationError] = useState('');

    const navigate = useNavigate();

    const registerMutation = useMutation({
        mutationFn: () =>
            registerUser({
                email,
                first_name: firstName,
                last_name: lastName,
                role,
                password,
                confirm_password: confirmPassword
            }),
        onSuccess: (data) => {
            console.log('Успешная регистрация', data);
            navigate('/auth/login');
        },
        onError: (error) => {
            console.error('Ошибка регистрации', error);
        }
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setValidationError('');

        if (password !== confirmPassword) {
            setValidationError('Пароли не совпадают!');
            return;
        }

        if (email && firstName && lastName && password && role) {
            registerMutation.mutate();
        } else {
            setValidationError('Пожалуйста, заполните все поля');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <Icon icon={Mail} />
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="flex items-center gap-2">
                <Icon icon={User} />
                <Input
                    type="text"
                    placeholder="Имя (First Name)"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>

            <div className="flex items-center gap-2">
                <Icon icon={User} />
                <Input
                    type="text"
                    placeholder="Фамилия (Last Name)"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>

            <div className="flex items-center gap-2">
                <Icon icon={Shield} />
                <Input
                    type="text"
                    placeholder="Роль (например: client, admin)"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />
            </div>

            <div className="flex items-center gap-2">
                <Icon icon={Lock} />
                <Input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="flex items-center gap-2">
                <Icon icon={Lock} />
                <Input
                    type="password"
                    placeholder="Подтвердите пароль"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>

            {validationError && (
                <div className="text-red-500 text-sm">{validationError}</div>
            )}

            {/* Вывод ошибки от сервера */}
            {registerMutation.isError && (
                <div className="text-red-500 text-sm">
                    Ошибка при регистрации. Проверьте данные.
                </div>
            )}

            <Button type="submit" disabled={registerMutation.isPending}>
                <Typography
                    text={
                        registerMutation.isPending
                            ? 'Загрузка...'
                            : 'Зарегистрироваться'
                    }
                />
            </Button>
        </form>
    );
}
