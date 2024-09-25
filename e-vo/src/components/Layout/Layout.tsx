import NavBar from "./NavBar/NavBar";

export default function Layout({ children }: {
    children: React.ReactNode
}){
    return (
        <div>
            <NavBar/>

            <div className="h-fit mb-10 px-6 pt-16">
                { children }
            </div>
        </div>
    )
}