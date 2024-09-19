import NavBar from "./NavBar/NavBar";

export default function Layout({ children }: {
    children: React.ReactNode
}){
    return (
        <div className="">
            <NavBar/>

            <div className="h-full px-6 pt-16">
                { children }
            </div>
        </div>
    )
}