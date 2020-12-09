var boardSize = view.size.height * 0.8;
var tileHeightWidthRatio = 5/3;
var tileWidth = boardSize / (9 + tileHeightWidthRatio * 2);
var tileHeight = tileWidth * tileHeightWidthRatio;

var boardRect = new Rectangle([0,0], [boardSize, boardSize]);
boardRect.center = view.center;
var board = new Path.Rectangle(boardRect);
board.strokeColor = 'black';


var goRect = new Rectangle([0, 0], [tileHeight, tileHeight]);
goRect.bottomRight = boardRect.bottomRight;
var goSquare = new Path.Rectangle(goRect);
goSquare.strokeColor = 'black';

var go_to_jail_Rect = new Rectangle([0, 0], [tileHeight, tileHeight]);
go_to_jail_Rect.topRight = boardRect.topRight;
var go_to_jail_Square = new Path.Rectangle(go_to_jail_Rect);
go_to_jail_Square.strokeColor = 'black';

var parkingRect = new Rectangle([0, 0], [tileHeight, tileHeight]);
parkingRect.topLeft = boardRect.topLeft;
var parkingSquare = new Path.Rectangle(parkingRect);
parkingSquare.strokeColor = 'black';

var jailRect = new Rectangle([0, 0], [tileHeight, tileHeight]);
jailRect.bottomLeft = boardRect.bottomLeft;
var jailSquare = new Path.Rectangle(jailRect);
jailSquare.strokeColor = 'black';

var text = new PointText(new Point(200 + boardSize * 0.785, 410));
text.justification = 'center';
text.fillColor = 'black';
text.content = 'MONOPOLY';


function PropertyTile(index, name, price, color) {
    this.name = name;
    this.price = price;
    this.index = index;
    this.color = color;
}

PropertyTile.prototype.draw = function() {
    var border = new Path.Rectangle([0, 0], [tileWidth, tileHeight]);
    border.strokeColor = 'black';
    var color_band = new Path.Rectangle(0, 0, tileWidth, tileHeight/5);
    color_band.strokeColor = 'black';
    color_band.fillColor = this.color;
    var tile = new Group(border, color_band);
    place_tile(tile, this.index);
};


var purple = '#390e59';
var sky_blue = '#88c4f2';
var pink = '#eb15a3';
var orange = '#eb8e15';
var red = '#f21b1b';
var yellow = '#fcfc17';
var green = '#0a611b';
var blue = '#1342c2';
var tiles = [
    new PropertyTile(1, "Linda Mar", 60, purple),
    new PropertyTile(3, "Moss Beach", 60, purple),

    new PropertyTile(6, "Atherton", 100, sky_blue),
    new PropertyTile(8, "Pruneridge Avenue", 100, sky_blue),
    new PropertyTile(9, "Strawberry Park", 12, sky_blue),

    new PropertyTile(11, "Meridian", 140, pink),
    new PropertyTile(13, "Benton Street", 140, pink),
    new PropertyTile(14, "Pomeroy Avenue", 160, pink),

    new PropertyTile(16, "Saratoga Avenue", 180, orange),
    new PropertyTile(18, "Via Torino", 180, orange),
    new PropertyTile(19, "~New York Avenue", 200, orange),

    new PropertyTile(21, "~Kentucky Avenue", 220, red),
    new PropertyTile(23, "~Indiana Avenue", 220, red),
    new PropertyTile(24, "~Illinois Avenue", 240, red),

    new PropertyTile(26, "~Atlantic Avenue", 260, yellow),
    new PropertyTile(27, "~Ventnor Avenue", 260, yellow),
    new PropertyTile(29, "~Marvin Gardens", 280, yellow),

    new PropertyTile(31, "~Pacific Avenue", 300 , green),
    new PropertyTile(32, "~North Carolina Avenue", 300, green),
    new PropertyTile(34, "~Pennsylvania Avenue", 320, green),

    new PropertyTile(37, "~Park Place", 350, blue),
    new PropertyTile(39, "~Boardwalk", 400, blue),

    // new PropertyTile( 5, "Caltrain Express", 20),
    // new PropertyTile(15, "Light Rail", 200),
    // new PropertyTile(25, "Blue Line", 200),
    // new PropertyTile(35, "Clipper", 200),
];


var place_tile = function(tile, i) {
    tile.bounds.bottomRight = board.bounds.bottomRight - new Point((i%10-1)*tileWidth+tileHeight, 0);
    tile.rotate(Math.floor(i/10)*90, board.bounds.center);
};


for (var i = 0; i < tiles.length; i++) {
    console.log(tiles[i]);
    tiles[i].draw();
}

// console.log(tiles)

