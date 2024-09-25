export default function SizeItem({ size, selectSize, selectedSize }: {
    size: Size,
    selectedSize: Size | undefined
    selectSize: React.Dispatch<React.SetStateAction<Size | undefined>>
}){
    return (
        <div onClick={() => {if(size.stock > 0){ return selectSize(size)}}} className={`px-3 py-2 border border-slate-500 rounded-sm flex justify-center items-center duration-75 ${size.stock > 0 ? 'cursor-pointer hover:bg-slate-200' : 'cursor-not-allowed opacity-40'} ${selectedSize && selectedSize.size === size.size ? 'bg-slate-200' : 'bg-white '}`}>{ size.size }</div>
    )
}