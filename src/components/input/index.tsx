"use client"
import { FormEvent, useState } from 'react'
import { BsSearch } from "react-icons/bs"
import { useRouter } from "next/navigation"

export function Input(){
    const [input, setInput] = useState("");
    const router = useRouter();

    function handleSearch(event: FormEvent){
        event.preventDefault();
        if(input === "") return;

        router.push(`/game/search/${input}`)

    }

    return(
        <form onSubmit={handleSearch}
        className='w-full bg-slate-800 my-5 flex gap-2 items-center justify-between rounded-lg p-2'
        >
            <input
            className='bg-slate-800 outline-none w-11/12 text-white' 
            type="text" 
            placeholder="Procurando algum jogo?..."
            value={input}
            onChange={ (event) => setInput(event.target.value)}
            />

            <button type="submit">
                <BsSearch size={20} color="#cbd5e1" />
            </button>
        </form>
    )
}