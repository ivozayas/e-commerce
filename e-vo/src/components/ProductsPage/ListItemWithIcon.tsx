export default function ListItemWithIcon({ icon, text, small }: {
    icon?: JSX.Element,
    text?: string,
    small?: boolean
}){    
    return (
        <div className="flex flex-row items-center space-x-2">
            { icon }
            <p className={`text-${small ? 'xs' : 'sm'} text-slate-600`}>{ text }</p>
        </div>
    )
}