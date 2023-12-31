// Made September 13th, Wednesday, 2023
import changeLog from './changeLog.json' assert { type: 'json' };
import {player2, client_connection_to_game, this_client_id} from './multiplayer.js'
// Data Variables
export var propData = { // Placement is `left` px, `top` px
    "0": {"buyable": false,"property_data": {"by": null, "players_on": [], "color": null},"placement": [[75, 884], [100, 884], [75, 907], [100, 907]]}, // When the player is sent to jail this is their location
    "1": {"buyable":false, "property_data": {"by": null, "players_on": [], "color": null}, "placement": {"0":[849, 884],"1":[872, 884],"2":[895, 884],"3":[918, 884]}},
    "2": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "brown"}, "name": "Mediterranean Avenue", "property_cost": 60, "house_price": 50, "rent": [2, 10, 30, 90, 160, 250], "placement": [[775, 884],[798, 884],[775, 907],[918, 907]]},
    "3": {"buyable":false, "property_data": {"by": null, "players_on": [], "color": null}, "placement": {"0": [693, 884], "1": [715, 884], "2":[693, 907], "3": [715, 907]}},
    "4": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "brown"}, "name": "Baltic Avenue", "property_cost": 60, "house_price": 50, "rent":[4, 20, 60, 180, 320, 450], "placement": {"0": [616, 884], "1": [639, 884], "2":[616, 907], "3": [639, 907]}},
    "5": {"buyable":false, "property_data": {"by": null, "players_on": [], "color": null}, "placement": {"0": [539, 884], "1": [562, 884], "2":[539, 907], "3": [562, 907]}},
    "6": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "black"}, "name": "Reading Railroad", "property_cost": 200, "rent": [25, 50, 100, 200], "placement": {"0": [462, 884], "1": [485, 884], "2":[462, 907], "3": [485, 907]}},
    "7": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "aqua"}, "name": "Oriental Avenue", "property_cost": 100, "house_price": 50, "rent":[6, 30, 90, 270, 400, 550], "placement": {"0": [382, 884], "1": [405, 884], "2":[382, 907], "3": [405, 907]}},
    "8": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "aqua"}, "name": "Vermont Avenue", "property_cost": 100, "house_price": 50, "rent":[6, 30, 90, 270, 400, 550], "placement": {"0": [305, 884], "1": [329, 884], "2":[305, 907], "3": [329, 907]}},
    "9": {"buyable":false, "property_data": {"by": null, "players_on": [], "color": null}, "placement": {"0": [226, 884], "1": [250, 884], "2":[226, 907], "3": [250, 907]}},
    "10": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "aqua"}, "name": "Connecticut Avenue", "property_cost": 120, "house_price":50, "rent":[8, 40, 100, 300, 450, 600], "placement": {"0": [149, 884], "1": [173, 884], "2":[149, 907], "3": [173, 907]}},
    "11": {"buyable":false, "property_data": {"by": null, "players_on": [], "color": null}, "placement": {"0":[40, 882],"1":[40, 904],"2":[40, 927],"3":[63, 927]}}, // Just Visting
    "12": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "magenta"}, "name": "St. Charles Place", "property_cost": 140, "house_price":100, "rent":[10, 50, 150, 450, 625, 750], "placement": {"0": [37, 802], "1": [62, 802], "2":[88, 802], "3":[113, 802]}},
    "13": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "white"}, "name": "Electric Company", "property_cost": 150, "rent": [4,10], "placement": {"0": [37, 719], "1": [62, 719], "2":[88, 719], "3":[113, 719]}},
    "14": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "magenta"}, "name": "States Avenue", "property_cost": 140, "house_price":100,  "rent":[10, 50, 150, 450, 625, 750], "placement": {"0": [37, 637], "1": [62, 637], "2":[88, 637], "3":[113, 637]}},
    "15": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "magenta"}, "name": "Virginia Avenue", "property_cost": 160, "house_price":100, "rent":[12,60,180,500,700,900], "placement": {"0": [37, 555], "1": [62, 555], "2":[88, 555], "3":[113, 555]}},
    "16": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "black"}, "name": "Pennsylvania Railroad", "property_cost": 200, "rent": [25, 50, 100, 200], "placement": {"0": [37, 473], "1": [62, 473], "2":[88, 473], "3":[113, 473]}},
    "17": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "orange"}, "name": "St. James Place", "property_cost": 180, "house_price": 100, "rent": [14, 70, 200, 550, 750, 950], "placement": {"0": [37, 388], "1": [62, 388], "2":[88, 388], "3":[113, 388]}},
    "18": {"buyable":false, "property_data": {"by": null, "players_on": [], "color": null}, "placement": {"0": [37, 305], "1": [62, 305], "2":[88, 305], "3":[113, 305]}},
    "19": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "orange"}, "name": "Tennessee Avenue", "property_cost": 180, "house_price": 100, "rent": [14, 70, 200, 550, 750, 950], "placement": {"0": [37, 222], "1": [62, 222], "2":[88, 222], "3":[113, 222]}},
    "20": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "orange"}, "name": "New York Avenue", "property_cost": 200, "house_price":100, "rent":[16, 80, 220, 600, 800, 1000], "placement": {"0": [37, 140], "1": [62, 140], "2":[88, 140], "3":[113, 140]}},
    "21": {"buyable":false, "property_data": {"by": null, "players_on": [], "color": null}, "placement": {"0": [60, 42], "1": [62, 42], "2":[88, 65], "3":[113, 65]}}, // Free Parking
    "22": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "red"}, "name": "Kentucky Avenue", "property_cost": 220, "house_price": 150, "rent":[18, 90, 250, 700, 875, 1050], "placement": {"0": [149, 42], "1": [173, 42], "2":[149, 65], "3": [173, 65]}},
    "23": {"buyable":false, "property_data": {"by": null, "players_on": [], "color": null}, "placement": {"0": [226, 42], "1": [250, 42], "2":[226, 65], "3": [250, 65]}},
    "24": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "red"}, "name": "Indiana Avenu", "property_cost": 220, "house_price": 150, "rent":[18, 90, 250, 700, 875, 1050], "placement": {"0": [305, 42], "1": [329, 42], "2":[305, 65], "3": [329, 65]}},
    "25": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "red"}, "name": "Illinois Avenue", "property_cost": 240, "house_price":150, "rent":[20, 100, 300, 750, 925, 1100], "placement": {"0": [382, 42], "1": [405, 42], "2":[382, 65], "3": [405, 65]}},
    "26": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "black"}, "name": "B&O Railroad", "property_cost": 200, "rent": [25, 50, 100, 200], "placement": {"0": [462, 42], "1": [485, 42], "2":[462, 65], "3": [485, 65]}},
    "27": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "yellow"}, "name": "Atlantic Avenue", "property_cost":260, "house_price":150, "rent":[22, 110, 330, 800, 975, 1150], "placement": {"0": [539, 42], "1": [562, 42], "2":[539, 65], "3": [562, 65]}},
    "28": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "yellow"}, "name": "Ventnor Avenue", "property_cost":260, "house_price":150, "rent":[22, 110, 330, 800, 975, 1150], "placement": {"0": [616, 42], "1": [639, 42], "2":[616, 65], "3": [639, 65]}},
    "29": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "white"}, "name": "Water Works", "property_cost": 150, "rent": [4,10], "placement": {"0": [693, 42], "1": [715, 42], "2":[693, 65], "3": [715, 65]}},
    "30": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "yellow"}, "name": "Marvin Gardens", "property_cost": 280, "house_price":150, "rent":[24, 120, 360, 850, 1025, 1200], "placement": {"0": [775, 42], "1": [798, 42], "2":[775, 65], "3": [798, 65]}},
    "31": {"buyable":false, "property_data": {"by": null, "players_on": [], "color": null}, "placement": {"0": [880, 65]}}, // To Jail
    "32": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "green"}, "name": "Pacific Avenue", "property_cost": 300, "house_price":200, "rent":[26, 130, 390, 900, 1100, 1275], "placement": [[848, 140],[872, 140],[896, 140],[920, 140]]},
    "33": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "green"}, "name": "North Carolina Avenue", "property_cost": 300, "house_price":200, "rent":[26, 130, 390, 900, 1100, 1275], "placement": {"0":[848, 222], "1":[872, 222], "2":[896, 222], "3":[920, 222]}},
    "34": {"buyable":false, "property_data": {"by": null, "players_on": [], "color": null}, "placement": {"0":[848, 305], "1":[872, 305], "2":[896, 305], "3":[920, 305]}},
    "35": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "green"}, "name": "Pennsylvania Avenue", "property_cost": 320, "house_price":200, "rent":[28, 150, 450, 1000, 1200, 1400], "placement": {"0":[848, 388], "1":[872, 388], "2":[896, 388], "3":[920, 388]}},
    "36": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "black"}, "name": "Short Line Railroad", "property_cost": 200, "rent": [25, 50, 100, 200], "placement": {"0":[848, 473], "1":[872, 473], "2":[896, 473], "3":[920, 473]}},
    "37": {"buyable":false, "property_data": {"by": null, "players_on": [], "color": null}, "placement": {"0":[848, 555], "1":[872, 555], "2":[896, 555], "3":[920, 555]}},
    "38": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "blue"}, "name": "Park Place", "property_cost":350, "house_price":200, "rent":[35, 175, 500, 1100, 1300, 1500], "placement": {"0":[848, 637], "1":[872, 637], "2":[896, 637], "3":[920, 637]}},
    "39": {"buyable":false, "property_data": {"by": null, "players_on": [], "color": null}, "placement": {"0":[848, 719], "1":[872, 719], "2":[896, 719], "3":[920, 719]}},
    "40": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "blue"}, "name": "Boardwalk", "property_cost":400, "house_price":200, "rent":[50, 200, 600, 1400, 1700, 2000], "placement": {"0":[848, 802], "1":[872, 802], "2":[896, 802], "3":[920, 802]}}
}
// Different Property Names for different modes
const propertyNames = {
    "Base": [
        "Go","Mediterranean Avenue","Community Chest","Baltic Avenue","Income Tax","Reading Railroad","Oriental Avenue","Vermont Avenue","Chance","Connecticut Avenue","Just Visting",
        "St. Charles Place","Electric Company","States Avenue","Virginia Avenue","Pennsylvania Railroad","St. James Place","Community Chest","Tennessee Avenue","New York Avenue","Free Parking",
        "Kentucky Avenue","Chance","Indiana Avenu","Illinois Avenue","B&O Railroad","Atlantic Avenue","Ventnor Avenue","Water Works","Marvin Gardens","Go To Jail",
        "Pacific Avenue","North Carolina Avenue","Community Chest","Pennsylvania Avenue","Short Line Railroad","Chance","Park Place","Luxury Tax","Boardwalk"
    ],
    "AHS": [ // Work In Progress
        "Courtyard"
    ]
}

// Chance / chest cards
const cardsData = {
    "Base": {
        "Community Chest": {
            "advance_boardwalk": {"location_id": 40, "description": " Advance's to <b style=\"color: blue\">Boardwalk</b>"},
            "advance_railroad_1": {"location_id": 6, "description": " Advance's to <b style=\"color: black\">Reading Railroad</b>"},
            "advance_go": {"location_id": 1, "description": " Advance's to Go"},
            "out_of_jail_Community Chest": {"description": " Gained a Get of Jail Free Card"}
        },
        "Chance": {
            "advance_railroad_4": {"location_id": 36, "description": " Advance's to <b style=\"color: black\">Short Line Railroad</b>"},
            "out_of_jail_Chance": {"description": " Gained a Get of Jail Free Card"},
            "pay_tax": {"tax_amount": 100, "description": " Has to pay <b class=\"cash\">$100</b> in tax"},
            "pay_prop_tax": {"house": 15, "hotels": 115, "description": " Has to Pay for each house (<b class=\"cash\">$15</b> per) and hotel (<b class=\"cash\">$115</b> per)"},
            "pay_to_all": {"amount": 50, "description": " Has to Pay all players <b class=\"cash\">$50</b>"}
        }
    },
    "AHS": {

    }   
}

// Player Icons
const all_player_icons = [
    {"name": "House", "img": "./playerImg/player_house.png"},
    {"name": "Smiley Face", "img": "./playerImg/player_smile_face.png"},
    {"name": "Top Hat", "img": "./playerImg/player_top_hat.png"},
    {"name": "Tree", "img": "./playerImg/player_tree.png"},
    {"name": "Shoe", "img": "./playerImg/player_shoe.png"}
]

// Game Variables
var playerAmount = 4;
export var player_list = [];
var current_turn = 0
var freeParking_cash = 200
var houses = 32
var hotels = 12
var doubles = 0
var dice1, dice2, player, movement
var chest_deck, chance_deck
var saveSlot = `null`
var savingStatus = false
var backColor = ''
// Settings Variables
var enable_notifications = true
var enable_hidden_mode = true
var enable_save_warning = true
// Elements
// Menus
const cookie_menu = document.getElementById(`cookie_menu`)
const connectedScreen = document.getElementById("connectScreen")
const main_menu = document.getElementById(`main_menu`)
const game_board = document.getElementById(`gameboard`)
const trade_menu = document.getElementById(`trading_menu`)
const manage_menu = document.getElementById(`manage_menu`)
const auction_menu = document.getElementById(`auction_menu`)
const winningScreen = document.getElementById(`winningScreen`)
// Elements for Main menu
const start_btn = document.getElementById(`start_game`)
const error_txt = document.getElementById(`error_txt`)
const select_version = document.getElementById(`version_menu`)
const changeLog_txt = document.getElementById(`changeLog_main`)
const saveSelector = document.getElementById(`saveSelect`)
const notification_elm = document.getElementById("settings_notification")
const hidden_mode_elm = document.getElementById("settings_hidden_mode")
const save_warning_elm = document.getElementById("settings_save_warning")
const settings_btn = document.getElementById("settings_btn")
// Buttons for game board
const roll_btn = document.getElementById('roll_action')
const trade_btn = document.getElementById(`trade_action`)
const any_btn = document.getElementById(`any_action`)
const buy_btn = document.getElementById(`buy_action`)
const sell_btn = document.getElementById(`sell_action`)
const pay_btn = document.getElementById(`pay_action`)
const turn_text = document.getElementById(`player_turn_name`)
const bankrupt_btn = document.getElementById(`bankrupt_btn`)
const saveGame_btn = document.getElementById(`saveGame_btn`)
const loadGame_btn = document.getElementById(`loadSave_btn`)
const delGame_btn = document.getElementById(`deleteSave_btn`)
// Dice Img
const dice1_img = document.getElementById(`dice1`)
const dice2_img = document.getElementById(`dice2`)
// The player class
class Player {
    constructor(name, color, spot, id, money, jailed, props, ooj, bankrupt, icon) {
        this.name = name
        this.color = color
        this.spot_id = spot
        this.player_id = id
        this.money = money
        this.isJailed = jailed
        this.properties = props
        this.out_of_jail_cards = ooj
        this.bankrupt = bankrupt
        this.icon = icon
    }

    // Returns the name of the player
    get_player_name() {
        return this.name
    }

    // Returns the color of the player
    get_player_color() {
        return this.color
    }

    // Returns the id of the player
    get_player_id() {
        return this.player_id
    }

    // Returns the spot_id the player is at
    get_player_spot_id() {
        return this.spot_id
    }
    // Sets the players' spot_id
    set_player_spot_id(spot) {
        this.spot_id = spot
    }
    // Adds to the players' spot_id
    add_player_spot_id(amount) {
        this.spot_id += amount
    }

    // Returns the players' money amount
    get_player_money() {
        return this.money
    }
    // Sets the players money
    set_player_money(amount) {
        this.money = parseInt(amount)
    }
    // Adds to the players' money amount
    add_player_money(amount) {
        this.money += parseInt(amount)
    }
    // Removes from the players' money amount
    remove_player_money(amount) {
        this.money -= parseInt(amount)
    }

