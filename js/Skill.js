const SKILL_BOON = true;
const SKILL_WEAPON = false;
const SKILL_WALL = 0;
const SKILL_VEL_GROW = 1;
const SKILL_POTION = 2;
const SKILL_PADDLE_GROW = 3;
const SKILL_HEAL_STATE = 4;
const SKILL_SHIELD = 5;
const SKILL_POISON = 6;
const SKILL_INVISIBLE = 8;
const SKILL_MISSILE = 7;
const SKILL_CHANGE_DIRECTION = 9;
const SKILL_PADDLE_DWARF = 10;
const SKILL_VEL_DWARF = 11;
const SKILL_VULNERABILITY = 12;
const SKILL_TURN_OFF_SKILL = 13;

var Skill = function (boon, typeOf, hits, lives, liveAmount, howOften, duration, image) {
    this.boon = boon;
    this.typeOf = typeOf;
    this.hits = hits;
    this.lives = lives;
    this.liveAmount = liveAmount;
    this.howOften = howOften;
    this.duration = duration;
    this.image = image;
};

//boon
Skill.prototype.getBoon = function(){
    return this.boon;
}

Skill.prototype.setBoon = function(value){
    this.boon = value;
}

//typeof

Skill.prototype.getTypeOf = function(){
    return this.typeOf;
}

Skill.prototype.setTypeOF = function(value){
    this.typeOf = value;
}

//hits
Skill.prototype.getHits = function(){
    return this.hits;
}

Skill.prototype.setHits = function(value){
    this.hits = value;
}

//live

Skill.prototype.getLive = function(){
    return this.lives;
}

Skill.prototype.setLive = function(value){
    this.lives = value;
}

//liveAmount

Skill.prototype.getLiveAmount = function(){
    return this.liveAmount;
}

Skill.prototype.setLiveAmount = function(value){
    this.liveAmount = value;
}

//howOften

Skill.prototype.getHowOften = function(){
    return this.howOften;
}

Skill.prototype.setHowOften = function(value){
    this.howOften = value;
}

//duration

Skill.prototype.getDuration = function(){
    return this.duration;
}

Skill.prototype.setDuration = function(value){
    this.duration = value;
}

//sprite

Skill.prototype.getImage = function(){
    return this.image;
}

Skill.prototype.setImage = function(value){
    this.image = value;
}