// Made October 24th, 2023
// This handles all multiplayer stuff

const p = new SimplePeer({
    initiator: location.hash === '#1',
    trickle: false
})

var client_connection_to_game = false // If client has p2p connection
var this_clients_id = 0 

p.on('error', err => console.error('error', err))

p.on('signal', data => {
    console.log('SIGNAL', JSON.stringify(data))
})

document.querySelector("#connect_multi").addEventListener('click', ev => {
    ev.preventDefault()
    p.signal(JSON.parse(document.querySelector('#id_input').value))
})

p.on('connect', () => {
    console.log('CONNECTED')
    p.send('whatever' + Math.random())
    client_connection_to_game = true
})

p.on('data', data => {
    console.log('data: ' + data)
    // Checks to see if the sent data is a JSON
    try {
        var command = JSON.parse(data)
    } catch {
        return
    }
    // Executes the given command
    window[command[0]](command[1]) 
})