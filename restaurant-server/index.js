//1 Import json-server
const jsonServer= require('json-server')

//2 Create a server
const server = jsonServer.create()

//3 setup path for db.json file
const router =jsonServer.router('db.json')

//4 Return Middleware used by json server
const middleware=jsonServer.defaults()

//5 Setup port for server
const port = process.env.port || 3001

//6 Use middleware and router
server.use(middleware)
server.use(router)

//7 To Run the Server
server.listen(port,()=>{
    console.log('listening on port'+port);
})