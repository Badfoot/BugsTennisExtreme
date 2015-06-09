var HPLife = function () {

    this.life=PLAYER_HP;
    this.positionTextX=0;
    this.positionTextY=0;
};


//positionX
HPLife.prototype.getLife = function(){
    return this.life;
}

HPLife.prototype.setLife = function(value){
    this.life = value;
}

//positionX
HPLife.prototype.getPositionX = function(){
    return this.positionX;
}

HPLife.prototype.setPositionX = function(value){
    this.positionX = value;
}

//positionY
HPLife.prototype.getPositionY = function(){
    return this.positionY;
}

HPLife.prototype.setPositionY = function(value){
    this.positionY = value;
}

