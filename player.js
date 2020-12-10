// var Player1stats = [money = 2000, properties = [], jail = false, get_out_of_jail = 0, location = 0];
var Player = function() {
    var icon = new Path.Circle(6, 100, 7);
    icon.fillColor = 'yellow';
    // icon.strokeColor = 'black';
    icon.shadowColor = 'black';
    icon.shadowBlur = 5;
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

new Player();