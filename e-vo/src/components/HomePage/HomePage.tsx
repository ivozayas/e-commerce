import PageContainer from "../Pages/PageContainer";
import PageHeader from "../Pages/PageHeader";

export default function HomePage(){
    return (
        <PageContainer>
            <div className="bg-white h-full rounded-sm shadow-md p-6 scroll-y-auto">
                <PageHeader title="Home"/>
            </div>
        </PageContainer>
    )
}