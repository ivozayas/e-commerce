export default function Button({ children, onClick }: {
    children: React.ReactNode,
    onClick: () => any
}){    
    return (
        <button className="px-8 w-fit space-x-2 flex flex-row justify-center items-center rounded-sm bg-white duration-100 shadow-md hover:shadow" onClick={onClick}>{ children }</button>
    )
}