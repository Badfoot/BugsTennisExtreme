const WALL_MAX_LIVE = 2;
const WALL_IMAGE = "effect_wall";

var Wall = function () {
    this.live = WALL_MAX_LIVE;
    this.spriteImage = WALL_IMAGE;
    this.sprite;
};

//active
Wall.prototype.getLive = function(){
    return this.live;
}

Wall.prototype.setLive = function(value){
    this.live = value;
}

Wall.prototype.updateLive = function(value){
    this.live += value;
}

Wall.prototype.updateLive = function(value, paddle){
    this.live += value;
    if(this.getLive()<=0){
        this.getSprite().destroy();
        paddle.setWall(null);
    }
}

Wall.prototype.setSpriteImage = function(value){
    this.spriteImage = value;
}

Wall.prototype.getSpriteImage = function(){
    return this.spriteImage;
}

//sprite
Wall.prototype.getSprite = function(){
    return this.sprite;
}

Wall.prototype.setSprite = function(x){
    this.sprite = game.add.sprite(
        x,                              //x position
        GAMEMECHANICS_WORLD_HEIGHT/2,   //y position
        this.getSpriteImage()           //image
    );
}

Wall.prototype.create = function(x){
    this.setSprite(x);
    this.sprite.anchor.setTo(0.5, 0.5);
}

Wall.prototype.getX = function(){
    return this.getSprite().x;
}

Wall.prototype.getY = function(){
    return this.getSprite().y;
}

Wall.prototype.collision = function(obj, paddle, player){
    var ball = obj.getSprite();
    if (player.getId()==1 && ball.x-5 <= this.getX()+5
       || player.getId()==2 && ball.x+5 >= this.getX()-5){
        this.updateLive(-1, paddle);
        obj.setSignX(obj.getSignX()*-1);
    }
    
}