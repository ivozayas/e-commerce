import NavItem from "./NavItem"

interface NavListItemProps {
    items: {title: string, src?: string}[]
}

export default function NavListItem({items}: NavListItemProps){
    return (
        <ul className="flex flex-row">{
            items.map((item, i) => 
                <NavItem title={item.title} src={item.src} key={i}/>
            )
        }</ul>
    )
}