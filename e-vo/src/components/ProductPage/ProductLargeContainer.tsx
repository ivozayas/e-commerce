import ProductDescription from "../ProductsPage/ProductDescription";
import Carousel from "./Carousel";
import ProductImages from "./ProductImages";

export default function ProductLargeContainer({ children }: {
    children: React.ReactNode
}){
    return (
        <div className="flex flex-row space-x-4">
            { children }
        </div>
    )
}