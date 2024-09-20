import PageContainer from "../Pages/PageContainer";
import ProductContainer from "./ProductContainer";
import ProductListContainer from "./ProductListContainer";
import ProductsList from "./ProductsList";
import SideList from "./SideList";

export default function ProductsPage({}){
    return (
        <PageContainer>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row space-x-10">
                    <div className="h-[88vh] w-52">
                        <div className="flex flex-col fixed bg-white shadow-md rounded-sm h-[88vh] w-52 "/>
                    </div>

                    <ProductListContainer title="Products">
                        <ProductsList products={[1,2,3,4,5,1,2,3,4,5]}/>
                    </ProductListContainer>
                </div>
                
                <div className="fixed right-5 hidden md:flex ">
                    <ProductListContainer title="Suggestions">
                        <SideList products={[1,2,3,4,5]}/>
                    </ProductListContainer>
                </div>
            </div>
        </PageContainer>
    )
}