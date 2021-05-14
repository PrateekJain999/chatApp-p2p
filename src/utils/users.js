const users = []

const addUser = ({id, username, room}) => {
    username = username.trin().toLowerCase()
    room = room.trim().toLowerCase()

    if(!username || !room)
    {
        return {
            error: 'Username and Room are required'
        }
    }

    const existinguser = users.find((user) => {
        return user.room === room && user.username === username
    })

    if(existinguser){
        return {
            error: 'username is in use'
        }
    }

    const user = {id, username, room}

    users.push(user)
    return {user}
}

const removeUser = (id) => {
    const index = user.findIndex((user) => {
        return user.id === id
    })

    if(index !==-1){
        return users.splice(index,1)[0]
    }
}

const getUser = (id) => {
    
}