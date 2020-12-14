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
console.log(peer);
peer.on('open', function(id) {
    console.log("My peer id is: " + id);

    localStorage.setItem("peerId", "8dfupwl78kp00000")
    var conn = peer.connect('another-peers-id');
    conn.on('open', function(){
      conn.send('');
    });
});



