// Made October 24th, 2023
// This handles all multiplayer stuff
import changeLog from './changeLog.json' assert { type: 'json' };
import {send_notification, set_connected} from './index.js'

export var player2
export var client_connection_to_game = false // If client has p2p connection
export var this_client_id = 0 // client player ID
// Setups the connect for the host
player2 = new SimplePeer({// The 2nd player
    initiator: location.hash === '#host',
    trickle: false
})

// If an error occurs with the client
player2.on('error', err => console.error('error', err))
// Returns the client signal
player2.on('signal', data => {
    document.getElementById("hostBtn").disabled = "disabled"
    document.getElementById("id_input").value = JSON.stringify(data)
    userKeyInput_update()
})

// When a client Connects
player2.on('connect', () => {
    // This will make a ID system to tell what player is who
    if (player2["_pc"]["localDescription"]["type"] !== "offer") { // Checks if the player is the host or not
        this_client_id += 1
        set_connected()
    } else if (player2["_pc"]["localDescription"]["type"] == "offer") {
        send_notification("A Player has Connected")
    }
    client_connection_to_game = true // This makes it possible to tell if the player is playing multiplayer or not
})

// When a client Sends data
player2.on('data', data => {
    var command = data + ""
    command = command.split("|")
    if (command.length == 2) { // Replaces the commas if there are args and commas in this function
        if (command[1].indexOf(",") !== -1) {command[1] = command[1].split(", ")}
    }
    // Executes the given command
    if (command.length == 2) { // Functions with args
        if (command[1].length == 1) {window[command[0]](command[1][0])}  // With 1 arg
        else if (command[1].length == 2) {window[command[0]](command[1][0], command[1][1])} // With 2 args
        else if (command[1].length == 4) {window[command[0]](command[1][0], command[1][1], command[1][2])} // With 3 args
        else if (command[1].length == 4) {window[command[0]](command[1][0], command[1][1], command[1][2], command[1][3])} // With 4 args
        else if (command[1].length == 5) {window[command[0]](command[1][0], command[1][1], command[1][2], command[1][3], command[1][4])} // With 5 args
        else if (command[0] == "set_up_game") {
            // Cleans up and makes all args into strings
            for (var i =0;i < command[1].length; i++) {
                console.log(command[1][i])
                command[1][i] = command[1][i].split(",")
            }
            // executes the cmd
            window[command[0]](command[1][0], command[1][1], command[1][2], command[1][3], command[1][4], command[1][5], command[1][6], command[1][7], command[1][8])
        } // Sends the start game from another player
    } else {window[command[0]]()} // Function with no args
    console.log(command)
})

// On Client Token Submit
document.querySelector("#connect_multi").addEventListener('click', ev => {
    ev.preventDefault()
    player2.signal(JSON.parse(document.querySelector('#id_input').value))
})

// Allows the client to host the game
document.getElementById("hostBtn").onclick = function() {
    location.hash = "#host"
    location.reload()
    document.getElementById("hostBtn").disabled = "disabled"
}

// Allows client to use copy the key
document.getElementById("copyKey").onclick = function() {
    var text = document.getElementById('id_input');
    text.select();
    document.execCommand('copy');
    send_notification("Successfully Copied The Key")
    document.getElementById("id_input").value = ""
}

function userKeyInput_update() {
    try { // If the input is a valid JSON
        var userKey = JSON.parse(document.getElementById("id_input").value)
        // If the userKey input type is offer ( Meaning Host ) then it will disable the connect btn
        if ((userKey["type"] == "offer") && (location.hash == "#host")) { // If the client is not a host and the JSON has an "offer"
            document.getElementById("connect_multi").disabled = "disabled"
            return
        } else if ((userKey["type"] == "answer") && (location.hash !== "#host")) { // If the client is not a host and the JSON has an "answer"
            document.getElementById("connect_multi").disabled = "disabled"
            return
        }
        document.getElementById("connect_multi").disabled = ""
    } catch { // If the input value is not a valid JSON
        document.getElementById("connect_multi").disabled = "disabled"
    }
}

// This will make sure that a host player can not connect to other host players
document.getElementById(`id_input`).oninput = userKeyInput_update