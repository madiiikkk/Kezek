import BusinessCard from '../../components/organisms/Crm/Businesses/BusinessCard';
import Cards from '../../components/organisms/Crm/Businesses/Cards';

const cardsData = [
    {
        id: 1,
        title: 'Всего бизнесов',
        num: 3,
        leftBorderClass: ''
    },
    {
        id: 2,
        title: 'Активные',
        num: 1,
        leftBorderClass: 'border-l-[4px] border-l-green-500'
    },
    {
        id: 3,
        title: 'Черновики',
        num: 1,
        leftBorderClass: 'border-l-[4px] border-l-slate-400'
    },
    {
        id: 4,
        title: 'Заблокированные',
        num: 1,
        leftBorderClass: 'border-l-[4px] border-l-red-500'
    }
];

export default function Mybusinesses() {
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

            <div>
                <BusinessCard />
            </div>
        </div>
    );
}
