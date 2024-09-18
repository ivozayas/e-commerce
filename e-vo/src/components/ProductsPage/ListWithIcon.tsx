import ListItemWithIcon from "./ListItemWithIcon";

export default function ListWithIcon({ items }: {
    items: { text: string, icon?: JSX.Element }[] // type
}){
    return (
        <ul>{
            items.map((item, i) => (
                <ListItemWithIcon icon={item.icon} text={item.text} key={i}/>
            ))
        }</ul>
    )
}