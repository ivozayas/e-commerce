import PageContainer from "../Pages/PageContainer";
import PageHeader from "../Pages/PageHeader";

export default function ShopPage(){
    return (
        <PageContainer>
            <div className="bg-white h-full rounded-lg shadow-md p-6 scroll-y-auto">
                <PageHeader title="Home"/>
            </div>
        </PageContainer>
    )
}