    // Returns the Players' Jailed Status
    get_player_isJailed() {
        return this.isJailed
    }
    // Sets the players' isJailed
    set_player_isJailed(status) {
        this.isJailed = status
    }

    // Returns the players' property
    get_player_properties() {
        return this.properties
    }
    // Adds to the players' properties
    add_player_properties(property_id) {
        this.properties[property_id] = {"name": propData[property_id]['name'], "houses": 0, "mortgage": false}
    }
    add_player_properties_manual(property_id, name, houses, mortgage) {
        this.properties[property_id] = {"name": name,  "houses": parseInt(houses), "mortgage": mortgage}
    }
    // Removes to the players' properties
    remove_player_properties(property_id) {
        delete this.properties[property_id]
    }

    // This will add the icon for the house
    add_house_icon(property_id, house) {
        let cell_container = document.getElementById(`cell_${property_id}_house_container`)
        var new_house = document.createElement(`canvas`)
        new_house.id=`cell_${property_id}_housing_${house}`
        new_house.className = `house`
        // Makes the className hotel if it has more than 4 properties
        if (this.properties[property_id]['houses'] == 5) {
            new_house.className = `hotel`
            cell_container.innerHTML = "" // Removes all the other houses
        }
        // Adds the house to the cell Container
        cell_container.appendChild(new_house)
    }
    // Adds a house to the players property
    add_player_prop_house(property_id) {
        this.properties[property_id]['houses'] += 1
        this.add_house_icon(property_id, this.properties[property_id]['houses']-1)
    }
    // Removes a house to the players property
    remove_player_prop_house(property_id) {
        // Removes the house
        this.properties[property_id]['houses'] -= 1
        // Everything with icons
        let cell_container = document.getElementById(`cell_${property_id}_house_container`)
        cell_container.innerHTML = `` // Removes all cell icons
        // Adds The houses icon back
        for (var i=0; i < this.properties[property_id]['houses']; i++) { this.add_house_icon(property_id, i) }
    }
    // Sets the property Mortgage
    set_property_mortgage(property_id, mortgage) {
        this.properties[property_id]['mortgage'] = mortgage
    }

    // Returns the players'  ooj
    get_player_ooj() {
        return this.out_of_jail_cards
    }
    // Adds to the players' ooj
    add_player_ooj(ooj) {
        this.out_of_jail_cards.push(ooj)
    }
    // Removes to the players' properties
    remove_player_ooj() {
        if (this.out_of_jail_cards.length > 0) {
            var ooj_card = this.out_of_jail_cards[0].replace("out_of_jail_", "")
            if (ooj_card == `Community Chest`) {
                chest_deck[chest_deck.length] = ooj_card
            } else if (ooj_card == `Chance`) {
                chance_deck[chance_deck.length] = ooj_card
            } else {
                console.error(`ooj_card origin was not found: ${ooj_card}`)
            }
            this.out_of_jail_cards.splice(0, 1) // Removes the card
        }
    }

    // Gets the players bankrupt status
    get_player_bankrupt() {
        return this.bankrupt
    }
    // Sets the players bankrupt status
    set_player_bankrupt(status) {
        this.bankrupt = status
    }
    
    // Gets the players icon
    get_player_icon() {
        return this.icon
    }

    // Returns this players data into a list
    toString() {
        //name, color, spot, id, money, jailed, props, ooj, bankrupt
        return [this.name, this.color, this.spot_id, this.player_id, this.money, this.isJailed, this.properties, this.out_of_jail_cards, this.bankrupt, this.icon]
    }
}

// Main Game Functions \\
// Shuffles given arrays
// Link: https://stackoveflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

// When called the notifi element will show the notification and then fade away
export function send_notification(message) {
    // Checks if notifications are enable
    if (enable_notifications == true) {
        document.getElementById("notification").innerHTML = message
        $("#notification").fadeIn()
        setTimeout(function() {
            $("#notification").fadeOut()
        }, 2500)
    }
}

// Finds the given Cookie
export function getCookie(name) {
    var nameEQ = `${name}=`;
    var allCookies = document.cookie.split(';');
    for(var i=0;i < allCookies.length;i++) {
        var thisCookie = allCookies[i];
        // Removes the first space ( if it exist )
        if (thisCookie.substring(0, 1) == ` `) {thisCookie = thisCookie.replace(` `, ``)} 
        // Checks If the cookie exist
        if (thisCookie.indexOf(nameEQ) !== -1) {
            var thisCookie_data = thisCookie.substring(nameEQ.length,thisCookie.length);
            // Checks if there is a problem with turn the cookie into JSON data
            try { // If there is no error
                var placeHolder_cookie = JSON.parse(thisCookie_data)
            } catch (err) { // If Making the cookie into json broke it
                var placeHolder_cookie = JSON.parse(`{${thisCookie_data}`) // Just adds a curly bracket to fix JSON issue
            }
            return placeHolder_cookie
        }
    }
    return null;
} 

// Makes / Deletes the named cookie 
export function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = `expires=`+ d.toUTCString();
    document.cookie = cname + `=` + cvalue + `;` + expires + `;path=/`;
}

// Saves the settings the user saved
function save_client_settings() {
    var settings_txt = document.getElementById("settings_save_txt")
    try {
        // Saves the items into a cookie
        var setting_items = {
            "notification": notification_elm.checked,
            "hidden_mode": hidden_mode_elm.checked,
            "save": save_warning_elm.checked
        }
        setCookie("settings", JSON.stringify(setting_items), 1000)
        load_client_settings()
        settings_txt.textContent = "Successfully Saved"
        settings_txt.style.color = "lime"
        // Fades the save_txt in and out
    } catch (err) {
        settings_txt.textContent = "Hmmm... Something Went Wrong"
        settings_txt.style.color = "red"
        console.log(err)
    }
    $("#settings_save_txt").fadeIn()
    setTimeout(function() {
         $("#settings_save_txt").fadeOut()
    }, 2500)
}

// Loads the saved client settings
function load_client_settings() {
    try {
        // Gets the settings Data
        var client_settings = getCookie("settings")
        // Checks the items
        notification_elm.checked = client_settings["notification"]
        hidden_mode_elm.checked = client_settings["hidden_mode"]
        save_warning_elm.checked = client_settings["save"]
        // Changes the variables
        enable_notifications = client_settings["notification"]
        enable_hidden_mode = client_settings["hidden_mode"]
        enable_save_warning = client_settings["save"]
    } catch (err) {}
}   

// This saves the players name
export function save_current_game(name, returnData) {
    var player_data = []
    // Gets all the player data into a list
    for (var i=0; i < player_list.length; i++) {
        player_data.push(player_list[i].toString())
    }
    // All data that needs to be saved
    var savingData = { 
        "name": name,
        "cards": {
            "chest": chest_deck,
            "chance": chance_deck
        },
        "players": player_data,
        "houses": houses,
        "hotels": hotels,
        "freeParking": freeParking_cash,
        "turn": current_turn
    }
    if (returnData !== true) {
        // This will try to find a open save slot
        let slot = 0
        if (saveSlot == `null`) { // If the save Slot equals null then continue
            while (true) {
                if (getCookie(`saveSlot${slot}`) == null) { // If the founded cookie is available
                    break
                }
                slot++
            }
        } else { // If the save was loaded
            slot = parseInt(saveSlot.replace(`saveSlot`, ``))
        }
        // Save the data into the saveSlot
        setCookie(`saveSlot${slot}`, JSON.stringify(savingData).toString(), 775)
        send_notification(`The Game has been successfully saved as: ${name}`)
        enable_save_warning = false // Disables Refresh warning since they saved their game
        // After 1.5 seconds it will reload the page
        setTimeout(function() {
            location.reload();
        }, 1500)
        return
    }
    // This will return all data that can be used to transfer or store
    return JSON.stringify(savingData)
}

// This will load the game when called
export function load_saved_game(loadClient, data) {
    // This will rewrite the data
    if (loadClient !== true) { // If data does not need to be sent just stored
        var playerData = getCookie(saveSelector.value)
        saveSlot = saveSelector.value
    } else { // This will allow the process of loading the data sent from another client
        var playerData = JSON.parse(data)
    }
    //console.log(playerData)
    // Sets up every tag
    houses = playerData[`houses`]
    hotels = playerData[`hotels`]
    current_turn = playerData[`turn`]
    freeParking_cash = playerData[`freeParking`]
    // Sets player length
    playerAmount = playerData[`players`].length
    // Gets all the data needed for the player
    var player_names = []
    var player_colors = []
    var player_spot = []
    var player_id = []
    var player_money = []
    var player_jail = []
    var player_props = []
    var player_ooj = []
    var player_bank = []
    var player_icon = []
    // Sets all the values in the correct variable
    for (var play=0; play < playerAmount; play++) {
        player_names.push(playerData[`players`][play][0])
        player_colors.push(playerData[`players`][play][1])
        // Fixes a issue when saving the "0" in an array
        propData[playerData['players'][play][2]]['property_data']['players_on'].push(play)
        player_spot.push(playerData[`players`][play][2])
        player_id.push(playerData[`players`][play][3])
        player_money.push(playerData[`players`][play][4])
        player_jail.push(playerData[`players`][play][5])
        player_props.push(playerData[`players`][play][6])
        var prop_keys = Object.keys(playerData[`players`][play][6])
        // Updates the propData
        for (var j=0; j < prop_keys.length; j++) { propData[prop_keys[j]][`property_data`][`by`] = play }
        player_ooj.push(playerData[`players`][play][7])
        player_bank.push(playerData[`players`][play][8])
        player_icon.push(playerData[`players`][play][9])
    }
    // Starts the game
    set_up_game(player_names, player_colors, player_spot, player_id, player_money, player_jail, player_props, player_ooj, player_bank, player_icon)
    // Overwrites Card Data
    chest_deck = playerData[`cards`][`chest`]
    chance_deck = playerData[`cards`][`chance`]
    update_all_prop_tags()
    // If the player loads a save this will fix the border issue
    for (var i=0; i < player_list.length; i++) {
        document.getElementById(player_list[current_turn].get_player_id()).style.border = `1px solid black` // Changes the border to white
        if ([6,16,26,36].includes(player_list[i].get_player_spot_id())) { // If the player is on railroads
            document.getElementById(player_list[i].get_player_id()).style.border = `1px solid white` // Changes the border to white
        }
    }

}

