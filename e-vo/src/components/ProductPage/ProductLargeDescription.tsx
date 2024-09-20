export default function ProductLargeDescription({ name, colors, categories, price }: {
    name: string,
    price: number,
    colors: string[],
    categories: TextWithIcon[]
}){
    return (
        <div>
            <div className="flex flex-row space-x-5 text-4xl">
                <h1 className="font-bold ">{ name }</h1>
                <h1>${ price }</h1>
            </div>
        </div>
    )
}