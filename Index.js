const fastify = require('fastify')({logger:true})
const PORT = 4000

async function start (){
    try {
        await fastify.listen(PORT)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
        
    }

}

fastify.get('/bienvenida',(req, reply)=> {

    reply.send({saludo:'hola Bienvenido'})
})


fastify.post('/bienvenida',(req, reply)=> {

    let name = req.body.nombre
    reply.send({saludo:'hola ' + name})
})

fastify.put('/bienvenida/:nombre/:apellido',(req, reply)=> {

    let name = req.params.nombre
    let lastname = req.params.apellido
    reply.send({saludo:`Hola ${name} ${lastname}`}) 
})

start()

