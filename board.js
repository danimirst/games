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

var place_tile = function(tile, i) {
    tile.bounds.bottomRight = board.bounds.bottomRight - new Point((i%10-1)*tileWidth+tileHeight, 0);
    tile.rotate(Math.floor(i/10)*90, board.bounds.center);
};


for (var i = 0; i < 40; i++) {
    if (i%10 == 0) {
        continue;
    }
    var border = new Path.Rectangle([0, 0], [tileWidth, tileHeight]);
    border.strokeColor = 'black';
    var color_band = new Path.Rectangle(0, 0, tileWidth, tileHeight/5);
    color_band.strokeColor = 'black';
    color_band.fillColor = '#aaa';
    var tile = new Group(border, color_band);
    place_tile(tile, i);
}

