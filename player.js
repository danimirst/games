var Player1stats = [money = 2000, properties = [], jail = false, get_out_of_jail = 0, location = 0];
var roll_die = function() {
    return Math.floor((Math.random() * 6) + 1);
};
var roll_dice = function() {
    return roll_die() + roll_die();
};

console.log(roll_dice());