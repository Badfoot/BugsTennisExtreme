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
    this.score = 0;
};

//typeof

Player.prototype.getHp = function(){
    return this.hp;
}

Player.prototype.setHp = function(value){
    if(value < 0){
        value = this.getHp();
    }
    
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
    for (var i = 0; i<skills.length; i++){
        if(this.skills[i] == skill){
            this.skills[i] = null;
            return true;
        }
    }
    return false;
}

Player.prototype.removeSkills = function(){
    this.skills.forEach(function (obj){
        obj = null;
    });
    return true;
}

Player.prototype.getSkillPlaces = function(){
    return this.skillPlaces;
}

Player.prototype.setSkillPlaces = function(skillplaces){
    this.skillPlaces = skillplaces;
}

//Score
Player.prototype.getScore = function(){
    return this.score;
}

Player.prototype.setScore = function(value){
    this.score = value;
}


   
                        
