'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductContainer({ images, id, icon }: {
    images: string[],
    id: string,
    icon?: JSX.Element
}){
    const [displayImage, setDisplayImage] = useState(images[0])

    return (
        <div
            className="bg-white hover:shadow-sm shadow-md h-60 flex justify-center items-center rounded-sm duration-100 overflow-hidden"
            onMouseEnter={() => images.length > 1 && setDisplayImage(images[1])}
            onMouseLeave={() => setDisplayImage(images[0])}
        >
            { icon }
            <Link href={`/products/${id}`}>
                <Image
                    alt="sneakers"
                    width={180}
                    height={180}
                    src={displayImage}
                    priority
                />
            </Link>
        </div>
    )
}