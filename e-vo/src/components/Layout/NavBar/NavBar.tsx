import Searcher from "@/components/Searcher/Searcher";
import NavListItem from "./NavListItem";

export default function NavBar(){
    const items = [
        {title: 'home'},
        {title: 'products', src: '/products'},
        {title: 'contact'}
    ]

    return (
        <div className="h-10 shadow bg-white flex flex-row fixed top-0 w-full items-center justify-between z-10">
            <div className="flex flex-row items-center ">
                <h1 className="font-bold px-6">E-VO</h1>
                <NavListItem items={items}/>
            </div>

            <Searcher/>
        </div>
    )
}