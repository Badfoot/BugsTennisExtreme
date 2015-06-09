const PLAYER_HP = 100;

var Player = function (id) {
    this.hp = PLAYER_HP;
    this.skills = [];
    this.skills[0] = null;
    this.skills[1] = null;
    this.skills[2] = null;
    this.skills[3] = null;
    this.id = id;
    this.skillPlaces;
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

Player.prototype.getId = function(){
    return this.id;
}

Player.prototype.getSkills = function(){
    return this.skills;
}

Player.prototype.setSkill = function(index, skill){
    this.skills[index] = skill;
}

Player.prototype.removeSkill = function(skill){
    this.skills.forEach(function (obj, index){
        if(obj == skill){
            obj = null;
            return true;
        }
    });
    return false;
}

Player.prototype.getSkillPlaces = function(){
    return this.skillPlaces;
}

Player.prototype.setSkillPlaces = function(skillplaces){
    this.skillPlaces = skillplaces;
}
                        
