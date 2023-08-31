const { app, BrowserWindow } = require('electron')
const path = require('path')

const location = app.isPackaged ? url.format({ pathname: path.join(__dirname, 'dist/index.html'), protocol: 'file:', slashes: true }) : "http://localhost:5173/";

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

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
