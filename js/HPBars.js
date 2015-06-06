var HPBars = function () {

    this.containerSprite;
    this.lifeSprite;
    this.positionX=0;
    this.positionY=0;
};

//containerSprite
HPBars.prototype.getContainerSprite = function(){
    return this.containerSprite;
}

HPBars.prototype.setContainerSprite = function(value){
    this.containerSprite = value;
}

//lifeSprite
HPBars.prototype.getLifeSprite = function(){
    return this.lifeSprite;
}

HPBars.prototype.setLifeSprite = function(value){
    this.lifeSprite = value;
}

//positionX
HPBars.prototype.getPositionX = function(){
    return this.positionX;
}

HPBars.prototype.setPositionX = function(value){
    this.positionX = value;
}

//positionY
HPBars.prototype.getPositionY = function(){
    return this.positionY;
}

HPBars.prototype.setPositionY = function(value){
    this.positionY = value;
}