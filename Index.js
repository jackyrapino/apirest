const fastify = require('fastify')({
    logger: true,
    pluginTimeout: 10000
  })


fastify.listen(process.env.PORT || 3000, '0.0.0.0', (err) => {
    if (err) {
        fastify.log.error(err)
      process.exit(1)
    }
  })

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


