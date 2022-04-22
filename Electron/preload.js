const {contextBridge, ipcMain, ipcRenderer} = require('electron')

let API = {

    doSomething:(msg)=> ipcRenderer.send("message", msg),
    onCount: (callback)=>ipcRenderer.on("counts", (event, args)=>{
        callback(args);
    }),
    returnPromise:async (msg)=>ipcRenderer.invoke("msg-promise", msg),
    returnParticularData:async (id)=>ipcRenderer.invoke("getData", id),




}

contextBridge.exposeInMainWorld("api", API)