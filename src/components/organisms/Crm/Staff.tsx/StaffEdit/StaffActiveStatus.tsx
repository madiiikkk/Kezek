import React from 'react';
import { User } from 'lucide-react';
// Убедитесь, что путь до компонента Icon правильный для этого файла
import Icon from '../../../../atoms/Icon';
import Typography from '../../../../atoms/Typography';

interface StaffActiveStatusProps {
    name?: string;
    position?: string;
    avatarUrl?: string;
    isActive?: boolean;
    servicesCount?: number;
    bookingsCount?: number;
}

export default function StaffActiveStatus({
    name = '',
    position = '',
    avatarUrl = '',
    isActive = true,
    servicesCount = 0,
    bookingsCount = 0
}: StaffActiveStatusProps) {
    return (
        <div className="w-full bg-white rounded-3xl border border-[#c7c4d8] overflow-hidden flex flex-col items-center">
            <div className="w-full h-24 bg-gradient-to-r from-[#DFDBFF] via-[#E3EAFF] to-[#DDF0FF]" />

            <div className="relative -mt-12">
                <div className="w-24 h-24 rounded-full border-4 border-white shadow-sm overflow-hidden bg-slate-100 flex items-center justify-center text-slate-400">
                    {avatarUrl ? (
                        <img
                            src={avatarUrl}
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <Icon icon={User} size={32} />
                    )}
                </div>
                <span
                    className={`absolute bottom-0 right-1 w-5 h-5 rounded-full border-[3px] border-white ${
                        isActive ? 'bg-[#10B981]' : 'bg-slate-400'
                    }`}
                />
            </div>

            <div className="flex flex-col items-center mt-3 px-4 text-center">
                <Typography
                    className="text-lg font-semibold text-[#0F172A] leading-snug"
                    text={name}
                />
                <Typography
                    className="text-sm text-[#64748B] mt-0.5 font-normal"
                    text={position}
                />
            </div>

            <div className="mt-4">
                {isActive ? (
                    <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#EAFBF4] border border-[#A7F3D0]/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                        <Typography
                            className="text-[#059669] text-xs font-medium"
                            text={'Активен в виджете'}
                        />
                    </div>
                ) : (
                    <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-slate-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                        <Typography
                            className="text-slate-500 text-xs font-medium"
                            text={'Скрыт из виджета'}
                        />
                    </div>
                )}
            </div>

            <div className="w-full px-6 mt-6 mb-4">
                <hr className="border-t border-[#F1F5F9]" />
            </div>

            <div className="flex items-center justify-around w-full px-6 pb-6">
                <div className="flex flex-col items-center">
                    <Typography
                        className="text-[22px] sm:text-2xl font-semibold text-[#0F172A] leading-none"
                        text={String(servicesCount)}
                    />
                    <Typography
                        className="text-[11px] font-medium text-[#64748B] uppercase tracking-wider mt-1"
                        text={'услуг'}
                    />
                </div>

                <div className="flex flex-col items-center">
                    <Typography
                        className="text-[22px] sm:text-2xl font-semibold text-[#0F172A] leading-none"
                        text={String(bookingsCount)}
                    />
                    <Typography
                        className="text-[11px] font-medium text-[#64748B] uppercase tracking-wider mt-1"
                        text={'записей'}
                    />
                </div>
            </div>
        </div>
    );
}
