var SkillPlace = function (player, skill) {
    this.player = player;
    this.skill = skill;
    this.x = 0;
    this.y = 0;
    this.image = "ico_void";
    this.free = true;
};

SkillPlace.prototype.createSkillPlace = function (player, skill){
    if(player==1){
        switch (skill) {
            case 1:
                this.x = 10; this.y = 80;
                break;
            case 2:
                this.x = 10; this.y = 140;
                break;
            case 3:
                this.x = 10; this.y = 230;
                break;
            case 4:
                this.x = 10; this.y = 290;
                break;
            default:
                break;
        }
    } else {
        switch (skill) {
            case 1:
                this.x = GAMEMECHANICS_WORLD_WIDTH-50+10; this.y = 80;
                break;
            case 2:
                this.x = GAMEMECHANICS_WORLD_WIDTH-50+10; this.y = 140;
                break;
            case 3:
                this.x = GAMEMECHANICS_WORLD_WIDTH-50+10; this.y = 230;
                break;
            case 4:
                this.x = GAMEMECHANICS_WORLD_WIDTH-50+10; this.y = 290;
                break;
            default:
                break;
        }
    }
    
    var image = game.add.image(this.x, this.y, this.image);
    
    this.x ++;
    this.y ++;
}

SkillPlace.prototype.getX = function () {
    return this.x;
}

SkillPlace.prototype.getY = function () {
    return this.y;
}

SkillPlace.prototype.getFree = function () {
    return this.free;
}

SkillPlace.prototype.setFree = function (value) {
    this.free = value;
}