// Other Menus \\
// This will open up the trading menu
export function open_trade(player) {
    game_board.style.display = `none` // hides the board
    trade_menu.style.display = `block` // Shows the trade menu

    // Gets the needed elements for the LEFT player
    var trader_name = document.getElementById(`player_name_left`)
    var trader_prop_input = document.getElementById(`player_props_left`)
    var trader_prop_add_btn = document.getElementById(`prop_add_btn_left`)
    var trader_prop_sub_btn = document.getElementById(`prop_sub_btn_left`)
    var trader_cash_input = document.getElementById(`cash_input_left`)
    var trader_cash_add_btn = document.getElementById(`cash_add_btn_left`)
    var trader_cash_sub_btn = document.getElementById(`cash_sub_btn_left`)
    var trader_ooj_input = document.getElementById(`player_ooj_left`)
    var trader_ooj_add_btn = document.getElementById(`ooj_add_btn_left`)
    var trader_ooj_sub_btn = document.getElementById(`ooj_sub_btn_left`)
    var trader_giving_props = document.getElementById(`player_giving_props_left`)
    var trader_total_text = document.getElementById(`total_value_left`)

    // Functions that both sides will use
    // Updates both total_values
    var update_totals = function() {
        console.log(left_items, right_items)
        trader_total_text.textContent = `Total Value: $${left_items[`cash`]+left_items[`prop_cash`]}`
        other_total_text.textContent = `Total Value: $${right_items[`cash`]+right_items[`prop_cash`]}`
    }
    trader_name.textContent = player_list[parseInt(player)].get_player_name() // Make it the player who turn it is
    console.log(player_list[parseInt(player)])
    // LEFT side trading variables
    var left_items = {"properties": [], "prop_cash": 0,"cash": 0, "ooj": []}
    var left_property = player_list[parseInt(player)].get_player_properties()
    var left_cash = player_list[parseInt(player)].get_player_money()
    var left_ooj = player_list[parseInt(player)].get_player_ooj()

    // Adds all the properties for the LEFT side
    var prop_keys = Object.keys(left_property) 
    // Adds the properties
    if (prop_keys.length > 0) { // Checks if the player has any properties
        for (var i=0; i < prop_keys.length; i++) { // Adds all the properties to LEFT side
            var prop_opt = document.createElement(`option`)
            prop_opt.id = `property_opt_${prop_keys[i]}`
            prop_opt.value = prop_keys[i]
            prop_opt.textContent = propData[prop_keys[i]][`name`]
            trader_prop_input.appendChild(prop_opt)
        }
    } else {// If the player has no properties
        var prop_opt = document.createElement(`option`)
        prop_opt.value = null
        prop_opt.textContent = `No Properties`
        trader_prop_input.appendChild(prop_opt)
    }

    // Adds all the ooj cards for the LEFT side
    if (left_ooj.length > 0) {
        for (var i=0; i < left_ooj.length; i++) {
            var ooj_opt = document.createElement(`option`)
            ooj_opt.id = `ooj_left_${left_ooj[i]}`
            ooj_opt.value = left_ooj[i]
            ooj_opt.textContent = left_ooj[i]
            trader_ooj_input.appendChild(ooj_opt)
        }
    } else {
        var ooj_opt = document.createElement(`option`)
        ooj_opt.value = `null`
        ooj_opt.textContent = `No Cards`
        trader_ooj_input.appendChild(ooj_opt)
    }
    // Sets the max cash input
    trader_cash_input.max = left_cash

    // Button Functions for LEFT side
    var trader_prop_add_funct = function() { // Property Adding btn
        if ((left_items[`properties`].includes(trader_prop_input.value) == false) && (trader_prop_input.value !== `null`)) { // Checks if the selected property isn't the default value
            document.getElementById(`property_opt_${trader_prop_input.value}`).style.color = `green`
            left_items[`properties`].push(trader_prop_input.value)
            // Creates the prop element for the list of removed props
            var prop_container = document.createElement(`div`)
            prop_container.id = `prop_${trader_prop_input.value}`
            prop_container.className = `info_prop`
            trader_giving_props.appendChild(prop_container)
            // Creates the prop color box
            prop_container = document.getElementById(`prop_${trader_prop_input.value}`)
            var prop_color = document.createElement(`canvas`)
            prop_color.id = `prop_color_${trader_prop_input.value}`
            prop_color.className = `prop_color`
            prop_color.width = `20`
            prop_color.height = `20`
            prop_color.style = `background-color:${propData[trader_prop_input.value][`property_data`][`color`]};top:${((left_items[`properties`].length-1)*30)}px;`
            prop_container.appendChild(prop_color)
            // Makes the Prop Name
            var prop_name = document.createElement(`div`)
            prop_name.id = `prop_name_${trader_prop_input.value}`
            prop_name.className = `prop_name`
            prop_name.textContent = `- `+propData[trader_prop_input.value][`name`]
            prop_name.style = `top:${((left_items[`properties`].length-1)*30)}px;`
            prop_container.appendChild(prop_name)
            left_items[`prop_cash`] += propData[trader_prop_input.value][`property_cost`]
            update_totals()
        }
    }
    var trader_prop_sub_funct = function() { // Property Removing btn
        if (left_items[`properties`].includes(trader_prop_input.value)) { // If the property has been added to the trade
            document.getElementById(`property_opt_${trader_prop_input.value}`).style.color = `black`
            // Removes The property
            document.getElementById(`prop_${trader_prop_input.value}`).remove()
            left_items[`prop_cash`] -= propData[trader_prop_input.value][`property_cost`]
            left_items[`properties`].splice(left_items[`properties`].indexOf(trader_prop_input.value), 1) // Removes the 
            // Updates the list
            for (var i=0; i < left_items[`properties`].length; i++) {
                var canvas_elm = document.getElementById(`prop_color_${left_items[`properties`][i]}`)
                canvas_elm.style = `background-color:${propData[left_items[`properties`][i]][`property_data`][`color`]};top:${((i)*30)}px;`
                var name_elm = document.getElementById(`prop_name_${left_items[`properties`][i]}`)
                name_elm.style = `top:${((i)*30)}px;`
            }
        }
        update_totals()
    }
    var trader_cash_add_funct = function() { // Cash Adding btn
        if ((trader_cash_input.value >= 0) && (trader_cash_input.value <= left_cash)) { // Checks if the cash input can be added
            left_items[`cash`] += parseInt(trader_cash_input.value)
            left_cash -= parseInt(trader_cash_input.value)
        }
        trader_cash_input.value = 0
        update_totals()
    }
    var trader_cash_sub_funct = function() { // Cash Removing btn
        if ((trader_cash_input.value >= 0) && (trader_cash_input.value <= left_items[`cash`])) { // Checks if the cash input can be added
            left_items[`cash`] -= parseInt(trader_cash_input.value)
            left_cash += parseInt(trader_cash_input.value)
        }
        trader_cash_input.value = 0
        update_totals()
    }
    var trader_ooj_add_funct = function() { // ooj Adding btn
        if (left_items[`ooj`].includes(trader_ooj_input.value) == false) { // Checks if the player hasn't added the chance/chest cards
            left_ooj.splice(left_ooj.indexOf(trader_ooj_input.value), 1)
            left_items[`ooj`].push(trader_ooj_input.value)
            document.getElementById(`left_`+trader_ooj_input.value).checked = true
            left_items[`prop_cash`] += 50
        }
        update_totals()
    }
    var trader_ooj_sub_funct = function() { // ooj Removing btn
        if (left_items[`ooj`].includes(trader_ooj_input.value)) { // Checks if the player hasn't added the chance/chest cards
            left_items[`ooj`].splice(left_items[`ooj`].indexOf(trader_ooj_input.value), 1)
            left_ooj.push(trader_ooj_input.value)
            document.getElementById(`left_${trader_ooj_input.value}`).checked = false
            left_items[`prop_cash`] -= 50
        }
        update_totals()
    } 
    // Makes the Trader buttons interactable
    trader_prop_add_btn.addEventListener(`click`, trader_prop_add_funct)
    trader_prop_sub_btn.addEventListener(`click`, trader_prop_sub_funct)
    trader_cash_add_btn.addEventListener(`click`, trader_cash_add_funct)
    trader_cash_sub_btn.addEventListener(`click`, trader_cash_sub_funct)
    trader_ooj_add_btn.addEventListener(`click`, trader_ooj_add_funct)
    trader_ooj_sub_btn.addEventListener(`click`, trader_ooj_sub_funct)
    // RIGHT SIDE
    // Gets the needed elements for the RIGHT player
    var other_name = document.getElementById(`player_name_right`)
    var other_prop_input = document.getElementById(`player_props_right`)
    var other_prop_add_btn = document.getElementById(`prop_add_btn_right`)
    var other_prop_sub_btn = document.getElementById(`prop_sub_btn_right`)
    var other_cash_input = document.getElementById(`cash_input_right`)
    var other_cash_add_btn = document.getElementById(`cash_add_btn_right`)
    var other_cash_sub_btn = document.getElementById(`cash_sub_btn_right`)
    var other_ooj_input = document.getElementById(`ooj_right`)
    var other_ooj_add_btn = document.getElementById(`ooj_add_btn_right`)
    var other_ooj_sub_btn = document.getElementById(`ooj_sub_btn_right`)
    var other_giving_props = document.getElementById(`player_giving_props_right`)
    var other_total_text = document.getElementById(`total_value_right`)
    var right_items = {"properties": [], "prop_cash": 0,"cash": 0, "ooj": []}
    var right_cash = 0
    // Creates the Select Player.... Option
    var sel_opt = document.createElement(`option`)
    sel_opt.value=`null`
    sel_opt.textContent = `Select Player....`
    other_name.appendChild(sel_opt)

    // Makes the other buttons interactable
    other_prop_add_btn.onclick = function() { // Property Adding btn
        if ((right_items[`properties`].includes(other_prop_input.value) == false) && (other_prop_input.value !== `null`)) { // Checks if the selected property isn't the default value
            document.getElementById(`property_opt_${other_prop_input.value}`).style.color = `green`
            right_items[`properties`].push(other_prop_input.value)
            // Creates the prop element for the list of added props
            var prop_container = document.createElement(`div`)
            prop_container.id = `prop_${other_prop_input.value}`
            prop_container.className = `info_prop`
            other_giving_props.appendChild(prop_container)
            // Creates the prop color box
            prop_container = document.getElementById(`prop_${other_prop_input.value}`)
            var prop_color = document.createElement(`canvas`)
            prop_color.id = `prop_color_${other_prop_input.value}`
            prop_color.className = `prop_color`
            prop_color.width = `20`
            prop_color.height = `20`
            prop_color.style = `background-color:${propData[other_prop_input.value][`property_data`][`color`]};top:${((right_items[`properties`].length-1)*30)}px;`
            prop_container.appendChild(prop_color)
            // Makes the Prop Name
            var prop_name = document.createElement(`div`)
            prop_name.id = `prop_name_${other_prop_input.value}`
            prop_name.className = `prop_name`
            prop_name.textContent = `- ${propData[other_prop_input.value][`name`]}`
            prop_name.style = `top:${((right_items[`properties`].length-1)*30)}px;`
            prop_container.appendChild(prop_name)
            right_items[`prop_cash`] += propData[other_prop_input.value][`property_cost`]
            update_totals()
        }
    }
    other_prop_sub_btn.onclick = function() { // Property Removing btn
        if (right_items[`properties`].includes(other_prop_input.value)) { // If the property has been added to the trade
            document.getElementById(`property_opt_${other_prop_input.value}`).style.color = `black`
            // Removes The property
            document.getElementById(`prop_${other_prop_input.value}`).remove()
            right_items[`prop_cash`] -= propData[other_prop_input.value][`property_cost`]
            right_items[`properties`].splice(right_items[`properties`].indexOf(other_prop_input.value), 1) // Removes the 
            // Updates the list
            for (var i=0; i < right_items[`properties`].length; i++) {
                var canvas_elm = document.getElementById(`prop_color_${right_items[`properties`][i]}`)
                canvas_elm.style = `background-color:${propData[right_items[`properties`][i]][`property_data`][`color`]};top:${((i)*30)}px;`
                var name_elm = document.getElementById(`prop_name_${right_items[`properties`][i]}`)
                name_elm.style = `top:${((i)*30)}px;`
            }
        }
        update_totals()
    }
    other_cash_add_btn.onclick = function() { // Cash Adding btn
        if ((other_cash_input.value >= 0) && (other_cash_input.value <= player_list[other_name.value].get_player_money())) { 
            console.log("added")
            right_items[`cash`] += parseInt(other_cash_input.value) // Adds the cash to the right_items
            player_list[other_name.value].remove_player_money(other_cash_input.value)  // Removes the cash from the right players actual cash amount
        }
        other_cash_input.value = 0
        update_totals()
    }
    other_cash_sub_btn.onclick = function() { // Cash Removing btn
        if ((other_cash_input.value >= 0) && (other_cash_input.value <= right_items[`cash`])) { // Checks if the cash input can be added
            right_items[`cash`] -= parseInt(other_cash_input.value) // Removes the cash from the right_items
            player_list[other_name.value].add_player_money(other_cash_input.value) // Adds the cash back to the right players actual cash amount
        }
        other_cash_input.value = 0
        update_totals()
    }
    other_ooj_add_btn.onclick = function() { // Ooj Adding btn
        if (right_items[`ooj`].includes(other_ooj_input.value) == false) { // Checks if the player hasn't added the chance/chest cards
            right_ooj.splice(right_ooj.indexOf(other_ooj_input.value), 1)
            right_items[`ooj`].push(other_ooj_input.value)
            document.getElementById(`right_${other_ooj_input.value}`).checked = true
            right_items[`prop_cash`] += 50
        }
        update_totals()
    }
    other_ooj_sub_btn.onclick = function() { // Ooj Removing btn
        if (right_items[`ooj`].includes(other_ooj_input.value)) { // Checks if the player hasn't added the chance/chest cards
            right_items[`ooj`].splice(right_items[`ooj`].indexOf(other_ooj_input.value), 1)
            right_ooj.push(other_ooj_input.value)
            document.getElementById(`right_${other_ooj_input.value}`).checked = false
            right_items[`prop_cash`] -= 50
        }
        update_totals()
    }

    // Adds all the player names to the right Select
    for (var i=0; i < player_list.length; i++) {
        if (player_list[i].get_player_id() !== player_list[parseInt(player)].get_player_id()) {
            var player_opt = document.createElement(`option`)
            player_opt.value = i
            player_opt.textContent = player_list[i].get_player_name()
            other_name.appendChild(player_opt)
        }
    }

    // Confirm and cancel buttons
    var left_confirm = document.getElementById(`left_player_confirm`)
    var cancel_btn = document.getElementById(`cancel_trade`)
    var right_confirm = document.getElementById(`right_player_confirm`)
    var left_confirm_bool = false
    var right_confirm_bool = false
    // cancel_btn
    var cancel_funct = function() {
        game_board.style = `display: block;` // shows the board
        trade_menu.style= `display: none;` // hides the trade menu
        // This will remove all old items if they changed players (RIGHT)
        while(other_prop_input.firstChild) { // Removes all properties
            other_prop_input.removeChild(other_prop_input.firstChild)
        }
        while (other_ooj_input.firstChild) { // Removes all ooj
            other_ooj_input.removeChild(other_ooj_input.firstChild)
        }
        while(other_giving_props.firstChild) { // Removes all added properties
            other_giving_props.removeChild(other_giving_props.firstChild)
        }
        while(other_name.firstChild) { // Removes all names from the right name container
            other_name.removeChild(other_name.firstChild)
        }
        // This will remove all old items if they changed players (LEFT)
        while(trader_prop_input.firstChild) { // Removes all properties
            trader_prop_input.removeChild(trader_prop_input.firstChild)
        }
        while (trader_ooj_input.firstChild) { // Removes all ooj
            trader_ooj_input.removeChild(trader_ooj_input.firstChild)
        }
        while(trader_giving_props.firstChild) { // Removes all added properties
            trader_giving_props.removeChild(trader_giving_props.firstChild)
        }
        document.getElementById(`right_Community Chest`).checked = false
        document.getElementById(`right_Chance`).checked = false
        document.getElementById(`left_Community Chest`).checked = false
        document.getElementById(`left_Chance`).checked = false
        
    }
    cancel_btn.addEventListener(`click`, cancel_funct)
    // Checks if both players confirmed the trade when called
    var check_confirm_bool = function() {
        if ((left_confirm_bool == true) && (right_confirm_bool == true)) { // If both players did confirm
            for (var i=0; i < left_items[`properties`].length; i++) { // Adds the properties from the left player to the right player
                player_list[parseInt(player)].remove_player_properties(left_items[`properties`][i])
                player_list[other_name.value].add_player_properties(left_items[`properties`][i])
                propData[left_items[`properties`][i]][`property_data`][`by`] = other_name.value
            }
            for (var i=0; i < right_items[`properties`].length; i++) { // Adds the properties from the right player to the left player
                player_list[other_name.value].remove_player_properties(right_items[`properties`][i])
                player_list[parseInt(player)].add_player_properties(right_items[`properties`][i])
                propData[right_items[`properties`][i]][`property_data`][`by`] = current_turn
            }
            for (var i=0; i < left_items[`ooj`].length; i++) { // Adds the ooj from the left player to the right player
                player_list[parseInt(player)].remove_player_ooj(left_items[`ooj`][i])
                player_list[other_name.value].add_player_ooj(left_items[`ooj`][i])
            }
            for (var i=0; i < right_items[`ooj`].length; i++) { // Adds the ooj from the right player to the left player
                player_list[other_name.value].remove_player_ooj(right_items[`ooj`][i])
                player_list[parseInt(player)].add_player_ooj(right_items[`ooj`][i])
            }
            player_list[parseInt(player)].remove_player_money(left_items[`cash`]) // Removes the Cash left player gave
            player_list[parseInt(player)].add_player_money(right_items[`cash`]) // Adds the Cash right player gave
            player_list[other_name.value].remove_player_money(right_items[`cash`]) // Removes the Cash right player gave
            player_list[other_name.value].add_player_money(left_items[`cash`]) // Adds the Cash left player gave
            right_confirm_bool = false
            left_confirm_bool = false
            update_money_display()
            update_all_prop_tags()
            cancel_funct()
        }
    }
    // left_confirm btn
    left_confirm.textContent = `${player_list[parseInt(player)].get_player_name()} Confirm`
    var left_con_funct = function() { // if the player confirms
        trader_prop_input.disabled = `disabled`
        trader_prop_add_btn.disabled = `disabled`
        trader_prop_sub_btn.disabled = `disabled`
        trader_cash_input.disabled = `disabled`
        trader_cash_add_btn.disabled = `disabled`
        trader_cash_sub_btn.disabled = `disabled`
        trader_ooj_input.disabled = `disabled`
        trader_ooj_add_btn.disabled = `disabled`
        trader_ooj_sub_btn.disabled = `disabled`
        left_confirm.removeEventListener(`click`, left_con_funct)
        left_confirm.addEventListener(`click`, left_uncon_funct)
        left_confirm_bool = true
        left_confirm.textContent = player_list[parseInt(player)].get_player_name()+` Un-Confirm`
        check_confirm_bool()
    }
    var left_uncon_funct = function() { // if the player un-confirms
        trader_prop_input.disabled = ``
        trader_prop_add_btn.disabled = ``
        trader_prop_sub_btn.disabled = ``
        trader_cash_input.disabled = ``
        trader_cash_add_btn.disabled = ``
        trader_cash_sub_btn.disabled = ``
        trader_ooj_input.disabled = ``
        trader_ooj_add_btn.disabled = ``
        trader_ooj_sub_btn.disabled = ``
        left_confirm.removeEventListener(`click`, left_uncon_funct)
        left_confirm.addEventListener(`click`, left_con_funct)
        left_confirm.textContent = player_list[parseInt(player)].get_player_name()+` Confirm`
        left_confirm_bool = false
    }
    left_confirm.addEventListener(`click`, left_con_funct)
    var right_con_funct = function() { // if the player confirms
        other_prop_input.disabled = `disabled`
        other_prop_add_btn.disabled = `disabled`
        other_prop_sub_btn.disabled = `disabled`
        other_cash_input.disabled = `disabled`
        other_cash_add_btn.disabled = `disabled`
        other_cash_sub_btn.disabled = `disabled`
        other_ooj_input.disabled = `disabled`
        other_ooj_add_btn.disabled = `disabled`
        other_ooj_sub_btn.disabled = `disabled`
        right_confirm.removeEventListener(`click`, right_con_funct)
        right_confirm.addEventListener(`click`, right_uncon_funct)
        if (other_name.value !== `null`) {
            right_confirm.textContent = `${player_list[other_name.value].get_player_name()} Un-Confirm`
            right_confirm_bool = true
            check_confirm_bool()
        }
    }
    var right_uncon_funct = function() { // if the player un-confirms
        other_prop_input.disabled = ``
        other_prop_add_btn.disabled = ``
        other_prop_sub_btn.disabled = ``
        other_cash_input.disabled = ``
        other_cash_add_btn.disabled = ``
        other_cash_sub_btn.disabled = ``
        other_ooj_input.disabled = ``
        other_ooj_add_btn.disabled = ``
        other_ooj_sub_btn.disabled = ``
        right_confirm.removeEventListener(`click`, right_uncon_funct)
        right_confirm.addEventListener(`click`, right_con_funct)
        right_confirm.textContent = player_list[other_name.value].get_player_name()+` Confirm`
        right_confirm_bool = false
    }
    right_confirm.addEventListener(`click`, right_con_funct)
    // When the player is changed
    var other_change = function() {
        // This will remove all old items if they changed players
        while(other_prop_input.firstChild) { // Removes all properties
            other_prop_input.removeChild(other_prop_input.firstChild)
        }
        while (other_ooj_input.firstChild) { // Removes all ooj
            other_ooj_input.removeChild(other_ooj_input.firstChild)
        }
        while(other_giving_props.firstChild) { // Removes all added properties
            other_giving_props.removeChild(other_giving_props.firstChild)
        }
        other_cash_input.value = 0; // Sets the cash input to 0
        document.getElementById(`right_Community Chest`).checked = false
        document.getElementById(`right_Chance`).checked = false
        if (other_name.value !== `null`) {
            // right_confirm
            right_confirm.textContent = player_list[(other_name.value).toString()].get_player_name()+` Confirm`
            // RIGHT side variables
            right_items = {"properties": [], "prop_cash": 0,"cash": 0, "ooj": []}
            var right_property = player_list[other_name.value].get_player_properties()
            var right_cash = player_list[other_name.value].get_player_money()
            var right_ooj = player_list[other_name.value].get_player_ooj()

            // Adds all the properties for the right side 
            var right_keys = Object.keys(right_property)
            if (right_keys.length > 0) { // If the player has no properties
                for (var i=0; i < right_keys.length; i++) { // Adds all the properties to right side
                    var prop_opt = document.createElement(`option`)
                    prop_opt.id = `property_opt_`+right_keys[i]
                    prop_opt.value = right_keys[i]
                    prop_opt.textContent = propData[right_keys[i]][`name`]
                    other_prop_input.appendChild(prop_opt)
                }
            } else {
                var prop_opt = document.createElement(`option`)
                prop_opt.value = null
                prop_opt.textContent = `No Properties`
                other_prop_input.appendChild(prop_opt)
            }

            // Adds all the ooj cards for the right side
            if (right_ooj.length > 0) {
                for (var i=0; i < right_ooj.length; i++) {
                    var ooj_opt = document.createElement(`option`)
                    ooj_opt.id = `ooj_right_`+right_ooj[i]
                    ooj_opt.value = right_ooj[i]
                    ooj_opt.textContent = right_ooj[i]
                    other_ooj_input.appendChild(ooj_opt)
                }
            } else {
                var ooj_opt = document.createElement(`option`)
                ooj_opt.value = null
                ooj_opt.textContent = `No Cards`
                other_ooj_input.appendChild(ooj_opt)
            }
            // Sets the max cash input
            other_cash_input.max = right_cash
            right_uncon_funct()
        } else {
            right_con_funct()
        }
        update_totals()
    }
    other_change()
    other_name.addEventListener(`change`, other_change)
    left_uncon_funct() // This will enable all the items for the left side after a trade
}

