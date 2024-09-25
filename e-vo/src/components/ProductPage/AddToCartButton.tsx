import { BiCart, BiCartAdd } from "react-icons/bi"
import { IoCartOutline } from "react-icons/io5"

export default function AddToCartButton({ id }: {
    id: string
}){
    function addToCart(id: string){
        console.log(id)
    }
    
    return (
        <button className="px-8 border flex flex-row justify-center items-center rounded-sm border-slate-600 hover:bg-white duration-100 shadow-md hover:shadow-sm" onClick={() => addToCart(id)}>Add to cart
            <div className="ml-2"><IoCartOutline/></div>
        </button>
    )
}