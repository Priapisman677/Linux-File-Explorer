"use client"

import { useState } from "react"

export default function  LinuxCli({linuxAction}: {linuxAction: Function}) {

    const [input, setInput] = useState<string>('')
    const [echoResult, setEchoResult] = useState<string>('')
    const [error, setError] = useState<string>('')
            
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(input);
        
        const result = await linuxAction(input)
        if(result.error){
            setEchoResult('')
            setError(result.error)
            return
        }
        if(result.result){
            setError('')
            setEchoResult(result.result)
        }

    
        return
    }

    return (
        <div className="flex flex-col gap-2">
            <form onSubmit={handleSubmit}>
                <input type="text" name="input" className="border border-[#4e4e4e]  w-70" onChange={(e)=>{setInput(e.target.value)}}></input>
                <button type="submit" className="rounded-sm text-black ml-5 px-2 bg-white"> Run! </button>
            </form>

            <p className="text-green-500"> Result: {echoResult}</p>
            <p className="text-red-500"> Error: {error}</p>
        </div>
    )
}