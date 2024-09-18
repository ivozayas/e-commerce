import ColorIcon from "./ColorIcon"
import ProductContainer from "./ProductContainer"
import ProductDescription from "./ProductDescription"

export default function ProductCard({ children }: {
    children?: React.ReactNode
}){
    const categories = [
        { text: 'clothes'},
        { text: 'sports' }
    ]

    const colors = [
        { text: 'red', icon: <ColorIcon color="red"/>},
        { text: 'white', icon: <ColorIcon color="white"/>}
    ]

    return (
        <div className="h-fit w-60 p-4 m-2 space-y-3 hover:scale-105 duration-100 hover:shadow-lg rounded-md">
            <ProductContainer/>
            <ProductDescription name="Puma Shoes 24 AXION" price={0} colors={colors} categories={categories} />
            { children }
        </div>
    )
}