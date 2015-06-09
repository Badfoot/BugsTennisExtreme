var Paddle = function () {

    this.speed = GAMEMECHANICS_PADDLE_SPEED;
    this.haveShield = false;
    this.isVulnerable = false;
    this.poisoned = false;
    this.isInvisible = false;
    this.spriteImage = "";
    this.sprite;
    this.wall = null;
    this.missile  = null;
    this.signY = 0;
};

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

Paddle.prototype.skillListener = function (player, cursor, skillImages, ball){
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
            player.getSkills()[skillIndex].startSkill(player, this, ball);
            skillImages[skillPlaceIncex].destroy();
            player.getSkillPlaces()[skillIndex].setFree(true);
            player.removeSkill(player.getSkills()[skillIndex]);
        }
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