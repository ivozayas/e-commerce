import ProductDescription from "../ProductsPage/ProductDescription";
import Carousel from "./Carousel";
import ProductImages from "./ProductImages";

export default function ProductLargeContainer({ children }: {
    children: React.ReactNode
}){
    return (
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 pb-10">
            { children }
        </div>
    )
}