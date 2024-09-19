export default function ListItemWithIcon({ icon, text }: {
    icon?: JSX.Element,
    text: string
}){ // type
    return (
        <div className="flex flex-row items-center space-x-2">
            { icon }
            <p className="text-xs text-slate-500">{ text }</p>
        </div>
    )
}