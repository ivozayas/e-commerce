import ProductCard from "./ProductCard"

export default function ProductsList({ products }: {
    products: any[] // type
}){
    return (
        <ul className="grid gap-y-[34px] gap-x-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">{ 
            products.map((product, i) => (
                <ProductCard key={i}/>
            ))
        }</ul>
    )
}