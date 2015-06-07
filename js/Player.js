const PLAYER_HP = 100;

var Player = function () {
    this.hp = PLAYER_HP;
    this.skillsBoon;
};


//typeof

Player.prototype.getHp = function(){
    return this.hp;
}

Player.prototype.setHp = function(value){
    this.hp = value;
}

Player.prototype.getSkillsBoon = function(){
    return this.skillsBoon;
}

Player.prototype.setSkillsBoon = function(value){
    this.skillsBoon = value;
}