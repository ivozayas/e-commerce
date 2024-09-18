import ColorIcon from "./ColorIcon"
import ListWithIcon from "./ListWithIcon"

export default function ProductDescription({ name, categories, price, colors, children }: {
    name: string,
    price: number,
    categories: { text: string, icon?: JSX.Element }[], // type
    colors: { text: string, icon?: JSX.Element }[], // type
    children?: React.ReactNode
}){    
    return (
        <div className="flex flex-col space-y-2">
            <div className="flex flex-row w-full justify-between">
                <h2 className="font-bold w-[60%]">{ name }</h2>
                <h2>${ price }</h2>
            </div>

            <div className="flex flex-row justify-between">
                <ListWithIcon items={categories}/>

                <ListWithIcon items={colors}/>
            </div>

            {children}
        </div>
    )
}