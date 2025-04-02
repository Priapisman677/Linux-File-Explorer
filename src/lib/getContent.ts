import { freeCommand } from "@/actions/actions";


export interface LinuxFile  {
    name: string,
    size: string,
    date: string,
    type: 'dir' | 'file'
}

type DesktopLsReturnType =  Promise<{
    filesArray?: LinuxFile[]
    error: string
}>

export const desktopLs = async(search: string): DesktopLsReturnType=> {

    const fileList = await freeCommand('ls -lh /mnt/c/Users/Expel/Desktop/' + search);
    
    const fileNamesArray = fileList.result?.trim().split('\n').slice(1)
    
    const parsedFilesArray: LinuxFile[] = []
    
    //! I am asserting that I am always going to receive a result and there's going to be no errors.
    for (const file of fileNamesArray!){
        const type = file[0] === 'd' ? 'dir' : 'file';
        const parts = file.trim().split(/\s+/);
        const size = parts[4]
        const date = `${parts[5]} ${parts[6]} ${parts[7]}`;
        const fileName = parts.slice(8).join(' '); // "Cases"
        parsedFilesArray.push({type, name: fileName, size, date})
    }

    return {filesArray: parsedFilesArray, error: ''}
        
}

export const desktopFind = async(search: string)=>{
    const fileList = await freeCommand(`find /mnt/c/Users/Expel/Desktop -type d -maxdepth 2 -iname "*${search}*"`);
    const fileNamesArray = fileList.result?.trim().split('\n')


    return {filesArray: fileNamesArray, error: ''}

}