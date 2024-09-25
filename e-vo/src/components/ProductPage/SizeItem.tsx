export default function SizeItem({ size, selectSize, selectedSize, children }: {
    size: Size,
    selectedSize: Size | undefined
    selectSize: React.Dispatch<React.SetStateAction<Size | undefined>>,
    children: React.ReactNode
}){
    return (
        <div onClick={() => {if(size.stock > 0){ return selectSize(size)}}} className={`px-3 py-2 rounded-sm flex justify-center items-center duration-100 ${size.stock > 0 ? 'cursor-pointer shadow hover:shadow-sm' : 'cursor-not-allowed opacity-50'} ${selectedSize && selectedSize.size === size.size ? 'bg-slate-200' : 'bg-white'}`}>
            { children }
        </div>
    )
}