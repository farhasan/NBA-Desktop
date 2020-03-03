import { app, BrowserWindow, ipcMain } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import { enableLiveReload } from 'electron-compile';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const isDevMode = process.execPath.match(/[\\/]electron/);

if (isDevMode) enableLiveReload({ strategy: 'react-hmr' });

const Scraper = require('image-scraper');
const urls = [];

function getPics() {
  const scraper = new Scraper('https://www.nba.com');

  let counter = 0;
  let src;

  return new Promise((resolve, reject) => scraper.scrape((image) => {
    if (counter !== 3) {
      src = image.attributes['data-srcset'];
      if (src.includes('jpg')) {
        counter += 1;
        if (urls.length < 3) {
          urls.push(`https://nba.com/${src.split(',')[3].split(' ')[1]}`);
          resolve('successfully pushed url');
        } else reject('rejecting promise');
      }
    }
  }));
}

const createWindow = async () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  ipcMain.on('requesting nba splash urls', (event, arg) => {
    getPics().then(() => { mainWindow.webContents.send('sending nba splash urls', urls); }).catch();
  });
  // getPics().then(() => { mainWindow.webContents.send('sending pic urls', urls); }).catch();
  // getPics().then(() => { ipcMain.send('sending pic urls', urls); }).catch();

  // Open the DevTools.
  if (isDevMode) {
    await installExtension(REACT_DEVELOPER_TOOLS);
    mainWindow.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
