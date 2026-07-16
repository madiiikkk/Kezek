import SectionHeader from '../../molecules/Home/SectionHeader';
import CategoryGrid from '../../organisms/Home/CategoryGrid';
import GlobalSearchBar from '../../organisms/Home/GlobalSearchBar';

export default function HeroSection() {
    return (
        <div className="flex flex-col gap-24 md:gap-48 bg-[#FAFAFC] pb-10">
            <div className="flex flex-col gap-20 md:gap-30">
                <div className="flex justify-center items-center pt-20 md:pt-20">
                    <SectionHeader />
                </div>

                <div className="flex justify-center items-center px-4">
                    <GlobalSearchBar />
                </div>
            </div>

            <div className="flex justify-center items-center w-full">
                <CategoryGrid />
            </div>
        </div>
    );
}
