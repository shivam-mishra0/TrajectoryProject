const {BrowserWindow, app, ipcMain} = require('electron');
const path = require('path');
const axios = require('axios')

const createWindow = () => {
    const win = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            preload:path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile("index.html")

   
    let count = 0;
    setInterval(()=>{
        win.webContents.send("counts", count++)
    }, 9000)

}



app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

app.whenReady().then(()=>{
    createWindow();
});

ipcMain.on("message", (events, args)=>{
    console.log(args)
})

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  let employees = [
    { name: 'James', age: 21, country: 'United States' },
    { name: 'Rony', age: 31, country: 'United Kingdom' },
    { name: 'Peter', age: 58, country: 'Canada' },
    { name: 'Marks', age: 20, country: 'Spain' }
]

let headers = ['Data', 'TimeStamp', 'Action'];


ipcMain.handle("getData", async (event, args)=>{
  const id = args
  console.log(args, typeof(args))
  const Data = await axios.get(`http://localhost:5000/masterData/${id}`)
  console.log(Data)
  return Data.data

  


})


ipcMain.handle("msg-promise", async (event, args)=>{
    console.log(args);
    var resData;
    const Data = await axios.get('http://localhost:5000/masterData/', {
    params: {
      ID: 12345
    }
  })
//   .then(function (response) {
//     console.log(response.data);
//     resData = response.data.then(function (response) {
//     console.log(response.data);
//     resData = response.data
//     console.log(resData)
    
//   })
//     console.log(resData)
    
//   })
 console.log("djfhdfkhkdfhjkfdhdfkhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhk")
 console.log(Data)
  return Data.data

    
})