var boardSize = view.size.height * 0.95;
var tileHeightWidthRatio = 5/3;
var tileWidth = boardSize / (9 + tileHeightWidthRatio * 2);
var tileHeight = tileWidth * tileHeightWidthRatio;
var tileFontSize = tileWidth * 0.17;

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

var titleText = new PointText(board.bounds.center);
titleText.content = 'Santa Clara\nMONOPOLY';
titleText.style = {
    justification: 'center',
    fontSize: boardSize * 0.09,
    fillColor: 'black',
};


//------------------------------------------------------------------------------
// Go tile
//------------------------------------------------------------------------------
var GoTile = function(index) {
    this.index = index;
};

GoTile.prototype.draw = function() {
    var border = new Path.Rectangle([0, 0], [tileHeight, tileHeight]);
    border.strokeColor = 'black';
    var text = new PointText(border.position);
    text.content = "GO";
    text.style = {
        fontSize: tileFontSize * 3,
        justification: 'center',
        fontWeight: 'bold',
    };
    text.rotate(-45, border.position);
    this.tile = new Group(border, text);
    place_tile(this.tile, this.index);
};



//------------------------------------------------------------------------------
// Jail tile
//------------------------------------------------------------------------------
var JailTile = function(index) {
    this.index = index;
};

JailTile.prototype.draw = function() {
    var border = new Path.Rectangle([0, 0], [tileHeight, tileHeight]);
    border.strokeColor = 'black';
    var text = new PointText(border.position);
    text.content = "JAIL";
    text.style = {
        fontSize: tileFontSize * 2,
        justification: 'center'
    };
    text.rotate(-45, border.position);
    this.tile = new Group(border, text);
    place_tile(this.tile, this.index);
};


//------------------------------------------------------------------------------
// Free Stuff tile
//------------------------------------------------------------------------------
var FreeStuffTile = function(index) {
    this.index = index;
};

FreeStuffTile.prototype.draw = function() {
    var border = new Path.Rectangle([0, 0], [tileHeight, tileHeight]);
    border.strokeColor = 'black';
    var text = new PointText(border.position - [0, tileFontSize*0.5]);
    text.content = "FREE\nSTUFF";
    text.style = {
        fontSize: tileFontSize * 2,
        justification: 'center'
    };
    text.rotate(-45, border.position);
    this.tile = new Group(border, text);
    place_tile(this.tile, this.index);
    // this.tile.rotate(-180)
};


//------------------------------------------------------------------------------
// Busted tile
//------------------------------------------------------------------------------
var BustedTile = function(index) {
    this.index = index;
};

BustedTile.prototype.draw = function() {
    var border = new Path.Rectangle([0, 0], [tileHeight, tileHeight]);
    border.strokeColor = 'black';
    var text = new PointText(border.position);
    text.content = "BUSTED";
    text.style = {
        fontSize: tileFontSize * 2,
        justification: 'center'
    };
    text.rotate(-45, border.position);
    this.tile = new Group(border, text);
    place_tile(this.tile, this.index);
};



//------------------------------------------------------------------------------
//
//------------------------------------------------------------------------------
var PropertyTile = function(index, name, price, color) {
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
    var text = new PointText(border.bounds.center);
    text.content = this.name;
    text.style = {
        fontSize : tileFontSize,
        justification: 'center'
    };
    this.tile = new Group(border, color_band, text);
    place_tile(this.tile, this.index);
};


//------------------------------------------------------------------------------
//
//------------------------------------------------------------------------------
var ChanceTile = function(i) {
    this.index = i;
}

ChanceTile.prototype.draw = function() {
    var border = new Path.Rectangle([0, 0], [tileWidth, tileHeight]);
    border.strokeColor = 'black';
    var text = new PointText(border.bounds.topCenter + [0, tileFontSize*1.44]);
    text.content = 'Chance';
    text.style = {
        fontSize : tileFontSize,
        justification: 'center'
    };
    this.tile = new Group(border, text);
    place_tile(this.tile, this.index);
};



//------------------------------------------------------------------------------
//
//------------------------------------------------------------------------------
var CommunityChestTile = function(i) {
    this.index = i;
}

CommunityChestTile.prototype.draw = function() {
    var border = new Path.Rectangle([0, 0], [tileWidth, tileHeight]);
    border.strokeColor = 'black';
    var text = new PointText(border.bounds.topCenter + [0, tileFontSize*1.44]);
    text.content = 'Community\nChest';
    text.style = {
        fontSize : tileFontSize,
        justification: 'center'
    };
    this.tile = new Group(border, text);
    place_tile(this.tile, this.index);
};



