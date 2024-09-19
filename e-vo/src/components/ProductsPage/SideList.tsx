import ProductCard from "./ProductCard"

export default function ProductsList({ products }: {
    products: any[] // type
}){
    return (
        <ul className="grid grid-cols-1 w-fit h-[82vh] overflow-y-scroll pr-3 scroll">{ 
            products.map((product, i) => (
                <div className="scale-90"  key={i}><ProductCard/></div>
            ))
        }</ul>
    )
}