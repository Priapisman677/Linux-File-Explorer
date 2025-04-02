"use client"

// Making this page dynamic:
export const dynamic = 'force-dynamic'

import FileBar from '@/components/File';
import { useSearchInput } from '@/context/file-name-context';
import { desktopLs, LinuxFile } from '@/lib/getContent';
import { useEffect, useState } from 'react';



export default  function Explorer() {

	const {filesShown} = useSearchInput()
	const [filesArray, setFilesArray] = useState<LinuxFile[] | null>(null);

	const search = filesShown ? filesShown : ''

	useEffect(()=>{
		const fetchResults = async ()=>{
			console.log(search);
			
			const {filesArray} = await desktopLs(search);
			if(filesArray) setFilesArray(filesArray)
			console.log(filesArray);
		}

		fetchResults()
	}, [filesShown])

	const files = filesArray?.map((file: LinuxFile, index: number) => {

		const bgColor = index % 2 === 0 ? '' : 'bg-[#2b2b2b]';

		return <FileBar name={file.name} key={file.name} className={bgColor} type={file.type} size={file.size}></FileBar>;
	});

	return (
		<>
			<div className="p-6 flex-col flex text-"> {files || null} </div>
		{/* //! This doesn't do anything, I'm just testing colors */}
			<div className="text-[#2b2b2b]"> </div> 
		</>
	);
}
