import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import BusinessCard from '../../components/organisms/Crm/Businesses/BusinessCard';
import Cards from '../../components/organisms/Crm/Businesses/Cards';
import { listBusinesses } from '../../api/businesses';

export default function Mybusinesses() {
    const { isPending, error, data } = useQuery({
        queryKey: ['businesses'],
        queryFn: () => listBusinesses(),
        retry: false
    });

    const cardsData = useMemo(() => {
        if (!data?.data) return [];

        const businesses = data.data;
        const total = businesses.length;
        const active = businesses.filter((b) => b.status === 'active').length;
        const drafts = businesses.filter((b) => b.status === 'draft').length;
        const blocked = businesses.filter((b) => b.status === 'blocked').length;

        return [
            {
                id: 1,
                title: 'Всего бизнесов',
                num: total,
                leftBorderClass: ''
            },
            {
                id: 2,
                title: 'Активные',
                num: active,
                leftBorderClass: 'border-l-[4px] border-l-green-500'
            },
            {
                id: 3,
                title: 'Черновики',
                num: drafts,
                leftBorderClass: 'border-l-[4px] border-l-slate-400'
            },
            {
                id: 4,
                title: 'Заблокированные',
                num: blocked,
                leftBorderClass: 'border-l-[4px] border-l-red-500'
            }
        ];
    }, [data]);

    if (isPending) {
        return (
            <div className="w-full flex justify-center items-center py-10">
                <p className="text-gray-500">Загрузка бизнесов...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full flex justify-center items-center py-10">
                <p className="text-red-500">
                    Произошла ошибка при загрузке бизнесов. Возможно, сессия
                    истекла.
                </p>
            </div>
        );
    }

    const hasNoBusinesses = data?.data?.length === 0;

    return (
        <div className="w-full flex flex-col gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9">
                {cardsData.map((card) => (
                    <Cards
                        key={card.id}
                        title={card.title}
                        num={card.num}
                        leftBorderClass={card.leftBorderClass}
                    />
                ))}
            </div>

            {hasNoBusinesses ? (
                <div className="py-4">
                    <p className="text-gray-500">
                        У вас пока нет ни одного бизнеса
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {data.data.map((business) => (
                        <BusinessCard key={business.id} business={business} />
                    ))}
                </div>
            )}
        </div>
    );
}
