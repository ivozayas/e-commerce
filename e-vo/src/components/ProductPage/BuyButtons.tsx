import { IoCartOutline } from "react-icons/io5";
import Button from "../Pages/Button";

export default function BuyButtons({ id }: {
    id: string
}){
    return (
        <div className={`h-12 w-fit space-x-10 justify-between flex flex-row`}>
            <Button onClick={() => {console.log(id)}}>
                <p>Add to cart</p>
                <IoCartOutline/>
            </Button>

            <Button onClick={() => {console.log(id)}}>Buy now</Button>
        </div>
    )
}