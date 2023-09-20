const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const location = app.isPackaged ? url.format({ pathname: path.join(__dirname, 'dist/index.html'), protocol: 'file:', slashes: true }) : "http://localhost:5173/";
let mainWindow=null;

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame:false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadURL(location)

  return mainWindow

}

let params = process.argv.pop().split("firewallet://")[1];
console.log(params);

app.whenReady().then(() => {
  
  if (process.defaultApp) {
    if (process.argv.length >= 2) {
      app.setAsDefaultProtocolClient("gamechain", process.execPath, [
        path.resolve(process.argv[1]),
      ]);
    }
  } else {
    app.setAsDefaultProtocolClient("gamechain");
  }

  mainWindow = createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.on("closeApp",(e)=>{
  app.quit();
})

ipcMain.on("minimizeApp",(e)=>{
  mainWindow.isMinimized() ? mainWindow.restore() : mainWindow.minimize()
})

ipcMain.on("fullscreenApp",(e)=>{
  mainWindow.isFullScreen() ? mainWindow.setFullScreen(false) : mainWindow.setFullScreen(true)
})