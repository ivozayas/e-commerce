import ColorIcon from "./ColorIcon"
import ProductContainer from "./ProductContainer"
import ProductDescription from "./ProductDescription"

export default function ProductCard({ children }: {
    children?: React.ReactNode
}){
    const product = {
        id: 'apsodaposkdas',
        name: "OASIS 2",
        price: 90,
        categories: [
            { text: 'clothes'},
            { text: 'sports' },
            { text: '' }
        ],
        colors: ['red', 'gray'],
        images: [
            '/sneakers.jpg',
            '/sneakers-secondary.jpg'
        ]
    }

    return (
        <div className="h-fit w-52 space-y-3 hover:scale-105 duration-100 rounded-md">
            <ProductContainer images={product.images} id={product.id}/>
            <ProductDescription name={product.name} id={product.id} price={product.price} colors={product.colors} categories={product.categories} />
            { children }
        </div>
    )
}