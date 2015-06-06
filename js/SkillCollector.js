var SkillCollector = function () {

    this.active = false;
};

//boon
Skill.prototype.getActive = function(){
    return this.active;
}

Skill.prototype.setActive = function(value){
    this.active = value;
}