// Made October 24th, 2023
// This handles all multiplayer stuff

const p = new SimplePeer({
    initiator: location.hash === '#host',
    trickle: false
})

var client_connection_to_game = false // If client has p2p connection
var this_client_id = 0 
// If an error occurs with the client
p.on('error', err => console.error('error', err))
// Returns the client signal
p.on('signal', data => {
    console.log('SIGNAL', JSON.stringify(data))
})
// On Client Token Submit
document.querySelector("#connect_multi").addEventListener('click', ev => {
    ev.preventDefault()
    p.signal(JSON.parse(document.querySelector('#id_input').value))
})

// When a client Connects
p.on('connect', () => {
    // Checks if the player is the host or not
    if (location.hash !== "#host") {
        this_client_id += 1
    }
    console.log('CONNECTED')
    client_connection_to_game = true // This makes it possible to tell if the player is playing multiplayer or not
})

// When a client Sends data
p.on('data', data => {
    command = data + ""
    command = command.split("|")
    if (command.length == 2) { // Replaces the commas if there are args and commas in this function
        if (command[1].indexOf(",") !== -1) {command[1] = command[1].split(", ")}
    }
    console.log(command)
    // Executes the given command
    if (command.length == 2) { // Functions with args
        if (command[1].length == 1) {window[command[0]](command[1][0])}  // With 1 arg
        else if (command[1].length == 2) {window[command[0]](command[1][0], command[1][1])} // With 2 args
        else if (command[1].length == 4) {window[command[0]](command[1][0], command[1][1], command[1][2])} // With 3 args
        else if (command[1].length == 4) {window[command[0]](command[1][0], command[1][1], command[1][2], command[1][3])} // With 4 args
        else if (command[1].length == 5) {window[command[0]](command[1][0], command[1][1], command[1][2], command[1][3], command[1][4])} // With 5 args
    } else {window[command[0]]()} // Function with no args
    // This will enable all btns if its the current clients turn
    if (current_turn == this_client_id) {
        btns = document.querySelectorAll("button");
        btns.forEach(button => button.disabled = "")
        return
    }
    // If the this client id is not the current turn disable all btns
    btns = document.querySelectorAll("button");
    btns.forEach(button => button.disabled = "disabled")
})