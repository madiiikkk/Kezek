import Typography from '../../../../atoms/Typography';

export default function TableHeader() {
    return (
        <div className="flex flex-col gap-2 ">
            <Typography
                text={'График работы'}
                className="text-xl font-normal text-gray-900"
            />
            <Typography
                text={
                    'Настройте регулярные рабочие часы для специалистов на каждую неделю.'
                }
                className="text-sm text-gray-900"
            />
        </div>
    );
}
