var SkillCollector = function () {

    this.active = false;
    this.sprite;
};

//active
SkillCollector.prototype.getActive = function(){
    return this.active;
}

SkillCollector.prototype.setActive = function(value){
    this.active = value;
}

//sprite
SkillCollector.prototype.getSprite = function(){
    return this.sprite;
}

SkillCollector.prototype.setSprite = function(value){
    this.sprite = value;
}