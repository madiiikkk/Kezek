import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import StaffActive from '../../components/molecules/Crm/Staff/StaffAdd/StaffActive';
import StaffImage from '../../components/molecules/Crm/Staff/StaffAdd/StaffImage';
import StaffInfo from '../../components/molecules/Crm/Staff/StaffAdd/StaffInfo';
import StaffAddHeader from '../../components/organisms/Crm/Staff.tsx/StaffCreate/StaffAddHeader';
import { staffAdd } from '../../api/staff';
import { useState } from 'react';
import { useBusiness } from '../../context/BusinessContext';
import Typography from '../../components/atoms/Typography';
import Button from '../../components/atoms/Button';
import { useNavigate } from 'react-router-dom';

export default function AddStaf() {
    const [isStaffActive, setIsStaffActive] = useState(true);
    const [staffFirstName, setStaffFirstName] = useState('');
    const [staffLastName, setStaffLastName] = useState('');
    const [staffPosition, setStaffPosition] = useState('');
    const [staffDescription, setStaffDescription] = useState('');

    const { selectedBusiness } = useBusiness();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const createStaff = useMutation({
        mutationFn: () => {
            if (!selectedBusiness) throw new Error('Бизнес не выбран');

            return staffAdd({
                id: Number(selectedBusiness.id),
                first_name: staffFirstName,
                last_name: staffLastName,
                position: staffPosition,
                is_active: isStaffActive,
                description: staffDescription
            });
        },
        onSuccess: (data) => {
            console.log('Создан мастер: ', data);

            queryClient.invalidateQueries({ queryKey: ['masters'] });
        },
        onError: (error) => {
            console.error(error);
        }
    });

    return (
        <div className="w-full mx-auto">
            <StaffAddHeader />

            <div className="flex flex-col md:flex-row gap-10 py-5 items-start w-full">
                <div className="flex flex-col gap-10 w-full md:w-[300px] shrink-0">
                    <StaffImage />

                    <StaffActive
                        isActive={isStaffActive}
                        onChange={setIsStaffActive}
                    />
                </div>

                <div className="flex flex-col gap-6 w-full flex-1">
                    <StaffInfo
                        first_name={staffFirstName}
                        onNameChange={setStaffFirstName}
                        last_name={staffLastName}
                        onLastNameChange={setStaffLastName}
                        position={staffPosition}
                        onPositionChange={setStaffPosition}
                        description={staffDescription}
                        onDescriptionChange={setStaffDescription}
                    />
                    <div>
                        <Button
                            onClick={() => {
                                createStaff.mutate();
                                navigate('/crm/staff');
                            }}
                        >
                            <Typography text={'Сохранить'} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
