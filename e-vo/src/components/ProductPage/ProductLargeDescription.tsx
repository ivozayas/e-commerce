import ColorIcon from "../ProductsPage/ColorIcon"
import ListWithIcon from "../ProductsPage/ListWithIcon"
import SizeGrid from "./SizeGrid"

export default function ProductLargeDescription({ name, colors, categories, price, id, children, brand, sizes }: {
    brand: string,
    name: string,
    price: number,
    colors: string[],
    categories: string[],
    id: string,
    children?: React.ReactNode,
    sizes: Size[]
}){
    return (
        <div className="space-y-6">
            <div className="space-y-4">
                <div>
                    <div className="flex flex-col">
                        <p className="text-sm text-slate-600">{ brand }</p>
                        
                        <div className="flex flex-row space-x-5 text-4xl">
                            <h1 className="font-bold">{ name }</h1>
                            <h1>${ price }</h1>
                        </div>
                    </div>

                    <div className="text-sm text-slate-600">Item N° { id }</div>
                </div>

                <div className="flex flex-row space-x-4">
                    <ListWithIcon items={colors.map((color) => ({ text: color, icon: <ColorIcon color={color}/>}))}/>

                    <div className="w-px border-l bg-slate-600"></div>
            
                    <ListWithIcon items={categories.map((category) => ({ text: category}))}/>
                </div>
                
            </div>

            <SizeGrid sizes={sizes}/>       

            { children }             
        </div>
    )
}