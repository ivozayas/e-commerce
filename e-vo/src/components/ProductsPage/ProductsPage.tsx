import PageContainer from "../Pages/PageContainer";
import ProductsList from "./ProductsList";

export default function ProductsPage({}){
    return (
        <PageContainer>
            <ProductsList products={[1,2,3,4]}/>
        </PageContainer>
    )
}