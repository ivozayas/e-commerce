import Link from "next/link";

interface NavItemProps {
    title: string,
    src?: string,
    children?: React.ReactNode
}

export default function NavItem({title, src, children }: NavItemProps){
    return (
        <Link href={src ? src : '/'} className="hover:bg-slate-100 duration-100  px-6 py-2 flex justify-center w-fit">
            { title }

            {children}
        </Link>
    )
}