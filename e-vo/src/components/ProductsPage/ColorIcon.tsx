export default function ColorIcon({ color }: {
    color: string
}){    

    console.log(color)
    return <div className={`rounded-full h-2.5 w-2.5 ${color}`}/>
}