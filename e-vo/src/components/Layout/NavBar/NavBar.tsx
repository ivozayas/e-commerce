import Searcher from "@/components/Searcher/Searcher";
import NavListItem from "./NavListItem";

export default function NavBar(){
    const items = [
        {title: 'home'},
        {title: 'products', src: '/products'},
        {title: 'contact'}
    ]

    return (
        <div className="h-10 shadow-md bg-white flex flex-row items-center justify-between">
            <div className="flex flex-row items-center ">
                <h1 className="font-bold px-6">E-VO</h1>
                <NavListItem items={items}/>
            </div>

            <Searcher/>
        </div>
    )
}