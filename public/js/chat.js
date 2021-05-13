const socket = io()

socket.on('welcome', (data) =>{
    console.log(data)
})

document.querySelector('#message-form').addEventListener('submit', (e)=>{
    e.preventDefault()
    const message = document.querySelector('input').value

    socket.emit('sendMessage', message);
})
