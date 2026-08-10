import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MONTHS = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
];

const WEEKDAYS = [
    { label: 'Пн', isWeekend: false },
    { label: 'Вт', isWeekend: false },
    { label: 'Ср', isWeekend: false },
    { label: 'Чт', isWeekend: false },
    { label: 'Пт', isWeekend: false },
    { label: 'Сб', isWeekend: true },
    { label: 'Вс', isWeekend: true }
];

export default function ScheduleCalendar() {
    const today = new Date();

    const [currentDate, setCurrentDate] = useState(
        new Date(today.getFullYear(), today.getMonth(), 1)
    );

    const [selectedDate, setSelectedDate] = useState<Date>(today);

    const daysWithEvents = ['2023-10-12', '2026-08-12', '2026-08-15'];

    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
    };

    const handleDateSelect = (day: number) => {
        setSelectedDate(new Date(currentYear, currentMonth, day));
    };

    const getDaysInMonth = (year: number, month: number) =>
        new Date(year, month + 1, 0).getDate();

    const getFirstDayOfMonth = (year: number, month: number) => {
        const day = new Date(year, month, 1).getDay();
        return day === 0 ? 6 : day - 1;
    };

    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayIndex = getFirstDayOfMonth(currentYear, currentMonth);

    const daysInPrevMonth = getDaysInMonth(currentYear, currentMonth - 1);
    const prevMonthDays = Array.from(
        { length: firstDayIndex },
        (_, i) => daysInPrevMonth - firstDayIndex + i + 1
    );

    const currentMonthDays = Array.from(
        { length: daysInMonth },
        (_, i) => i + 1
    );

    const totalDisplayedDays = firstDayIndex + daysInMonth;
    const nextDaysCount = (7 - (totalDisplayedDays % 7)) % 7;
    const nextMonthDays = Array.from(
        { length: nextDaysCount },
        (_, i) => i + 1
    );

    const isSelected = (day: number) => {
        return (
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentMonth &&
            selectedDate.getFullYear() === currentYear
        );
    };

    const hasEvent = (day: number) => {
        const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return daysWithEvents.includes(dateString);
    };

    return (
        <div className="w-full bg-white p-2">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-[#0f172a]">
                    {MONTHS[currentMonth]} {currentYear}
                </h2>
                <div className="flex items-center gap-3">
                    <button
                        onClick={handlePrevMonth}
                        className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors focus:outline-none"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={handleNextMonth}
                        className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors focus:outline-none"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 text-center mb-4">
                {WEEKDAYS.map((day, index) => (
                    <div
                        key={index}
                        className={`text-[13px] font-bold uppercase tracking-wider ${
                            day.isWeekend ? 'text-[#d32f2f]' : 'text-slate-500'
                        }`}
                    >
                        {day.label}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 border-t border-l border-[#e2e2ea] rounded-lg overflow-hidden">
                {prevMonthDays.map((day, index) => (
                    <div
                        key={`prev-${index}`}
                        className="flex flex-col items-center justify-center h-20 border-b border-r border-[#e2e2ea] bg-slate-50/50 relative text-slate-300 font-medium text-[15px]"
                    >
                        {day}
                    </div>
                ))}

                {currentMonthDays.map((day) => {
                    const selected = isSelected(day);
                    const withEvent = hasEvent(day);
                    const dayOfWeek = (firstDayIndex + day - 1) % 7;
                    const isWeekend = dayOfWeek === 5 || dayOfWeek === 6;

                    return (
                        <div
                            key={day}
                            className="flex flex-col items-center justify-center h-20 border-b border-r border-[#e2e2ea] relative cursor-pointer group hover:bg-slate-50 transition-colors"
                            onClick={() => handleDateSelect(day)}
                        >
                            <div
                                className={`flex items-center justify-center w-14 h-11 transition-all duration-200 ${
                                    selected
                                        ? 'bg-[#3b36db] text-white rounded-[20px] font-semibold shadow-md'
                                        : `rounded-[20px] font-medium group-hover:bg-slate-200 ${
                                              isWeekend
                                                  ? 'text-[#d32f2f]'
                                                  : 'text-[#0f172a]'
                                          }`
                                }`}
                            >
                                {day}
                            </div>

                            {withEvent && !selected && (
                                <div className="absolute bottom-2 w-1.5 h-1.5 bg-[#d32f2f] rounded-full"></div>
                            )}
                        </div>
                    );
                })}

                {nextMonthDays.map((day, index) => (
                    <div
                        key={`next-${index}`}
                        className="flex flex-col items-center justify-center h-20 border-b border-r border-[#e2e2ea] bg-slate-50/50 relative text-slate-300 font-medium text-[15px]"
                    >
                        {day}
                    </div>
                ))}
            </div>
        </div>
    );
}
