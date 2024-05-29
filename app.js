const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

const { Server } = require('socket.io')
const io = new Server(server)

io.on('connection', (socket) => {
  /* console.log('Un usuario se ha conectado.')

  socket.on('disconnect', () => {
    console.log('Un usuario se ha desconectado.')
  })

  socket.on('chat', (msg) => {
    console.log("message", msg)
  })

   */
  socket.on('chat', (msg) => {
    io.emit('chat', msg)
  })
})

app.get('/', (req, res) => {
  // res.send('Hola mundo')
  console.log(`${__dirname}/cliente/index.html`)
  res.sendFile(`${__dirname}/cliente/index.html`)
})

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})