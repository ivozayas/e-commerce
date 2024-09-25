export default function ColorIcon({ color }: {
    color: string
}){    
    return <div className={`rounded-full border border-slate-400 h-2.5 w-2.5 bg-${color}-500`}/>
}