import Link from "next/link"
import ColorIcon from "./ColorIcon"
import ListWithIcon from "./ListWithIcon"

export default function ProductDescription({ name, id, categories, price, colors, children }: {
    name: string,
    id: string,
    price: number,
    categories: string[],
    colors: string[],
    children?: React.ReactNode
}){    
    return (
        <div className="flex flex-col space-y-2">
            <div className="flex flex-row w-full justify-between">
                <Link href={`/products/${id}`} className="font-bold w-[60%]">{ name }</Link>
                <h2>${ price }</h2>
            </div>

            <div className="flex flex-row justify-between">
                <ListWithIcon items={colors.map((color) => ({ text: color, icon: <ColorIcon color={color}/>}))} small/>

                <ListWithIcon items={categories.map((category) => ({ text: category}))} small/>
            </div>

            {children}
        </div>
    )
}