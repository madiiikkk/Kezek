import Select, { type SelectOption } from '../../../../atoms/Select';
import Typography from '../../../../atoms/Typography';

interface RowItemProps {
    text: string;
    description: string;
    selectOptions: SelectOption[];
    value: SelectOption;
    onChange: (option: SelectOption) => void;
}

export default function RowItem({
    text,
    selectOptions,
    value,
    onChange,
    description
}: RowItemProps) {
    return (
        <div className="flex flex-col justify-start items-start py-2 gap-2 w-full">
            <Typography
                text={text}
                className="text-sm font-medium text-slate-700"
            />

            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-5 w-full">
                <Select
                    options={selectOptions}
                    value={value}
                    onChange={onChange}
                    className="w-full sm:w-48 shrink-0 border border-[#c7c4d8] rounded-xl"
                />
                <Typography
                    text={description}
                    className="text-sm font-medium text-slate-700 w-full sm:flex-1 leading-relaxed"
                />
            </div>
        </div>
    );
}
