'use client'

import { useForm, SubmitHandler } from "react-hook-form"
import { BiSearch } from "react-icons/bi"

export default function Searcher(){
    const{ handleSubmit, register } = useForm()

    return (
        <div className="mx-4">
            <form className="text-sm" onSubmit={handleSubmit((data) => console.log(data))}>
                <input className="px-1 py-0.5" type="text" id="search" {...register('search')} placeholder="Search a product..."/>

                <button className="right-5 top-[1.5px] relative" type="submit"><BiSearch/></button>
            </form>
        </div>
    )
}