// This will open the managing property Menu
export function open_manager(player) {
    manage_menu.style.display = `block` // Shows the manage prop menu
    // This will add all div and props
    var propData_keys = Object.keys(propData)
    var prop_keys = Object.keys(player_list[parseInt(player)].get_player_properties())
    var new_buy = document.getElementById(`manage_buy`)
    var new_sell = document.getElementById(`manage_sell`)
    var prop_text = document.getElementById("manage_prop_name")
    new_buy.disabled = `disabled`
    new_sell.disabled = `disabled`
    prop_text.textContent = "No Property Selected"
    prop_text.style.color = "black"
    // This will update the button text
    var update_text = function(id) {
        if (player_list[parseInt(player)].get_player_properties()[id][`mortgage`] == true) { // if the property is mortgage
            new_buy.textContent = `Un-mortgage`
            new_sell.textContent = `Mortgaged`
            new_buy.disabled = ``
            new_sell.disabled = `disable`
        } else if ([6,16,26,36,13,29].includes(id)) {
            new_buy.textContent = `Nope`
            new_sell.textContent = `Mortgage`
            new_buy.disabled = `disabled`
            new_sell.disabled = ``
        } else if (player_list[parseInt(player)].get_player_properties()[id][`houses`] == 5) { // If the amount of houses is 5
            new_buy.textContent = `Has Hotel`
            new_sell.textContent = `Sell Hotel`
            new_buy.disabled = `disable`
            new_sell.disabled = ``
        } else if (player_list[parseInt(player)].get_player_properties()[id][`houses`] == 4) { // If the amount of houses is 4 / if the player is buying a hotel
            new_buy.textContent = `Buy Hotel`
            new_sell.textContent = `Sell House`
            new_buy.disabled = ``
            new_sell.disabled = ``
        } else if (player_list[parseInt(player)].get_player_properties()[id][`houses`] == 0) { // Checks how many houses they have
            new_buy.textContent = `Buy House`
            new_sell.textContent = `Mortgage`
            new_buy.disabled = ``
            new_sell.disabled = ``
        } else if (player_list[parseInt(player)].get_player_properties()[id][`houses`] >= 1) { // Checks how many houses they have
            new_buy.textContent = `Buy House`
            new_sell.textContent = `Sell House`
            new_buy.disabled = ``
            new_sell.disabled = ``
        }

        // Disables Buttons if the player has no money
        if (player_list[parseInt(player)].get_player_money() < propData[id][`house_price`]) {
            new_buy.disabled = `disabled`
        }
    }

    // This will update the buy/sell btn
    var update_btn = function(id) { 
        prop_text.textContent = propData[id]["name"]
        prop_text.style.color = propData[id]["property_data"]["color"]
        // Allows the Buy/Sell buttons to be interactable
        new_buy.onclick = function() {
            buy_item(id, "house", current_turn)
            update_text(id)
        }
        new_sell.onclick = function() {
            sell_item(id, "house", current_turn)
            update_text(id)
        }
        update_text(id)
    }
    // Goes through all the players properties and places them on the board
    for (var i=0; i < prop_keys.length; i++) { 
        if (propData_keys.includes(prop_keys[i])) { // If the player owns the prop
            let this_prop = document.getElementById(`cell_${prop_keys[i]}`)
            this_prop.onclick = function() {
                var click_id = parseInt((this_prop.id).replace("cell_", ""))
                update_btn(click_id)
            }
        }
    }
    // This enables the Exit Button
    let exit_to_game = document.getElementById(`exit_management`)
    exit_to_game.onclick = function() {
        manage_menu.style.display = `none` // Hides manage menu
        check_landed_property(true) // Updates texts and btns
        // Removes the interactable props
        for (var i=0; i < prop_keys.length; i++) { 
            // If the player owns the prop
            if (propData_keys.includes(prop_keys[i])) { document.getElementById(`cell_${prop_keys[i]}`).onclick = `` }
        }
    }
}

// This will open the auction house if a player auctions a property or if the player goes bankrupt on their own it will auction their items
export function open_auction_house(items, type) {
    auction_menu.style.display = `block` // Shows the auction house
    // Auction Action buttons
    var add_1 = document.getElementById(`auction_add_1`)
    var add_10 = document.getElementById(`auction_add_10`)
    var add_50 = document.getElementById(`auction_add_50`)
    var add_100 = document.getElementById(`auction_add_100`)
    var player_out = document.getElementById(`auction_player_out`)
    var output_box = document.getElementById(`auction_output`)
    // Auction house text
    var name_txt = document.getElementById(`auction_prop`)
    var value_txt = document.getElementById(`auction_prop_value`)
    var turn_txt = document.getElementById(`auction_turn_txt`)
    // The Current auction house turn
    var players_in = [] // This is the player ID's
    var auction_value = 0
    var auction_list = []
    var auction_type = type
    // Checks if the items arg is a list
    if (items instanceof Array) { // If its a list of items
        auction_list = items
    } else { // if the items arg is just one thing
        auction_list.push(items)
    }
    // Adds all the players in the players_in list
    for (var i=0; i < player_list.length; i++) {if (player_list[i].get_player_bankrupt() !== true) { players_in.push(i) }}

    // This updates the text for the next item just incase there is more than one item being auctioned
    while (output_box.firstChild) { // Removes all text in the auction_message_box
        output_box.removeChild(output_box.firstChild)
    }
    // Sets the name and cost of the item
    //var propCanvas = `<canvas id="auctionPropColor" class="prop_color" width="20" height="20" style="border: 1px solid black;background-color: ${propData[auction_list[0]]["property_data"]["color"]}; position: absolute; left: -30px; top:33px;"></canvas>`
    name_txt.innerHTML = `<b>Auctioned Property:</b><br><b style="color:${propData[auction_list[0]]["property_data"]["color"]}">${propData[auction_list[0]]["name"]}</b>`
    value_txt.innerHTML = `<b>Property Value:</b><br><b class="cash">$${propData[auction_list[0]]["property_cost"]}</b>`
    // Enables all the add btns
    add_1.disabled = ``
    add_10.disabled = ``
    add_50.disabled = ``
    add_100.disabled = ``
    // Adds text to the auction_auction_message_box
    const send_auction_message = function(message) {
        var txt_elm = document.createElement(`div`)
        txt_elm.innerHTML = `- ${message}<br>`
        output_box.appendChild(txt_elm)
        // Scroll to the bottom of the text container
        output_box.scrollTop = output_box.scrollHeight;
    }
    // Changes the Auction turn and Sets up most of the things
    const change_auction_turn = function(items, type, remove, start, player_name, amount) { 
        if (amount > 0) { // Sends a message if there is an `add_amount` and adds to the auction_value
            auction_value += amount // Adds the given Amount
            send_auction_message(`<b>${player_name}</b> Will Pay <b class="cash">$${auction_value}</b>`)
        }
        
        // Places the players_in first value into the back
        if (start !== true) { // If the auction didn't start
            players_in.push(players_in[0])
            players_in.splice(0, 1)
        }
        turn_txt.innerHTML = `Current Turn: <b style="color: ${player_list[players_in[0]].get_player_color()};">${player_list[players_in[0]].get_player_name()}</b>` 
        // If the player clicked `im_out`
        if (remove == true) { 
            send_auction_message(`<b>${player_name}</b> is out`)
            players_in.splice(players_in.length-1, 1)
        }
        // Checks how many players are left
        if (players_in.length == 1) { // if everyone is out
            auction_menu.style.display = `none` // Hides the auction house
            // Removes the money from the player
            player_list[parseInt(players_in[0])].remove_player_money(auction_value)
            update_money_display()
            message_text_box(`<b>${player_list[parseInt(players_in[0])].get_player_name()}</b> Aquired <b style="color: ${propData[items[0]]['property_data']['color']}">${propData[items[0]][`name`]}</b> for <b class="cash">$${auction_value}</b>`) 
            // Sets up the new property for the player
            propData[items[0]][`property_data`][`by`] = parseInt(players_in[0])
            var cell_tag = document.getElementById(`cell_${items[0]}_tag`)
            cell_tag.style.backgroundColor = player_list[parseInt(players_in[0])].get_player_color()
            player_list[parseInt(players_in[0])].add_player_properties(parseInt(items[0])) // Gives the player the property
            // If the auction type was the banks auction or just a player auctioning
            if (type == `bank`) { // If the bank started the auction
                player_list[parseInt(players_in[0])].add_player_properties_manual( // Adds the players properties
                    parseInt(items[0]),
                    player_list[current_turn].get_player_properties()[parseInt(items[0])][`name`], 
                    player_list[current_turn].get_player_properties()[parseInt(items[0])][`houses`], 
                    player_list[current_turn].get_player_properties()[parseInt(items[0])][`mortgage`]
                )
                // Removes the property and goes again if its more than one property
                auction_list.splice(0, 1) // Removes the current auction property
                if (auction_list.length > 0) { // If the auction_list still has items
                    open_auction_house(auction_list, `bank`) // Goes to the next property in the list
                    return
                }
                change_turn() // Goes to the next players turn
            }
            after_roll(null, null, true)
        }
        add_1.disabled = ``
        add_10.disabled = ``
        add_50.disabled = ``
        add_100.disabled = ``
        // Checks if the player can click the button with out going out their current cash
        if (player_list[parseInt(players_in[0])].get_player_money()-auction_value < 1) { // if they can't pay over $1
            add_1.disabled = `disabled`
            add_10.disabled = `disabled`
            add_50.disabled = `disabled`
            add_100.disabled = `disabled`
        } else if (player_list[parseInt(players_in[0])].get_player_money()-auction_value < 10) { // if they can't pay over $10
            add_10.disabled = `disabled`
            add_50.disabled = `disabled`
            add_100.disabled = `disabled`
        } else if (player_list[parseInt(players_in[0])].get_player_money()-auction_value < 50) { // if they can't pay over $50
            add_50.disabled = `disabled`
            add_100.disabled = `disabled`
        } else if (player_list[parseInt(players_in[0])].get_player_money()-auction_value < 100) { // if they can't pay over $100
            add_100.disabled = `disabled`
        }

    }
    // Calls all the items to set up the auctionz
    change_auction_turn(auction_list[0], null, null, true, `CONSOLE`, 10)
    add_1.onclick = function() { // Allows the add_1 but interactable
        change_auction_turn(auction_list, null, null, false, player_list[parseInt(players_in[0])].get_player_name(), 1)
    }
    add_10.onclick = function() { // Allows the add_10 but interactable
        change_auction_turn(auction_list, null, null, false, player_list[parseInt(players_in[0])].get_player_name(), 10)
    }
    add_50.onclick = function() { // Allows the add_50 but interactable
        change_auction_turn(auction_list, null, null, false, player_list[parseInt(players_in[0])].get_player_name(), 50)
    }
    add_100.onclick = function() { // Allows the add_100 but interactable
        change_auction_turn(auction_list, null, null, false, player_list[parseInt(players_in[0])].get_player_name(), 100)
    }
    player_out.onclick = function() { // Removes the player if they are out
        change_auction_turn(auction_list, auction_type, true, false)
    }
}

// Game Functions \\
// Changes the current turn
export function change_turn() {
    // If the player has a multiplayer connection then send them the data too
    if ((client_connection_to_game == true) && (this_client_id == current_turn)) {
        player2.send("change_turn")
    }
    // Sets up the next players turn
    dice1_img.style.display = `none`
    dice2_img.style.display = `none`
    current_turn += 1; // Adds 1 to the turn
    try {
        player_list[current_turn].get_player_id()
    } catch ({name, message}) {
        current_turn = 0
    }
    if (player_list[current_turn].get_player_bankrupt() == true) { // Checks if the player is bankrupt if so it will go to the next turn
        change_turn()
        return
    }
    trade_btn.className = `action_btn_disabled`
    // Disables all buttons
    buy_btn.className = `action_btn_disabled`
    sell_btn.className = `action_btn_disabled`
    pay_btn.className = `action_btn_disabled`
    trade_btn.className = `action_btn_disabled`
    any_btn.className = `action_btn_disabled`
    bankrupt_btn.className = `action_btn_disabled`
    // Sets up the save action
    if (savingStatus == true) { // If the client allowed cookies
        saveGame_btn.className = `myBtn`
    }
    // Sets the Player turn text to the new player
    turn_text.textContent = player_list[current_turn].get_player_name()
    turn_text.style.color = player_list[current_turn].get_player_color()
    doubles = 0 // This sets rolled doubles to 0
    set_roll()
}

