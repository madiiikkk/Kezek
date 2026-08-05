import NewBusiness from '../../../molecules/Crm/Businesses/NewBusiness';
import Searchbar from '../../../molecules/Crm/Businesses/Searchbar';

export default function BusinessHeader() {
    return (
        <div className="flex justify-center items-center gap-5">
            <Searchbar />

            <div className="w-px h-8 bg-gray-200"></div>

            <NewBusiness />
        </div>
    );
}
