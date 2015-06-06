var Missile = function () {

    this.speed = 0;
    this.sprite;
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

Missile.prototype.setSprite = function(value){
    this.sprite = value;
}