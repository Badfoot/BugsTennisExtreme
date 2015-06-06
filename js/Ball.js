const BALL_MAX_LIVE = 2;

var Ball = function () {

    this.speedX = 0;
    this.speedY = 0;
    this.sprite;
};


//speedX
Ball.prototype.getSpeedX = function(){
    return this.speedX;
}

Ball.prototype.setSpeedX = function(value){
    this.speedX = value;
}

//speedy
Ball.prototype.getSpeedY = function(){
    return this.speedY;
}

Ball.prototype.setSpeedY = function(value){
    this.speedY = value;
}

//sprite
Ball.prototype.getSprite = function(){
    return this.sprite;
}

Ball.prototype.setSprite = function(value){
    this.sprite = value;
}