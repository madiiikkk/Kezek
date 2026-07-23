import { NavLink } from 'react-router-dom';
import Typography from '../../atoms/Typography';
import Icon from '../../atoms/Icon';
import { ChevronRight } from 'lucide-react';

export default function CatalogHeader() {
    return (
        <div className="flex justify-start items-center gap-3">
            <NavLink to={'/'} className={''}>
                <Typography text="Главная" className="text-lg" />
            </NavLink>
            <Icon icon={ChevronRight} size={15} className="mt-1" />
            <NavLink to={'/catalog'} className={''}>
                <Typography text="Каталог" className="text-lg text-[#4F46E5]" />
            </NavLink>
        </div>
    );
}