// This will add what is happening on the board through the on screen textbox
export function message_text_box(message, classType) {
    if ((client_connection_to_game == true) && (this_client_id == current_turn)) {
        player2.send(`message_text_box|${message}, ${classType}`)
    }
    var actionBox = document.getElementById(`action_txt`)
    var text = document.createElement(`div`)
    text.innerHTML = `- ${message}`
    if (`${classType}` !== "undefined") {
        text.className = classType
    }
    actionBox.appendChild(text)
    // Scroll to the bottom of the text container
    actionBox.scrollTop = actionBox.scrollHeight;
}

// Updates all the money display labels
export function update_money_display() {
    // Sets the money containers to the right color and text
    for (var i=0; i < playerAmount; i++) {
        var setMoneyContainer = document.getElementById(`player${(i+1)}_money`)
        setMoneyContainer.innerHTML = `<br>${player_list[i].get_player_name()}:<br>---------<br>$${player_list[i].get_player_money()}`
    }
}

// Updates all game information text
export function update_game_text() {
    document.getElementById(`house_left`).textContent = houses
    document.getElementById(`hotel_left`).textContent = hotels
    document.getElementById(`free_cash`).textContent = `$${freeParking_cash}`
}

// Updates all property tags 
export function update_all_prop_tags() {
    var prop_keys = Object.keys(propData)
    for (var i=0; i < prop_keys.length; i++) {
        if (propData[i][`property_data`][`by`] !== null) { // Checks if the property is buyable
            var cell_tag = document.getElementById(`cell_${i}_tag`)
            var cell_tip = document.getElementById(`cell_${i}_tag_tip`)
            cell_tag.style.backgroundColor = player_list[propData[i][`property_data`][`by`]].get_player_color()
            cell_tip.innerHTML = `Owner: ${player_list[propData[i][`property_data`][`by`]].get_player_name()}`
        }
    }
}

// Updates the players boarder when landing on certain properties
export function update_player_board(player) {
    // Changes the players border
    if ([6,16,26,36].includes(player_list[player].get_player_spot_id())) { // If the player is on railroads
        document.getElementById(player_list[player].get_player_id()).style.border = `1px solid white` // Changes the border to white
        return
    }
    document.getElementById(player_list[current_turn].get_player_id()).style.border = `1px solid black` // Changes the border to white
}

// When the player is bankrupt
export function bankrupt_player(type, data, to_player) {
    // If the player has a multiplayer connection then send them the data too
    if ((client_connection_to_game == true) && (this_client_id == current_turn)) {
        player2.send(`after_roll|${type}, ${data}, ${to_player}`)
    }
    // Sets them to bankrupt / Blacks their text
    player_list[current_turn].set_player_bankrupt(true)
    // Checks if all players are bankrupt
    var bankrupt_amount = 0
    var nonBank_name = ``
    // Checks for bankrupt players
    for (var i=0; i < player_list.length; i++) {
        if (player_list[i].get_player_bankrupt() == true) { // If that player is bankrupt
            bankrupt_amount += 1
            continue
        } 
        nonBank_name = player_list[i].get_player_name()
    }
    if (bankrupt_amount+1 == player_list.length) { // If there is only one player left
        game_board.style.display = `none`
        winningScreen.style.display = `block`
        // Winning Name 
        var nametxt = document.getElementById(`winningName`)
        nametxt.textContent = nonBank_name
        // Back to Menu btn
        var winBack = document.getElementById(`win_to_Menu`)
        winBack.onclick = function() {
            location.reload();
        }
        return
    }
    if (type == `by_player`) { // If the player was bankrupt by another player
        var player_props = Object.keys(player_list[current_turn].get_player_properties())
        for (var i=0; i < player_props.length; i++) { // Goes through every property and give the other player the properties
            // Sells all houses
            var player_house = parseInt(player_list[current_turn].get_player_properties()[parseInt(player_props[i])][`houses`])
            for (var j=0; j < player_house; j++) {
                sell_item(parseInt(player_props[i]),`house`, current_turn)
            }
            // Gives the property
            player_list[to_player].add_player_properties_manual(player_props[i], player_list[current_turn].get_player_properties()[parseInt(player_props[i])][`name`], player_list[current_turn].get_player_properties()[parseInt(player_props[i])][`houses`], player_list[current_turn].get_player_properties()[parseInt(player_props[i])][`mortgage`])
            player_list[current_turn].remove_player_properties(parseInt(player_props[i])) // Romves the property from the player
            propData[player_props[i]][`property_data`][`by`] = to_player
            // Updates the cell tag
            var cell_tag = document.getElementById(`cell_${player_props[i]}_tag`)
            cell_tag.style.backgroundColor = player_list[to_player].get_player_color()
        }
        // Gives the money
        player_list[to_player].add_player_money(player_list[current_turn].get_player_money())
        player_list[current_turn].remove_player_money(player_list[current_turn].get_player_money())
        update_money_display()
        // Sends the message
        message_text_box(`<b>${player_list[current_turn].get_player_name()}</b> has bankrupt to `+player_list[to_player].get_player_name())
        var player_txt = document.getElementById(`player${(current_turn+1)}_money`)
        player_txt.style.backgroundColor = `black`
        // Removes the player marker
        document.getElementById(`player`+(current_turn+1)).remove()
        change_turn()
    } else if (type == `by_bank`) { // If the player bankrupts themself
        open_auction_house(data, `bank`)
        document.getElementById(`player`+(current_turn+1)).remove()
    }
}

// The last part of a players' turn
export function after_roll(end_jail, player, auctioned) {
    // If the player has a multiplayer connection then send them the data too
    if ((client_connection_to_game == true) && (this_client_id == current_turn)) {
        player2.send(`after_roll|${end_jail}, ${player}, ${auctioned}`)
    }
    any_btn.disabled = ''
    update_all_prop_tags()
    if (end_jail == `out`) { // If the player got out so it will disable all buttons except roll
        buy_btn.onclick = ``;buy_btn.className = `action_btn_disabled`
        sell_btn.onclick = ``;sell_btn.className = `action_btn_disabled`
        pay_btn.onclick = ``;pay_btn.className = `action_btn_disabled`
        any_btn.onclick = ``;any_btn.className = `action_btn_disabled`
        player_list[parseInt(player)].set_player_spot_id(11)
        propData[`11`][`property_data`][`players_on`].push(player)
        set_roll()
    } else if ((dice1 == dice2) && (doubles != 3)) { // if the player rolled a double it will allow them to roll again
        set_roll()
    } else if ((player_list[current_turn].get_player_isJailed() == true) && (end_jail == null)) { // If the player is jailed during this turn
        player_jailed(current_turn, `old`)        
    } else { // If the player did not roll a double
        roll_btn.className = `action_btn`; roll_btn.textContent = `End Turn`
        pay_btn.className = `action_btn_disabled`
        // This will get rid of the buy/auction button feature if the player auctioned the property
        if (auctioned !== undefined) {
            buy_btn.className = `action_btn_disabled`
            sell_btn.className = `action_btn_disabled`
        }
        // Button actions
        roll_btn.onclick = change_turn
        trade_btn.onclick = function() {open_trade(current_turn)}
        any_btn.onclick = function() {open_manager(current_turn)}

        any_btn.textContent = `Manage`
        trade_btn.className = `action_btn`
        if (Object.keys(player_list[current_turn].get_player_properties()).length > 0) {any_btn.className = `action_btn`} // If the player has any properties it will open the management menu
        bankrupt_btn.onclick = function() { // if the player decides to bankrupt themselfs
            bankrupt_player(`by_bank`, Object.keys(player_list[current_turn].get_player_properties()))
        }; bankrupt_btn.className = `myBtn`
    }
}

// When the player passes go
export function passed_go() {
    player_list[current_turn].add_player_money(200)
    message_text_box(`<b>${player_list[current_turn].get_player_name()}</b> has passed/landed on Go, They are awarded <b class="cash">$200</b>`)
    update_money_display()
}

// Buys the item
export function buy_item(location, type, player) {
    // If the player has a multiplayer connection then send them the data too
    if ((client_connection_to_game == true) && (this_client_id == current_turn)) {
        player2.send(`buy_item|${location}, ${type}, ${player}`)
    }
    // if the player is buying the property
    if (type == `prop`) {
        if (player_list[parseInt(player)].get_player_money() >= propData[location]['property_cost']) {
            propData[location][`property_data`]['by'] = player
            player_list[parseInt(player)].add_player_properties(location)
            player_list[parseInt(player)].remove_player_money(propData[location]['property_cost'])
            // Makes the props background color
            if (["white", "yellow"].includes(propData[location][`property_data`]['color'])) {backColor = "black"}
            // Lets the players know
            message_text_box(`<b>${player_list[parseInt(player)].get_player_name()}</b> bought <b style="background-color: ${backColor};color: ${propData[location]['property_data']['color']}">${propData[location]['name']}</b>`)
            // Updates the cell tag to be the color of the player
            var cell_tag = document.getElementById(`cell_${location}_tag`)
            cell_tag.style.backgroundColor = player_list[parseInt(player)].get_player_color()
            update_money_display()
            return
        }
        message_text_box(`<b>${player_list[parseInt(player)].get_player_name()}</b> does not have enough money`)      
    // if the player is buying a house/hotel
    } else if (type == `house`) {
        if (player_list[parseInt(player)].get_player_properties()[location]['mortgage'] == false) {
            if (player_list[parseInt(player)].get_player_money() >= propData[location][`house_price`]) {
                // Checks if there are enough houses / Hotels
                if ((player_list[parseInt(player)].get_player_properties()[location]['houses'] == 4) && (hotels-1 < 0)) {
                    message_text_box(`There are not enough Hotels to buy`)
                    return `none`
                } else if ((player_list[parseInt(player)].get_player_properties()[location]['houses'] > 4) && (houses-1 < 0)) {
                    message_text_box(`There are not enough Houses to buy`)
                    return `none`
                }
                // Gets all the users properties colors and checks if they have the set
                var prop_keys = Object.keys(player_list[parseInt(player)].get_player_properties())
                var prop_list_colors = []
                for (var i=0; i < prop_keys.length; i++) {
                    prop_list_colors.push(propData[prop_keys[i]]['property_data']['color'])
                }
                
                // Checks if the player has the property set
                var location_color = propData[location]['property_data']['color']
                var count_location_color = 0
                // Gets all the properties of the same color
                for (var i=0; i < prop_list_colors.length; i++) {
                    if (prop_list_colors[i] == location_color) {count_location_color += 1}
                }

                // Checks if the prop color is blue / brown
                if ((location_color == `blue`) || (location_color == `brown`)) {
                    if (count_location_color != 2) {
                        message_text_box(`<b>${player_list[parseInt(player)].get_player_name()}</b> needs the whole property set to start buying houses`)
                        return
                    }
                } else if (location_color == `black`) { // Makes sure that housing on railroad properties is impossible
                    return            
                } else if (count_location_color != 3) { // Checks if the players have the whole set
                    message_text_box(`<b>${player_list[parseInt(player)].get_player_name()}</b> needs the whole property set to start buying houses`)
                    return
                }
                var backcolor = ''
                if (["white", "yellow"].includes(propData[location][`property_data`]['color'])) {backColor = "black"}

                // The User buying the house
                if (player_list[parseInt(player)].get_player_properties()[location]['houses'] == 5) {
                    message_text_box(`<b>${player_list[parseInt(player)].get_player_name()}</b> Can not buy a house on a property that has a hotel already`)
                    return
                } else if (player_list[parseInt(player)].get_player_properties()[location]['houses'] == 4) {
                    message_text_box(`<b>${player_list[parseInt(player)].get_player_name()}</b> bought a Hotel on <b style="background-color: ${backColor}; color: ${propData[location]['property_data']['color']}">${propData[location]['name']}</b>`)
                    hotels -= 1
                    houses += 4
                } else {
                    message_text_box(`<b>${player_list[parseInt(player)].get_player_name()}</b> bought a House on <b style="background-color: ${backColor}; color: ${propData[location]['property_data']['color']}">${propData[location]['name']}</b>`)
                    houses -= 1
                }
                player_list[parseInt(player)].remove_player_money(propData[location]['house_price'])
                player_list[parseInt(player)].add_player_prop_house(location)
                update_money_display()
                update_game_text()
            } else {
                message_text_box(`<b>${player_list[parseInt(player)].get_player_name()}</b> can not afford to buy a house/hotel on <b style="background-color: ${backColor}; color: ${propData[location]['property_data']['color']}">${propData[location]['name']}</b>`)
            }
        } else {
            // Checks if the player has the mortgage price 
            var amount = (propData[location][`property_cost`]/10)+propData[location][`property_cost`]
            if (player_list[current_turn].get_player_money() >= amount) {
                // Removes the red line
                var red_line = document.getElementById(`cell_${location}_mortgage`)
                red_line.remove()
                // Removes from the players money
                player_list[parseInt(player)].remove_player_money(amount)
                player_list[parseInt(player)].set_property_mortgage(location, false) // Sets the property mortgage to false
                update_money_display()
                // Sends the Message
                message_text_box(`<b>${player_list[parseInt(player)].get_player_name()}</b> Un-mortgage for <b class="cash">$${amount}</b>`)
            }
        }        
    }
}

// Sells the item
export function sell_item(location, type, player) {
    // If the player has a multiplayer connection then send them the data too
    if ((client_connection_to_game == true) && (this_client_id == current_turn)) {
        player2.send(`sell_item|${location}, ${type}, ${player}`)
    }
    if (type == `house`) {
        if (player_list[parseInt(player)].get_player_properties()[location]['mortgage'] == true) { // Checks if the property has been mortgage yet
            message_text_box(`<b>${player_list[parseInt(player)].get_player_name()}</b> This property is already mortgage`)
            return
        } else if (player_list[parseInt(player)].get_player_properties()[location]['houses'] == 0) {// Mortgaging the property
            player_list[parseInt(player)].set_property_mortgage(location, true) // Sets the mortgage to true
            player_list[parseInt(player)].add_player_money(propData[location]['property_cost']/2)
            if (["white", "yellow"].includes(propData[location][`property_data`]['color'])) {backColor = "black"}
            message_text_box(`<b>${player_list[parseInt(player)].get_player_name()}</b> has mortgage <b style="background-color: ${backColor}; color: ${propData[location]['property_data']['color']}">${propData[location]['name']}</b> and recived <b class="cash">$${(propData[location]['property_cost']/2)}</b>`)
            // This will create the mortgage line
            var cell_tag = document.getElementById(`cell_${location}_house_container`)
            var red_line = document.createElement(`canvas`)
            red_line.id = `cell_${location}_mortgage`
            // Checks if the property is on the side or in the middle
            red_line.className = `cell_mortgage_mid`
            // If the prop is a side prop
            if ([12,13,14,15,16,17,18,19,20,32,33,34,35,36,37,38,39,40].includes(parseInt(location))) { red_line.className = `cell_mortgage_side` }// Side
            // Adds the red line on the board and updates the money text
            cell_tag.appendChild(red_line)
            update_money_display()
        } else if (player_list[parseInt(player)].get_player_properties()[location]['houses'] > 0) { // Selling a house
            // Checks if the house being removed is a hotel
            if ((player_list[parseInt(player)].get_player_properties()[location]['houses'] == 5) && (houses-4 >= 0)) {
                hotels += 1
                houses -= 4
            } else {
                houses += 1
            }
            // Sends a message and does all player handling stuff
            message_text_box(`<b>${player_list[parseInt(player)].get_player_name()}</b> Sold a house/hotel and gained <b class="cash">$${propData[location]['house_price']/2}</b>`)
            player_list[parseInt(player)].add_player_money(propData[location]['house_price']/2)
            player_list[parseInt(player)].remove_player_prop_house(location) // Removes the house icon and from the players properties
            update_money_display()
            update_game_text()
        }
    }
}

