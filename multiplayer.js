// Made October 24th, 2023
// This handles all multiplayer stuff
import changeLog from './changeLog.json' assert { type: 'json' };

var player2; // The 2nd player
var client_connection_to_game = false // If client has p2p connection
var this_client_id = 0 // client player ID
// Setups the connect for the host
player2 = new SimplePeer({
    initiator: location.hash === '#host',
    trickle: false
})

// If an error occurs with the client
player2.on('error', err => console.error('error', err))
// Returns the client signal
player2.on('signal', data => {
    document.getElementById("id_input").value = JSON.stringify(data)
})

// When a client Connects
player2.on('connect', () => {
    // Checks if the player is the host or not
    if (location.hash !== "#host") {
        this_client_id += 1
    }
    send_notification("You Have Successfully Connect To another Client")
    client_connection_to_game = true // This makes it possible to tell if the player is playing multiplayer or not
})

// When a client Sends data
player2.on('data', data => {
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

// On Client Token Submit
document.querySelector("#connect_multi").addEventListener('click', ev => {
    ev.preventDefault()
    player2.signal(JSON.parse(document.querySelector('#id_input').value))
})

// Allows for host btn
document.getElementById("hostBtn").onclick = function() {
    location.hash = "#host"
    location.reload()
    document.getElementById("hostBtn").disabled = "disabled"
}

// Allows client to use copy Btn
document.getElementById("copyKey").onclick = function() {
    var text = document.getElementById('id_input');
    text.select();
    document.execCommand('copy');
    alert("Successfully Copied The Key")
    document.getElementById("id_input").value = ""
}