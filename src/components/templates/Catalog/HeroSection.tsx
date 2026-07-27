import CatalogHeader from '../../organisms/Catalog/CatalogHeader';
import Sidebar from '../../organisms/Catalog/FilterSidebar';
import Pagination from '../../organisms/Catalog/Pagination';
import SearchBar from '../../organisms/Catalog/SearchBar';
import ServiceCard from '../../organisms/Catalog/ServiceCard';
import CatalogTemplate from './CatalogTemplate';

export default function HeroSection() {
    return (
        <div className="bg-[#f8f9ff] min-h-screen">
            <CatalogTemplate
                header={<CatalogHeader />}
                filter={<Sidebar />}
                search={<SearchBar />}
                catalog={<ServiceCard />}
                pagination={<Pagination />}
            />
        </div>
    );
}
