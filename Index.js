const fastify = require('fastify')({
  logger: true,
  pluginTimeout: 10000
})

const user = require('./user.js')


fastify.listen(process.env.PORT || 3000, '0.0.0.0', (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})


fastify.get('/usuarios', user.getAll)

fastify.post('/usuarios', user.add)

fastify.put('/usuarios/:id', user.modifyById )

fastify.delete('/usuarios/:id', user.deleteId)
