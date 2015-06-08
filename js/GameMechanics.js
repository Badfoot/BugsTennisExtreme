const GAMEMECHANICS_WALL_TOUCHED = 10;
const GAMEMECHANICS_WORLD_WIDTH = 600;
const GAMEMECHANICS_WORLD_HEIGHT = 400;
const GAMEMECHANICS_MARGIN_PADDLE_TO_SIDE = 20;
const GAMEMECHANICS_MARGIN_PADDLE_TO_TOP = 0;
const GAMEMECHANICS_MARGIN_PADDLE_TO_BOTTOM = 0;
const GAMEMECHANICS_FIELD_WIDTH = 500;
const GAMEMECHANICS_FIELD_HEIGHT = 300;
const GAMEMECHANICS_RECOLLECTOR_WIDTH= 100;
const GAMEMECHANICS_RECOLLECTOR_HEIGHT= 50;


var GameMechanics = function () {
    
};

GameMechanics.prototype.increaseLife = function(howMany, player){
   //
}

GameMechanics.prototype.decreaseLife = function(howMany, player) {
   //
}

GameMechanics.prototype.createWorld = function(){
    var walls = game.add.group();
    walls.enableBody = true;
    
    //TOP
    game.add.sprite(0, 0, "imgMaps_supLeft", 0, walls);     //Left
    game.add.sprite(250, 0, "imgMaps_supMid", 0, walls);    //Mid
    game.add.sprite(350, 0, "imgMaps_supRight", 0, walls);  //Right
    
    //MID
        //LEFT
    game.add.sprite(0, 50, "imgMaps_leftSup", 0, walls);     //TOP
    game.add.sprite(0, 200, "imgMaps_leftInf", 0, walls);   //BOTTOM
        //RIGHT
    game.add.sprite(GAMEMECHANICS_WORLD_WIDTH-50, 50, "imgMaps_rightSup", 0, walls);   //TOP
    game.add.sprite(GAMEMECHANICS_WORLD_WIDTH-50, 200, "imgMaps_rightInf", 0, walls);  //BOTTOM
    
    //BOTTOM
    game.add.sprite(0, GAMEMECHANICS_WORLD_HEIGHT-50, "imgMaps_infLeft", 0, walls);     //Left
    game.add.sprite(75, GAMEMECHANICS_WORLD_HEIGHT-50, "imgMaps_infMid", 0, walls);     //Mid
    game.add.sprite(525, GAMEMECHANICS_WORLD_HEIGHT-50, "imgMaps_infRight", 0, walls);  //Right

    //Apply immovable
    walls.setAll("body.immovable", true);
    
    return walls;
}


