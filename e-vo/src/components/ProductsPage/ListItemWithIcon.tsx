export default function ListItemWithIcon({ icon, text }: {
    icon?: JSX.Element,
    text?: string,
}){    
    return (
        <div className="flex flex-row items-center space-x-2">
            { icon }
            <p className={`text-xs text-slate-600`}>{ text }</p>
        </div>
    )
}