var SkillCollector = function () {

    this.active = false;
    this.spriteImage = "";
    this.sprite;
};

//active
SkillCollector.prototype.getActive = function(){
    return this.active;
}

SkillCollector.prototype.setActive = function(value){
    this.active = value;
}

//spriteImage
SkillCollector.prototype.getSpriteImage = function(){
    return this.spriteImage;
}

SkillCollector.prototype.setSpriteImage= function(value){
    this.spriteImage = value;
}

//sprite
SkillCollector.prototype.getSprite = function(){
    return this.sprite;
}

SkillCollector.prototype.setSprite = (x,y){
    this.sprite = game.add.sprite(
        x,                              //x position
        y,                              //y position
        this.getSpriteImage()           //image
    );
}

//Create

SkillCollector.prototype.create = function(x){
    this.setSprite(x);
    this.sprite.anchor.setTo(0.5, 0.5);
    
}