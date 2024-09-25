export default function BuyNowButton({ id }: {
    id: string
}){
    function buy(id: string){
        console.log(id)
    }
    
    return (
        <button className="px-8 border flex flex-row justify-center items-center rounded-sm border-slate-600 hover:bg-white duration-100 shadow-md hover:shadow-sm" onClick={() => buy(id)}>Buy now</button>
    )
}