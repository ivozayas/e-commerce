import ColorIcon from "./ColorIcon"
import ProductContainer from "./ProductContainer"
import ProductDescription from "./ProductDescription"
import { product } from "@/hook/useProduct"

export default function ProductCard({ children }: {
    children?: React.ReactNode
}){
    return (
        <div className="h-fit w-52 space-y-3 hover:scale-105 duration-100 rounded-md">
            <ProductContainer images={product.images.slice(0,2)} id={product.id}/>
            <ProductDescription name={product.name} id={product.id} price={product.price} colors={product.colors.slice(0,2)} categories={product.categories.slice(0,2)} />
            { children }
        </div>
    )
}