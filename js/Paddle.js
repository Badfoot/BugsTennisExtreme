const PADDLE_NORMAL_SIZE = 60;
const PADDLE_MIN_SIZE = PADDLE_NORMAL_SIZE/2;
const PADDLE_MAX_SIZE = PADDLE_NORMAL_SIZE+PADDLE_MIN_SIZE;

var Paddle = function () {
    this.speed = GAMEMECHANICS_PADDLE_SPEED;
    this.speedGrowed = false;
    this.speedDwarfed = false;
    this.haveShield = false;
    this.isVulnerable = false;
    this.poisoned = false;
    this.poisonStartTime = 0;
    this.isInvisible = false;
    this.isInvisibleStartTime = 0;
    this.howOftenPoison = 2000;
    this.speedGrowStartTime = 0;
    this.speedDwarfStartTime = 0;
    this.spriteImage = "";
    this.sprite;
    this.wall = null;
    this.missile  = null;
    this.signY = 0;
    this.size = PADDLE_NORMAL_SIZE;
    this.sizeGrowStartTime = 0;
    this.sizeDwarfStartTime = 0;
    this.sizeGrowed = false;
    this.sizeDwarfed = false;
};

Paddle.prototype.getSize = function(){
    return this.size;
}
Paddle.prototype.setSize = function(value){
    this.size = value;
}
Paddle.prototype.getSizeGrowed = function(){
    return this.sizeGrowed;
}
Paddle.prototype.getSizeGrowed = function(value){
    this.sizeGrowed = value;
}
Paddle.prototype.getSizeDwarfed = function(){
    return this.sizeDwarfed;
}
Paddle.prototype.setSizeDwarfed = function(value){
    this.sizeDwarfed = value;
}
Paddle.prototype.getSizeGrowStartTime = function(){
    return this.sizeGrowStartTime;
}
Paddle.prototype.setSizeGrowStartTime = function(value){
    this.sizeGrowStartTime = value;
}
Paddle.prototype.getSizeDwarfStartTime = function(){
    return this.sizeDwarfStartTime;
}
Paddle.prototype.setSizeDwarfStartTime = function(value){
    this.sizeDwarfStartTime = value;
}



Paddle.prototype.getSpeedGrowed = function(){
    return this.speedGrowed;
}
Paddle.prototype.setSpeedGrowed = function(value){
    this.speedGrowed = value;
}
Paddle.prototype.getSpeedDwarfed = function(){
    return this.speedDwarfed;
}
Paddle.prototype.setSpeedDwarfed = function(value){
    this.speedDwarfed = value;
}

Paddle.prototype.getPoisonStartTime = function(){
    return this.poisonStartTime;
}
Paddle.prototype.setPoisonStartTime = function(value){
    this.poisonStartTime = value;
}
Paddle.prototype.getIsInvisibleStartTime = function(){
    return this.isInvisibleStartTime;
}
Paddle.prototype.setIsInvisibleStartTime = function(value){
    this.isInvisibleStartTime = value;
}
Paddle.prototype.getSpeedGrowStartTime = function(){
    return this.speedGrowStartTime;
}
Paddle.prototype.setSpeedGrowStartTime = function(value){
    this.speedGrowStartTime = value;
}
Paddle.prototype.getSpeedDwarfStartTime = function(){
    return this.speedDwarfStartTime;
}
Paddle.prototype.setSpeedDwarfStartTime = function(value){
    this.speedDwarfStartTime = value;
}

//speed

Paddle.prototype.getSpeed = function(){
    return this.speed;
}

Paddle.prototype.setSpeed = function(value){
    this.speed = value;
}

//haveShield

Paddle.prototype.getHaveShield = function(){
    return this.haveShield;
}

Paddle.prototype.setHaveShield = function(value){
    this.haveShield = value;
}

//isVulnerable

Paddle.prototype.getIsVulnerable = function(){
    return this.isVulnerable;
}

Paddle.prototype.setIsVulnerable = function(value){
    this.isVulnerable = value;
}

//isVulnerable

Paddle.prototype.getMissile = function(){
    return this.missile;
}

Paddle.prototype.setMissile = function(value){
    this.missile = value;
}

//poisoned

Paddle.prototype.getPoisoned = function(){
    return this.poisoned;
}

Paddle.prototype.setPoisoned = function(value){
    this.poisoned = value;
}

Paddle.prototype.setHowOftenPoison = function (value){
    this.howOftenPoison = value;
}

Paddle.prototype.getHowOftenPoison = function (){
    return this.howOftenPoison;
}

//isInvisible

Paddle.prototype.getIsInvisible = function(){
    return this.isInvisible;
}

Paddle.prototype.setIsInvisible = function(value){
    this.isInvisible = value;
}

//wall

Paddle.prototype.getWall = function(){
    return this.wall;
}

Paddle.prototype.setWall = function(value){
    this.wall = value;
}

//spriteimage

Paddle.prototype.getSpriteImage = function(){
    return this.spriteImage;
}

Paddle.prototype.setSpriteImage = function(value){
    this.spriteImage = value;
}

//sprite

Paddle.prototype.getSprite = function(){
    return this.sprite;
}

Paddle.prototype.setSprite = function(x){
    this.sprite = game.add.sprite(
        x,                              //x position
        GAMEMECHANICS_WORLD_HEIGHT/2,   //y position
        this.getSpriteImage()           //image
    );
}

//SIGN Y
Paddle.prototype.getSignY = function(){
    return this.signY;
}


//METHODS
Paddle.prototype.createPaddle = function(x){
    this.setSprite(x);
    this.sprite.anchor.setTo(0.5, 0.5);
}

