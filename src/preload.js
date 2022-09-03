const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  openFile: () => ipcRenderer.invoke("dialog:openFile"),
  readFile: (filePath) => ipcRenderer.invoke("fs:readFile", filePath),
});
