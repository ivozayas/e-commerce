import AddToCartButton from "./AddToCartButton"
import BuyNowButton from "./BuyNowButton"

export default function BuyButtons({ id }: {
    id: string
}){
    return (
        <div className="h-14 flex flex-row justify-between">
            <AddToCartButton id={id}/>

            <BuyNowButton id={id}/>
        </div>
    )
}