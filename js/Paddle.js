var Paddle = function () {

    this.speed=0;
    this.haveShield=true;
    this.isVulnerable=false;
    this.poisoned=false;
    this.isInvisible=false;
    this.wall;

};

//speed

Skill.prototype.getSpeed = function(){
    return this.speed;
}

Skill.prototype.setSpeed = function(value){
    this.speed = value;
}

//haveShield

Skill.prototype.getHaveShield = function(){
    return this.haveShield;
}

Skill.prototype.setHaveShield = function(value){
    this.haveShield = value;
}

//isVulnerable

Skill.prototype.getIsVulnerable = function(){
    return this.isVulnerable;
}

Skill.prototype.setIsVulnerable = function(value){
    this.isVulnerable = value;
}

//poisoned

Skill.prototype.getPoisoned = function(){
    return this.poisoned;
}

Skill.prototype.setPoisoned = function(value){
    this.poisoned = value;
}

//isInvisible

Skill.prototype.getIsInvisible = function(){
    return this.isInvisible;
}

Skill.prototype.setIsInvisible = function(value){
    this.isInvisible = value;
}

//wall

Skill.prototype.getWall = function(){
    return this.wall;
}

Skill.prototype.setWall = function(value){
    this.wall = value;
}