import Typography from '../../../atoms/Typography';

type CardProps = {
    title: string;
    num: number;
    leftBorderClass: string;
};

export default function Cards({ title, num, leftBorderClass }: CardProps) {
    return (
        <div
            className={`bg-white flex flex-col gap-4 rounded-2xl border border-[#c7c4d8] px-5 py-8 ${leftBorderClass}`}
        >
            <Typography
                className="text-[15px] font-medium text-[#6d6d6d] mb-2"
                text={title}
            />
            <Typography
                className="text-4xl font-bold text-slate-900"
                text={num}
            />
        </div>
    );
}
