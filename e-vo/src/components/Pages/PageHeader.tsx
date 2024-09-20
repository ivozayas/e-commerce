export default function PageHeader({ title, children }: {
    title: string,
    children?: React.ReactNode
}){
    return (
        <div>
            <h1 className="text-[1.5rem] font-bold">{title}</h1>

            {children}
        </div>
    )
}