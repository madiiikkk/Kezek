import Typography from '../../atoms/Typography';

export default function SectionHeader() {
    return (
        <div className="flex flex-col justify-center items-center gap-2 px-4 text-center">
            <Typography
                text={'Записывайтесь на услуги'}
                className="text-3xl md:text-5xl font-bold font-['Inter',sans-serif]"
            />
            <Typography
                text={'быстро и удобно'}
                className="text-2xl md:text-4xl font-bold font-['Inter',sans-serif] text-[#4F46E5]"
            />

            <div className="flex flex-col items-center mt-4 md:mt-5 max-w-3xl">
                <Typography
                    text={
                        'Найдите лучших специалистов в вашем городе, выберите удобное время и запишитесь в пару кликов.'
                    }
                    className="text-base md:text-xl font-medium font-['Inter',sans-serif] text-[#464646]"
                />
            </div>
        </div>
    );
}
