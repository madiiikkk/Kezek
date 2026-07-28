import NewBusiness from '../../../molecules/Crm/Businesses/NewBusiness';
import Searchbar from '../../../molecules/Crm/Businesses/Searchbar';

export default function BusinessHeader() {
    return (
        <div className="flex justify-center items-center gap-6">
            <Searchbar />

            <div className="w-px h-8 bg-gray-200"></div>

            <NewBusiness />

            <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 cursor-pointer shrink-0">
                <img
                    src="https://i.pinimg.com/736x/8e/10/1f/8e101f5200df69299f93e7f12566a113.jpg"
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}
