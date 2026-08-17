import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import { listBusinesses } from '../../../../api/businesses';
import Select from '../../../atoms/Select';
import { useBusiness } from '../../../../context/BusinessContext';

export default function ServiceSelector() {
    const { selectedBusiness, setSelectedBusiness } = useBusiness();

    const { data: businessOptions, isLoading } = useQuery({
        queryKey: ['businesses'],
        queryFn: listBusinesses,
        retry: false,
        select: (response) =>
            response.data.map((business) => ({
                id: business.id,
                label: business.name
            }))
    });

    useEffect(() => {
        if (
            businessOptions &&
            businessOptions.length > 0 &&
            !selectedBusiness
        ) {
            setSelectedBusiness(businessOptions[0]);
        }
    }, [businessOptions, selectedBusiness]);

    if (isLoading || !selectedBusiness) {
        return <div className="p-3 text-sm text-slate-500">Загрузка...</div>;
    }

    return (
        <div className="flex bg-[#eff4ff] border border-[#c7c4d8] rounded-2xl w-full">
            <Select
                options={businessOptions || []}
                value={selectedBusiness}
                onChange={setSelectedBusiness}
                className="w-[200px]"
            />
        </div>
    );
}
