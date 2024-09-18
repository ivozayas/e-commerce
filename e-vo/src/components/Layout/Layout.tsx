import NavBar from "./NavBar/NavBar";

export default function Layout({ children }: {
    children: React.ReactNode
}){
    return (
        <div className="">
            <NavBar/>

            <div className="h-full p-6">
                { children }
            </div>
        </div>
    )
}