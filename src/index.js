const express=require('express'),
app=express()
//middlewares funcionalidades para las rutas
app.use(express.json())
    .use(express.urlencoded({extended:false}))
//routes
const router=require('./routes/index')

app.use(router)
app.listen(4000,()=>console.log('servidor running in the port 4000'))