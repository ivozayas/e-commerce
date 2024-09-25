'use client'

import { useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function Carousel({ images }: {
    images: string[]
}){
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true})

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                scrollPrev()
            } else if (e.key === 'ArrowRight') {
                scrollNext()
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        // Limpieza del efecto
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [scrollPrev, scrollNext])

    return (
        <div className='embla h-fit w-[700px] shadow-md rounded-sm' ref={emblaRef}>
            <ul className='embla__container'>{
                images.map((image, i) => (
                    <div className='embla__slide w-fit h-fit' key={i}><Image src={image} alt={`image-${i}`} width={700} height={300}/></div>
                ))
            }</ul>

            <button className='absolute top-[45%] left-5 duration-100 hover:scale-110' onClick={scrollPrev}><FiChevronLeft color='#475569' size={40}/></button>
            <button className='absolute top-[45%] left-[685px] duration-100 hover:scale-110' onClick={scrollNext}><FiChevronRight  color='#475569' size={40}/></button>
        </div>
    )
}