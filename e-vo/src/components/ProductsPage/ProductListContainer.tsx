import ProductsList from "./ProductsList";

export default function ProductListContainer({ children }: {
    children: React.ReactNode
}){
    return (
        <div className="flex flex-col space-y-4">
            <h2 className="font-bold text-lg">Products</h2>
            { children }
        </div>
    )
}