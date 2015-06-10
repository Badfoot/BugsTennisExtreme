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

Skill.prototype.startSkill = function(player, paddle, ball, targetPaddle, skillcollectors){
    switch(this.getTypeOf()){
        case SKILL_WALL:
            this.setWall(player, paddle);
            break;
        case SKILL_VEL_GROW:
            this.setVelGrow(paddle);
            break;
        case SKILL_POTION:
            this.activePotion(player);
            break;
        case SKILL_PADDLE_GROW: //SEC
            //not implemented
            break;
        case SKILL_HEAL_STATE:
            this.healState(paddle);
            break;
        case SKILL_SHIELD:
            this.setShield(paddle);
            break;
        case SKILL_POISON: //SEC
            this.poison(targetPaddle);
            break;
        case SKILL_MISSILE:
            this.throwMissile(player, paddle);
            break;
        case SKILL_INVISIBLE:
            this.turnInvisible(targetPaddle);
            break;
        case SKILL_CHANGE_DIRECTION:
            this.changeDirection(ball);
            break;
        case SKILL_PADDLE_DWARF: //SEC
            //not implemented
            break;
        case SKILL_VEL_DWARF:
            this.setVelDwarf(targetPaddle);
            break;
        case SKILL_VULNERABILITY:
            this.setVulnerability(targetPaddle);
            break;
        case SKILL_TURN_OFF_SKILL: //SEC
            this.turnOffCollectors(skillcollectors);
            break;
        default:
            break;
    }
}

Skill.prototype.setWall = function (player, paddle){
    if (paddle.getWall() != null){
        paddle.getWall().getSprite().destroy();
    }
    var wall = new Wall();
    var x = 0;
    if (player.getId()==1){
        x = paddle.getSprite().x-10;
    } else {
        x = paddle.getSprite().x+10;
    }
    wall.create(x);
    paddle.setWall(wall);
}

Skill.prototype.setVelGrow = function (paddle){
    if(paddle.getSpeed() <= GAMEMECHANICS_PADDLE_SPEED){
        paddle.setSpeed(paddle.getSpeed()+(GAMEMECHANICS_PADDLE_SPEED/2));
    }
    paddle.setSpeedGrowStartTime(game.time.time);
    paddle.setSpeedGrowed(true);
}

Skill.prototype.setVelDwarf = function (targetPaddle){
    if(targetPaddle.getSpeed() > GAMEMECHANICS_PADDLE_SPEED-GAMEMECHANICS_PADDLE_SPEED/2){
        targetPaddle.setSpeed(targetPaddle.getSpeed()-(GAMEMECHANICS_PADDLE_SPEED/2));
    }
    targetPaddle.setSpeedDwarfStartTime(game.time.time);
    targetPaddle.setSpeedDwarfed(true);
}

Skill.prototype.activePotion = function (player){
    system = new GameMechanics();
    system.increaseLife(this.getLiveAmount(), player);
}

Skill.prototype.setShield = function (paddle){
    paddle.setHaveShield(true);
}

Skill.prototype.poison = function (targetPaddle){
    targetPaddle.setPoisoned(true);
    targetPaddle.setPoisonStartTime(game.time.time);
    targetPaddle.setHowOftenPoison(2000);
}

Skill.prototype.throwMissile = function (player, paddle){
    if (paddle.getMissile() != null){
        paddle.getMissile().getSprite().destroy();
    }
    bee = new Missile();
    if (player.getId()==1){
        bee.setSpeed(GAMEMECHANICS_FIELD_WIDTH/70);
        bee.setSpriteImage(MISSILE_TO_RIGHT);
    } else {
        bee.setSpeed(GAMEMECHANICS_FIELD_WIDTH/70*-1);
        bee.setSpriteImage(MISSILE_TO_LEFT);
    }
    bee.createMissile(paddle.getSprite().x, paddle.getSprite().y);
    paddle.setMissile(bee);
}

Skill.prototype.turnInvisible = function (targetPaddle){
    targetPaddle.setIsInvisible(true);
    targetPaddle.setIsInvisibleStartTime(game.time.time);
    targetPaddle.getSprite().alpha = 0;
}

Skill.prototype.changeDirection = function (ball){
    ball.setSignX(ball.getSignX()*-1);
}

Skill.prototype.healState = function (paddle){
    paddle.setPoisoned(false);
    if (paddle.getSpeed()<GAMEMECHANICS_PADDLE_SPEED){
        paddle.setSpeed(GAMEMECHANICS_PADDLE_SPEED);
    }
    paddle.setIsInvisible(false);
    paddle.getSprite().alpha = 1;
    paddle.setIsVulnerable(false);
}

Skill.prototype.setVulnerability = function (targetPaddle){
    targetPaddle.setIsVulnerable(true);
}

Skill.prototype.turnOffCollectors = function (skillcollectors){
    skillcollectors.forEach(function (obj){
        obj.setActive(false);
        obj.setBadCollectorStartTime(game.time.time);
    });
}
