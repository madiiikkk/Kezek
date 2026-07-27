type CatalogTeplateProps = {
    header: React.ReactNode;
    filter: React.ReactNode;
    search: React.ReactNode;
    catalog: React.ReactNode;
    pagination: React.ReactNode;
};

export default function CatalogTemplate({
    header,
    filter,
    search,
    catalog,
    pagination
}: CatalogTeplateProps) {
    return (
        <div className="flex flex-col py-5 px-19 md:px-24 gap-5">
            <div className="">{header}</div>
            <div className="flex gap-5">
                <div className="basis-[20%]">{filter}</div>
                <div className="flex flex-col gap-5 basis-[80%] ">
                    <div>{search}</div>
                    <div>{catalog}</div>
                    <div>{pagination}</div>
                </div>
            </div>
        </div>
    );
}