Paddle.prototype.move = function(cursor){
    //move
    if(cursor.up.isDown){
        if(this.getSprite().y - this.getSpeed() < 50+GAMEMECHANICS_MARGIN_PADDLE_TO_TOP+30) {
            this.getSprite().y = 50+GAMEMECHANICS_MARGIN_PADDLE_TO_TOP+30;
        } else if (this.getSprite().y > 50+GAMEMECHANICS_MARGIN_PADDLE_TO_TOP+30){
            this.getSprite().y -= this.getSpeed();
        }
        this.signY = -1;
    }else if(cursor.down.isDown){
        if(this.getSprite().y + this.getSpeed() > GAMEMECHANICS_WORLD_HEIGHT-50-GAMEMECHANICS_MARGIN_PADDLE_TO_BOTTOM-30) {
            this.getSprite().y = GAMEMECHANICS_WORLD_HEIGHT-50-GAMEMECHANICS_MARGIN_PADDLE_TO_BOTTOM-30;
        } else if (this.getSprite().y < GAMEMECHANICS_WORLD_HEIGHT-50-GAMEMECHANICS_MARGIN_PADDLE_TO_BOTTOM-30){
            this.getSprite().y += this.getSpeed();
        }
        this.signY = 1;
    } else {
        this.signY = 0;
    }
}

Paddle.prototype.skillListener = function (player, cursor, skillImages, ball, targetPaddle, skillCollector){
    var skillIndex = -1;
    var skillPlaceIncex = -1;
    if(cursor.boon1.isDown){
        skillIndex = 0;
    } else if(cursor.boon2.isDown){
        skillIndex = 1;
    } else if(cursor.weapon1.isDown){
        skillIndex = 2;
    } else if(cursor.weapon2.isDown){
        skillIndex = 3;
    }
    if (skillIndex>=0){
        skillPlaceIncex = skillIndex;
        if(player.getId()==2){
            skillPlaceIncex += 4;
        }
        if(!player.getSkillPlaces()[skillIndex].getFree()){
            if (player.getSkills()[skillIndex]!=null){
                player.getSkills()[skillIndex].startSkill(player, this, ball, targetPaddle, skillCollector);
                player.removeSkill(player.getSkills()[skillIndex]);
            }
            skillImages[skillPlaceIncex].destroy();
            player.getSkillPlaces()[skillIndex].setFree(true);
        }
    }
}

Paddle.prototype.updateSpeedGrowed = function (now, skill){
    var difference = (now-this.getSpeedGrowStartTime());
    var endTime = skill.getDuration()*1000;
    if(difference >= endTime){
        this.setSpeedGrowed(false);
        this.setSpeed(GAMEMECHANICS_PADDLE_SPEED);
    }
}

Paddle.prototype.updateSpeedDwarfed = function (now, skill){
    var difference = (now-this.getSpeedDwarfStartTime());
    var endTime = skill.getDuration()*1000;
    if(difference >= endTime){
        this.setSpeedDwarfed(false);
        this.setSpeed(GAMEMECHANICS_PADDLE_SPEED);
    }
}

Paddle.prototype.updateSizeGrowed = function (now, skill){
    var difference = (now-this.getSizeGrowStartTime());
    var endTime = skill.getDuration()*1000;
    if(difference >= endTime){
        if (this.getSize()==PADDLE_MAX_SIZE){
            this.setSize(PADDLE_NORMAL_SIZE);
            this.getSprite().scale.setTo(1, 1);
        } else if (this.getSize()==PADDLE_NORMAL_SIZE && this.getSizeDwarfed()){
            this.setSize(PADDLE_MIN_SIZE);
            this.getSprite().scale.setTo(1, 0.5);
        }
        this.getSizeGrowed(false);
    }
}

Paddle.prototype.updateSizeDwarfed = function (now, skill){
    var difference = (now-this.getSizeDwarfStartTime());
    var endTime = skill.getDuration()*1000;
    if(difference >= endTime){
        if (this.getSize()==PADDLE_MIN_SIZE){
            this.setSize(PADDLE_NORMAL_SIZE);
            this.getSprite().scale.setTo(1, 1);
        } else if (this.getSize()==PADDLE_NORMAL_SIZE && this.getSizeGrowed()){
            this.setSize(PADDLE_MAX_SIZE);
            this.getSprite().scale.setTo(1, 1.5);
        }
        this.getSizeDwarfed(false);
    }
}

Paddle.prototype.updatePoison = function (now, skill, player){
    var difference = (now-this.getPoisonStartTime());
    var endTime = skill.getDuration()*1000;
    if(difference < endTime){
        if(difference >= this.getHowOftenPoison()){
            system = new GameMechanics();
            system.decreaseLife(skill.getLiveAmount(), player);
            this.setHowOftenPoison(this.getHowOftenPoison()+2000);
        }
    } else {
        system = new GameMechanics();
        system.decreaseLife(skill.getLiveAmount(), player);
        this.setHowOftenPoison(this.getHowOftenPoison()+2000);
        this.setPoisoned(false);
    }
}

Paddle.prototype.updateInvisible = function (now, skill){
    var difference = (now-this.getIsInvisibleStartTime());
    var endTime = skill.getDuration()*1000;
    if(difference >= endTime){
        this.getSprite().alpha = 1;
    }
}

Paddle.prototype.resetSkills = function (){
    this.setIsInvisible(false);
    this.setIsVulnerable(false);
    this.setHaveShield(false);
    if(this.getWall()!=null) this.getWall().getSprite().destroy();
    this.setWall(null);
    this.setPoisoned(false);
    if(this.getMissile() != null) this.getMissile().getSprite().destroy();
    this.setMissile(null);
}