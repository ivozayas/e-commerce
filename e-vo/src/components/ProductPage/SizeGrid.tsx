import { useEffect, useState } from "react"
import SizeItem from "./SizeItem"
import QuantitySelector from "./QuantitySelector"

export default function SizeGrid({ sizes }: {
    sizes: Size[]
}){
    const [ selectedSize, setSelectedSize ] = useState<Size | undefined>(undefined)

    return (
        <div className="space-y-6">
            <ul className="grid grid-cols-5 gap-3">{
                sizes.map((size, i) => (
                    <SizeItem size={size} selectSize={setSelectedSize} selectedSize={selectedSize} key={i}/>
                ))
            }</ul>

            <div className="space-y-2">
                <QuantitySelector selectedSize={selectedSize}/>
                        
                {selectedSize && <div className="text-sm text-slate-600">Stock: { selectedSize.stock }</div>}
            </div>
        </div>
    )
}