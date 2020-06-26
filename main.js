//--------------------CREATE AND CONFIG WINDOW----------------------------
const electron = require('electron')
const {app, BrowserWindow} = electron

let mainWindow

app.on('ready', function(){
    mainWindow = new BrowserWindow({width:600,height:800})
    mainWindow.loadURL(`file://${__dirname}/login.html`)
    mainWindow.on('closed',function(){
        mainWindow = null
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})

//-----------------DATA-BASE----------------------------

const Datastore = require('nedb-promises')
var db = {}
db.users = new Datastore('./database/users.db')
db.users.insert({"username":"giang","password":"1234"})

//----------------------