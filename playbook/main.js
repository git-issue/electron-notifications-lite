const { app, BrowserWindow, ipcMain } = require('electron')

let mainWindow = null

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadURL('file://' + __dirname + '/playbook.html')
  mainWindow.on('closed', () => {
    mainWindow = null
  })
})

ipcMain.on('notification-lite-click', () => {

  console.log('notification click event')

})