// If the player has to pay something
export function player_pays(amount, to_who) {
    // If the player has a multiplayer connection then send them the data too
    if ((client_connection_to_game == true) && (this_client_id == current_turn)) {
        player2.send(`player_pays|${player}, ${to_who}`)
    }
    if (to_who == `parking`) { // If the player pays and the money goes to the free parking
        freeParking_cash += amount
        player_list[current_turn].remove_player_money(amount)
        update_money_display()
        update_game_text()
    } else if ([0, 1, 2, 3].includes(to_who)) { // If the player pays another player
        message_text_box(`<b>${player_list[current_turn].get_player_name()}</b> paid <b>`+player_list[to_who].get_player_name()+`</b> <b class="cash">$${amount}</b>`)
        player_list[current_turn].remove_player_money(amount)
        player_list[to_who].add_player_money(amount)
        update_money_display()
    }
    pay_btn.className = `action_btn_disabled`
}

// Sends the player to jail
export function player_jailed(player, type) {
    // If the player has a multiplayer connection then send them the data too
    if ((client_connection_to_game == true) && (this_client_id == current_turn)) {
        player2.send(`player_jailed|${player}, ${type}`)
    }
    if (type == `new`) { // When the player is sent to jail
        message_text_box(`<b>${player_list[parseInt(player)].get_player_name()}</b> has been sent to jail.`)
        // Adds all the players that are jailed
        var amountJailed = 0
        for (var i=0; i < player_list.length; i++) {
            if (player_list[i].get_player_isJailed() == true) {
                amountJailed += 1
            }
        }
        // Sets the player jail status to true
        player_list[parseInt(player)].set_player_isJailed(true)
        // Moves the player
        player_list[parseInt(player)].set_player_spot_id(0);
        propData[`0`][`property_data`][`players_on`].push(player)
        $(document.getElementById(player_list[parseInt(player)].get_player_id())).appendTo("#cell_0_player_container")
    } else if (type == `old`) { // If the player is still in jail
        // Rolling the player doubles
        roll_btn.className = `action_btn`
        roll_btn.textContent = `Roll Doubles`
        roll_btn.onclick = function() {
            dice1 = Math.floor(Math.random()*6)+1; // Rolls `dice1` Between 1-6
            dice2 = Math.floor(Math.random()*6)+1; // Rolls `dice2` Beteen 1-6
            if (dice1 == dice2) { // If the player rolls a double
                message_text_box(`<b>${player_list[parseInt(player)].get_player_name()}</b> Has rolled Doubles|${dice1} and a ${dice2}`)
                player_list[parseInt(player)].set_player_isJailed(false)
                after_roll(`out`, player)
            } else {
                message_text_box(`<b>${player_list[parseInt(player)].get_player_name()}</b> Did Not Roll Doubles|${dice1} and a ${dice2}`)
                pay_btn.className = `action_btn_disabled`
                after_roll(`in`)
            }
        }
        // Pay Button
        pay_btn.className = `action_btn`
        pay_btn.innerHTML = `Pay <b class="cash">$50</b>`
        pay_btn.onclick = function() {
            if (player_list[parseInt(player)].get_player_money() >= 50) {
                message_text_box(`<b>${player_list[parseInt(player)].get_player_name()}</b> Paid <b class="cash">$50</b> to get out of jail`)
                player_list[parseInt(player)].set_player_isJailed(false)
                player_list[parseInt(player)].remove_player_money(50)
                dice1 = 0; dice2 = 0; // This is so that they can roll
                after_roll(`out`, player)
            } else {
                message_text_box(`<b>${player_list[parseInt(player)].get_player_name()}</b> Does not have enough money`)
                return
            }
        }
        // Player uses card
        any_btn.className = `action_btn`
        any_btn.textContent = `Use Card`
        any_btn.disabled = ''
        if (player_list[parseInt(player)].get_player_ooj().length > 0) { // if the player has any ooj cards
            any_btn.onclick = function() { // When the player clicks the button
                message_text_box(`<b>${player_list[parseInt(player)].get_player_name()}</b> Used a get out of jail free card`)
                player_list[parseInt(player)].remove_player_ooj()
                player_list[parseInt(player)].set_player_isJailed(false)
                after_roll(`out`, player)
            }
        } else {
            any_btn.disabled = 'disabled'
        }
    }
}

// Plays the picked card
export function c_cards(card_type) { 
    // Checks what card to pull 
    if (card_type == `Community Chest`) { // If the Player Lands on Community Chest
        var played_card = chest_deck[0] // Gets the first card from the deck
        if (played_card.includes(`out_of_jail`) == false) {chest_deck[chest_deck.length] = played_card} // This will put the picked card at the end of the deck if its not a ooj card
        chest_deck.splice(0, 1) // This will delete the first card since it was put at the end of the deck
    } else if (card_type == `Chance`) { // If the Player Lands on Chance
        var played_card = chance_deck[0];// Gets the first card from the deck
        if (played_card.includes(`out_of_jail`) == false) {chance_deck[chance_deck.length] = played_card} // This will put the picked card at the end of the deck if its not a ooj card
        chance_deck.splice(0, 1) // This will delete the first card since it was put at the end of the deck
    }
    player = document.getElementById(player_list[current_turn].get_player_id())
    // Sends message
    message_text_box(`<b>${player_list[current_turn].get_player_name()}</b> ${cardsData[`Base`][card_type][played_card][`description`]}`)
    // Sees what card was pick
    if (played_card.includes(`advance`)) { // If the player advance to another place
        // Removes the player from the old property
        var player_index = propData[player_list[current_turn].get_player_spot_id()][`property_data`][`players_on`].indexOf(current_turn)
        if (player_index !== -1) {
            propData[player_list[current_turn].get_player_spot_id()][`property_data`][`players_on`].splice(player_index, 1)
        }
        var player_movement = (40-player_list[current_turn].get_player_spot_id())+cardsData[`Base`][card_type][played_card][`location_id`]
        // Checks if the location_id of the card is not behind the player then it will not go around the board
        if (player_list[current_turn].get_player_spot_id() < cardsData[`Base`][card_type][played_card][`location_id`]) { 
            player_movement = cardsData[`Base`][card_type][played_card][`location_id`] - player_list[current_turn].get_player_spot_id()
        }
        // Moves player
        setTimeout(function() { // After 1.5 seconds it will move the player
            move_player(current_turn, player_movement) // Moves the player to boardwalk
            
        }, 1500)
    } else if (played_card.includes(`pay_tax`)) { // If the player pays a tax
        pay_btn.className = `action_btn`
        pay_btn.innerHTML = `Pay <b class="cash">$${cardsData[`Base`][card_type][played_card][`tax_amount`]}</b>`
        pay_btn.onclick = function() {
            if (player_list[current_turn].get_player_money() >= cardsData[`Base`][card_type][played_card][`tax_amount`]) {
                player_pays(cardsData[`Base`][card_type][played_card][`tax_amount`], `parking`)
                after_roll()
            } else {
                message_text_box(`<b>${player_list[current_turn].get_player_name()}</b> does not have enough money`)
            }
        }
    } else if (played_card.includes(`pay_prop_tax`)) { // If the player has to pay property tax
        var total_houses = 0
        var total_hotels = 0
        var amount = 0
        var prop_keys = Object.keys(player_list[current_turn].get_player_properties())
        // Adds all the houses / hotels
        for (var i=0; i < prop_keys.length; i++) {
            // Checks if the player has houses on the property
            if (player_list[current_turn].get_player_properties()[prop_keys[i]]['houses'] == 5) {
                total_hotels += 1
            } else if (player_list[current_turn].get_player_properties()[prop_keys[i]]['houses'] > 0) { // Checks if the player has a hotel on the property
                total_houses += player_list[current_turn].get_player_properties()[prop_keys[i]]['houses']
            }
        }
        // If there are no owned house/hotels then it will not make the player pay
        if (total_hotels+total_houses == 0) {
            message_text_box(`<b>${player_list[current_turn].get_player_name()}</b> does not have any houses or hotels`)
            after_roll()
            return
        }
        // The total amount the player has to pay
        amount = (total_houses*cardsData[`Base`][card_type][played_card][`house`]) + (total_hotels*cardsData[`Base`][card_type][played_card][`hotel`])
        // pay_btn Actions
        pay_btn.className = `action_btn`
        pay_btn.innerHTML = `<b class="cash">$${amount}</b>`
        // payBtn click
        pay_btn.onclick = function() {
            if (player_list[current_turn].get_player_money() >= amount) { // Checks if the player has enough money
                message_text_box(`<b>${player_list[current_turn].get_player_name()}</b> Paid <b class="cash">$${amount}</b>`)
                player_list[current_turn].remove_player_money(amount)
                update_money_display()
                after_roll()
            } else { // If the player does not have enough money
                message_text_box(`<b>${player_list[current_turn].get_player_name()}</b> does not have enough money`)
            }
        }

    } else if (played_card.includes(`out_of_jail`)) { // If the player gets a ooj
        player_list[current_turn].add_player_ooj(played_card)
        after_roll()
    } else if (played_card.includes(`pay_to_all`)) { // player pays all players the amount
        pay_btn.className = `action_btn`
        pay_btn.innerHTML = `Pay <b class=\"cash\">$${cardsData[`Base`][card_type][played_card][`amount`]}</b>`
        trade_btn.style.className = `action_btn`
        any_btn.onclick = function() {open_manager(current_turn)}
        var amount = 0
        // Occurs when the player clicks the pay_btn
        pay_btn.onclick = function() {
            // Checks if the player has enough money
            if (player_list[current_turn].get_player_money() >= cardsData[`Base`][card_type][played_card][`amount`]*(player_list.length-1)) {
                for (var i=0; i < player_list.length; i++) {
                    if (player_list[i].get_player_bankrupt() == false) { // Checks if they are bankrupt
                        if (player_list[i].get_player_id() !== player_list[current_turn].get_player_id()) { // Checks if the player is not the current player
                            player_pays(cardsData[`Base`][card_type][played_card][`amount`], i)
                        }
                    }
                }
                after_roll()
                return
            }
            // If the player does not have enough money then say so
            message_text_box(`<b>${player_list[current_turn].get_player_name()}</b> does not have <b class="cash">${cardsData[`Base`][card_type][played_card][`amount`]*(player_list.length-1)}</b>`)
        }
    }
}

// When the player lands on a property this will check to see what to do
export function check_landed_property(updateManage) {
    var location = player_list[current_turn].get_player_spot_id(); // Location of the player
    var owned_id = propData[location][`property_data`]['by'] // The ID of the player who owns the property
    // If the location is buyable and if the property is unowned
    if ((propData[location]['buyable'] == true) && (owned_id == null)) {
        // Enables the buy action 
        buy_btn.textContent = `Buy`
        // Enables the Sell action
        sell_btn.className = `action_btn`
        sell_btn.disabled = false
        sell_btn.textContent = `Auction`
        // Makes the props background color
        backColor = ''
        if (["white", "yellow"].includes(propData[location][`property_data`]['color'])) {backColor = "black"}
        // Sends the message for the property
        message_text_box(`<b>${player_list[current_turn].get_player_name()}</b> Would you like to buy <b style="background-color:${backColor};color: ${propData[location]['property_data']['color']}">${propData[location]['name']}</b> for <b class="cash">$${propData[location]['property_cost']}</b>`)
        // Allows the buy to be interacted with
        if (player_list[current_turn].get_player_money() >= propData[location]['property_cost']) {
            buy_btn.className = `action_btn`
            buy_btn.disabled = false
            buy_btn.onclick = function() { // Buys the property
                buy_item(location, 'prop', current_turn)
                check_landed_property()
                after_roll()
            }
        }
        sell_btn.onclick = function() { // Starts the auction house
            open_auction_house(location)
        }
        bankrupt_btn.className = `action_btn_disabled`
    
    } else if (updateManage !== true) { // Fixes problems when exiting out of the management menu
        if ((propData[location]['buyable'] == true) && (owned_id == current_turn)) {// If the property is buyable and if owned by the player
            var railroad_ids = [6,16,26,36]
            // Enables the buy action 
            if (propData[location]['property_data']['color'] != `black`) { buy_btn.className = `action_btn` }
            if (railroad_ids.includes(location) == false) {
                // Checks if the player buys a house or Hotel
                if (player_list[current_turn].get_player_properties()[location]['mortgage'] == true) {
                    buy_btn.textContent = `Un-Mortgage`
                    buy_btn.className = `action_btn`
                    sell_btn.disabled = `disabled`
                } else if (player_list[current_turn].get_player_properties()[location]['houses'] < 4) {
                    buy_btn.textContent = `Buy House`
                } else if (player_list[current_turn].get_player_properties()[location]['houses'] == 4) {
                    buy_btn.textContent = `Buy Hotel`
                }
                // Enables the Sell action
                if (player_list[current_turn].get_player_properties()[location]['mortgage'] == false) {
                    sell_btn.className = `action_btn`
                }
                // Decides what to have the text for the sell_btn
                if (player_list[current_turn].get_player_properties()[location]['houses'] == 0) {
                    sell_btn.textContent = `Mortgage`
                    sell_btn.className = `action_btn`
                } else if ((player_list[current_turn].get_player_properties()[location]['houses'] == 5) && (railroad_ids.includes(location) == false)) {
                    sell_btn.textContent = `Sell Hotel`
                } else if (player_list[current_turn].get_player_properties()[location]['houses'] < 5) { sell_btn.textContent = `Sell House` }
                // Checks to see if the player has 5 houses already
                if (player_list[current_turn].get_player_properties()[location]['houses'] < 5) { 
                    buy_btn.onclick = function() {
                        buy_item(location, 'house', current_turn)
                        check_landed_property()
                    }
                }
            }
            
            // Sell button
            sell_btn.onclick = function() {
                sell_item(location, 'house', current_turn)
                check_landed_property()
            }
            // If the player landed on a railroad they own this will disable the buy button if it not mortgage
            if ((railroad_ids.includes(location)) && (player_list[current_turn].get_player_properties()[location][`mortgage`] == false)) { buy_btn.className = `action_btn_disabled` } 
            else if ((railroad_ids.includes(location)) && (player_list[current_turn].get_player_properties()[location][`mortgage`] == true)) { sell_btn.className = `action_btn_disabled` }
            after_roll()

        } else if ((propData[location]['buyable'] == true) && (owned_id != current_turn)) { // If the property is buyable and if the property is owned by another player
            if (updateManage == true) {return}
            if (player_list[owned_id].get_player_properties()[location][`mortgage`] == false) { // Checks if the property is mortgage
                if (propData[location][`property_data`]['color'] == `black`) {
                    // Checks if the player owned property has other railroads
                    var railroad_ids = [6,16,26,36]
                    var amount = 0
                    var times = -1
                    for (var i=0; i < railroad_ids.length; i++) {
                        if (propData[railroad_ids[i].toString()][`property_data`][`by`] == owned_id) {
                            times++
                            amount = propData[location]['rent'][times]
                        }
                    }
                } else if (([13,29].includes(location) == false)) { // If the property is not Electric Company or Water Works
                    var amount = propData[location]['rent'][player_list[owned_id].get_player_properties()[location]['houses']] // Amount the player owes
                } else { // If the property is Electric Company or Water Works
                    var roll_props = [13, 29]
                    var times = 0
                    var amount = -1
                    // Checks how many roll_props they own
                    for (var i=0; i < roll_props.length; i++) {
                        if (propData[roll_props[i].toString()][`property_data`][`by`] == owned_id) {
                            amount++
                            times = propData[roll_props[i]]["rent"][amount]
                        }
                    }
                    // Does the messaging and math
                    amount = (dice1+dice2)*times
                }
                message_text_box(`<b>${player_list[current_turn].get_player_name()}</b> owes <b>${player_list[owned_id].get_player_name()}</b> <b class="cash">$${amount}</b>`)
                // pay_btn setup
                pay_btn.className = `action_btn`
                pay_btn.innerHTML = `Pay <b class="cash">$${amount}</b>`
                pay_btn.onclick = function() {
                    // Checks if the player has enough to pay
                    if (player_list[current_turn].get_player_money() >= amount) {
                        player_pays(amount, owned_id)
                        after_roll()
                        return
                    }
                    message_text_box(`<b>${player_list[current_turn].get_player_name()}</b> does not have <b class="cash">$${amount}</b>`)
                }
                // bankrupt_btn setup
                bankrupt_btn.className = `myBtn`
                bankrupt_btn.onclick = function() { bankrupt_player(`by_player`, location, owned_id) }
            } else { // If the property is mortgage
                message_text_box(`<b>${player_list[current_turn].get_player_name()}</b> this property is mortgage`)
                after_roll()
            }
        } else if (propData[location]['buyable'] == false) { // if the location is not buyable
            buy_btn.className = `action_btn_disabled`
            sell_btn.className = `action_btn_disabled`
            if ([3, 18, 34].includes(location)) {// if the player lands on Community Chest
                c_cards(`Community Chest`)
            } else if ([9,23,37].includes(location)) {// if the player lands on chance
                c_cards(`Chance`)
            } else if (location == 1) { // If player lands on go
                after_roll()
            } else if (location == 5) { // If the player lands on Income Tax
                message_text_box(`<b>${player_list[current_turn].get_player_name()}</b> Pay <b class="cash">$200</b>`)
                pay_btn.className = `action_btn`
                pay_btn.innerHTML = `Pay <b class="cash">$200</b>`
                // Allows the player to pay the amount
                pay_btn.onclick = function() {
                    if (player_list[current_turn].get_player_money() >= 200) {
                        player_pays(200, `parking`)
                        after_roll()
                    } else {
                        message_text_box(`<b>${player_list[current_turn].get_player_name()}</b> does not have <b class="cash">$200</b>`)
                    }
                } 
            } else if (location == 39) { // If the player lands on Luxury Tax
                message_text_box(`<b>${player_list[current_turn].get_player_name()}</b> Pay <b class="cash">$100</b>`)
                pay_btn.className = `action_btn`
                pay_btn.innerHTML = `Pay <b class="cash">$100</b>`
                // Allows the player to pay
                pay_btn.onclick = function() {
                    if (player_list[current_turn].get_player_money() >= 100) {
                        player_pays(100, `parking`)
                        after_roll()
                        return
                    }
                    message_text_box(`<b>${player_list[current_turn].get_player_name()}</b> does not have <b class="cash">$100</b>`)
                }
            } else if (location == 11) {
                message_text_box(`<b>${player_list[current_turn].get_player_name()}</b> is Just Visiting`)
                after_roll()
            } else if (location == 21) { // If the player lands on Free parking
                message_text_box(`<b>${player_list[current_turn].get_player_name()}</b> gained <b class="cash">$${freeParking_cash}</b> for landing on Free Parking`)
                player_list[current_turn].add_player_money(freeParking_cash)
                freeParking_cash = 200
                update_money_display()
                update_game_text()
                after_roll()
            } else if (location == 31) { // If the player lands on Go to Jail
                setTimeout(function() {
                    player_jailed(current_turn, `new`)
                    dice1 = -1; dice2 = -2
                    after_roll(`no`, current_turn)
                }, 1500)
                return
            }
        }
    }
}

