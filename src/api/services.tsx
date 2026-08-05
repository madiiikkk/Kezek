import { api } from './api';

export const createService = async (
    id: number,
    name: string,
    description: string,
    price: number,
    duration_minutes: number,
    buffer_before_minutes: number,
    buffer_after_minutes: number,
    is_active: boolean
) => {
    const response = await api.post(
        `/api/businesses/${id}/services/`,
        {
            name,
            description,
            price,
            duration_minutes,
            buffer_before_minutes,
            buffer_after_minutes,
            is_active
        },
        {
            withCredentials: true
        }
    );

    return response.data;
};

export const listOfServices = async (id: number) => {
    const response = await api.get(`/api/businesses/${id}/services/`, {
        withCredentials: true
    });

    return response.data;
};
