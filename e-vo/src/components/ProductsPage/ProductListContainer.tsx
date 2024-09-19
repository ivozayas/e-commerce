import ProductsList from "./ProductsList";

export default function ProductListContainer({ title, children }: {
    title?: string,
    children: React.ReactNode
}){
    return (
        <div className="flex flex-col space-y-2">
            {title && <h2 className="font-bold text-lg">{ title }</h2>}
            { children }
        </div>
    )
}