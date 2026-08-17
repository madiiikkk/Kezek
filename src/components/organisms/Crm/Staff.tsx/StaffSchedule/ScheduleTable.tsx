import ScheduleCalendar from './ScheduleCalendar';
import ScheduleChart from './ScheduleChart';
import StaffMain from './StaffMain';

export default function ScheduleTable({ staffId }: { staffId: number }) {
    return (
        <div className="flex flex-col gap-4 md:gap-5 w-full">
            <div className="w-full">
                {/* <ScheduleCalendar /> */}
                {/* <ScheduleChart /> */}
                <StaffMain staffId={staffId} />
            </div>
        </div>
    );
}
