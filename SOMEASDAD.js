import { exec } from 'child_process' 


















export const runLs = async(flags)=>{

    /// stdout is the  what you see when you run something like "echo hello"
    /// stderr is the error from the child process itself. ej: cat nonexistent.txt
    /// e: This is the Node-level error object
    
    exec('wsl ls', (e, stdout, stderr)=>{
        if(e){
            console.log({e});
            return
        }
        if(stderr){
            console.log({stderr});
            return
        }
        console.log({stdout});
    })

    return
}
runLs()


export const runLs = async(flags)=>{

    /// stdout is the  what you see when you run something like "echo hello"
    /// stderr is the error from the child process itself. ej: cat nonexistent.txt
    /// e: This is the Node-level error object
    
    exec('wsl ls', (e, stdout, stderr)=>{
        if(e){
            console.log({e});
            return
        }
        if(stderr){
            console.log({stderr});
            return
        }
        console.log({stdout});
    })

    return
}
runLs()