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

var token = new AddToken('yellow');

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

placeTokenOnTile(21, token);