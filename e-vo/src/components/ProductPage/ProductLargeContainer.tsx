import ProductDescription from "../ProductsPage/ProductDescription";
import Carousel from "./Carousel";
import ProductImages from "./ProductImages";

export default function ProductLargeContainer({ children }: {
    children: React.ReactNode
}){
    return (
        <div className="flex flex-col lg:flex-row space-x-8 pb-10">
            { children }
        </div>
    )
}