//------------------------------------------------------------------------------
//
//------------------------------------------------------------------------------
var UtilityTile = function(i, name, price) {
    this.index = i;
    this.name = name;
    this.price = price;
}

UtilityTile.prototype.draw = function() {
    var border = new Path.Rectangle([0, 0], [tileWidth, tileHeight]);
    border.strokeColor = 'black';
    var text = new PointText(border.bounds.topCenter + [0, tileFontSize*2.55]);
    text.content = this.name;
    text.style = {
        fontSize : tileFontSize,
        justification: 'center'
    };
    this.tile = new Group(border, text);
    place_tile(this.tile, this.index);
};



//------------------------------------------------------------------------------
//
//------------------------------------------------------------------------------
var TaxTile = function(i, name, tax) {
    this.index = i;
    this.name = name;
    this.tax = tax;
}

TaxTile.prototype.draw = function() {
    var border = new Path.Rectangle([0, 0], [tileWidth, tileHeight]);
    border.strokeColor = 'black';
    var text = new PointText(border.bounds.topCenter + [0, tileFontSize*2]);
    text.content = this.name;
    text.style = {
        fontSize : tileFontSize,
        justification: 'center'
    };
    this.tile = new Group(border, text);
    place_tile(this.tile, this.index);
};



//------------------------------------------------------------------------------
//
//------------------------------------------------------------------------------

var purple   = '#390e59';
var sky_blue = '#88c4f2';
var pink     = '#eb15a3';
var orange   = '#eb8e15';
var red      = '#f21b1b';
var yellow   = '#fcfc17';
var green    = '#0a611b';
var blue     = '#1342c2';

var tiles = [
    new GoTile(0),
    new PropertyTile(1, "Intel\nMuseum", 60, purple),
    new CommunityChestTile(2),
    new PropertyTile(3, "Winchester\nMystery\nHouse", 60, purple),
    new TaxTile(4, "Income Tax", 200),
    new UtilityTile(5, "Rapid Bus", 200),

    new PropertyTile(6, "Ulistac\nNatural\nArea", 100, sky_blue),
    new ChanceTile(7),
    new PropertyTile(8, "Bowers\nPark", 12, sky_blue),
    new PropertyTile(9, "Central\nPark", 100, sky_blue),
    new JailTile(10),

    new PropertyTile(11, "Kiely Blvd.", 140, pink),
    new UtilityTile(12, "Electric\nCompany", 150),
    new PropertyTile(13, "Benton\nStreet", 140, pink),
    new PropertyTile(14, "Pomeroy\nAvenue", 160, pink),
    new UtilityTile(15, "Caltrain\nExpress", 200),

    new PropertyTile(16, "Voyager\nCraft\nCoffee", 180, orange),
    new CommunityChestTile(17),
    new PropertyTile(18, "Safeway", 180, orange),
    new PropertyTile(19, "Target", 200, orange),
    new FreeStuffTile(20),

    new PropertyTile(21, "Saratoga\nAvenue", 220, red),
    new ChanceTile(22),
    new PropertyTile(23, "The\nAlameda", 220, red),
    new PropertyTile(24, "Lincoln\nSt.", 240, red),
    new UtilityTile(25, "Light Rail", 200),

    new PropertyTile(26, "Lawrence\nExpwy.", 260, yellow),
    new PropertyTile(27, "San\nTomas\nExpwy.", 260, yellow),
    new UtilityTile(28, "Water\nWorks", 150),
    new PropertyTile(29, "Central\nExpwy.", 280, yellow),

    new BustedTile(30),
    new PropertyTile(31, "Homestead\nRd.", 300 , green),
    new PropertyTile(32, "El\nCamino\nReal", 300, green),
    new CommunityChestTile(33),
    new PropertyTile(34, "Stevens\nCreek\nBlvd.", 320, green),
    new UtilityTile(35, "Clipper", 200),
    new ChanceTile(36),
    new PropertyTile(37, "Great\nAmerica", 350, blue),
    new TaxTile(38, "Luxury Tax", 75),
    new PropertyTile(39, "Santana\nRow", 400, blue),
];


var place_tile = function(tile, i) {
    tile.bounds.bottomRight = board.bounds.bottomRight;
    if (i % 10) {
        tile.position.x -= (i % 10 - 1)*tileWidth + tileHeight;
    }
    tile.rotate(Math.floor(i/10)*90, board.bounds.center);
};


// Draw all tiles
for (var i = 0; i < tiles.length; i++) {
    tiles[i].draw();
}
globals.tiles = tiles;
