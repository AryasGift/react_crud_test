const json_server=require('json-server')
const middleware=json_server.defaults()
const appoint_server=json_server.create()
const router=json_server.router('db.json')
const cors=require('cors')

appoint_server.use(cors())
appoint_server.use(middleware)
appoint_server.use(router)
const PORT=7000
appoint_server.listen(PORT,()=>{
    console.log(`The port started at ${PORT}`);
})