function createWorld(level) {
    var walls = game.add.group();
    switch (level) {
        case 1: walls = level1(walls);
            break;
        default:
            break;
    }
    return walls;
}/***************************************************/
    
function level1(walls){
    /*walls.enableBody = true;
    //Vertical
    game.add.sprite(0, 0, "wallV", 0, walls);//Left
    game.add.sprite(480, 0, "wallV", 0, walls);//Right
    //Horizontal
        //Top
    game.add.sprite(0, 0, "wallH", 0, walls);//left
    game.add.sprite(300, 0, "wallH", 0, walls);//right
        //Bottom
    game.add.sprite(0, 320, "wallH", 0, walls);//left
    game.add.sprite(300, 320, "wallH", 0, walls);//right
        //Middle
    game.add.sprite(-100, 160, "wallH", 0, walls);//left
    game.add.sprite(400, 160, "wallH", 0, walls);//right
        //Flotantes
    var middleTop = game.add.sprite(100, 80, "wallH", 0, walls);
    middleTop.scale.setTo(1.5, 1);
    var middleBottom = game.add.sprite(100, 240, "wallH", 0, walls);
    middleBottom.scale.setTo(1.5, 1);

    //Apply immovable
    walls.setAll("body.immovable", true);
    
    return walls;*/
    var map = game.add.tilemap("MAP_level1");
    map.addTilesetImage("tileset");
    var layer = map.createLayer("level1");
    layer.resizeWorld();
    map.setCollision(1);
    
    return layer;
}/***************************************************/

function startLevel(level){
    game.state.start(level);
}