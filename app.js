 'use strict'

 require('dotenv').config()
 const PORT = process.env.PORT
 const HOST = process.env.HOST
 
 const express=require('express')
 const app=express()
 const port=process.env.PORT
 app.get('/',(req,res)=>{
     res.send('hello world')
 })
 app.listen(port,()=>{
     console.log(`server is running on port ${port}`)
 })