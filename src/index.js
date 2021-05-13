const express = require('express')
const http = require('http')
const path = require('path')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)

const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')
const io = socketio(server)

app.use(express.static(publicDirectoryPath));

io.on('connection', (socket)=>{
    console.log('User Connected');

    socket.emit('message', 'welcome')

    socket.on('sendMessage', (message) =>{
        io.emit('message', message)
    })
})

server.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})