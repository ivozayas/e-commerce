export default function PageContainer({ children }: {
    children: React.ReactNode
}){
    return <div className="flex flex-row justify-between h-[87.8vh] mb-10">
        { children }
    </div>
}