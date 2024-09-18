export default function PageContainer({ children }: {
    children: React.ReactNode
}){
    return <div className="h-[87.8vh]">
        { children }
    </div>
}