// Moves the player
export function move_player(given_player, player_movement) {
    // If the player has a multiplayer connection then send them the data too
    if ((client_connection_to_game == true) && (this_client_id == current_turn)) {
        player2.send(`move_player|${given_player}, ${player_movement}`)
    }
    // Moves the player spot to spot
    var i = 0
    //console.log(propData)
    var spot_by_spot = setInterval(() => {
        player_list[parseInt(given_player)].add_player_spot_id(1) // Every 250 milliseconds the player will move
        // Checks if the player is passing go ( if so then sets there spot to 1)
        if (player_list[parseInt(given_player)].get_player_spot_id() > 40) {
            player_list[parseInt(given_player)].set_player_spot_id(1)
            passed_go()
        }
               
        propData[player_list[parseInt(given_player)].get_player_spot_id()]["property_data"]["players_on"].push(parseInt(given_player)); 
        var current_spot = player_list[parseInt(given_player)].get_player_spot_id()
        // Gets the player and sets their position
        player = document.getElementById(`player${(parseInt(given_player)+1)}`)
        $(`#player${(parseInt(given_player)+1)}`).appendTo(`#cell_${current_spot}_player_container`); // jQuerry Moving
        update_player_board(current_turn)
        i++
        // Stops the loop if the player lands on the spot they rolled to
        if (i > player_movement-1) {
            clearInterval(spot_by_spot)
            check_landed_property()
        }
    }, 250);
}

// Updates the dice Imgs
export function update_dice_img(dice1, dice2) {
    // If the player has a multiplayer connection then send them the data too
    if ((client_connection_to_game == true) && (this_client_id == current_turn)) {
        player2.send(`update_dice_img|${dice1}, ${dice2}`)
    }
    // Shows the dice
    dice1_img.style.display = `block` // Shows dice1
    dice2_img.style.display = `block` // Shows dice2
    // Sets the images for dice1 and dice 2
    dice1_img.src = `./diceImg/roll_${dice1}.png` // Sets image for dice1
    dice2_img.src = `./diceImg/roll_${dice2}.png` // Sets image for dice2
}

// Rolls the dice
export function rollPlayer_dice() {
    // Variables for dice animation
    var roll_speed = 250 // The speed the dice rolls
    // Animates the dice roll
    var animate_dice_roll = setInterval(() => { 
        dice1 = Math.floor(Math.random()*6)+1; // Rolls `dice1` Between 1-6
        dice2 = Math.floor(Math.random()*6)+1; // Rolls `dice2` Beteen 1-6
        update_dice_img(dice1, dice2)
        roll_speed += 250
        // Stops the animation once the roll_speed hits 2500
        if (roll_speed >= 2500) {
            clearInterval(animate_dice_roll)
            movement = dice1 + dice2; // Adds both dice to see how far the player moves
            message_text_box(`<b>${player_list[current_turn].get_player_name()}</b> has rolled a ${dice1} and a ${dice2}`)
            // If the player rolls a double
            if (dice1 == dice2) { 
                doubles += 1
                if (doubles == 3) { // Checks if the player has rolled 3 doubles
                    message_text_box(`<b>${player_list[current_turn].get_player_name()}</b> Rolled 3 Doubles and has been sent to jail`)
                    setTimeout(function() { // This just makes the player not move instantly
                        player_jailed(current_turn, `new`)
                        dice1 = -1; dice2 = -2
                        after_roll(`no`, current_turn)
                    }, 2000)
                    return
                }
            }
            // Moves the player 
            move_player(current_turn, movement)
        }
    }, roll_speed);
}

// This is just so that the roll btn will be disabled on both clients
export function rollbtn_click() {
    saveGame_btn.className = `action_btn_disabled` // Hides the save btn        
    // Disables the roll Button
    roll_btn.className = `action_btn_disabled`
    if ((client_connection_to_game == true) && (current_turn == this_client_id)) {
        player2.send(`rollbtn_click`)
        rollPlayer_dice()
    } else if (client_connection_to_game == false) {rollPlayer_dice()}
}

// Sets the roll btn
export function set_roll() {
    // Checks if the player is in jail
    if (player_list[current_turn].get_player_isJailed() == true) {
        player_jailed(current_turn, `old`)
        return
    }
    // When the player rolls the dice
    roll_btn.textContent = `Roll Dice`
    roll_btn.className = `action_btn`
    // Removes the player from the old property
    var player_index = propData[player_list[current_turn].get_player_spot_id()][`property_data`][`players_on`].indexOf(current_turn)
    if (player_index !== -1) {
        propData[player_list[current_turn].get_player_spot_id()][`property_data`][`players_on`].splice(player_index, 1)
    }

    // Removes and disables all other buttons
    buy_btn.className = `action_btn_disabled`
    sell_btn.className = `action_btn_disabled`
    pay_btn.className = `action_btn_disabled`
    trade_btn.className = `action_btn_disabled`
    // Allows the save btn to be interactable
    saveGame_btn.onclick = function() { // Allows for save name input
        // If the player did not load a save
        if (saveSlot == 'null') { 
            var saveName = prompt(`What should the name of the save be?`)
            while (true) {
                var no_spaces = saveSlot.replace(" ", "") 
                // if the user entered a save name correctly
                if ([no_spaces, "null"].includes(saveName) == false) { break }
                saveName = prompt(`You Enter the name in a forbidden word. Please Enter a new Name.`)
            }
        } 
        save_current_game(saveName)
    }
    // Makes the roll function
    roll_btn.onclick = rollbtn_click
}

// Sets up everything that will be used in the game
//name, color, spot, id, money, jailed, props, ooj, bankrupt, icons
export function set_up_game(player_names, player_colors, playerSpot, playerId, starting_cash, playerJailed, playerProps, playerOoj, bankrupt, player_icons) {
    //console.log(player_names, player_colors, playerSpot, playerId, starting_cash, playerJailed, playerProps, playerOoj, bankrupt, player_icons)
    // Sets up displays and variables
    main_menu.style.display = `none` // Hides the main menu
    connectedScreen.style.display = `none` // Hides the Connected Menu ( Multiplayer Only )
    game_board.style.display = `block` // Shows the game
    playerAmount = player_names.length // The amount of players
    // Hard coded elms
    var money_container = document.getElementById("player_money_container") // player Money Element Container
    // Handles the setup for the properties
    var propData_keys = Object.keys(propData)
    for (var i=0; i < propData_keys.length; i++) { // Goes through each property
        var propCell = document.getElementById(`cell_${i}`) // The Property
        if (propData[propData_keys[i]][`property_data`][`color`] !== null) { // Checks if that property has a color
            let container = document.createElement("div")
            let tag = document.createElement("div")
            let tag_tip = document.createElement(`div`)
            let house_container = document.createElement("div")
            // Container
            container.className = "cell_tag"
            container.style = `width:${propCell.offsetWidth}px; height:${propCell.offsetHeight}px`           
            // Tag_tip border Color
            let textColor = `black` // The property cell text color
            // If the prop Color is in the list it will set the text color to white
            if ([`blue`, `black`, `brown`].includes(propData[propData_keys[i]][`property_data`][`color`])) { textColor = `white` }   
            tag_tip.style.display = `none`
            tag_tip.id = `cell_${i}_tag_tip`
            // Checks the tag location
            if ([2,4,6,7,8,10].includes(i)) { // if the prop is on the bottom
                tag.className = "cell_tag_mid"
                tag_tip.className = `cell_tip_bottom`
                tag.style = `width:${propCell.offsetWidth-5}px; height:20px`
            } else if ([12,13,14,15,16,17,19,20].includes(i)) { // if the prop is on the left
                tag.className = "cell_tag_side"
                tag_tip.className = `cell_tip_left`
                tag.style = `width:20px; height:${propCell.offsetHeight-5}px;`
                container.style.marginTop = "-50px"
                container.style.marginLeft = "-75px"
            } else if ([22,24,25,26,27,28,29,30].includes(i)) {
                tag.className = "cell_tag_mid"
                tag_tip.className = `cell_tip_top`
                tag.style = `width:${propCell.offsetWidth-5}px; height:20px`
                container.style.marginTop = "-135px"
            } else if ([32,33,35,36,38,40].includes(i)) {
                tag.className = "cell_tag_side"
                tag_tip.className = `cell_tip_right`
                tag.style = `width:20px; height:${propCell.offsetHeight-5}px`
                container.style.marginTop = "-50px"
                container.style.marginLeft = "70px"
            }
            // Tag
            tag.id = `cell_${i}_tag`
            tag.style.backgroundColor = "grey"
            tag.style.border = "1px solid black"
            // House Container
            house_container.id = `cell_${i}_house_container`
            house_container.className = `house_container`
            // Prop Cell
            propCell.style.color = textColor // Sets the cell text color and Sets the propertys' color
            propCell.style.backgroundColor = propData[propData_keys[i]][`property_data`][`color`]
            // Adds a white border around railroad properties
            tag_tip.textContent = `Owner: Bank`
            tag_tip.style.border = "1px solid white"
            // Makes the hover part
            tag.onmouseover = function() {tag_tip.style.display = `block`} // Mouse is over
            tag.onmouseout = function() {tag_tip.style.display = `none`} // Mouse is not over
            // Adds to the screen
            tag.appendChild(tag_tip)
            tag.appendChild(house_container)
            container.appendChild(tag)
            propCell.appendChild(container) // Appends the tag to the cel
        }
        // 0 is not a property so it will skip it
        // Player Container
        var player_container = document.createElement("div")
        player_container.id = `cell_${i}_player_container`
        player_container.className = "cell_player_container_mid"
        // Checks what side it is
        if (i == 0) { player_container.className = "cell_player_container" }
        else if ([12,13,14,15,16,17,18,19,20,32,33,34,35,36,37,38,39,40].includes(i)) { player_container.className = "cell_player_container_side" }
        else if ([22,23,24,25,26,27,28,29,30].includes(i)) { player_container.className = "cell_player_container_top"}
        propCell.appendChild(player_container)
    }
    // Sets up players elements
    for (var i = 0; i < player_names.length; i++) {
        let player_container = document.getElementById(`cell_${playerSpot[i]}_player_container`)
        // Creates the Players' tool tip
        let playerToolTip = document.createElement(`div`)
        playerToolTip.textContent = player_names[i]
        playerToolTip.className = `playerTip`
        playerToolTip.style.display = `none`
        // Creates the Player
        const newPlayer = document.createElement(`div`)
        newPlayer.id = `player${(i+1)}`
        newPlayer.className = `player`
        newPlayer.style = `background-color: ${player_colors[i]};`
        // If this player has a player Icon
        if (player_icons[i] !== 'null') {
            newPlayer.style.backgroundImage = `url('${all_player_icons[player_icons[i]]["img"]}')`
            newPlayer.style.backgroundColor = ""
        }
        // When the players mouse is over a player it will show the name of that player
        newPlayer.onmouseover = function() { playerToolTip.style.display = `block` }
        // When the players mouse is not over a player it will hide that players name
        newPlayer.onmouseout = function() { playerToolTip.style.display = `none` }
        newPlayer.appendChild(playerToolTip) // Adds the tool tip to the player
        // Adds the player tooltip to the board
        player_container.appendChild(newPlayer)
        // Adds the player to the player list
        player_list.push(new Player(player_names[i], player_colors[i], parseInt(playerSpot[i]), playerId[i], parseInt(starting_cash[i]), playerJailed[i], playerProps[i], playerOoj[i], Boolean(bankrupt[i]), player_icons[i]))
        // Adds the player to propData players_on
        propData[playerSpot[i]]["property_data"]["players_on"].push(i)
        // Sets the money containers to the right color and text
        let player_money_elm = document.createElement("div")
        player_money_elm.id = `player${i+1}_money`
        player_money_elm.className = "player_money"
        player_money_elm.style = `border: 3px solid ${player_colors[i]};background-color: white;text-align: center;`
        money_container.appendChild(player_money_elm)
    }
    // Sets up the roll btn
    set_roll()
    // Sets the Player turn text to the new player
    turn_text.textContent = player_list[current_turn].get_player_name()
    turn_text.style.color = player_list[current_turn].get_player_color()
    // Randomizes the chance/chest card
    chest_deck = shuffle(Object.keys(cardsData[`Base`][`Community Chest`])) // Randomize Chest
    chance_deck = shuffle(Object.keys(cardsData[`Base`][`Chance`])) // Randomize Chest
    // if the client allows saving
    if (savingStatus == true) { saveGame_btn.className = `myBtn` }
    update_money_display() // This will fix the big cash number
    // fixes a problem when not loading from a save
    if (saveSlot !== `null`) {
        // Spawns in the houses
        // Each Player
        for (var i=0; i < player_list.length; i++) {
            var playerProperties = Object.keys(player_list[i].get_player_properties())
            // Each Property
            for (var p=0; p < playerProperties.length; p++) {
                // Each property House
                if (player_list[i].get_player_properties()[playerProperties[p]]["houses"] < 5) {
                    for (var h=0; h < player_list[i].get_player_properties()[playerProperties[p]]["houses"]; h++) { player_list[i].add_house_icon(playerProperties[p], h)}   
                } else {player_list[i].add_house_icon(playerProperties[p], 5)}
            }
        }
    } 
    update_game_text()
    // Sets up a refresh warning
    window.onbeforeunload = function() {
        if (enable_save_warning == true) { return "Data will be lost if you leave the page, are you sure?";}
    };
    // This multiplayer data is different since it will save the game ( Not actually save the data just to transfer it ) and the other clietn will load that data
    // If the player has a multiplayer connection then send them the data too
    if ((client_connection_to_game == true) && (this_client_id == 0)) {
        var gameData = save_current_game("client", true) // Returns all data needed to be sent
        console.log(gameData)
        player2.send(`load_saved_game|${true}, ${gameData}`)
        console.log("Sent")
    }
}

