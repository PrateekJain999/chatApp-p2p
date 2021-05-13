const socket = io()

// socket.on('countUpdated', (count)=>{
//     console.log('count updated ', count);
// })

// document.querySelector('#increment').addEventListener('click', ()=>{
//     console.log('click')
//     socket.emit('increment')
// })

socket.on('welcome', (data) =>{
    console.log(data)
})