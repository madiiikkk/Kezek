import ScheduleSelects from './ScheduleSelects';
import ScheduleTable from './ScheduleTable';
import ScheduleTypes from './ScheduleTypes';

export default function ScheduleTemplate() {
    return (
        <div className="flex gap-10">
            <div className="flex flex-auto flex-col gap-10">
                <div className="flex justify-between items-center">
                    <ScheduleTypes />
                    <ScheduleSelects />
                </div>
                <div className="w-full border border-[#c7c4d8] rounded-3xl bg-white p-6">
                    <div className="">
                        <ScheduleTable />
                    </div>
                </div>
            </div>
        </div>
    );
}
