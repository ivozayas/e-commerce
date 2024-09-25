import ListItemWithIcon from "./ListItemWithIcon";

export default function ListWithIcon({ items, small }: {
    items: TextWithIcon[],
    small?: boolean
}){
    return (
        <ul>{
            items.map((item, i) => (
                <ListItemWithIcon icon={item.icon} text={item.text} key={i} small={small}/>
            ))
        }</ul>
    )
}