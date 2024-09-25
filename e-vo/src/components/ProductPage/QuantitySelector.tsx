import { useEffect, useState } from "react"

export default function QuantitySelector({ selectedSize }: {
    selectedSize?: Size
}){
    const [ q, setQ ] = useState(1)

    useEffect(() => {
        setQ(1)
    }, [selectedSize])

    return (
        <div className="flex flex-row justify-center items-center w-fit rounded-xl">
            <button className={`bg-slate-200 rounded-l-xl duration-100 px-4 h-10 font-bold text-2xl flex justify-center items-center ${q === 1 ? 'cursor-not-allowed text-slate-400' : 'hover:bg-slate-300 text-slate-600'}`} disabled={q === 1} onClick={() => setQ(q - 1)}>-</button>

            <div className="w-16 h-10 flex justify-center items-center bg-white">{ q }</div>

            <button className={`bg-slate-200 rounded-r-xl duration-100 px-4 h-10 font-bold text-2xl flex justify-center items-center ${(selectedSize && q === selectedSize.stock) || selectedSize === undefined ? 'cursor-not-allowed text-slate-400' : 'hover:bg-slate-300 text-slate-600'}`} disabled={((selectedSize && q === selectedSize.stock)) || selectedSize === undefined} onClick={() => setQ(q + 1)}>+</button>
        </div>
    )
}