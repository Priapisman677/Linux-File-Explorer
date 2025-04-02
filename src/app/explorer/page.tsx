"use client"


import FileBar from '@/components/File';
import { useSearchInput } from '@/context/file-name-context';
import { desktopLs, LinuxFile } from '@/lib/getContent';



export default async function Explorer() {

	const {filesShown} = useSearchInput()

	const search = filesShown ? filesShown : ''

	const {filesArray} = await desktopLs(search);


	const files = filesArray!.map((file: LinuxFile, index: number) => {

		const bgColor = index % 2 === 0 ? '' : 'bg-[#2b2b2b]';

		return <FileBar name={file.name} key={file.name} className={bgColor} type={file.type} size={file.size}></FileBar>;
	});

	return (
		<>
			<div className="p-6 flex-col flex text-"> {files} </div>
			<div className="text-[#2b2b2b]"> </div> //! This doesn't do
			anything, I'm just testing colors
		</>
	);
}
