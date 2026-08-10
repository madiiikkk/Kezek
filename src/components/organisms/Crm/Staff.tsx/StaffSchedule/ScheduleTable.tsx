import ScheduleCalendar from './ScheduleCalendar';

export default function ScheduleTable() {
    return (
        <div className="flex flex-col gap-5">
            <div>
                <ScheduleCalendar />
            </div>
        </div>
    );
}
