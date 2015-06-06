var Skill = function () {
    
    const SKILL_BOON = true;
    const SKILL_DEBUF = false;
    const SKILL_WALL= 1;
    const SKILL_VEL_GROW= 4;
    const SKILL_POTION = 3;
    const SKILL_PADDLE_STATE = 5;
    const SKILL_HEAL_STATE = 5;
    const SKILL_SHIELD = 6;
    const SKILL_POSION = 7;
    const SKILL_INVISIBLE = 9;
    const SKILL_MISSILE = 8;
    const SKILL_CHANGE_DIRECTION = 10;
    const SKILL_PADDLE_DWARF = 11;
    const SKILL_VEL_DWARF = 12;
    const SKILL_VULNERABILITY = 13;
    const SKILL_TURN_OFF_SKILL = 14;



    this.boon=false;
    this.typeOf=0;
    this.hits=0;
    this.lives=0;
    this.liveAmount=0;
    this.howOften=0.00;
    this.duration=0.00;
    this.sprite;
    
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

Skill.prototype.getSprite = function(){
    return this.sprite;
}

Skill.prototype.setSprite = function(value){
    this.sprite = value;
}