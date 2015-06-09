const MISSILE_TO_LEFT = "effect_beeToLeft";
const MISSILE_TO_RIGHT = "effect_beeToRight";


var Missile = function () {
    this.speed = 0;
    this.sprite;
    this.spriteImage="";
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
Missile.prototype.getSpriteImage = function(){
    return this.spriteImage;
}

Missile.prototype.setSpriteImage = function(value){
    this.spriteImage = value;
}

Missile.prototype.createMissile = function(x, y){
    this.setSprite(x, y);
    this.sprite.anchor.setTo(0.5, 0.5);
}

Missile.prototype.move = function (){
    this.getSprite().x += this.getSpeed();
}

Missile.prototype.impact = function (targetPaddle, targetPlayer, owner) {
    var sprite = this.getSprite();
    var paddle = targetPaddle.getSprite();
    if (sprite.y-10 >= paddle.y-30 && sprite.y+10 <= paddle.y +30){
        if(sprite.x+9 >= paddle.x && sprite.x-9 <= paddle.x){
            sprite.destroy();
            if (!targetPaddle.getHaveShield()){
                system = new GameMechanics();
                system.decreaseLife(10, targetPlayer);
            } else {
                targetPaddle.setHaveShield(false);
            }
            owner.setMissile(null);
        }
    }
    
}
