// import json server

const jsonServer=require('json-server')

// create server using json server

const rbuilderserver = jsonServer.create()

// create middileware

const middileware = jsonServer.defaults()

// router Set-up

const router = jsonServer.router('db.json')

// implementing uses 

rbuilderserver.use(middileware)
rbuilderserver.use(router)

// port Creation

const port = 3000 || process.env.port


// start server 

rbuilderserver.listen(port,()=>{
    console.log("Resume Builder server runing on the port " +port);
    
})
