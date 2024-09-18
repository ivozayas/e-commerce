export default function ColorIcon({ color }: {
    color: string
}){
    return <div className={`rounded-full border border-slate-400 h-3 w-3 bg-${color}-500`}/>
}