const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  openFile: () => ipcRenderer.invoke("dialog:openFile"),
  loadData: () => ipcRenderer.invoke("store:getData"),
  deleteData: () => ipcRenderer.invoke("store:deleteData"),
});
