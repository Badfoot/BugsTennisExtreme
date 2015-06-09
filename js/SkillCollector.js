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


SkillCollector.prototype.doEvent = function(player, skills, skillImages){
    if(!this.getActive()){
        var gameSystem = new GameMechanics();
        this.removeSkillsFrom(player, skillImages);
    } else {
       this.giveSkill(player, skills, skillImages);
    }
}

SkillCollector.prototype.giveSkill = function(player, skills, skillImages){
    if (this.haveFreeSkillPlace(player)){
        var giveIt = false;
        var freePlace;
        var skill;
        do {
            skill = skills[random(skills.lenght)];
            freePlace = this.getFirstFreePlaceOfTypeSkill(player, skill);
            player.setSkill(freePlace, skill);
            giveIt = true;
        } while (!giveIt);
        if(player.getId() == 2){
            freePlace += 4;
        }
        
        skillImages[freePlace] = game.add.image(
            player.getSkillPlaces()[freePlace].getX(),
            player.getSkillPlaces()[freePlace].getY(),
            skill.getImage()
        );
    }
}

SkillCollector.prototype.haveFreeSkillPlace = function(player){
    for (var i; i<player.getSkillPlaces(); i++){
        if(player.getSkillPlaces()[i].getFree()){
            return true;
        }
    }
    return false;
}

SkillCollector.prototype.getFirstFreePlaceOfTypeSkill = function(player, skill){
    var index = 0;
    for (var i; i<player.getSkillPlaces(); i++){
        if(player.getSkillPlaces()[i].getFree()){
            if (i<2 && skill.getTypeOf()<2){
                index = i;
            } else if(i>=2 && skill.getTypeOf()>=2) {
                index = i;
            }
        }
    }
    return index;
}

SkillCollector.prototype.removeSkillsFrom = function(player, skillImages){
    var from = 0;
    var to = 4;
    if(player.getId() == 2){
        from = to;
        to *= 2;
    } 
    for (var i=from; i<to; i++){
        if(skillImages[i]!=null){
            skillImages[i].destroy();
        }
    }
}