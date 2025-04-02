"use client"

import {  useSearchInput } from "@/context/file-name-context";
import { desktopFind } from "@/lib/getContent";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function  SearchBar() {
    const {searchInput, setSearchInput, setFilesShown} = useSearchInput()
    const [result, setResult] = useState<string[]>();
    const router = useRouter()


    
    const handleDirSearch = ()=>{

        console.log('adasdsajdjb');
        

        setFilesShown(searchInput as string)
        router.push('/explorer')
        return
    }

    useEffect(()=>{

        if(!searchInput){
            setResult([])
            return 
        }

        const fetchResults = async ()=>{
            const {filesArray} = await desktopFind(searchInput)
            setResult(filesArray)
        }
        fetchResults()

    }, [searchInput])

    
    function SearchResults() {

        if(result?.length === 0) return null


        return (
            <div className="absolute top-full left-0 w-full  bg-[#1c1c1c] p-4 z-10">

                { result?.map((file)=>{
                    
                    return <button key={file} onClick={handleDirSearch}> {file.trim().split('/').pop()}</button>
                })}
           
            </div>
        )

      
    }
    
    return (
        <div className="relative w-full bg-[#222222] flex justify-center py-1">
            <div className="w-[80%] relative">
                <form className="w-full h-12 flex items-center border border-[#454545] px-2 rounded-sm bg-[#2a2a2a]">
                    <input
                        className="w-full h-8 bg-transparent text-white outline-none"
                        onChange={(e) => setSearchInput(e.target.value)}
                        type="text"
                        name="input"
                        placeholder="Search"
                    />
                </form>
                    <SearchResults></SearchResults>
            </div>
        </div>
    );
}