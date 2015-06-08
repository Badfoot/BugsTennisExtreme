const PLAYER_HP = 100;

var Player = function (id) {
    this.hp = PLAYER_HP;
    this.skillsBoon;
    this.id=id;
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

Player.prototype.getId= function(){
    return this.id;
}
