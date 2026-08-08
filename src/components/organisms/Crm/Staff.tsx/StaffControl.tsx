import { useQuery, useQueryClient } from '@tanstack/react-query';
import Filter from '../../../molecules/Crm/Staff/Filter';
import Pagination from '../../../molecules/Crm/Staff/Pagination';
import Searchbar from '../../../molecules/Crm/Staff/Searchbar';
import StaffTable from '../../../molecules/Crm/Staff/StaffTable';
import { getMasters } from '../../../../api/staff';
import { useBusiness } from '../../../../context/BusinessContext';

export default function StaffControl() {
    const { selectedBusiness } = useBusiness();

    const { isPending, data, error } = useQuery({
        queryKey: ['masters', selectedBusiness?.id],
        queryFn: () => getMasters(Number(selectedBusiness!.id)),
        enabled: !!selectedBusiness?.id,
        retry: false
    });

    if (!selectedBusiness) {
        return (
            <div className="flex justify-center items-center h-64 border bg-white border-[#c7c4d8] rounded-2xl p-5">
                <span className="text-gray-500 text-lg">
                    Пожалуйста, выберите бизнес в верхнем меню.
                </span>
            </div>
        );
    }

    if (isPending) {
        return (
            <div className="flex justify-center items-center h-64 border bg-white border-[#c7c4d8] rounded-2xl p-5">
                <span className="text-gray-500 text-lg">
                    Загрузка данных специалистов...
                </span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-64 border bg-white border-[#c7c4d8] rounded-2xl p-5">
                <span className="text-red-500 text-lg">
                    Произошла ошибка при загрузке данных.
                </span>
            </div>
        );
    }

    const staffList = Array.isArray(data) ? data : data?.data || [];

    return (
        <div className="flex flex-col gap-6 px-5 p-5 border bg-white border-[#c7c4d8] rounded-2xl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <Searchbar />
                <Filter />
            </div>

            <div>
                <StaffTable staffs={staffList} />
            </div>

            <div>
                <Pagination />
            </div>
        </div>
    );
}
