var Paddle = function () {

    this.speed=0;
    this.haveShield=true;
    this.isVulnerable=false;
    this.poisoned=false;
    this.isInvisible=false;
    this.sprite;
    this.wall;

};

//speed

Paddle.prototype.getSpeed = function(){
    return this.speed;
}

Paddle.prototype.setSpeed = function(value){
    this.speed = value;
}

//haveShield

Paddle.prototype.getHaveShield = function(){
    return this.haveShield;
}

Paddle.prototype.setHaveShield = function(value){
    this.haveShield = value;
}

//isVulnerable

Paddle.prototype.getIsVulnerable = function(){
    return this.isVulnerable;
}

Paddle.prototype.setIsVulnerable = function(value){
    this.isVulnerable = value;
}

//poisoned

Paddle.prototype.getPoisoned = function(){
    return this.poisoned;
}

Paddle.prototype.setPoisoned = function(value){
    this.poisoned = value;
}

//isInvisible

Paddle.prototype.getIsInvisible = function(){
    return this.isInvisible;
}

Paddle.prototype.setIsInvisible = function(value){
    this.isInvisible = value;
}

//wall

Paddle.prototype.getWall = function(){
    return this.wall;
}

Paddle.prototype.setWall = function(value){
    this.wall = value;
}

//sprite

Paddle.prototype.getSprite = function(){
    return this.sprite;
}

Paddle.prototype.setSprite = function(value){
    this.sprite = value;
}