// Made September 13th, Wednesday, 2023
// Data Variables
var propData = { // Placement is "left" px, "top" px
    "0": {"property_data": {"by": null, "players_on": [], "color": null},"placement": [[75, 884], [100, 884], [75, 907], [100, 907]]}, // When the player is sent to jail this is their location
    "1": {"buyable":false, "property_data": {"by": null, "players_on": [0,1,2,3], "color": null}, "placement": [[849, 884],[872, 884],[895, 884],[918, 884]]},
    "2": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "brown"}, "name": "Mediterranean Avenue", "property_cost": 60, "house_price": 50, "house_placement": {"axis": 988, "left":[770, 785, 800, 814, 792]}, "rent": [2, 10, 30, 90, 160, 250], "placement": [[775, 884],[798, 884],[775, 907],[918, 907]]},
    "3": {"buyable":false, "property_data": {"by": null, "players_on": [], "color": null}, "placement": {"0": [693, 884], "1": [715, 884], "2":[693, 907], "3": [715, 907]}},
    "4": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "brown"}, "name": "Baltic Avenue", "property_cost": 60, "house_price": 50, "house_placement": {"axis": 988, "left":[608, 622, 637, 652, 629]}, "rent":[4, 20, 60, 180, 320, 450], "placement": {"0": [616, 884], "1": [639, 884], "2":[616, 907], "3": [639, 907]}},
    "5": {"buyable":false, "property_data": {"by": null, "players_on": [], "color": null}, "placement": {"0": [539, 884], "1": [562, 884], "2":[539, 907], "3": [562, 907]}},
    "6": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "black"}, "name": "Reading Railroad", "property_cost": 200, "rent": [25, 50, 100, 200], "placement": {"0": [462, 884], "1": [485, 884], "2":[462, 907], "3": [485, 907]}},
    "7": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "aqua"}, "name": "Oriental Avenue", "property_cost": 100, "house_price": 50, "house_placement": {"axis": 988, "left":[375, 389, 404, 419, 396]}, "rent":[6, 30, 90, 270, 400, 550], "placement": {"0": [382, 884], "1": [405, 884], "2":[382, 907], "3": [405, 907]}},
    "8": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "aqua"}, "name": "Vermont Avenue", "property_cost": 100, "house_price": 50, "house_placement": {"axis": 988, "left":[297, 311, 326, 341, 318]}, "rent":[6, 30, 90, 270, 400, 550], "placement": {"0": [305, 884], "1": [329, 884], "2":[305, 907], "3": [329, 907]}},
    "9": {"buyable":false, "property_data": {"by": null, "players_on": [], "color": null}, "placement": {"0": [226, 884], "1": [250, 884], "2":[226, 907], "3": [250, 907]}},
    "10": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "aqua"}, "name": "Connecticut Avenue", "property_cost": 120, "house_price":50, "house_placement": {"axis": 988, "left":[142, 157, 171, 186, 164]}, "rent":[8, 40, 100, 300, 450, 600], "placement": {"0": [149, 884], "1": [173, 884], "2":[149, 907], "3": [173, 907]}},
    "11": {"buyable":false, "property_data": {"by": null, "players_on": [], "color": null}, "placement": [[40, 882],[40, 904],[40, 927],[63, 927]]}, // Just Visting
    "12": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "magenta"}, "name": "St. Charles Place", "property_cost": 140, "house_price":100, "house_placement": {"axis": 3, "left":[808, 822, 837, 852, 829]}, "rent":[10, 50, 150, 450, 625, 750], "placement": {"0": [60, 802], "1": [83, 802], "2":[60, 825], "3": [83, 825]}},
    "13": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "white"}, "name": "Electric Company", "property_cost": 150, "rent": [4,10], "placement": {"0": [60, 719], "1": [83, 719], "2":[60, 742], "3": [83, 742]}},
    "14": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "magenta"}, "name": "States Avenue", "property_cost": 140, "house_price":100, "house_placement": {"axis": 3, "left":[642, 656, 671, 686, 661]}, "rent":[10, 50, 150, 450, 625, 750], "placement": {"0": [60, 637], "1": [83, 637], "2":[60, 660], "3": [83, 660]}},
    "15": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "magenta"}, "name": "Virginia Avenue", "property_cost": 160, "house_price":100, "house_placement": {"axis": 3, "left":[559, 573, 588, 603, 580]}, "rent":[12,60,180,500,700,900], "placement": {"0": [60, 555], "1": [83, 555], "2":[60, 578], "3": [83, 578]}},
    "16": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "black"}, "name": "Pennsylvania Railroad", "property_cost": 200, "rent": [25, 50, 100, 200], "placement": {"0": [60, 473], "1": [83, 473], "2":[60, 496], "3": [83, 496]}},
    "17": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "orange"}, "name": "St. James Place", "property_cost": 180, "house_price": 100, "house_placement": {"axis": 3, "left":[393, 407, 422, 437, 414]}, "rent": [14, 70, 200, 550, 750, 950], "placement": {"0": [60, 388], "1": [83, 388], "2":[60, 411], "3": [83, 411]}},
    "18": {"buyable":false, "property_data": {"by": null, "players_on": [], "color": null}, "placement": {"0": [60, 305], "1": [83, 305], "2":[60, 328], "3": [83, 328]}},
    "19": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "orange"}, "name": "Tennessee Avenue", "property_cost": 180, "house_price": 100, "house_placement": {"axis": 3, "left":[227, 241, 256, 271, 248]}, "rent": [14, 70, 200, 550, 750, 950], "placement": {"0": [60, 222], "1": [83, 222], "2":[60, 245], "3": [83, 245]}},
    "20": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "orange"}, "name": "New York Avenue", "property_cost": 200, "house_price":100, "house_placement": {"axis": 3, "left":[144, 158, 173, 188, 165]}, "rent":[16, 80, 220, 600, 800, 1000], "placement": {"0": [60, 140], "1": [83, 140], "2":[60, 163], "3": [83, 163]}},
    "21": {"buyable":false, "property_data": {"by": null, "players_on": [], "color": null}, "placement": {"0": [60, 42], "1": [83, 42], "2":[60, 65], "3": [83, 65]}}, // Free Parking
    "22": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "red"}, "name": "Kentucky Avenue", "property_cost": 220, "house_price": 150, "house_placement": {"axis": 3, "left":[142, 157, 171, 186, 164]}, "rent":[18, 90, 250, 700, 875, 1050], "placement": {"0": [149, 42], "1": [173, 42], "2":[149, 65], "3": [173, 65]}},
    "23": {"buyable":false, "property_data": {"by": null, "players_on": [], "color": null}, "placement": {"0": [226, 42], "1": [250, 42], "2":[226, 65], "3": [250, 65]}},
    "24": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "red"}, "name": "Indiana Avenu", "property_cost": 220, "house_price": 150, "house_placement": {"axis": 3, "left":[297, 311, 326, 341, 318]}, "rent":[18, 90, 250, 700, 875, 1050], "placement": {"0": [305, 42], "1": [329, 42], "2":[305, 65], "3": [329, 65]}},
    "25": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "red"}, "name": "Illinois Avenue", "property_cost": 240, "house_price":150, "house_placement": {"axis": 3, "left":[375, 389, 404, 419, 396]}, "rent":[20, 100, 300, 750, 925, 1100], "placement": {"0": [382, 42], "1": [405, 42], "2":[382, 65], "3": [405, 65]}},
    "26": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "black"}, "name": "B&O Railroad", "property_cost": 200, "rent": [25, 50, 100, 200], "placement": {"0": [462, 42], "1": [485, 42], "2":[462, 65], "3": [485, 65]}},
    "27": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "yellow"}, "name": "Atlantic Avenue", "property_cost":260, "house_price":150, "house_placement": {"axis": 3, "left":[530, 544, 559, 574, 551]}, "rent":[22, 110, 330, 800, 975, 1150], "placement": {"0": [539, 42], "1": [562, 42], "2":[539, 65], "3": [562, 65]}},
    "28": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "yellow"}, "name": "Ventnor Avenue", "property_cost":260, "house_price":150, "house_placement": {"axis": 3, "left":[608, 622, 637, 652, 629]}, "rent":[22, 110, 330, 800, 975, 1150], "placement": {"0": [616, 42], "1": [639, 42], "2":[616, 65], "3": [639, 65]}},
    "29": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "white"}, "name": "Water Works", "property_cost": 150, "rent": [4,10], "placement": {"0": [693, 42], "1": [715, 42], "2":[693, 65], "3": [715, 65]}},
    "30": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "yellow"}, "name": "Marvin Gardens", "property_cost": 280, "house_price":150, "house_placement": {"axis": 3, "left":[770, 785, 800, 814, 792]}, "rent":[24, 120, 360, 850, 1025, 1200], "placement": {"0": [775, 42], "1": [798, 42], "2":[775, 65], "3": [798, 65]}},
    "31": {"buyable":false, "property_data": {"by": null, "players_on": [], "color": null}, "placement": {"0": [880, 65]}}, // To Jail
    "32": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "green"}, "name": "Pacific Avenue", "property_cost": 300, "house_price":200, "house_placement": {"axis": 959, "left":[144, 158, 173, 188, 165]}, "rent":[26, 130, 390, 900, 1100, 1275], "placement": [[871, 140],[894, 140],[871, 163],[894, 163]]},
    "33": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "green"}, "name": "North Carolina Avenue", "property_cost": 300, "house_price":200, "house_placement": {"axis": 959, "left":[227, 241, 256, 271, 248]}, "rent":[26, 130, 390, 900, 1100, 1275], "placement": {"0": [871, 222], "1": [894, 222], "2":[871, 245], "3": [894, 245]}},
    "34": {"buyable":false, "property_data": {"by": null, "players_on": [], "color": null}, "placement": {"0": [871, 305], "1": [894, 305], "2":[871, 328], "3": [894, 328]}},
    "35": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "green"}, "name": "Pennsylvania Avenue", "property_cost": 320, "house_price":200, "house_placement": {"axis": 959, "left":[393, 407, 422, 437, 414]}, "rent":[28, 150, 450, 1000, 1200, 1400], "placement": {"0": [871, 388], "1": [894, 388], "2":[871, 411], "3": [894, 411]}},
    "36": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "black"}, "name": "Short Line Railroad", "property_cost": 200, "rent": [25, 50, 100, 200], "placement": {"0": [871, 473], "1": [894, 473], "2":[871, 496], "3": [894, 496]}},
    "37": {"buyable":false, "property_data": {"by": null, "players_on": [], "color": null}, "placement": {"0": [871, 555], "1": [894, 555], "2":[871, 578], "3": [894, 578]}},
    "38": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "blue"}, "name": "Park Place", "property_cost":350, "house_price":200, "house_placement": {"axis": "", "left":[642, 656, 671, 686, 661]}, "rent":[35, 175, 500, 1100, 1300, 1500], "placement": {"0": [871, 637], "1": [894, 637], "2":[871, 660], "3": [894, 660]}},
    "39": {"buyable":false, "property_data": {"by": null, "players_on": [], "color": null}, "placement": {"0": [871, 719], "1": [894, 719], "2":[871, 742], "3": [894, 742]}},
    "40": {"buyable":true, "property_data": {"by": null, "players_on": [], "color": "blue"}, "name": "Board walk", "property_cost":400, "house_price":200, "house_placement": {"axis": "", "left":[808, 822, 837, 852, 829]}, "rent":[50, 200, 600, 1400, 1700, 2000], "placement": {"0": [871, 802], "1": [894, 802], "2":[871, 825], "3": [894, 825]}}
}

// Chance / chest cards
const cardsData = {
    "Community Chest": {
        "advance_boardwalk": {"location_id": 40, "description": " Advance's to boardwalk", "gamemode": "normal"},
        "advance_railroad_1": {"location_id": 6, "description": " Advance's to Reading Railroad", "gamemode": "normal"},
        "advance_go": {"location_id": 1, "description": " Advance's to Go", "gamemode": "normal"},
        "out_of_jail_Community Chest": {"description": " Allows the player to get out of jail for free", "gamemode": "normal"}
    },
    "Chance": {
        "advance_railroad_4": {"location_id": 36, "description": " Advance's to Short Line Railroad", "gamemode": "normal"},
        "out_of_jail_Chance": {"description": " Allows the player to get out of jail for free", "gamemode": "normal"},
        "pay_tax": {"tax_amount": 100, "description": " Has to pay $100 in tax", "gamemode": "normal"},
        "pay_prop_tax": {"house": 15, "hotels": 115, "description": " has to Pay for each house ($15 per) and hotel ($115 per)", "gamemode": "normal"},
        
    }
}
// This will allow python Code to be executed
async function main(){
    pyodide = await loadPyodide();
    console.log("Loaded Pyodide")    
}
main()

// "pay_to_all": {"amount": 50, "description": " Has to Pay all players $50", "gamemode": "normal"}
// This will get the change log 
fetch('changeLog.json')
    .then(response => response.json())
    .then(data => {
        set_menu(data)
    })
    .catch(error => {
        console.error('Error:', error);
});

