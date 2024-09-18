import ProductCard from "./ProductCard"

export default function ProductsList({ products }: {
    products: any[] // type
}){
    return (
        <ul className="grid grid-cols-5">{ 
            products.map((product, i) => (
                <ProductCard key={i}/>
            ))
        }</ul>
    )
}