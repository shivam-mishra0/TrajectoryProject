const express = require('express');
const mongoose = require('mongoose');
const csvtojson = require('csvtojson');
// const mongodb = require('mongodb');
const app = express()
require('dotenv').config();
app.use(express.json());

const PORT = process.env.PORT || 5000


//Database connection

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
} ).then(console.log("Database connected"));


// Schema for storing data

const Schema = mongoose.Schema

const masterDataSchema = Schema({
    fileName:{
        type:String,
        unique:true
    },
timeStamp:String
})
const Master = mongoose.model('masterData', masterDataSchema);


const ObjectDataSchema = Schema({
    fileName:{
        type:String,
        unique:true
    },

    data:[
        {
            timestamp:String,
            latitude:String,
            longitude:String
        }// window.api.onCount((data)=>{
//   count = data;
//   console.log("dsfhjksdfhdfskjhjdfkshjk")
//   console.log(count, "dfjkjdfjfd")
//   var temp = document.getElementById('cid');
//   console.log(temp)
//   temp.innerHTML = count

// })// window.api.onCount((data)=>{
//   count = data;
//   console.log("dsfhjksdfhdfskjhjdfkshjk")
//   console.log(count, "dfjkjdfjfd")
//   var temp = document.getElementById('cid');
//   console.log(temp)
//   temp.innerHTML = count

// })
    ]

})   

const ObjData = mongoose.model('objectData', ObjectDataSchema)

//csv_to_json

// csvtojson().fromFile('./assets/master.csv').then(async (csvData)=>{ 

//     // console.log(csvData)
//     const response = await Master.insertMany(csvData);
//     console.log("master added")
// })

/* 
for(let i = 1; i <=10; i++){
    // console.log(fname)
    csvtojson().fromFile((i===10)?`00${i}.csv`:`000${i}.csv`).then(async (csvData)=>{ 

        // console.log(csvData)

        // const response = await new ObjData({ fileName:(i===10)?`00${i}.csv`:`000${i}.csv`,
        // data:csvData});
        // const saveRes = await response.save()
        // console.log(`${i}th created`)
        // console.log(saveRes)
    })

}  */

// app.use('/', require('./routes/home.routes'));

app.get('/masterData', async (req, res, next)=>{
    
    var arr = await Master.find({}, { _id: 0 })
    res.json(arr)

    
})

app.get('/masterData/:id', async (req, res, next)=>{
    console.log(req.params.id, typeof(req.params.id))
    key = (req.params.id).toString()
    console.log(key, typeof(key))
    var arr = await ObjData.findOne({fileName:`${key}.csv`})


    console.log(arr)

    res.json(arr)
})

app.listen(PORT, ()=>{
    console.log(`server is running at PORT ${PORT}`);
})