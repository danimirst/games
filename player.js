// var Player1stats = [money = 2000, properties = [], jail = false, get_out_of_jail = 0, location = 0, bankrupt = false];

var AddToken = function(color) {
    this.token = new Path.Circle(100, 100, 7);
    this.token.style = {
        shadowBlur: 5,
        shadowColor: 'black',
        fillColor: '' + color,
    };

};

var removeToken = function(i) {
    i = 0;
};

// var token = new AddToken('yellow');

var placeTokenOnTile = function(i, token) {
    token.token.position = globals.tiles[i].tile.position;
};


var areDiceRolled = false;
var roll_die = function() {
    return Math.floor((Math.random() * 6) + 1);
};
var roll_dice = function() {
    return roll_die() + roll_die()
};

var resetDice = function() {
    areDiceRolled = false;
};

// placeTokenOnTile(39, token);

// Peer
function randomId() {
    var arr = new Uint16Array(3);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, x => x.toString(16).padStart(4, "0")).join('-');
}

var myId = localStorage.getItem("myId");
if (myId === null)  {
    myId = randomId();
    localStorage.setItem("myId", myId);
}

var peer = new Peer(myId);
peer.on('open', function(id) {
    console.log("My peer id is: " + id);

    // localStorage.setItem("peerId", "e36f-a025-d6b1")
    var conn = peer.connect('e36f-a025-d6b1');
    conn.on('open', function(){
        console.log("Opened connection to peer e36f-a025-d6b1");
        conn.send('HELLO THERE. I AM A HUMAN.');
    });
    conn.on('data', function(msg){
        console.log("Received: ", msg);
    });
});




