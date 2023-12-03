/*
import {express} from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('xd');
});

app.listen(8081, () => {
  console.log("Server listening on pxrt 8081");
});

con vanilla

const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    const read = fs.createReadStream('index.html');
    read.pipe(res);
})
 server.listen(8081)
 console.log(`listening server on port 8081`)

*/
const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.sendFile('index.html',{
        root: __dirname
    })
})

app.listen(8081)
console.log(" server on port 8081")

