var Missile = function () {

    this.speed = 0;
    this.sprite;
    this.spriteImagre="";
};


//sprite
Missile.prototype.getSpeed = function(){
    return this.speed;
}

Missile.prototype.setSpeed = function(value){
    this.speed = value;
}

//sprite
Missile.prototype.getSprite = function(){
    return this.sprite;
}

Missile.prototype.setSprite = function(x, y){
    this.sprite = game.add.sprite(
        x,                              //x position
        y,                              //y position
        this.getSpriteImage()           //image
    );
}

//spriteImage
Missile.prototype.getSpriteImagre = function(){
    return this.spriteImagre;
}

Missile.prototype.setSpriteImagre = function(value){
    this.spriteImagre = value;
}

Missile.prototype.createMissile = function(x, y){
    this.setSprite(x, y);
    this.sprite.anchor.setTo(0.5, 0.5);
}