// Game Variables
var playerAmount = 4;
var player_list = []; const logger = {}
var current_turn = 0
var freeParking_cash = 200
var houses = 32
var hotels = 12
var doubles = 0
var dice1, dice2, player, movement
var chest_deck, chance_deck

// Elements
// Menus
const main_menu = document.getElementById("main_menu")
const game_board = document.getElementById("gameboard")
const trade_menu = document.getElementById("trading_menu")
const manage_menu = document.getElementById("manage_menu")
const auction_menu = document.getElementById("auction_menu")
const winningScreen = document.getElementById("winningScreen")
// Elements for Main menu
const player3_check = document.getElementById("player3_enable")
const player4_check = document.getElementById("player4_enable")
const start_btn = document.getElementById("start_game")
const error_txt = document.getElementById("error_txt")
const select_version = document.getElementById("version_menu")
const changeLog_txt = document.getElementById("changeLog_main")
// Buttons for game board
const roll_btn = document.getElementById('roll_action')
const trade_btn = document.getElementById("trade_action")
const any_btn = document.getElementById("any_action")
const buy_btn = document.getElementById("buy_action")
const sell_btn = document.getElementById("sell_action")
const pay_btn = document.getElementById("pay_action")
const cell_house = document.getElementById("cell_houses")
const turn_text = document.getElementById("player_turn")
const bankrupt_btn = document.getElementById("bankrupt_btn")
// Dice Img
const dice1_img = document.getElementById("dice1")
const dice2_img = document.getElementById("dice2")
// The player class
class Player {
    constructor(name, color, spot, id, money, jailed, props, ooj, bankrupt) {
        this.name = name
        this.color = color
        this.spot_id = spot
        this.player_id = id
        this.money = money
        this.isJailed = jailed
        this.properties = props;
        this.out_of_jail_cards = ooj
        this.bankrupt = bankrupt
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
    // Adds to the players' money amount
    add_player_money(amount) {
        this.money += amount
    }
    // Removes from the players' money amount
    remove_player_money(amount) {
        this.money -= amount
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
        this.properties[property_id] = {"name": propData[property_id]['name'],  "houses": 0, "mortgage": false}
    }
    add_player_properties_manual(property_id, name, houses, mortgage) {
        this.properties[property_id] = {"name": name,  "houses": houses, "mortgage": mortgage}
    }
    // Removes to the players' properties
    remove_player_properties(property_id) {
        delete this.properties[property_id]
    }

    // This will add the icon for the house
    add_house_icon(property_id, house) {
        let cell_container = document.getElementById("cell_"+property_id.toString()+"_housing")
        if (cell_container == null) {
            cell_container = document.createElement("div")
            cell_container.id = "cell_"+property_id.toString()+"_housing"
            cell_house.appendChild(cell_container)
        }
        cell_container = document.getElementById("cell_"+property_id.toString()+"_housing")
        // if the cell Container exist then it will just add to it
        if (cell_container != null) {
            var new_house = document.createElement("canvas")
            new_house.id="cell_"+property_id.toString()+"_house_"+(this.properties[property_id]['houses']-1).toString()
            // Checks if the axis is x or y
            // Top and Bottom Axis
            if ([2,4,7,8,10,22,24,25,27,28,30].includes(parseInt(property_id))) {
                new_house.style = "top:"+propData[property_id]['house_placement']['axis'].toString()+"px;left:"+propData[property_id]['house_placement']['left'][house].toString()+"px;"
            } else if ([12,14,15,19,20,32,33,35,38,39].includes(parseInt(property_id))) { // Left and Right Axis
                new_house.style = "left:"+propData[property_id]['house_placement']['axis'].toString()+"px;top:"+propData[property_id]['house_placement']['left'][house].toString()+"px;"
            }
            // Makes the className hotel if it has more than 4 properties
            if (this.properties[property_id]['houses'] == 5) {
                new_house.className = "hotel"
                cell_container.innerHTML = "" // Removes all the other houses
            } else {
                new_house.className = "house"
            }
            // Adds the house to the cell Container
            cell_container.appendChild(new_house)
        }
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
        let cell_container = document.getElementById("cell_"+property_id.toString()+"_housing")
        cell_container.innerHTML = "" // Removes all cell icons
        // Adds The houses icon back
        for (var i=0; i < this.properties[property_id]['houses']; i++) {
            this.add_house_icon(property_id, i)
        }
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
            if (ooj_card == "Community Chest") {
                chest_deck[chest_deck.length] = ooj_card
            } else if (ooj_card == "Chance") {
                chance_deck[chance_deck.length] = ooj_card
            } else {
                console.error("ooj_card origin was not found: "+ooj_card)
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
}
// This will load the google sheets API
gapi.load('client', initClient);
  function initClient() {
    gapi.client.init({
      apiKey: 'AIzaSyCc1rCgGDo-tSNlYNcSCfVtKH95opWPrxc',
      clientId: '509853566509-ni4ai4rl0qj4ogdcvk5lv5pteia5f8m1.apps.googleusercontent.com',
      discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
      scope: 'https://www.googleapis.com/auth/spreadsheets',
    }).then(function () {
      console.log("Loaded The Sheet")
    });
  }

// Define the spreadsheet ID and range
const spreadsheetId = '18VB76xchUiTxlHybLEsIiZ1c_I1Lb6ZXh0hyPpuxyK8';
const range = 'Sheet1';

// Data to write
const data = [
  ["Data 1", "Data 2", "Data 3"],
  ["More data 1", "More data 2", "More data 3"]
];

// Call the Google Sheets API to update the data
gapi.client.sheets.spreadsheets.values.update({
  spreadsheetId: spreadsheetId,
  range: range,
  valueInputOption: 'RAW',
  resource: {
    values: data
  }
}).then(function (response) {
  console.log("Data written to Google Sheets:", response);
}, function (error) {
  console.error("Error writing data:", error);
});

// Main Game Functions \\
// Shuffles given arrays
// Link: https://stackoveflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
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

// This will add what is happening on the board through the on screen textbox
function message_text_box(message, classType) {
    var actionBox = document.getElementById("action_txt")
    var text = document.createElement("div")
    text.innerHTML = "- "+message+""
    if (classType != undefined) {
        text.className = classType
    }
    actionBox.appendChild(text)
    // Scroll to the bottom of the text container
    actionBox.scrollTop = actionBox.scrollHeight;
}

// Updates all the money display labels
function update_money_display() {
    // Sets the money containers to the right color and text
    for (var i=0; i < playerAmount; i++) {
        var setMoneyContainer = document.getElementById("player"+(i+1)+"_money")
        setMoneyContainer.innerHTML = "<br>"+player_list[i].get_player_name()+":<br>---------<br>$"+player_list[i].get_player_money().toString()
    }
}

// Updates all game information text
function update_game_text() {
    document.getElementById("house_text").innerHTML = "Houses Left:<br>"+houses.toString()
    document.getElementById("hotel_text").innerHTML = "Hotels Left:<br>"+hotels.toString()
    document.getElementById("freeParking_text").innerHTML = "Cash In Free Parking: $"+freeParking_cash.toString() 
}

// Updates all property tags 
function update_all_prop_tags() {
    var prop_keys = Object.keys(propData)
    for (var i=0; i < prop_keys.length; i++) {
        if (propData[i]["property_data"]["by"] !== null) { // Checks if the property is buyable
            var cell_tag = document.getElementById("cell_"+i.toString()+"_tag")
            cell_tag.style.backgroundColor = player_list[propData[i]["property_data"]["by"]].get_player_color()
            cell_tag.firstChild.innerHTML = "Owner: "+player_list[propData[i]["property_data"]["by"]].get_player_name()
        }
    }
}

// Other Menus \\
// This will open up the trading menu
function open_trade(player) {
    game_board.style.display = "none" // hides the board
    trade_menu.style.display = "block" // Shows the trade menu

    // Gets the needed elements for the LEFT player
    var trader_name = document.getElementById("player_name_left")
    var trader_prop_input = document.getElementById("player_props_left")
    var trader_prop_add_btn = document.getElementById("prop_add_btn_left")
    var trader_prop_sub_btn = document.getElementById("prop_sub_btn_left")
    var trader_cash_input = document.getElementById("cash_input_left")
    var trader_cash_add_btn = document.getElementById("cash_add_btn_left")
    var trader_cash_sub_btn = document.getElementById("cash_sub_btn_left")
    var trader_ooj_input = document.getElementById("player_ooj_left")
    var trader_ooj_add_btn = document.getElementById("ooj_add_btn_left")
    var trader_ooj_sub_btn = document.getElementById("ooj_sub_btn_left")
    var trader_giving_props = document.getElementById("player_giving_props_left")
    var trader_total_text = document.getElementById("total_value_left")

    // Functions that both sides will use
    // Updates both total_values
    var update_totals = function() {
        trader_total_text.textContent = "Total Value: $"+(left_items["cash"]+left_items["prop_cash"]).toString()
        other_total_text.textContent = "Total Value: $"+(right_items["cash"]+right_items["prop_cash"]).toString()
    }
    trader_name.textContent = player_list[player].get_player_name() // Make it the player who turn it is // Makes 
    
    // LEFT side trading variables
    var left_items = {"properties": [], "prop_cash": 0,"cash": 0, "ooj": []}
    var left_property = player_list[player].get_player_properties()
    var left_cash = player_list[player].get_player_money()
    var left_ooj = player_list[player].get_player_ooj()

    // Adds all the properties for the LEFT side
    var prop_keys = Object.keys(left_property) 
    if (prop_keys.length > 0) { // If the player has no properties
        for (var i=0; i < prop_keys.length; i++) { // Adds all the properties to LEFT side
            var prop_opt = document.createElement("option")
            prop_opt.id = "property_opt_"+prop_keys[i]
            prop_opt.value = prop_keys[i]
            prop_opt.textContent = propData[prop_keys[i]]["name"]
            trader_prop_input.appendChild(prop_opt)
        }
    } else {
        var prop_opt = document.createElement("option")
        prop_opt.value = null
        prop_opt.textContent = "No Properties"
        trader_prop_input.appendChild(prop_opt)
    }

    // Adds all the ooj cards for the LEFT side
    if (left_ooj.length > 0) {
        for (var i=0; i < left_ooj.length; i++) {
            var ooj_opt = document.createElement("option")
            ooj_opt.id = "ooj_left_"+left_ooj[i]
            ooj_opt.value = left_ooj[i]
            ooj_opt.textContent = left_ooj[i]
            trader_ooj_input.appendChild(ooj_opt)
        }
    } else {
        var ooj_opt = document.createElement("option")
        ooj_opt.value = "null"
        ooj_opt.textContent = "No Cards"
        trader_ooj_input.appendChild(ooj_opt)
    }
    // Sets the max cash input
    trader_cash_input.max = left_cash

    // Button Functions for LEFT side
    var trader_prop_add_funct = function() { // Property Adding btn
        if ((left_items["properties"].includes(trader_prop_input.value) == false) && (trader_prop_input.value !== "null")) { // Checks if the selected property isn't the default value
            document.getElementById("property_opt_"+trader_prop_input.value).style.font.color = "green"
            left_items["properties"].push(trader_prop_input.value)
            // Creates the prop element for the list of removed props
            var prop_container = document.createElement("div")
            prop_container.id = "prop_"+(trader_prop_input.value).toString()
            prop_container.className = "info_prop"
            trader_giving_props.appendChild(prop_container)
            // Creates the prop color box
            prop_container = document.getElementById("prop_"+(trader_prop_input.value).toString())
            var prop_color = document.createElement("canvas")
            prop_color.id = "prop_color_"+trader_prop_input.value
            prop_color.className = "prop_color"
            prop_color.width = "20"
            prop_color.height = "20"
            prop_color.style = "background-color:"+propData[trader_prop_input.value]["property_data"]["color"]+";top:"+((left_items["properties"].length-1)*30)+"px;"
            prop_container.appendChild(prop_color)
            // Makes the Prop Name
            var prop_name = document.createElement("div")
            prop_name.id = "prop_name_"+trader_prop_input.value
            prop_name.className = "prop_name"
            prop_name.textContent = "- "+propData[trader_prop_input.value]["name"]
            prop_name.style = "top:"+((left_items["properties"].length-1)*30)+"px;"
            prop_container.appendChild(prop_name)
            left_items["prop_cash"] += propData[trader_prop_input.value]["property_cost"]
            update_totals()
        }
    }
    var trader_prop_sub_funct = function() { // Property Removing btn
        if (left_items["properties"].includes(trader_prop_input.value)) { // If the property has been added to the trade
            document.getElementById("property_opt_"+trader_prop_input.value).style.font.color = "black"
            // Removes The property
            document.getElementById("prop_"+trader_prop_input.value).remove()
            left_items["prop_cash"] -= propData[trader_prop_input.value]["property_cost"]
            left_items["properties"].splice(left_items["properties"].indexOf(trader_prop_input.value), 1) // Removes the 
            // Updates the list
            for (var i=0; i < left_items["properties"].length; i++) {
                var canvas_elm = document.getElementById("prop_color_"+left_items["properties"][i])
                canvas_elm.style = "background-color:"+propData[left_items["properties"][i]]["property_data"]["color"]+";top:"+((i)*30).toString()+"px;"
                var name_elm = document.getElementById("prop_name_"+left_items["properties"][i])
                name_elm.style = "top:"+((i)*30).toString()+"px;"
            }
        }
        update_totals()
    }
    var trader_cash_add_funct = function() { // Cash Adding btn
        if ((trader_cash_input.value >= 0) && (trader_cash_input.value <= left_cash)) { // Checks if the cash input can be added
            left_items["cash"] += parseInt(trader_cash_input.value)
            left_cash -= parseInt(trader_cash_input.value)
        }
        trader_cash_input.value = 0
        update_totals()
    }
    var trader_cash_sub_funct = function() { // Cash Removing btn
        if ((trader_cash_input.value >= 0) && (trader_cash_input.value <= left_items["cash"])) { // Checks if the cash input can be added
            left_items["cash"] -= parseInt(trader_cash_input.value)
            left_cash += parseInt(trader_cash_input.value)
        }
        trader_cash_input.value = 0
        update_totals()
    }
    var trader_ooj_add_funct = function() { // ooj Adding btn
        if (left_items["ooj"].includes(trader_ooj_input.value) == false) { // Checks if the player hasn't added the chance/chest cards
            left_ooj.splice(left_ooj.indexOf(trader_ooj_input.value), 1)
            left_items["ooj"].push(trader_ooj_input.value)
            document.getElementById("left_"+trader_ooj_input.value).checked = true
            left_items["prop_cash"] += 50
        }
        update_totals()
    }
    var trader_ooj_sub_funct = function() { // ooj Removing btn
        if (left_items["ooj"].includes(trader_ooj_input.value)) { // Checks if the player hasn't added the chance/chest cards
            left_items["ooj"].splice(left_items["ooj"].indexOf(trader_ooj_input.value), 1)
            left_ooj.push(trader_ooj_input.value)
            document.getElementById("left_"+trader_ooj_input.value).checked = false
            left_items["prop_cash"] -= 50
        }
        update_totals()
    } 
    // Makes the Trader buttons interactable
    trader_prop_add_btn.addEventListener("click", trader_prop_add_funct)
    trader_prop_sub_btn.addEventListener("click", trader_prop_sub_funct)
    trader_cash_add_btn.addEventListener("click", trader_cash_add_funct)
    trader_cash_sub_btn.addEventListener("click", trader_cash_sub_funct)
    trader_ooj_add_btn.addEventListener("click", trader_ooj_add_funct)
    trader_ooj_sub_btn.addEventListener("click", trader_ooj_sub_funct)
    // RIGHT SIDE
    // Gets the needed elements for the RIGHT player
    var other_name = document.getElementById("player_name_right")
    var other_prop_input = document.getElementById("player_props_right")
    var other_prop_add_btn = document.getElementById("prop_add_btn_right")
    var other_prop_sub_btn = document.getElementById("prop_sub_btn_right")
    var other_cash_input = document.getElementById("cash_input_right")
    var other_cash_add_btn = document.getElementById("cash_add_btn_right")
    var other_cash_sub_btn = document.getElementById("cash_sub_btn_right")
    var other_ooj_input = document.getElementById("ooj_right")
    var other_ooj_add_btn = document.getElementById("ooj_add_btn_right")
    var other_ooj_sub_btn = document.getElementById("ooj_sub_btn_right")
    var other_giving_props = document.getElementById("player_giving_props_right")
    var other_total_text = document.getElementById("total_value_right")
    var right_items = {"properties": [], "prop_cash": 0,"cash": 0, "ooj": []}

    // Creates the Select Player.... Option
    var sel_opt = document.createElement("option")
    sel_opt.value="null"
    sel_opt.textContent = "Select Player...."
    other_name.appendChild(sel_opt)

    // Adds all the player names to the right Select
    for (var i=0; i < player_list.length; i++) {
        if (player_list[i].get_player_id() !== player_list[player].get_player_id()) {
            var player_opt = document.createElement("option")
            player_opt.value = i
            player_opt.textContent = player_list[i].get_player_name()
            other_name.appendChild(player_opt)
        }
    }
    // Removes the eventlisteners to stop problems
    other_prop_add_btn.removeEventListener("click", other_prop_add_funct)
    other_prop_sub_btn.removeEventListener("click", other_prop_sub_funct)
    other_cash_add_btn.removeEventListener("click", other_cash_add_funct)
    other_cash_sub_btn.removeEventListener("click", other_cash_sub_funct)
    other_ooj_add_btn.removeEventListener("click", other_ooj_add_funct)
    other_ooj_sub_btn.removeEventListener("click", other_ooj_sub_funct)
        
    // Button Functions for right side
    var other_prop_add_funct = function() { // Property Adding btn
        if ((right_items["properties"].includes(other_prop_input.value) == false) && (other_prop_input.value !== "null")) { // Checks if the selected property isn't the default value
            document.getElementById("property_opt_"+other_prop_input.value).style.font.color = "green"
            right_items["properties"].push(other_prop_input.value)
            // Creates the prop element for the list of added props
            var prop_container = document.createElement("div")
            prop_container.id = "prop_"+(other_prop_input.value).toString()
            prop_container.className = "info_prop"
            other_giving_props.appendChild(prop_container)
            // Creates the prop color box
            prop_container = document.getElementById("prop_"+(other_prop_input.value).toString())
            var prop_color = document.createElement("canvas")
            prop_color.id = "prop_color_"+other_prop_input.value
            prop_color.className = "prop_color"
            prop_color.width = "20"
            prop_color.height = "20"
            prop_color.style = "background-color:"+propData[other_prop_input.value]["property_data"]["color"]+";top:"+((right_items["properties"].length-1)*30)+"px;"
            prop_container.appendChild(prop_color)
            // Makes the Prop Name
            var prop_name = document.createElement("div")
            prop_name.id = "prop_name_"+other_prop_input.value
            prop_name.className = "prop_name"
            prop_name.textContent = "- "+propData[other_prop_input.value]["name"]
            prop_name.style = "top:"+((right_items["properties"].length-1)*30)+"px;"
            prop_container.appendChild(prop_name)
            right_items["prop_cash"] += propData[other_prop_input.value]["property_cost"]
            update_totals()
        }
    }
    var other_prop_sub_funct = function() { // Property Removing btn
        if (right_items["properties"].includes(other_prop_input.value)) { // If the property has been added to the trade
            document.getElementById("property_opt_"+other_prop_input.value).style.font.color = "black"
            // Removes The property
            document.getElementById("prop_"+other_prop_input.value).remove()
            right_items["prop_cash"] -= propData[other_prop_input.value]["property_cost"]
            right_items["properties"].splice(right_items["properties"].indexOf(other_prop_input.value), 1) // Removes the 
            // Updates the list
            for (var i=0; i < right_items["properties"].length; i++) {
                var canvas_elm = document.getElementById("prop_color_"+right_items["properties"][i])
                canvas_elm.style = "background-color:"+propData[right_items["properties"][i]]["property_data"]["color"]+";top:"+((i)*30).toString()+"px;"
                var name_elm = document.getElementById("prop_name_"+right_items["properties"][i])
                name_elm.style = "top:"+((i)*30).toString()+"px;"
            }
        }
        update_totals()
    }
    var other_cash_add_funct = function() { // Cash Adding btn
        if ((other_cash_input.value >= 0) && (other_cash_input.value <= right_cash)) { // Checks if the cash input can be added
            right_items["cash"] += parseInt(other_cash_input.value)
            right_cash -= parseInt(other_cash_input.value)
        }
        other_cash_input.value = 0
        update_totals()
    }
    var other_cash_sub_funct = function() { // Cash Removing btn
        if ((other_cash_input.value >= 0) && (other_cash_input.value <= right_items["cash"])) { // Checks if the cash input can be added
            right_items["cash"] -= parseInt(other_cash_input.value)
            right_cash += parseInt(other_cash_input.value)
        }
        other_cash_input.value = 0
        update_totals()
    }
    var other_ooj_add_funct = function() { // ooj Adding btn
        if (right_items["ooj"].includes(other_ooj_input.value) == false) { // Checks if the player hasn't added the chance/chest cards
            right_ooj.splice(right_ooj.indexOf(other_ooj_input.value), 1)
            right_items["ooj"].push(other_ooj_input.value)
            document.getElementById("right_"+other_ooj_input.value).checked = true
            right_items["prop_cash"] += 50
        }
        update_totals()
    }
    var other_ooj_sub_funct = function() { // ooj Removing btn
        if (right_items["ooj"].includes(other_ooj_input.value)) { // Checks if the player hasn't added the chance/chest cards
            right_items["ooj"].splice(right_items["ooj"].indexOf(other_ooj_input.value), 1)
            right_ooj.push(other_ooj_input.value)
            document.getElementById("right_"+other_ooj_input.value).checked = false
            right_items["prop_cash"] -= 50
        }
        update_totals()
    } 
    // Makes the other buttons interactable
    other_prop_add_btn.addEventListener("click", other_prop_add_funct)
    other_prop_sub_btn.addEventListener("click", other_prop_sub_funct)
    other_cash_add_btn.addEventListener("click", other_cash_add_funct)
    other_cash_sub_btn.addEventListener("click", other_cash_sub_funct)
    other_ooj_add_btn.addEventListener("click", other_ooj_add_funct)
    other_ooj_sub_btn.addEventListener("click", other_ooj_sub_funct)
    // Confirm and cancel buttons
    var left_confirm = document.getElementById("left_player_confirm")
    var cancel_btn = document.getElementById("cancel_trade")
    var right_confirm = document.getElementById("right_player_confirm")
    var left_confirm_bool = false
    var right_confirm_bool = false
    // cancel_btn
    var cancel_funct = function() {
        game_board.style = "display: block;" // shows the board
        trade_menu.style= "display: none;" // hides the trade menu
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
        document.getElementById("right_Community Chest").checked = false
        document.getElementById("right_Chance").checked = false
        document.getElementById("left_Community Chest").checked = false
        document.getElementById("left_Chance").checked = false
        
    }
    cancel_btn.addEventListener("click", cancel_funct)
    // Checks if both players confirmed the trade when called
    var check_confirm_bool = function() {
        if ((left_confirm_bool == true) && (right_confirm_bool == true)) { // If both players did confirm
            for (var i=0; i < left_items["properties"].length; i++) { // Adds the properties from the left player to the right player
                player_list[player].remove_player_properties(left_items["properties"][i])
                player_list[other_name.value].add_player_properties(left_items["properties"][i])
                propData[left_items["properties"][i]]["property_data"]["by"] = other_name.value
            }
            for (var i=0; i < right_items["properties"].length; i++) { // Adds the properties from the right player to the left player
                player_list[other_name.value].remove_player_properties(right_items["properties"][i])
                player_list[player].add_player_properties(right_items["properties"][i])
                propData[right_items["properties"][i]]["property_data"]["by"] = current_turn
            }
            for (var i=0; i < left_items["ooj"].length; i++) { // Adds the ooj from the left player to the right player
                player_list[player].remove_player_ooj(left_items["ooj"][i])
                player_list[other_name.value].add_player_ooj(left_items["ooj"][i])
            }
            for (var i=0; i < right_items["ooj"].length; i++) { // Adds the ooj from the right player to the left player
                player_list[other_name.value].remove_player_ooj(right_items["ooj"][i])
                player_list[player].add_player_ooj(right_items["ooj"][i])
            }
            player_list[player].remove_player_money(left_items["cash"]) // Removes the Cash left player gave
            player_list[player].add_player_money(right_items["cash"]) // Adds the Cash right player gave
            player_list[other_name.value].remove_player_money(right_items["cash"]) // Removes the Cash right player gave
            player_list[other_name.value].add_player_money(left_items["cash"]) // Adds the Cash left player gave
            right_confirm_bool = false
            left_confirm_bool = false
            update_money_display()
            update_all_prop_tags()
            cancel_funct()
        }
    }
    // left_confirm btn
    left_confirm.textContent = player_list[player].get_player_name()+" Confirm"
    var left_con_funct = function() { // if the player confirms
        trader_prop_input.disabled = "disabled"
        trader_prop_add_btn.disabled = "disabled"
        trader_prop_sub_btn.disabled = "disabled"
        trader_cash_input.disabled = "disabled"
        trader_cash_add_btn.disabled = "disabled"
        trader_cash_sub_btn.disabled = "disabled"
        trader_ooj_input.disabled = "disabled"
        trader_ooj_add_btn.disabled = "disabled"
        trader_ooj_sub_btn.disabled = "disabled"
        left_confirm.removeEventListener("click", left_con_funct)
        left_confirm.addEventListener("click", left_uncon_funct)
        left_confirm_bool = true
        left_confirm.textContent = player_list[player].get_player_name()+" Un-Confirm"
        check_confirm_bool()
    }
    var left_uncon_funct = function() { // if the player un-confirms
        trader_prop_input.disabled = ""
        trader_prop_add_btn.disabled = ""
        trader_prop_sub_btn.disabled = ""
        trader_cash_input.disabled = ""
        trader_cash_add_btn.disabled = ""
        trader_cash_sub_btn.disabled = ""
        trader_ooj_input.disabled = ""
        trader_ooj_add_btn.disabled = ""
        trader_ooj_sub_btn.disabled = ""
        left_confirm.removeEventListener("click", left_uncon_funct)
        left_confirm.addEventListener("click", left_con_funct)
        left_confirm.textContent = player_list[player].get_player_name()+" Confirm"
        left_confirm_bool = false
    }
    left_confirm.addEventListener("click", left_con_funct)
    var right_con_funct = function() { // if the player confirms
        other_prop_input.disabled = "disabled"
        other_prop_add_btn.disabled = "disabled"
        other_prop_sub_btn.disabled = "disabled"
        other_cash_input.disabled = "disabled"
        other_cash_add_btn.disabled = "disabled"
        other_cash_sub_btn.disabled = "disabled"
        other_ooj_input.disabled = "disabled"
        other_ooj_add_btn.disabled = "disabled"
        other_ooj_sub_btn.disabled = "disabled"
        right_confirm.removeEventListener("click", right_con_funct)
        right_confirm.addEventListener("click", right_uncon_funct)
        if (other_name.value !== "null") {
            right_confirm.textContent = player_list[other_name.value].get_player_name()+" Un-Confirm"
            right_confirm_bool = true
            check_confirm_bool()
        }
    }
    var right_uncon_funct = function() { // if the player un-confirms
        other_prop_input.disabled = ""
        other_prop_add_btn.disabled = ""
        other_prop_sub_btn.disabled = ""
        other_cash_input.disabled = ""
        other_cash_add_btn.disabled = ""
        other_cash_sub_btn.disabled = ""
        other_ooj_input.disabled = ""
        other_ooj_add_btn.disabled = ""
        other_ooj_sub_btn.disabled = ""
        right_confirm.removeEventListener("click", right_uncon_funct)
        right_confirm.addEventListener("click", right_con_funct)
        right_confirm.textContent = player_list[other_name.value].get_player_name()+" Confirm"
        right_confirm_bool = false
    }
    right_confirm.addEventListener("click", right_con_funct)
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
        document.getElementById("right_Community Chest").checked = false
        document.getElementById("right_Chance").checked = false
        if (other_name.value !== "null") {
            // right_confirm
            right_confirm.textContent = player_list[(other_name.value).toString()].get_player_name()+" Confirm"
            // RIGHT side variables
            right_items = {"properties": [], "prop_cash": 0,"cash": 0, "ooj": []}
            right_property = player_list[other_name.value].get_player_properties()
            right_cash = player_list[other_name.value].get_player_money()
            right_ooj = player_list[other_name.value].get_player_ooj()

            // Adds all the properties for the right side 
            var right_keys = Object.keys(right_property)
            if (right_keys.length > 0) { // If the player has no properties
                for (var i=0; i < right_keys.length; i++) { // Adds all the properties to right side
                    var prop_opt = document.createElement("option")
                    prop_opt.id = "property_opt_"+right_keys[i]
                    prop_opt.value = right_keys[i]
                    prop_opt.textContent = propData[right_keys[i]]["name"]
                    other_prop_input.appendChild(prop_opt)
                }
            } else {
                var prop_opt = document.createElement("option")
                prop_opt.value = null
                prop_opt.textContent = "No Properties"
                other_prop_input.appendChild(prop_opt)
            }

            // Adds all the ooj cards for the right side
            if (right_ooj.length > 0) {
                for (var i=0; i < right_ooj.length; i++) {
                    var ooj_opt = document.createElement("option")
                    ooj_opt.id = "ooj_right_"+right_ooj[i]
                    ooj_opt.value = right_ooj[i]
                    ooj_opt.textContent = right_ooj[i]
                    other_ooj_input.appendChild(ooj_opt)
                }
            } else {
                var ooj_opt = document.createElement("option")
                ooj_opt.value = null
                ooj_opt.textContent = "No Cards"
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
    other_name.addEventListener("change", other_change)
    left_uncon_funct() // This will enable all the items for the left side after a trade
}

// This will open the managing property Menu
function open_manager(player) {
    game_board.style.display = "none" // Hides the board
    manage_menu.style.display = "block" // Shows the manage prop menu
    // This will add all div and props
    var propData_keys = Object.keys(propData)
    var prop_keys = Object.keys(player_list[player].get_player_properties())
    var all_prop = document.getElementById("all_prop")
    for (var i=0; i < prop_keys.length; i++) { // Goes through all the players properties and places them on the board
        if (propData_keys.includes(prop_keys[i])) { 
            var propGroup_amount = manage_menu.getElementsByClassName("prop_container").length // Amount of prop groups
            var elm = document.getElementById(propData[prop_keys[i]]["property_data"]["color"])
            if (elm == null) { // Creates the div if it does exist
                var new_elm = document.createElement("div")
                new_elm.id = propData[prop_keys[i]]["property_data"]["color"]
                new_elm.className = "prop_container"
                new_elm.style = "top:"+(10+(100*(propGroup_amount))).toString()+"px;"
                all_prop.appendChild(new_elm)
            }
            // This makes the elements inside the containers
            elm = document.getElementById(propData[prop_keys[i]]["property_data"]["color"])
            var prop_amount = elm.getElementsByTagName("canvas").length // Gets the amount of properties in that group
            var cell_contain = document.createElement("div")
            cell_contain.id = "manage_cell_"+prop_keys[i]
            // Color box
            let new_color = document.createElement("canvas")
            
            new_color.id="cell_"+prop_keys[i]+"_color"
            new_color.className = "prop_color"
            new_color.width = "20"
            new_color.height = "20"
            new_color.style = "background-color:"+propData[prop_keys[i]]["property_data"]["color"]+";top:"+(30*prop_amount).toString()+"px;"
            cell_contain.appendChild(new_color)
            // Text Box
            let new_text = document.createElement("div")
            new_text.textContent = "- "+propData[prop_keys[i]]["name"]+" "
            new_text.className = "prop_name"
            new_text.style = "top:"+(30*prop_amount).toString()+"px;"
            const new_buy = document.createElement("button")
            const new_sell = document.createElement("button")
            new_buy.id="buy_"+prop_keys[i]
            new_sell.id="sell_"+prop_keys[i]
            // This will update the button text
            var update_text = function(id) { 
                let new_buy = document.getElementById("buy_"+id)
                let new_sell = document.getElementById("sell_"+id)
                if (player_list[player].get_player_properties()[id]["mortgage"] == true) { // if the property is mortgage
                    new_buy.textContent = "Un-mortgage"
                    new_sell.textContent = "Mortgaged"
                    new_buy.disabled = ""
                    new_sell.disabled = "disable"
                } else if ([6,16,26,36].includes(id)) {
                    new_buy.textContent = "Nope"
                    new_sell.textContent = "Mortgage"
                    new_buy.disabled = "disabled"
                    new_sell.disabled = ""
                } else if (player_list[player].get_player_properties()[id]["houses"] == 5) { // If the amount of houses is 5
                    new_buy.textContent = "Has Hotel"
                    new_sell.textContent = "Sell Hotel"
                    new_buy.disabled = "disable"
                    new_sell.disabled = ""
                } else if (player_list[player].get_player_properties()[id]["houses"] == 4) { // If the amount of houses is 4 / if the player is buying a hotel
                    new_buy.textContent = "Buy Hotel"
                    new_sell.textContent = "Sell House"
                    new_buy.disabled = ""
                    new_sell.disabled = ""
                } else if (player_list[player].get_player_properties()[id]["houses"] >= 0) { // Checks how many houses they have
                    new_buy.textContent = "Buy House"
                    new_sell.textContent = "Mortgage"
                    new_buy.disabled = ""
                    new_sell.disabled = ""
                }
            }
            // This will add interaction and puts the elements on screen
            let prop_id = prop_keys[i]
            new_buy.onclick = function() {
                buy_item(prop_id, "house", player)
                update_text(prop_id)
            }
            new_sell.onclick = function() {
                sell_item(prop_id, "house", player)
                update_text(prop_id)
            }
            new_text.appendChild(new_buy)
            new_text.appendChild(new_sell)
            cell_contain.appendChild(new_text)
            elm.appendChild(cell_contain)
            update_text(prop_id)
            // This enables the Exit Button
            let exit_to_game = document.getElementById("exit_back")
            exit_to_game.onclick = function() {
                game_board.style.display = "block"
                manage_menu.style.display = "none"
                while (all_prop.firstChild) { // Removes all the properties so it doesn't overlap with others
                    all_prop.removeChild(all_prop.firstChild)
                }
                check_landed_property()
            }
        }
    }
}

// This will open the auction house if a player auctions a property or if the player goes bankrupt on their own it will auction their items
function open_auction_house(items, type) {
    game_board.style.display = "none" // Hides the Game board
    auction_menu.style.display = "block" // Shows the auction house
    // Auction Action buttons
    var add_1 = document.getElementById("auction_add_1")
    var add_10 = document.getElementById("auction_add_10")
    var add_50 = document.getElementById("auction_add_50")
    var add_100 = document.getElementById("auction_add_100")
    var player_out = document.getElementById("auction_out")
    // Auction house text
    var auction_message_box = document.getElementById("auction_text")
    var name_txt = document.getElementById("auction_prop_name")
    var cost_txt = document.getElementById("auction_prop_cost")
    var value_txt = document.getElementById("auction_value")
    var turn_txt = document.getElementById("auction_player_turn")
    // The Current auction house turn
    var players_in = [] // This is the player ID's
    var auction_value = 10
    var auction_list = []
    var auction_type = type
    if (items instanceof Array) { // Checks if the items arg is a list
        auction_list = items
    } else { // if the items arg is just one thing
        auction_list.push(items)
    }
    
    for (var i=0; i < player_list.length; i++) { // Adds all players that are not bankrupt to the amount
        let auction_money = document.getElementById("auct_player"+(i+1)+"_money")
        if (player_list[i].get_player_bankrupt() == false) { // Checks if the player is not bankrupt
            players_in.push(i)
            // Sets up the cash text
            auction_money.innerHTML = "<br>"+player_list[i].get_player_name()+"<br>-------<br>$"+player_list[i].get_player_money().toString()
        } else {
            auction_money.style.backgroundColor = "black"
        }
    }
    // This updates the text for the next item just incase there is more than one item being auctioned
    while (auction_message_box.firstChild) { // Removes all text in the auction_message_box
        auction_message_box.removeChild(auction_message_box.firstChild)
    }
    // Sets the name and cost of the item
    name_txt.innerHTML = "Item Name:<br>"+propData[auction_list[0]]["name"]
    cost_txt.innerHTML = "Item Value:<br>$"+propData[auction_list[0]]["property_cost"]
    // Enables all the add btns
    add_1.disabled = ""
    add_10.disabled = ""
    add_50.disabled = ""
    add_100.disabled = ""
    const change_auction_turn = function(items, type, remove, start) { // Changes the Auction turn and Sets up most of the things
        // Places the players_in first value into the back
        if (start !== true) { // If the auction didn't start
            players_in.push(players_in[0])
            players_in.splice(0, 1)
        }
        if (remove == true) { // If the player clicked "im_out"
            players_in.splice(players_in.length-1, 1)
        }
        if (players_in.length == 1) { // if everyone is out
            game_board.style.display = "block" // Shows the Game board
            auction_menu.style.display = "none" // Hides the auction house
            
            player_list[parseInt(players_in[0])].remove_player_money(auction_value)
            update_money_display()
            message_text_box("<b>"+player_list[parseInt(players_in[0])].get_player_name()+"</b> Aquired "+propData[items[0]]["name"]+" for $"+auction_value.toString()) 
            // Sets up the new property for the player
            propData[items[0]]["property_data"]["by"] = parseInt(players_in[0])
            var cell_tag = document.getElementById("cell_"+items[0].toString()+"_tag")
            cell_tag.style.backgroundColor = player_list[parseInt(players_in[0])].get_player_color()
            player_list[parseInt(players_in[0])].add_player_properties(parseInt(items[0])) // Gives the player the property
            // If the auction type was the banks auction or just a player auctioning
            if (type == "bank") { // If the bank started the auction
                player_list[parseInt(players_in[0])].add_player_properties_manual( // Adds the players properties
                    parseInt(items[0]),
                    player_list[current_turn].get_player_properties()[parseInt(items[0])]["name"], 
                    player_list[current_turn].get_player_properties()[parseInt(items[0])]["houses"], 
                    player_list[current_turn].get_player_properties()[parseInt(items[0])]["mortgage"]
                )
                // Removes the property and goes again if its more than one property
                auction_list.splice(0, 1) // Removes the current auction property
                if (auction_list.length > 0) { // If the auction_list still has items
                    open_auction_house(auction_list, "bank") // Goes to the next property in the list
                    return
                }
                change_turn() // Goes to the next players turn
            }
            after_roll(null, null, true)
        }
        
        turn_txt.innerHTML = "Current Turn:<br>"+player_list[parseInt(players_in[0])].get_player_name()
        // Enables all add btns
        add_1.disabled = ""
        add_10.disabled = ""
        add_50.disabled = ""
        add_100.disabled = ""
        // Checks if the player can click the button with out going out their current cash
        if (player_list[parseInt(players_in[0])].get_player_money()-auction_value < 1) { // if they can't pay over $1
            add_1.disabled = "disabled"
            add_10.disabled = "disabled"
            add_50.disabled = "disabled"
            add_100.disabled = "disabled"
        } else if (player_list[parseInt(players_in[0])].get_player_money()-auction_value < 10) { // if they can't pay over $10
            add_10.disabled = "disabled"
            add_50.disabled = "disabled"
            add_100.disabled = "disabled"
        } else if (player_list[parseInt(players_in[0])].get_player_money()-auction_value < 50) { // if they can't pay over $50
            add_50.disabled = "disabled"
            add_100.disabled = "disabled"
        } else if (player_list[parseInt(players_in[0])].get_player_money()-auction_value < 100) { // if they can't pay over $100
            add_100.disabled = "disabled"
        }
    }
    // Updates the Item Price 
    const update_auction_value = function() {
        value_txt.innerHTML = "Auction Value:<br>$"+auction_value.toString()
    }
    // Adds text to the auction_auction_message_box
    const send_auction_message = function(message) {
        var txt_elm = document.createElement("div")
        txt_elm.innerHTML = "- "+message+"<br>"
        auction_message_box.appendChild(txt_elm)
        // Scroll to the bottom of the text container
        auction_message_box.scrollTop = auction_message_box.scrollHeight;
    }
    send_auction_message("CONSOLE Added $10")
    // Calls all the items to set up the auctionz
    change_auction_turn(auction_list[0], null, null, true)
    update_auction_value()
    add_1.onclick = function() { // Allows the add_1 but interactable
        auction_value += 1
        send_auction_message(player_list[parseInt(players_in[0])].get_player_name()+" added $1")
        update_auction_value()
        change_auction_turn(auction_list)
    }
    add_10.onclick = function() { // Allows the add_1 but interactable
        auction_value += 10
        send_auction_message(player_list[parseInt(players_in[0])].get_player_name()+" added $10")
        update_auction_value()
        change_auction_turn(auction_list)
    }
    add_50.onclick = function() { // Allows the add_1 but interactable
        auction_value += 50
        send_auction_message(player_list[parseInt(players_in[0])].get_player_name()+" added $50")
        update_auction_value()
        change_auction_turn(auction_list)
    }
    add_100.onclick = function() { // Allows the add_1 but interactable
        auction_value += 100
        send_auction_message(player_list[parseInt(players_in[0])].get_player_name()+" added $100")
        update_auction_value()
        change_auction_turn(auction_list)
    }
    player_out.onclick = function() { // Removes the player if they are out
        send_auction_message(player_list[parseInt(players_in[0])].get_player_name()+" is Out")
        change_auction_turn(auction_list, auction_type, true)
    }
}

// Game Functions \\
// Changes the current turn
function change_turn() {
    dice1_img.style.display = "none"
    dice2_img.style.display = "none"
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
    trade_btn.className = "action_btn_disabled"
    // Disables all buttons
    buy_btn.className = "action_btn_disabled"
    sell_btn.className = "action_btn_disabled"
    pay_btn.className = "action_btn_disabled"
    trade_btn.className = "action_btn_disabled"
    any_btn.className = "action_btn_disabled"
    bankrupt_btn.className = "action_btn_disabled"
    // Sets the Player turn text to the new player
    turn_text.innerHTML = "Current Turn:<br>"+player_list[current_turn].get_player_name()
    doubles = 0 // This sets rolled doubles to 0
    roll_btn.onclick = ""
    set_roll()
}

// When the player is bankrupt
function bankrupt_player(type, data, to_player) {
    // Sets them to bankrupt / Blacks their text
    player_list[current_turn].set_player_bankrupt(true)
    // Checks if all players are bankrupt
    var bankrupt_amount = 0
    var nonBank_name = ""
    for (var i=0; i < player_list.length; i++) {
        if (player_list[i].get_player_bankrupt() == true) { // If that player is bankrupt
            bankrupt_amount += 1
            continue
        } 
        nonBank_name = player_list[i].get_player_name()
    }
    if (bankrupt_amount+1 == player_list.length) { // If there is only one player left
        game_board.style.display = "none"
        winningScreen.style.display = "block"
        var winTxt = document.getElementById("winningText")
        winTxt.innerHTML ="<div class=\"center\" style=\"top:50%; margin-left:auto;\">Congratulations <b>"+nonBank_name+"</b> For Winning</div>"
        return
    }
    if (type == "by_player") { // If the player was bankrupt by another player
        var player_props = Object.keys(player_list[current_turn].get_player_properties())
        for (var i=0; i < player_props.length; i++) { // Goes through every property and give the other player the properties
            // Sells all houses
            var player_house = parseInt(player_list[current_turn].get_player_properties()[parseInt(player_props[i])]["houses"])
            for (var j=0; j < player_house; j++) {
                sell_item(parseInt(player_props[i]),"house", current_turn)
            }
            // Gives the property
            player_list[to_player].add_player_properties_manual(player_props[i], player_list[current_turn].get_player_properties()[parseInt(player_props[i])]["name"], player_list[current_turn].get_player_properties()[parseInt(player_props[i])]["houses"], player_list[current_turn].get_player_properties()[parseInt(player_props[i])]["mortgage"])
            player_list[current_turn].remove_player_properties(parseInt(player_props[i])) // Romves the property from the player
            propData[player_props[i]]["property_data"]["by"] = to_player
            // Updates the cell tag
            var cell_tag = document.getElementById("cell_"+player_props[i].toString()+"_tag")
            cell_tag.style.backgroundColor = player_list[to_player].get_player_color()
        }
        // Gives the money
        player_list[to_player].add_player_money(player_list[current_turn].get_player_money())
        player_list[current_turn].remove_player_money(player_list[current_turn].get_player_money())
        update_money_display()
        // Sends the message
        message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b> has bankrupt to "+player_list[to_player].get_player_name())
        var player_txt = document.getElementById("player"+(current_turn+1)+"_money")
        player_txt.style.backgroundColor = "black"
        // Removes the player marker
        document.getElementById("player"+(current_turn+1)).remove()
        change_turn()
    } else if (type == "by_bank") { // If the player bankrupts themself
        open_auction_house(data, "bank")
        document.getElementById("player"+(current_turn+1)).remove()
    }
}

// Fixes player positions
function fix_all_positions() {
    for (var i=0; i < Object.keys(propData).length; i++) { // Resets all "players_on"
        propData[Object.keys(propData)[i]]["property_data"]["players_on"] = []
    }
    
    for (var i=0; i < player_list.length; i++) { // Goes through all players and fixes the position
        if (player_list[i].get_player_bankrupt() == false) {
            var player_elm = document.getElementById(player_list[i].get_player_id())
            var id_raw = parseInt(player_list[i].get_player_id().replace("player", ""))-1
            propData[player_list[i].get_player_spot_id()]["property_data"]["players_on"].push(id_raw) // Adds the player back to the "players_on" || FIND A BETTER FIX LATER
            player_elm.style.right = propData[player_list[i].get_player_spot_id()]["placement"][propData[player_list[i].get_player_spot_id()]["property_data"]["players_on"].indexOf(id_raw)][0].toString()+"px"
            player_elm.style.top = propData[player_list[i].get_player_spot_id()]["placement"][propData[player_list[i].get_player_spot_id()]["property_data"]["players_on"].indexOf(id_raw)][1].toString()+"px"
        }
    }
    // Changes the players border
    if ([6,16,26,36].includes(player_list[current_turn].get_player_spot_id())) { // If the player is on railroads
        document.getElementById(player_list[current_turn].get_player_id()).style.border = "1px solid white" // Changes the border to white
        return
    }
    document.getElementById(player_list[current_turn].get_player_id()).style.border = "1px solid black" // Changes the border to white
    
}

// The last part of a players' turn
function after_roll(end_jail, player, auctioned) {
    update_all_prop_tags()
    if (end_jail == "out") { // If the player got out so it will disable all buttons except roll
        buy_btn.onclick = "";buy_btn.className = "action_btn_disabled"
        sell_btn.onclick = "";sell_btn.className = "action_btn_disabled"
        pay_btn.onclick = "";pay_btn.className = "action_btn_disabled"
        any_btn.onclick = "";any_btn.className = "action_btn_disabled"
        player_list[player].set_player_spot_id(11)
        propData["11"]["property_data"]["players_on"].push(player)
        fix_all_positions()
        set_roll()
    } else if ((dice1 == dice2) && (doubles != 3)) { // if the player rolled a double it will allow them to roll again
        set_roll()
    } else if ((player_list[current_turn].get_player_isJailed() == true) && (end_jail == null)) { // If the player is jailed during this turn
        player_jailed(current_turn, "old")        
    } else { // If the player did not roll a double
        roll_btn.className = "action_btn"
        roll_btn.textContent = "End Turn"
        roll_btn.onclick = ""
        trade_btn.onclick = ""
        pay_btn.onclick = ""; pay_btn.className = "action_btn_disabled"
        any_btn.onclick = ""
        // This will get rid of the buy/auction button feature if the player auctioned the property
        if (auctioned !== undefined) {
            buy_btn.className = "action_btn_disabled"
            sell_btn.className = "action_btn_disabled"
        }

        roll_btn.onclick = function() {
            change_turn()
        }
        trade_btn.onclick = function() {
            open_trade(current_turn)
        }
        any_btn.onclick = function() {
            open_manager(current_turn)
        }
        any_btn.textContent="Manage"
        trade_btn.className = "action_btn"
        if (Object.keys(player_list[current_turn].get_player_properties()).length > 0) {any_btn.className = "action_btn"} // If the player has any properties it will open the management menu
        bankrupt_btn.onclick = function() { // if the player decides to bankrupt themselfs
            bankrupt_player("by_bank", Object.keys(player_list[current_turn].get_player_properties()))
        }; bankrupt_btn.className = "bankrupt_btn"
    }
}

// When the player passes go
function passed_go() {
    player_list[current_turn].add_player_money(200)
    message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b> has passed/landed on Go, They are awarded $200")
    update_money_display()
}

// Buys the item
function buy_item(location, type, player) {
    // if the player is buying the property
    if (type == "prop") {
        if (player_list[player].get_player_money() >= propData[location]['property_cost']) {
            propData[location]["property_data"]['by'] = player
            player_list[player].add_player_properties(location)
            player_list[player].remove_player_money(propData[location]['property_cost'])
            // Lets the players know
            message_text_box("<b>"+player_list[player].get_player_name()+"</b> bought "+propData[location]['name'])
            // Updates the cell tag to be the color of the player
            var cell_tag = document.getElementById("cell_"+location.toString()+"_tag")
            cell_tag.style.backgroundColor = player_list[player].get_player_color()
            update_money_display()
        } else {
            message_text_box("<b>"+player_list[player].get_player_name()+"</b> does not have enough money")
        }
    // if the player is buying a house/hotel
    } else if (type == "house") {
        if (player_list[player].get_player_properties()[location]['mortgage'] == false) {
            if (player_list[player].get_player_money() >= propData[location]["house_price"]) {
                // Checks if there are enough houses / Hotels
                if ((player_list[player].get_player_properties()[location]['houses'] == 4) && (hotels-1 < 0)) {
                    message_text_box("There are not enough Hotels to buy")
                    return "none"
                } else if ((player_list[player].get_player_properties()[location]['houses'] > 4) && (houses-1 < 0)) {
                    message_text_box("There are not enough Houses to buy")
                    return "none"
                }
                // Gets all the users properties colors and checks if they have the set
                var prop_keys = Object.keys(player_list[player].get_player_properties())
                var prop_list_colors = []
                for (var i=0; i < prop_keys.length; i++) {
                    prop_list_colors.push(propData[prop_keys[i]]['property_data']['color'])
                }
                
                // Checks if the player has the property set
                var location_color = propData[location]['property_data']['color']
                var count_location_color = 0
                // Gets all the properties of the same color
                for (var i=0; i < prop_list_colors.length; i++) {
                    if (prop_list_colors[i] == location_color) {
                        count_location_color += 1
                    }
                }

                // Checks if the prop color is blue / brown
                if ((location_color == "blue") || (location_color == "brown")) {
                    if (count_location_color != 2) {
                        message_text_box("<b>"+player_list[player].get_player_name()+"</b> needs the whole property set to start buying houses")
                        return
                    }
                } else if (location_color == "black") { // Makes sure that housing on railroad properties is impossible
                    return            
                } else if (count_location_color != 3) { // Checks if the players have the whole set
                    message_text_box("<b>"+player_list[player].get_player_name()+"</b> needs the whole property set to start buying houses")
                    return
                }

                // The User buying the house
                if (player_list[player].get_player_properties()[location]['houses'] == 5) {
                    message_text_box("<b>"+player_list[player].get_player_name()+"</b> Can not buy a house on a property that has a hotel already")
                    return
                } else if (player_list[player].get_player_properties()[location]['houses'] == 4) {
                    message_text_box("<b>"+player_list[player].get_player_name()+"</b> bought a Hotel on "+propData[location]['name'])
                    hotels -= 1
                    houses += 4
                } else {
                    message_text_box("<b>"+player_list[player].get_player_name()+"</b> bought a House on "+propData[location]['name'])
                    houses -= 1
                }
                player_list[player].remove_player_money(propData[location]['house_price'])
                player_list[player].add_player_prop_house(location)
                update_money_display()
                update_game_text()
            } else {
                message_text_box("<b>"+player_list[player].get_player_name()+"</b> can not afford to buy a house/hotel on "+propData[location]['name'])
            }
        } else {
            // Checks if the player has the mortgage price 
            var amount = (propData[location]["property_cost"]/10)+propData[location]["property_cost"]
            if (player_list[current_turn].get_player_money() >= amount) {
                // Removes the red line
                var red_line = document.getElementById("cell_"+location.toString()+"_mortgage")
                red_line.remove()
                // Removes from the players money
                player_list[player].remove_player_money(amount)
                player_list[player].set_property_mortgage(location, false) // Sets the property mortgage to false
                update_money_display()
                // Sends the Message
                message_text_box("<b>"+player_list[player].get_player_name()+"</b> Un-mortgage "+propData[location]['name']+" for $"+amount.toString())
            }
        }        
    }
}

// Sells the item
function sell_item(location, type, player) {
    if (type == "house") {
        if (player_list[player].get_player_properties()[location]['mortgage'] == true) { // Checks if the property has been mortgage yet
            message_text_box("<b>"+player_list[player].get_player_name()+"</b> This property is already mortgage")
            return
        } else if (player_list[player].get_player_properties()[location]['houses'] == 0) {// Mortgaging the property
            player_list[player].set_property_mortgage(location, true) // Sets the mortgage to true
            player_list[player].add_player_money(propData[location]['property_cost']/2)
            message_text_box("<b>"+player_list[player].get_player_name()+"</b> has mortgage "+propData[location]['name']+" and recived $"+(propData[location]['property_cost']/2).toString())
            // This will create the mortgage line
            var red_line = document.createElement("canvas")
            var cells = document.getElementById("cell_tags")
            var cell_tag = document.getElementById("cell_"+location.toString()+"_tag")
            red_line.id = "cell_"+location.toString()+"_mortgage"
            // Checks if the property is on the side or in the middle
            if ([2,3,4,5,6,7,8,9,10,22,23,24,25,26,27,28,29,30].includes(parseInt(location))) { // Middle
                red_line.className = "cell_mortgage_mid"
                var top_px = cell_tag.style.top
                red_line.style.top = (parseInt(top_px.replace("px"))+5).toString()+"px"
                red_line.style.left = cell_tag.style.left
            } else if ([12,13,14,15,16,17,18,19,20,32,33,34,35,36,37,38,39,40].includes(parseInt(location))) { // Side
                red_line.className = "cell_mortgage_side"
                var left_px = cell_tag.style.left
                red_line.style.left = (parseInt(left_px.replace("px"))+5).toString()+"px"
                red_line.style.top = cell_tag.style.top
            }
            // Adds the red line on the board and updates the money text
            cells.appendChild(red_line)
            update_money_display()
        } else if (player_list[player].get_player_properties()[location]['houses'] > 0) { // Selling a house
            // Checks if the house being removed is a hotel
            if ((player_list[player].get_player_properties()[location]['houses'] == 5) && (houses-4 >= 0)) {
                hotels += 1
                houses -= 4
            } else {
                houses += 1
            }
            // Sends a message and does all player handling stuff
            message_text_box("<b>"+player_list[player].get_player_name()+"</b> Sold a house/hotel and gained $"+(propData[location]['house_price']/2).toString())
            player_list[player].add_player_money(propData[location]['house_price']/2)
            player_list[player].remove_player_prop_house(location) // Removes the house icon and from the players properties
            update_money_display()
            update_game_text()
        }
    }
}

// If the player has to pay something
function player_pays(amount, to_who) {
    if (to_who == "parking") { // If the player pays and the money goes to the free parking
        freeParking_cash += amount
        player_list[current_turn].remove_player_money(amount)
        update_money_display()
        update_game_text()
    } else if ([0, 1, 2, 3].includes(to_who)) { // If the player pays another player
        message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b> paid <b>"+player_list[to_who].get_player_name()+"</b> $"+amount.toString())
        player_list[current_turn].remove_player_money(amount)
        player_list[to_who].add_player_money(amount)
        update_money_display()
    }
    pay_btn.className = "action_btn_disabled"
}

// Sends the player to jail
function player_jailed(player, type) {
    if (type == "new") { // When the player is sent to jail
        message_text_box("<b>"+player_list[player].get_player_name()+"</b> has been sent to jail.")
        // Adds all the players that are jailed
        var amountJailed = 0
        for (var i=0; i < player_list.length; i++) {
            if (player_list[i].get_player_isJailed() == true) {
                amountJailed += 1
            }
        }
        // Sets the player jail status to true
        player_list[player].set_player_isJailed(true)
        // Moves the player
        player_list[player].set_player_spot_id(0);
        propData["0"]["property_data"]["players_on"].push(player)
        var player_elm = document.getElementById(player_list[player].get_player_id())
        player_elm.style.top = propData["0"]["placement"][amountJailed][1].toString()+"px"
        player_elm.style.left = propData["0"]["placement"][amountJailed][0].toString()+"px"
    } else if (type == "old") { // If the player is still in jail
        // Rolling the player doubles
        roll_btn.className = "action_btn"
        roll_btn.textContent = "Roll Doubles"
        roll_btn.onclick = function() {
            dice1 = Math.floor(Math.random()*6)+1; // Rolls "dice1" Between 1-6
            dice2 = Math.floor(Math.random()*6)+1; // Rolls "dice2" Beteen 1-6
            if (dice1 == dice2) { // If the player rolls a double
                message_text_box("<b>"+player_list[player].get_player_name()+"</b> Has rolled Doubles | "+dice1.toString()+" and a "+dice2.toString())
                player_list[player].set_player_isJailed(false)
                after_roll("out", player)
            } else {
                message_text_box("<b>"+player_list[player].get_player_name()+"</b> Did not roll Doubles | "+dice1.toString()+" and a "+dice2.toString())
                pay_btn.className = "action_btn_disabled"
                after_roll("in")
            }
        }
        // Pay Button
        pay_btn.className = "action_btn"
        pay_btn.textContent = "Pay $50"
        pay_btn.onclick = function() {
            if (player_list[player].get_player_money() >= 50) {
                message_text_box("<b>"+player_list[player].get_player_name()+"</b> Paid $50 to get out of jail")
                player_list[player].set_player_isJailed(false)
                player_list[player].remove_player_money(50)
                dice1 = 0; dice2 = 0; // This is so that they can roll
                after_roll("out", player)
            } else {
                message_text_box("<b>"+player_list[player].get_player_name()+"</b> Does not have enough money")
                return
            }
        }
        // Player uses card
        any_btn.className = "action_btn"
        any_btn.textContent = "Use Get Out Jail card"
        any_btn.onclick = function() { // When the player clicks the button
            if (player_list[player].get_player_ooj().length > 0) { // if the player has any ooj cards
                message_text_box("<b>"+player_list[player].get_player_name()+"</b> Used a get out of jail free card")
                player_list[player].remove_player_ooj()
                player_list[player].set_player_isJailed(false)
                after_roll("out", player)
            } else {
                message_text_box("<b>"+player_list[player].get_player_name()+"</b> does not have a get out of jail free card")
            }
        }
    }
}

// Plays the picked card
function c_cards(card_type) {
    // Checks what card to pull 
    if (card_type == "Community Chest") { // If the Player Lands on Community Chest
        var played_card = chest_deck[0] // Gets the first card from the deck
        if (played_card.includes("out_of_jail") == false) {chest_deck[chest_deck.length] = played_card} // This will put the picked card at the end of the deck if its not a ooj card
        chest_deck.splice(0, 1) // This will delete the first card since it was put at the end of the deck
    } else if (card_type == "Chance") { // If the Player Lands on Chance
        var played_card = chance_deck[0];// Gets the first card from the deck
        if (played_card.includes("out_of_jail") == false) {chance_deck[chance_deck.length] = played_card} // This will put the picked card at the end of the deck if its not a ooj card
        chance_deck.splice(0, 1) // This will delete the first card since it was put at the end of the deck
    }
    player = document.getElementById(player_list[current_turn].get_player_id())
    // Sends message
    message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b>"+cardsData[card_type][played_card]["description"])
    // Sees what card was pick
    if (played_card.includes("advance")) { // If the player advance to another place
        // Removes the player from the old property
        var player_index = propData[player_list[current_turn].get_player_spot_id()]["property_data"]["players_on"].indexOf(current_turn)
        if (player_index !== -1) {
            propData[player_list[current_turn].get_player_spot_id()]["property_data"]["players_on"].splice(player_index, 1)
        }
        // Moves player
        setTimeout(function() { // After 1.5 seconds it will move the player
            var spot_by_spot = setInterval(() => { // Every 250 milliseconds the player will move
                player_list[current_turn].add_player_spot_id(1) 
                // Checks if the player is passing go ( if so then sets there spot to 1)
                if (player_list[current_turn].get_player_spot_id() > 40) {
                    player_list[current_turn].set_player_spot_id(1)
                    passed_go()
                }
                current_spot = player_list[current_turn].get_player_spot_id()
                var spot_placement = propData[current_spot]['property_data']['players_on'].length
                // Gets the player and sets their position
                player = document.getElementById("player"+(current_turn+1).toString())
                player.style.top = propData[current_spot]['placement'][spot_placement][1].toString()+"px"
                player.style.left = propData[current_spot]['placement'][spot_placement][0].toString()+"px"
                fix_all_positions() // This will fix any positioning issues
                // Stops the loop if the player lands on the spot they rolled to
                if (player_list[current_turn].get_player_spot_id() == cardsData[card_type][played_card]['location_id']) {
                    clearInterval(spot_by_spot)
                    propData[current_spot]['property_data']['players_on'].push(current_turn)
                    check_landed_property()
                }
            }, 250);
        }, 1500)
    } else if (played_card.includes("pay_tax")) { // If the player pays a tax
        pay_btn.className = "action_btn"
        pay_btn.textContent = "Pay $"+cardsData[card_type][played_card]["tax_amount"].toString()
        pay_btn.onclick = function() {
            if (player_list[current_turn].get_player_money() >= cardsData[card_type][played_card]["tax_amount"]) {
                player_pays(cardsData[card_type][played_card]["tax_amount"], "parking")
                after_roll()
            } else {
                message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b> does not have enough money")
            }
        }
    } else if (played_card.includes("pay_prop_tax")) { // If the player has to pay property tax
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
            message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b> does not have any houses or hotels")
            after_roll()
            return
        }
        // The total amount the player has to pay
        amount = (total_houses*cardsData[card_type][played_card]["house"]) + (total_hotels*cardsData[card_type][played_card]["hotel"])
        // pay_btn Actions
        pay_btn.className = "action_btn"
        pay_btn.textContent = "$"+amount.toString()

        pay_btn.onclick = function() {
            if (player_list[current_turn].get_player_money() >= amount) { // Checks if the player has enough money
                message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b> Paid $"+amount.toString())
                player_list[current_turn].remove_player_money(amount)
                update_money_display()
                after_roll()
            } else { // If the player does not have enough money
                message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b> Does not have enough money")
            }
        }

    } else if (played_card.includes("out_of_jail")) { // If the player gets a ooj
        player_list[current_turn].add_player_ooj(played_card)
        after_roll()
    } else if (played_card.includes("pay_to_all")) { // player pays all players the amount
        pay_btn.className = "action_btn"
        pay_btn.textContent = "Pay All Players "+cardsData[card_type][played_card]["amount"].toString()
        var amount = 0
        // Occurs when the player clicks the pay_btn
        pay_funct.onclick = function() {
            for (var i=0; i < player_list.length; i++) {
                if (player_list[i].get_player_bankrupt() == false) { // Checks if they are bankrupt
                    if (player_list[i].get_player_id() !== player_list[current_turn].get_player_id()) { // Checks if the player is not the current player
                        player_pays(cardsData[card_type][played_card]["amount"], i)
                    }
                }
            }

        }
    }
}

// When the player lands on a property this will check to see what to do
function check_landed_property() {
    var location = player_list[current_turn].get_player_spot_id(); // Location of the player
    var owned_id = propData[location]["property_data"]['by'] // The ID of the player who owns the property
    // Removes the event listener
    buy_btn.onclick = ""
    sell_btn.onclick = ""
    pay_btn.onclick = ""

    // If the location is buyable and if the property is unowned
    if ((propData[location]['buyable'] == true) && (owned_id == null)) {
        // Enables the buy action 
        buy_btn.className = "action_btn"
        buy_btn.disabled = false
        buy_btn.textContent = "Buy"
        // Enables the Sell action
        sell_btn.className = "action_btn"
        sell_btn.disabled = false
        sell_btn.textContent = "Auction"
        // Sends the message for the property
        message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b> Would you like to buy "+propData[location]['name']+" for $"+propData[location]['property_cost'].toString())
        // Allows the buy to be interacted with
        buy_btn.onclick = function() { // Buys the property
            if (player_list[current_turn].get_player_money() >= propData[location]['property_cost']) {
                buy_item(location, 'prop', current_turn)
                check_landed_property()
                after_roll()
            } else {
                message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b> can not afford this Property")
            }
        }
        sell_btn.onclick = function() { // Starts the auction house
            open_auction_house(location)
        }
        bankrupt_btn.className = "action_btn_disabled"
    
    } else if ((propData[location]['buyable'] == true) && (owned_id == current_turn)) {// If the property is buyable and if owned by the player
        var railroad_ids = [6,16,26,36]
        // Enables the buy action 
        if (propData[location]['property_data']['color'] != "black") {
            buy_btn.className = "action_btn"
        }
        // Checks if the player buys a house or Hotel
        if (player_list[current_turn].get_player_properties()[location]['mortgage'] == true) {
            buy_btn.textContent = "Un-Mortgage"
            buy_btn.className = "action_btn"
        } else if ((player_list[current_turn].get_player_properties()[location]['houses'] < 4) && (propData[location]['property_data']['color'] != "black")) {
            buy_btn.textContent = "Buy House"
        } else if ((player_list[current_turn].get_player_properties()[location]['houses'] == 4) && (propData[location]['property_data']['color'] != "black")) {
            buy_btn.textContent = "Buy Hotel"
        }
        // Enables the Sell action
        if ((player_list[current_turn].get_player_properties()[location]['mortgage'] == false) && (propData[location]['property_data']['color'] != "black")) {
            sell_btn.className = "action_btn"
        }
        // Decides what to have the text for the sell_btn
        if (player_list[current_turn].get_player_properties()[location]['houses'] == 0) {
            sell_btn.textContent = "Mortgage"
            sell_btn.className = "action_btn"
        } else if ((player_list[current_turn].get_player_properties()[location]['houses'] == 5) && (propData[location]['property_data']['color'] != "black")) {
            sell_btn.textContent = "Sell Hotel"
        } else if (player_list[current_turn].get_player_properties()[location]['houses'] < 5) {
            sell_btn.textContent = "Sell House"
        }
        if (player_list[current_turn].get_player_properties()[location]['houses'] < 5) { // Checks to see if the player has 5 houses already
            buy_btn.onclick = function() {
                buy_item(location, 'house', current_turn)
                check_landed_property()
            }
        }
        // Sell button
        sell_btn.onclick = function() {
            sell_item(location, 'house', current_turn)
            check_landed_property()
        }
        if ((railroad_ids.includes(location)) && (player_list[current_turn].get_player_properties()[location]["mortgage"] == false)) { // If the player landed on a railroad they own this will disable the buy button if it not mortgage
            buy_btn.className = "action_btn_disabled"
        } else if ((railroad_ids.includes(location)) && (player_list[current_turn].get_player_properties()[location]["mortgage"] == true)) {
            sell_btn.className = "action_btn_disabled"
        }
        after_roll()
    } else if ((propData[location]['buyable'] == true) && (owned_id != current_turn) && (propData[location]["property_data"]['color'] == "black")) { // This is if the player lands on a railroad they do not own
        if (player_list[owned_id].get_player_properties()[location]['mortgage'] == false) {
            // Checks if the player owned property has other railroads
            var railroad_ids = [6,16,26,36]
            var amount = 0
            for (var i=0; i < railroad_ids.length; i++) {
                if (propData[railroad_ids[i].toString()]["property_data"]["by"] == owned_id) {
                    amount = propData[location]['rent'][i]
                }
            }
            // Sends message
            message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b> owes <b>"+player_list[owned_id].get_player_name()+"</b> $"+amount.toString())
            pay_btn.onclick = function() {
                // Checks if the player has enough to pay
                if (player_list[current_turn].get_player_money() >= amount) {
                    player_pays(amount, owned_id)
                    after_roll()
                } else {
                    message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b> does not have $"+amount.toString())
                }
            }
            // pay_btn setup
            pay_btn.className = "action_btn"
            pay_btn.textContent = "Pay $"+amount.toString()
        } else {
            message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b> does not have to pay since this property is mortgage")
            after_roll()
        }
    } else if ((propData[location]['buyable'] == true) && (owned_id != current_turn)) { // If the property is buyable and if the property is owned by another player
        if (player_list[owned_id].get_player_properties()[location]["mortgage"] == false) { // Checks if the property is mortgage
            if (([13,29].includes(location) == false)) { // If the property is not Electric Company or Water Works
                var amount = propData[location]['rent'][player_list[owned_id].get_player_properties()[location]['houses']] // Amount the player owes
                message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b> owes "+player_list[owned_id].get_player_name()+" $"+amount.toString())
                // Checks if the player has enough to pay if so then it will pay the next player
                pay_btn.onclick = function() {
                    if (player_list[current_turn].get_player_money() >= amount) {
                        player_pays(amount, owned_id)
                        after_roll()
                    } else {
                        message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b> does not have $"+amount.toString())
                    }
                }
                // pay_btn setup
                pay_btn.className = "action_btn"
                pay_btn.textContent = "Pay $"+amount.toString()
                bankrupt_btn.className = "bankrupt_btn"
                bankrupt_btn.onclick = function() {
                    bankrupt_player("by_player", location, owned_id)
                }
            } else { // If the property is Electric Company or Water Works
                var roll_props = [13, 19]
                var times = 0
                // Checks how many roll_props they own
                for (var i=0; i < roll_props.length; i++) {
                    if (Object.keys(player_list[owned_id].get_player_properties()).includes(roll_props[i].toString())) {
                        times = propData[location]['rent'][i]
                    }
                }
                // Does the messaging and math
                var amount = (dice1+dice2)*times
                message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b> owes "+player_list[owned_id].get_player_name()+" $"+amount.toString())
                pay_btn.onclick = function() {
                    if (player_list[current_turn].get_player_money() >= amount) {
                        player_pays(amount, owned_id)
                        after_roll()
                    } else {
                        message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b> does not have $"+amount.toString())
                    }
                }
                // pay_btn setup
                pay_btn.className = "action_btn"
                pay_btn.textContent = "Pay $"+amount.toString()
                bankrupt_btn.className = "bankrupt_btn"
                bankrupt_btn.onclick = function() {
                    bankrupt_player("by_player", location, owned_id)
                }
            }
        } else { // If the property is mortgage
            message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b> does not have to pay since this property is mortgage")
            after_roll()
        }
    } else if (propData[location]['buyable'] == false) { // if the location is not buyable
        buy_btn.className = "action_btn_disabled"
        sell_btn.className = "action_btn_disabled"
        if ([3, 18, 34].includes(location)) {// if the player lands on Community Chest
            c_cards("Community Chest")
        } else if ([9,23,37].includes(location)) {// if the player lands on chance
            c_cards("Chance")
        } else if (location == 1) { // If player lands on go
            after_roll()
        } else if (location == 5) { // If the player lands on Income Tax
            message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b> Pay $200")
            pay_btn.className = "action_btn"
            pay_btn.textContent = "Pay $200"
            // Allows the player to pay the amount
            pay_btn.onclick = function() {
                if (player_list[current_turn].get_player_money() >= 200) {
                    player_pays(200, "parking")
                    after_roll()
                } else {
                    message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b> does not have $200")
                }
            } 
        } else if (location == 39) { // If the player lands on Luxury Tax
            message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b> Pay $100")
            pay_btn.className = "action_btn"
            pay_btn.textContent = "Pay $100"
            // Allows the player to pay
            pay_btn.onclick = function() {
                if (player_list[current_turn].get_player_money() >= 100) {
                    player_pays(100, "parking")
                    after_roll()
                } else {
                    message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b> does not have $100")
                }
            }
        } else if (location == 11) {
            message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b> is Just Visiting")
            after_roll()
        } else if (location == 21) { // If the player lands on Free parking
            message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b> gained $"+freeParking_cash.toString()+" for landing on Free Parking")
            player_list[current_turn].add_player_money(freeParking_cash)
            freeParking_cash = 200
            update_money_display()
            update_game_text()
            after_roll()
        } else if (location == 31) { // If the player lands on Go to Jail
            player_jailed(current_turn, "new")
            dice1 = -1; dice2 = -2
            after_roll("no", current_turn)
            return
        }
    }
}

// Sets the roll btn
function set_roll() {
    // Checks if the player is in jail
    if (player_list[current_turn].get_player_isJailed() == true) {
        player_jailed(current_turn, "old")
        return
    }
    // When the player rolls the dice
    roll_btn.textContent = "Roll Dice"
    roll_btn.className = "action_btn"
    // Removes the player from the old property
    var player_index = propData[player_list[current_turn].get_player_spot_id()]["property_data"]["players_on"].indexOf(current_turn)
    if (player_index !== -1) {
        propData[player_list[current_turn].get_player_spot_id()]["property_data"]["players_on"].splice(player_index, 1)
    }

    // Removes and disables all other buttons
    buy_btn.onclick = ""; buy_btn.className = "action_btn_disabled"
    sell_btn.onclick = ""; sell_btn.className = "action_btn_disabled"
    pay_btn.onclick = ""; pay_btn.className = "action_btn_disabled"
    trade_btn.onclick = ""; trade_btn.className = "action_btn_disabled"

    // Makes the roll function
    roll_btn.onclick = function() {
        // Variables for dice animation
        var roll_speed = 250 // The speed the dice rolls
        // Shows the dice
        dice1_img.style.display = "block" // Shows dice1
        dice2_img.style.display = "block" // Shows dice2
        // Disables the roll Button
        roll_btn.className = "action_btn_disabled"
        // Animates the dice roll
        var animate_dice_roll = setInterval(() => { 
            dice1 = Math.floor(Math.random()*6)+1; // Rolls "dice1" Between 1-6
            dice2 = Math.floor(Math.random()*6)+1; // Rolls "dice2" Beteen 1-6
            // Sets the images for dice1 and dice 2
            dice1_img.src = "./diceImg/roll_"+dice1.toString()+".png" // Sets image for dice1
            dice2_img.src = "./diceImg/roll_"+dice2.toString()+".png" // Sets image for dice2
            roll_speed += 250
            // Stops the animation once the roll_speed hits 2500
            if (roll_speed >= 2500) {
                clearInterval(animate_dice_roll)
                console.log(dice1)
                movement = dice1 + dice2; // Adds both dice to see how far the player moves
                message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b> has rolled a "+dice1.toString()+" and a "+dice2.toString())
                // If the player rolls a double
                if (dice1 == dice2) { 
                    doubles += 1
                    if (doubles == 3) {
                        player_list[current_turn].set_player_isJailed(true)
                        message_text_box("<b>"+player_list[current_turn].get_player_name()+"</b> Rolled 3 Doubles and is now being sent to jail")
                        player_jailed(current_turn, "new")
                        dice1 = -1; dice2 = -2
                        after_roll("no", current_turn)
                        return
                    }
                }
                // Moves the player spot to spot
                var i = 0
                var spot_by_spot = setInterval(() => {
                    player_list[current_turn].add_player_spot_id(1) // Every 250 milliseconds the player will move
                    // Checks if the player is passing go ( if so then sets there spot to 1)
                    if (player_list[current_turn].get_player_spot_id() > 40) {
                        player_list[current_turn].set_player_spot_id(1)
                        passed_go()
                    }
                    current_spot = player_list[current_turn].get_player_spot_id()
                    var spot_placement = propData[current_spot]['property_data']['players_on'].length
                    // Gets the player and sets their position
                    player = document.getElementById("player"+(current_turn+1).toString())
                    player.style.top = propData[current_spot]['placement'][spot_placement][1].toString()+"px"
                    player.style.left = propData[current_spot]['placement'][spot_placement][0].toString()+"px"
                    fix_all_positions() // This will fix any positioning issues
                    // Stops the interval if the player moved the correct amount of times
                    i++
                    // Stops the loop if the player lands on the spot they rolled to
                    if (i > movement-1) {
                        clearInterval(spot_by_spot)
                        propData[current_spot]['property_data']['players_on'].push(current_turn)
                        check_landed_property()
                    }
                }, 250);
            }
        }, roll_speed);
    }
}

// Sets up everything that will be used in the game
function set_up_game(player_names, player_colors, starting_cash, bankrupt) {
    if (false) { // Set this to true to enable python scripting
        pyodide.runPython(`
            import os
            def do_something():
                return 'Developement'
            
            print(do_something())
        `);
    }
    main_menu.style.display = "none" // Hides the main menu
    game_board.style.display = "block" // Shows the game
    // Spawns the players
    var playerContainer = document.getElementById('Players')
    for (var i = 0; i < player_names.length; i++) {
        // Creates the Players' tool tip
        let playerToolTip = document.createElement("div")
        playerToolTip.textContent = player_names[i]
        playerToolTip.className = "playerTip"
        playerToolTip.style.display = "none"
        // Creates the Player
        const newPlayer = document.createElement("div")
        newPlayer.id = "player"+(i+1).toString()
        newPlayer.className = "player"
        newPlayer.style = "background-color: "+player_colors[i]+";top:884px;left:"+(849+(23*(i))).toString()+"px;"
        newPlayer.onmouseover = function() { // When the players mouse is over a player it will show the name of that player
            playerToolTip.style.display = "block"
        }
        newPlayer.onmouseout = function() { // When the players mouse is not over a player it will hide that players name
            playerToolTip.style.display = "none"
        }
        newPlayer.appendChild(playerToolTip) // Adds the tool tip to the player
        // Adds the player tooltip to the board
        playerContainer.appendChild(newPlayer)
        // Adds the player to the player list
        player_list.push(new Player(player_names[i], player_colors[i], 1, "player"+(i+1).toString(), starting_cash, false, {}, [], bankrupt))
        // Sets the money containers to the right color and text
        var setMoneyContainer = document.getElementById("player"+(i+1)+"_money")
        setMoneyContainer.style = "border: 3px solid "+player_colors[i]+";background-color: white;text-align: center;"
        setMoneyContainer.innerHTML = "<br>"+player_names[i]+":<br>---------<br>$"+starting_cash.toString()
    }
    playerAmount = player_list.length // The amount of players
    //Adds roll button
    set_roll()
    // Sets the Player turn text to the new player
    turn_text.innerHTML = "Current Turn:<br>"+player_list[current_turn].get_player_name()

    // This will Add the color to each property
    var propData_keys = Object.keys(propData)
    for (var i=0; i < propData_keys.length; i++) { // Goes through each property
        if (propData[propData_keys[i]]["property_data"]["color"] !== null) { // Checks if that property has a color
            let propCell = document.getElementById("cell_"+i.toString()) // The Property
            let propPar = document.getElementById("cell_"+i.toString()).parentElement // The propertys' parent element
            let textColor = "black" // The property cell text color
            if (["blue", "black", "brown"].includes(propData[propData_keys[i]]["property_data"]["color"])) { // If the prop Color is in the list it will set the text color to white
                textColor = "white" // Sets text color to white
            }
            propCell.style = "color:"+textColor+";" // Sets the cell text color
            propPar.style = "background-color:"+propData[propData_keys[i]]["property_data"]["color"]+";" // Sets the propertys' color
        }
    }
    // This will allow the player to hover over the property tag to sell who owns it
    for (var i=0; i < propData_keys.length; i++) {
        let cellTag = document.getElementById("cell_"+i.toString()+"_tag")
        let cellTag_tip = document.createElement("div")
        
        if (cellTag == null) { // If the cellTag is not a element
            continue
        }
        cellTag_tip.style.display = "none"
        // Checks the tag location
        if ([2,4,6,7,8,10].includes(i)) { // if the prop is on the bottom
            cellTag_tip.className = "cell_tip_bottom"
        } else if ([12,13,14,15,16,17,19,20].includes(i)) { // if the prop is on the left
            cellTag_tip.className = "cell_tip_left"
        } else if ([22,24,25,26,27,28,29,30].includes(i)) {
            cellTag_tip.className = "cell_tip_top"
        } else if ([32,33,35,36,38,40].includes(i)) {
            cellTag_tip.className = "cell_tip_right"
        }
        cellTag_tip.textContent = "Owner: Bank"
        // Makes the hover part
        cellTag.onmouseover = function() { // Mouse is over
            cellTag_tip.style.display = "block"
        }
        cellTag.onmouseout = function() { // Mouse is not over
            cellTag_tip.style.display = "none"
        }
        cellTag.appendChild(cellTag_tip) // Appends the tag to the cell
    }
    // Randomizes the chance/chest cards
    chest_deck = shuffle(Object.keys(cardsData["Community Chest"])) // Randomize Chest
    chance_deck = shuffle(Object.keys(cardsData["Chance"])) // Randomize Chest
}

// This will setup the main menu after the JSON file data from changeLogs are readable
function set_menu(changeLog) {
    // Allows the enable buttons to be interactable
    for (let j=2; j < 4; j++) {
        const enable_btn = document.getElementById("player"+(j+1).toString()+"_enable")
        const name_input = document.getElementById("player"+(j+1).toString()+"_name")
        const color_input = document.getElementById("player"+(j+1).toString()+"_color")
        enable_btn.onclick = function() {
            if (enable_btn.checked == false) { // if the enable button is player3
                if (j+1 == 3) { // If player3 was unchecked
                    // If so then will disable player4
                    document.getElementById("player4_enable").checked = false
                    document.getElementById("player4_name").value = ""
                    document.getElementById("player4_name").disabled = "disabled"
                    document.getElementById("player4_color").disabled = "disabled"
                }
                name_input.value = ""
                name_input.disabled = "disabled"
                color_input.disabled = "disabled"
            } else if (enable_btn.checked == true) {
                if (j+1 == 4) { // If player4 was checked
                    document.getElementById("player3_enable").checked = true
                    document.getElementById("player3_name").value = ""
                    document.getElementById("player3_name").disabled = ""
                    document.getElementById("player3_color").disabled = ""
                }
                name_input.value = ""
                name_input.disabled = ""
                color_input.disabled = ""
            }
        }
    }

    // When the player clicks the start btn on the Main Menu
    start_btn.onclick = function() {
        // Player input variables
        const input_names = []
        const input_colors = []
        var error_count = false
        // Gets all the values
        for (let i=0; i < 4; i++) {
            const enable_box = document.getElementById("player"+(i+1)+"_enable")
            const name_input = document.getElementById("player"+(i+1)+"_name")
            const color_input = document.getElementById("player"+(i+1)+"_color")
            
            if (i+1 >= 3) { // Checks if "i" is on 3
                if (enable_box.checked == false) { // Checks to see if that player was enabled
                    continue
                }
            }
            // Checks the length of the name
            if ((name_input.value).length >= 3) { // Only allow names over the length of 3
                if (input_names.includes((name_input.value).replace(" ", "")) == false) { // Checks if the name is taken // Checks if the color is taken
                    input_names.push(name_input.value)
                    input_colors.push(color_input.value)
                    error_count = false
                    continue
                } else {
                    error_txt.innerHTML = "Player "+(i+1)+"'s Name is already Taken"
                    error_count = true
                    continue
                }
            }
            error_txt.innerHTML = "player "+(i+1)+"'s name is not longer than 3 letters"
            error_count = true
        }
        // Starts the game

        if (error_count == false) {set_up_game(input_names, input_colors, 2000, false)}
    }

    // This will add all the versions to the dropdown menu
    var version_keys = Object.keys(changeLog)
    for (var i=0; i < version_keys.length; i++) {
        let add_ver = document.createElement("option")
        add_ver.value = version_keys[i]
        add_ver.textContent = version_keys[i]
        add_ver.id = version_keys[i]
        select_version.appendChild(add_ver)
    }
    // Hides the first element
    let curSelect = document.getElementById(select_version.value)
    curSelect.style.display = "none"
    // This will update the text box for the change logs when the version is changed
    select_version.onchange = function() {
        // Shows all the elements
        var children = select_version.children;
        for (var i = 0; i < children.length; i++) {
            if (children[i].value !== "nothing") {
                children[i].style.display = "block"
            }
        }
        // Hide the selected element
        let curSelect = document.getElementById(select_version.value)
        curSelect.style.display = "none"
        // Removes the old text
        while(changeLog_txt.firstChild) {
            changeLog_txt.removeChild(changeLog_txt.firstChild)
        }
        // When called it will add a divider to the changeLog_txt
        const make_divider = function() {
            var divider = document.createElement("div")
            divider.textContent = "--------------------------------------------------------------------------------"
            changeLog_txt.appendChild(divider)
        }
        // Sees what value was selected
        if (select_version.value == "Future Updates") { // If future updates was selected
            // Adds the Future Updates to the output
            let ver_title = document.createElement("div")
            ver_title.innerHTML = `&#x2022; <b>${select_version.value}</b>`
            changeLog_txt.appendChild(ver_title)
            // Divides the Title and the content
            make_divider()
            // Adds all the items from the list of "future updates"
            for (var i=0; i < changeLog[select_version.value].length; i++) {
                let futUpd = document.createElement("div") // futUpd = Future Update
                futUpd.innerHTML = "&#x2022; "+changeLog[select_version.value][i]
                changeLog_txt.appendChild(futUpd)
            }
        } else if (select_version.value !== "nothing") { // If anything else except "null" was selected
            // Makes the Date and title Text
            let ver_date = document.createElement("div")
            ver_date.innerHTML = "&#x2022; <b>Release Date:</b> "+changeLog[select_version.value]["date"]
            changeLog_txt.appendChild(ver_date)
            let ver_title = document.createElement("div")
            ver_title.innerHTML = "&#x2022; <b>Update Name:</b> "+changeLog[select_version.value]["title"]
            changeLog_txt.appendChild(ver_title)
            // Makes the Added items
            var add_items = changeLog[select_version.value]["added"]
            if (add_items.length > 0) { // Checks if there was any add_items ( If not then nothing will display under "added")
                make_divider()
                // Makes the Added title
                let add_title = document.createElement("div")
                add_title.innerHTML = "&#x2022; <b>Additions:</b>"
                changeLog_txt.appendChild(add_title)
                for (var i=0; i < add_items.length; i++) {
                    let ver_add = document.createElement("div")
                    ver_add.innerHTML = "&#x2022; "+add_items[i]
                    changeLog_txt.appendChild(ver_add)
                }
            }
            // Makes the Bug Fixes items
            var bug_items = changeLog[select_version.value]["bug_fix"]
            if (bug_items.length > 0) { // Checks if there was any add_items ( If not then nothing will display under "added")
                make_divider()
                // Makes the Added title
                let bug_title = document.createElement("div")
                bug_title.innerHTML = "&#x2022; <b>Bug Fixes:</b>"
                changeLog_txt.appendChild(bug_title)
                for (var i=0; i < bug_items.length; i++) {
                    let ver_bug = document.createElement("div")
                    ver_bug.innerHTML = "&#x2022; "+bug_items[i]
                    changeLog_txt.appendChild(ver_bug)
                }
            }
            // Makes the Removed items
            var sub_items = changeLog[select_version.value]["removed"]
            if (sub_items.length > 0) { // Checks if there was any sub_items ( If not then nothing will display under "removed")
                make_divider()
                // Makes the Removed title
                let sub_title = document.createElement("div")
                sub_title.innerHTML = "&#x2022; <b>Removals:</b>"
                changeLog_txt.appendChild(sub_title)
                for (var i=0; i < sub_items.length; i++) {
                    let ver_sub = document.createElement("div")
                    ver_sub.innerHTML = "&#x2022; "+sub_items[i]
                    changeLog_txt.appendChild(ver_sub)
                }
            }
            // Makes the Changed items
            var change_items = changeLog[select_version.value]["changed"]
            if (change_items.length > 0) { // Checks if there was any Change_items ( If not then nothing will display under "changed")
                make_divider()
                // Makes the Changed title
                let change_title = document.createElement("div")
                change_title.innerHTML = "&#x2022; <b>Changes:</b>"
                changeLog_txt.appendChild(change_title)
                for (var i=0; i < change_items.length; i++) {
                    let ver_change = document.createElement("div")
                    ver_change.innerHTML = "&#x2022; "+change_items[i]
                    changeLog_txt.appendChild(ver_change)
                }
            }
        }
    }
}



// If the client selected another tab or minimized the tab
document.addEventListener("visibilitychange", () => {
    var webicon = document.querySelector("head > link:nth-child(3)")
    if (document.hidden) { // if document is hidden, change the title and icon
        webicon.href = "https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico"
        document.title = "Dashboard"
        return
    }
    document.title = "Monopoly 2.0" // If the document is not hidden (hidden meaning if the client is looking at the page or not)
    webicon.href = "./favicon.png"
});
