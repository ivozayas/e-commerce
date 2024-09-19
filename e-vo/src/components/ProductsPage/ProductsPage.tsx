import PageContainer from "../Pages/PageContainer";
import ProductContainer from "./ProductContainer";
import ProductListContainer from "./ProductListContainer";
import ProductsList from "./ProductsList";

export default function ProductsPage({}){
    return (
        <PageContainer>
            <div className="flex flex-row space-x-10">
                <div className="flex flex-col bg-white shadow-md rounded-sm h-[88vh] w-60"></div>
                <ProductListContainer>
                    <ProductsList products={[1,2,3,4,5]}/>
                </ProductListContainer>
            </div>
        </PageContainer>
    )
}