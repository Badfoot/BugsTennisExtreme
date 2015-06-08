var Ball = function () {
    this.speedX = GAMEMECHANICS_FIELD_WIDTH/100;
    this.speedY = GAMEMECHANICS_FIELD_HEIGHT/60;
    this.imageSprite = "";
    this.sprite;
    this.signX = Phaser.Math.randomSign();
    this.signY = Phaser.Math.randomSign();
    this.maxSpeedY = GAMEMECHANICS_FIELD_HEIGHT/35;
};


//speedX
Ball.prototype.getSpeedX = function(){
    return this.speedX;
}

Ball.prototype.setSpeedX = function(value){
    this.speedX = value;
}

//speedy
Ball.prototype.getSpeedY = function(){
    return this.speedY;
}

Ball.prototype.setSpeedY = function(value){
    this.speedY = value;
}

//signX
Ball.prototype.getSignX = function(){
    return this.signX;
}

Ball.prototype.setSignX = function(value){
    this.signX = value;
}

//signY
Ball.prototype.getSignY = function(){
    return this.signY;
}

Ball.prototype.setSignY = function(value){
    this.signY = value;
}


//sprite
Ball.prototype.getImageSprite = function(){
    return this.imageSprite;
}

Ball.prototype.setImageSprite = function(value){
    this.imageSprite = value;
}

//sprite
Ball.prototype.getSprite = function(){
    return this.sprite;
}

Ball.prototype.setSprite = function(){
    this.sprite = game.add.sprite(
        GAMEMECHANICS_WORLD_WIDTH/2,    //x position
        GAMEMECHANICS_WORLD_HEIGHT/2,   //y position
        this.getImageSprite()           //image
    );
    this.getSprite().animations.add("roll", [0, 1, 2, 3, 4, 5, 6, 7], 14, true);
}

Ball.prototype.create = function(){
    this.setSprite();
    this.sprite.anchor.setTo(0.5, 0.5);
    this.getSprite().animations.play("roll");
}

Ball.prototype.move = function(){
    this.getSprite().x += this.getSpeedX()*this.getSignX();
    this.getSprite().y += this.getSpeedY()*this.getSignY();
    if(this.getSprite().x < 60){
        this.getSprite().x = 60;
        this.setSignX(1);
    } else {
        if (this.getSprite().x > GAMEMECHANICS_WORLD_WIDTH-60){
            this.getSprite().x = GAMEMECHANICS_WORLD_WIDTH-60;
            this.setSignX(-1);
        }
    }
    if(this.getSprite().y < 60){
         this.getSprite().y = 60;
        this.setSignY(1);
    } else {
        if (this.getSprite().y > GAMEMECHANICS_WORLD_HEIGHT-60){
            this.getSprite().y = GAMEMECHANICS_WORLD_HEIGHT-60;
            this.setSignY(-1);
        }
    }
}