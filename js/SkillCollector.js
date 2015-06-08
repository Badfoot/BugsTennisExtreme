var SkillCollector = function () {

    this.active = true;
    this.spriteImage = "";
    this.sprite;
};

//active
SkillCollector.prototype.getActive = function(){
    return this.active;
}

SkillCollector.prototype.setActive = function(value){
    if (value){
        this.getSprite().animations.play("active");
    } else {
        this.getSprite().animations.play("inactive");
    }
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

SkillCollector.prototype.setSprite = function(x,y){
    this.sprite = game.add.sprite(
        x,                              //x position
        y,                              //y position
        this.getSpriteImage()           //image
    );
    this.getSprite().animations.add("active", [0], 0, false);
    this.getSprite().animations.add("inactive", [1], 0, false);
}

//Create

SkillCollector.prototype.create = function(x, y){
    this.setSprite(x, y);
}