// Sets the screen of the player to the connectiong screen when they connect to another client
export function set_connected() {
    main_menu.style.display = "none"
    connectedScreen.style.display = "block"
}

// Updates the icon dropdown so players do not have the same icon
function update_player_icon_select(hide, value) {
    if (value !== "null") {
        // This will hide all the options that have this className
        var elms = document.getElementsByClassName(all_player_icons[value]["name"])
        for (var i=0; i < elms.length; i++) {elms[i].style.display = hide}
    }
}

// This will setup the main menu after the JSON file data from changeLogs are readable
export function set_menu() {
    cookie_menu.style.display = `none`
    main_menu.style.display = `block`
    // Sets up all the options for the player icons and change events
    for (var i=0; i < 4; i++) {
        const icon_selector = document.getElementById(`player${i+1}_icon_select`)
        let curPlayer = i+1
        // Creates all the elements
        for (var icon=0; icon < all_player_icons.length; icon++) {
            let icon_opt = document.createElement("option")
            icon_opt.textContent = all_player_icons[icon]["name"]
            icon_opt.value = icon
            icon_opt.className = all_player_icons[icon]["name"]
            icon_selector.appendChild(icon_opt)
        }
        
        // Sets up the change events to update the display of the player
        var color_input = document.getElementById(`player${(i+1)}_color`)
        var icon_input = document.getElementById(`player${(i+1)}_icon_select`)
        // When the color input is changed it will update the player example
        color_input.onchange = function() {
            var playerExample = document.getElementById(`player${curPlayer}_example`)
            playerExample.style.backgroundColor = document.getElementById(`player${curPlayer}_color`).value
        }
        // if the icon Input is changed then it will update the player example
        icon_input.onchange = function() {
            var playerExample = document.getElementById(`player${curPlayer}_example`)
            var icon = document.getElementById(`player${curPlayer}_icon_select`)
            // Will set up the onchange function
            // Shows all the values
            for (var i=0; i < all_player_icons.length; i++) {
                update_player_icon_select("block", i)
            }
            // Hides all selected values
            for (var i=0; i < 4; i++) {
                var icon_selector = document.getElementById(`player${i+1}_icon_select`)
                update_player_icon_select("none", icon_selector.value)
            }
            // ------------------------------- \\
            // Handles all the player examples
            // If the value of the input is not null
            if (icon.value !== 'null') {
                // If this player has a player Icon
                playerExample.style.backgroundImage = `url('${all_player_icons[icon.value]["img"]}')`
                playerExample.style.backgroundColor = ""
                return
            }   
            // If the value is 'null' then set the background image to nothing
            playerExample.style.backgroundImage = ''
            playerExample.style.backgroundColor = document.getElementById(`player${curPlayer}_color`).value
        }
    }
    // Allows the enable buttons to be interactable
    for (let j=2; j < 4; j++) {
        const enable_btn = document.getElementById(`player${(j+1)}_enable`)
        const name_input = document.getElementById(`player${(j+1)}_name`)
        const color_input = document.getElementById(`player${(j+1)}_color`)
        const icon_input = document.getElementById(`player${(j+1)}_icon_select`)
        const example_dis = document.getElementById(`player${(j+1)}_example`)
        enable_btn.onclick = function() {
            if (enable_btn.checked == false) { // if the enable button is player3
                if (j+1 == 3) { // If player3 was unchecked
                    // If so then will disable player4
                    document.getElementById(`player4_enable`).checked = false
                    document.getElementById(`player4_name`).value = ``
                    document.getElementById(`player4_name`).disabled = `disabled`
                    document.getElementById(`player4_color`).disabled = `disabled`
                    document.getElementById(`player4_icon_select`).disabled = `disabled`
                    document.getElementById(`player4_example`).hidden = `hidden`
                }
                name_input.value = ``
                name_input.disabled = `disabled`
                color_input.disabled = `disabled`
                icon_input.disabled = `disabled`
                example_dis.hidden = `hidden`
            } else if (enable_btn.checked == true) {
                if (j+1 == 4) { // If player4 was checked
                    document.getElementById(`player3_enable`).checked = true
                    document.getElementById(`player3_name`).disabled = ``
                    document.getElementById(`player3_color`).disabled = ``
                    document.getElementById(`player3_icon_select`).disabled = ``
                    document.getElementById(`player3_example`).hidden = ``
                }
                name_input.value = ``
                name_input.disabled = ``
                color_input.disabled = ``
                icon_input.disabled = ``
                example_dis.hidden = ``
            }
        }
    }
    // When the player clicks the start btn on the Main Menu
    start_btn.onclick = function() {
        // Player input variables
        var input_names = []
        var input_colors = []
        var player_spot = []
        var player_ids = []
        var player_money = []
        var player_jailed = []
        var player_props = []
        var player_ooj = []
        var player_bank = []
        var player_icon = []
        var error_count = false
        // Gets all the values
        for (let i=0; i < 4; i++) {
            const enable_box = document.getElementById(`player${i+1}_enable`)
            const name_input = document.getElementById(`player${i+1}_name`)
            const color_input = document.getElementById(`player${i+1}_color`)
            const icon_input = document.getElementById(`player${i+1}_icon_select`)
            if (i+1 >= 3) { // Checks if `i` is on 3
                if (enable_box.checked == false) { // Checks to see if that player was enabled
                    continue
                }
            }
            // Checks the length of the name
            if ((name_input.value).length >= 3) { // Only allow names over the length of 3
                if (input_names.includes((name_input.value).replace(` `, ``)) == false) { // Checks if the name is taken // Checks if the color is taken
                    input_names.push(name_input.value)
                    input_colors.push(color_input.value)
                    player_spot.push(1)
                    player_ids.push(`player${(i+1)}`)
                    player_money.push(2000)
                    player_jailed.push(false)
                    player_props.push({})
                    player_ooj.push([])
                    player_bank.push(false)
                    player_icon.push(icon_input.value)
                    error_count = false
                    continue
                } else {
                    error_txt.innerHTML = `Player ${i+1}'s Name is already Taken`
                    error_count = true
                    continue
                }
            }
            error_txt.innerHTML = `Player ${i+1}'s name is not longer than 3 letters`
            error_count = true
        }
        // Starts the game
        if (error_count == false) {set_up_game(input_names, input_colors, player_spot, player_ids, player_money, player_jailed, player_props, player_ooj, player_bank, player_icon)}
    }
    // If saveSelector is value is changed
    saveSelector.onchange = function() {
        if (saveSelector.value == `null`) { // If the save is invalid
            loadGame_btn.disabled = `disabled`
            delGame_btn.disabled = `disabled`
        }
        // Enables the btns
        loadGame_btn.disabled = ``
        delGame_btn.disabled = ``
        // Hides the first element
        let curSelect = document.getElementById(select_version.value)
        curSelect.style.display = `none`
    }
    // Allows the save to be loaded
    loadGame_btn.onclick = function() {
        if (saveSelector.value !== `null`) {
            load_saved_game()
        }
    }
    // Allows the player to delete a save
    delGame_btn.onclick = function() {
        if (saveSelector.value !== `null`) { // If its a valid cookie
            setCookie(saveSelector.value, ``, 0)
            document.getElementById(saveSelector.value).remove()
        }
    }
    // Allows the client to save their notifications
    settings_btn.onclick = save_client_settings
    // This will add all the versions to the dropdown menu
    var version_keys = Object.keys(changeLog)
    for (var i=0; i < version_keys.length; i++) {
        let add_ver = document.createElement(`option`)
        add_ver.value = version_keys[i]
        add_ver.textContent = version_keys[i]
        add_ver.id = version_keys[i]
        select_version.appendChild(add_ver)
    }
    // Gets all cookies for this domain
    var cookies = document.cookie.split(';')
    for (var save=0; save < cookies.length; save++) { // This will get all the cookies that the site uses and checks if they containe `saveSlot`
        if (cookies[save].substring(0, 1) == ` `) {cookies[save] = cookies[save].replace(` `, ``)}
        if (cookies[save].includes(`saveSlot`)) {
            let curSave_id = cookies[save].substring(0,9)
            let curSave_data = getCookie(curSave_id)
            let addSave = document.createElement(`option`)
            addSave.value = curSave_id
            addSave.id = curSave_id
            addSave.text = curSave_data[`name`]
            saveSelector.appendChild(addSave)
        }
    }
    
    // This will update the text box for the change logs when the version is changed
    select_version.onchange = function() {
        // Shows all the elements
        var children = select_version.children;
        for (var i = 0; i < children.length; i++) {
            children[i].style = "background-color: white; color:black;"
        }
        // Hide the selected element
        let curSelect = document.getElementById(select_version.value)
        curSelect.style = "background-color: black; color:white;"
        // Removes the old text
        while(changeLog_txt.firstChild) {
            changeLog_txt.removeChild(changeLog_txt.firstChild)
        }
        // When called it will add a divider to the changeLog_txt
        const make_divider = function() {
            var divider = document.createElement(`div`)
            divider.textContent = `--------------------------------------------------------------------------------`
            changeLog_txt.appendChild(divider)
        }
        // Sees what value was selected
        if (select_version.value == `Future Updates`) { // If future updates was selected
            // Adds the Future Updates to the output
            let ver_title = document.createElement(`div`)
            ver_title.innerHTML = `&#x2022; <b>${select_version.value}</b>`
            changeLog_txt.appendChild(ver_title)
            // Divides the Title and the content
            make_divider()
            // Adds all the items from the list of `future updates`
            for (var i=0; i < changeLog[select_version.value].length; i++) {
                let futUpd = document.createElement(`div`) // futUpd = Future Update
                futUpd.innerHTML = `- `+changeLog[select_version.value][i]
                changeLog_txt.appendChild(futUpd)
            }
        } else if (select_version.value !== `nothing`) { // If anything else except `null` was selected
            // Makes the Date and title Text
            let ver_date = document.createElement(`div`)
            ver_date.innerHTML = `&#x2022; <b>Release Date:</b> `+changeLog[select_version.value][`date`]
            changeLog_txt.appendChild(ver_date)
            let ver_title = document.createElement(`div`)
            ver_title.innerHTML = `&#x2022; <b>Update Name:</b> `+changeLog[select_version.value][`title`]
            changeLog_txt.appendChild(ver_title)
            // Makes the Added items
            var add_items = changeLog[select_version.value][`added`]
            if (add_items.length > 0) { // Checks if there was any add_items ( If not then nothing will display under `added`)
                make_divider()
                // Makes the Added title
                let add_title = document.createElement(`div`)
                add_title.innerHTML = `&#x2022; <b>Additions:</b>`
                changeLog_txt.appendChild(add_title)
                for (var i=0; i < add_items.length; i++) {
                    let ver_add = document.createElement(`div`)
                    ver_add.innerHTML = `+ `+add_items[i]
                    changeLog_txt.appendChild(ver_add)
                }
            }
            // Makes the Bug Fixes items
            var bug_items = changeLog[select_version.value][`bug_fix`]
            if (bug_items.length > 0) { // Checks if there was any add_items ( If not then nothing will display under `added`)
                make_divider()
                // Makes the Added title
                let bug_title = document.createElement(`div`)
                bug_title.innerHTML = `&#x2022; <b>Bug Fixes:</b>`
                changeLog_txt.appendChild(bug_title)
                for (var i=0; i < bug_items.length; i++) {
                    let ver_bug = document.createElement(`div`)
                    ver_bug.innerHTML = `+ `+bug_items[i]
                    changeLog_txt.appendChild(ver_bug)
                }
            }
            // Makes the Removed items
            var sub_items = changeLog[select_version.value][`removed`]
            if (sub_items.length > 0) { // Checks if there was any sub_items ( If not then nothing will display under `removed`)
                make_divider()
                // Makes the Removed title
                let sub_title = document.createElement(`div`)
                sub_title.innerHTML = `&#x2022; <b>Removals:</b>`
                changeLog_txt.appendChild(sub_title)
                for (var i=0; i < sub_items.length; i++) {
                    let ver_sub = document.createElement(`div`)
                    ver_sub.innerHTML = `- `+sub_items[i]
                    changeLog_txt.appendChild(ver_sub)
                }
            }
            // Makes the Changed items
            var change_items = changeLog[select_version.value][`changed`]
            if (change_items.length > 0) { // Checks if there was any Change_items ( If not then nothing will display under `changed`)
                make_divider()
                // Makes the Changed title
                let change_title = document.createElement(`div`)
                change_title.innerHTML = `&#x2022; <b>Changes:</b>`
                changeLog_txt.appendChild(change_title)
                for (var i=0; i < change_items.length; i++) {
                    let ver_change = document.createElement(`div`)
                    ver_change.innerHTML = `+ `+change_items[i]
                    changeLog_txt.appendChild(ver_change)
                }
            }
        }
    }
}

// Sets up the cookie Warning
export function set_cookie_menu() {
    load_client_settings()
    // If the acceptBtn was clicked
    document.getElementById(`cookieAccept`).onclick = function() {
        savingStatus = true
        set_menu()
    }
    // If the acceptBtn was clicked
    document.getElementById(`cookieDecline`).onclick = function() {
        savingStatus = false
        set_menu()
    }
    // Checks if the client has any cookies
    var cookies = document.cookie.split(';')
    if (cookies[0] !== "") {
        savingStatus = true
        set_menu()
        send_notification("Welcome back to Monopoly")
        return
    }
    send_notification("Welcome to Monopoly")
}

// If the client selected another tab or minimized the tab
document.addEventListener(`visibilitychange`, () => {
    // If "hidden_mode" is enabled
    if (enable_hidden_mode == true) {
        var webicon = document.querySelector(`head > link:nth-child(3)`)
        if (document.hidden) { // if document is hidden, change the title and icon
            webicon.href = `https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico`
            document.title = `Dashboard`
            return
        }
        document.title = `Monopoly 2.0` // If the document is not hidden (hidden meaning if the client is looking at the page or not)
        webicon.href = `./favicon.png`
    }
});

// Once the document loads and the location hash is #host
window.addEventListener("load", () => {
    // If the player is the host
    if (location.hash == "#host") {
        set_menu(changeLog)
        return
    }
    set_cookie_menu(changeLog)
})