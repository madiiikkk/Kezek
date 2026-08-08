import { api } from './api';

interface StaffAddData {
    id: number;
    first_name: string;
    last_name: string;
    position: string;
    description: string;
    is_active: boolean;
    photo?: FormData;
}

interface StaffEditData {
    id: number;
    first_name: string;
    last_name: string;
    position: string;
    description: string;
    is_active: boolean;
}

export const staffAdd = async ({
    id,
    first_name,
    last_name,
    position,
    description,
    is_active,
    photo
}: StaffAddData) => {
    const response = await api.post(
        `/api/businesses/${id}/staff/`,
        {
            first_name,
            last_name,
            position,
            description,
            is_active,
            photo
        },
        {
            withCredentials: true
        }
    );

    return response.data;
};

export const getOneMaster = async (id: number) => {
    const response = await api.get(`/api/businessses/staff/${id}`, {
        withCredentials: true
    });

    return response.data;
};

export const getMasters = async (id: number) => {
    const response = await api.get(`/api/businesses/${id}/staff/`, {
        withCredentials: true
    });

    return response.data;
};

export const editMasters = async ({
    id,
    first_name,
    last_name,
    position,
    description,
    is_active
}: StaffEditData) => {
    const response = await api.patch(
        `/api/businesses/staff/${id}/`,
        {
            first_name,
            last_name,
            position,
            description,
            is_active
        },
        {
            withCredentials: true
        }
    );

    return response.data;
};

export const deleteMasters = async (id: number) => {
    const response = await api.delete(`/api/businesses/staff/${id}/`, {
        withCredentials: true
    });

    return response.data;
};

export const getStaffById = async (id: number) => {
    const response = await api.get(`/api/businesses/staff/${id}/`, {
        withCredentials: true
    });
    return response.data;
};
