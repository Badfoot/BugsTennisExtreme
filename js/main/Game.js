//state == scene //
var gameState = {
/**/preload: function () {
        //game.load.audio("ost1", "assets/ost/4 - Fight!.ogg");
    },
    
/**/create: function () {
        //DEBUG
        reduce = 0;
    
        //GAME
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.gameController = new GameMechanics();
    
        //WORLD
        //this.walls = this.gameController.createWorld();
    
        //Fondo
        game.add.image(
            0,                 //x position
            0,                 //y position
            "bg_base"     //image
        );
        game.add.image(
            0,                 //x position
            0,                 //y position
            "transparent"       //image
        );
        game.add.image(
            50,                 //x position
            50,                 //y position
            "imgMaps_field"     //image
        );        
        
    
        //Buttons
        var goBack = game.add.button(GAMEMECHANICS_WORLD_WIDTH/2-(106/2), GAMEMECHANICS_WORLD_HEIGHT-45, "btn_menu", function (goBack){goToLvl(FUREMOL_MENU);}, this);
        goBack.input.useHandCursor = true;
    
        //PLAYER 1
        this.createPlayer1();
    
        //PLAYER 2
        this.createPlayer2();
    
        //BALL
        this.createBall();
    
        //SkillCollectors
        this.createSkillCollectors();
    
        //skillPlaces
        this.createSkillPlaces();
    
        //createSkills
        this.createSkills();
        this.createSkillImages();

        //MARCADOR
        this.createText();
        this.createTextLive();
        //audio
        
        //BUTTONS
        var muteButton = game.add.button(GAMEMECHANICS_WORLD_WIDTH-35-5, GAMEMECHANICS_WORLD_HEIGHT-30-5, "btn_sound", function (muteButton){toggleSound(muteButton);}, this);
        muteButton.input.useHandCursor = true;
        muteButton.frame = (game.sound.mute)?1:0;
    },

/**/update: function () {
        if(reduce%10 == 0){
            this.collisions();
            this.moveAll();
            this.skillListeners();
            
            
            if(this.player1.getHp() <=0){
                this.player2.setScore(this.player2.getScore()+1);
                this.reset();
            }
            if(this.player2.getHp() <=0){
                this.player1.setScore(this.player1.getScore()+1);
                this.reset();
            }
            
            this.scorePlayer1Life.text = this.player1.getHp() + "%";
            this.scorePlayer2Life.text = this.player2.getHp() + "%";
            
            this.scorePlayer1.text = this.player1.getScore();
            this.scorePlayer2.text = this.player2.getScore();
        }
        //reduce++;
    },
    
/*********************************************************/   
///////////////////////////////////////////////////////////
/** METODOS **********************************************/
/*********************************************************/
    
    /*********************************************************/   
    ///////////////////////////////////////////////////////////
    /** CREATE ***********************************************/
    /*********************************************************/
    createPlayer1: function () {
        this.player1 = new Player(1);
        this.paddle1 = new Paddle();
        this.paddle1.setSpriteImage("pad_left");
        this.paddle1.createPaddle(45+GAMEMECHANICS_MARGIN_PADDLE_TO_SIDE);
        this.cursor1 = {
            up: setKey(Phaser.Keyboard.W),
            down: setKey(Phaser.Keyboard.S),
            boon1: setKey(Phaser.Keyboard.F),
            boon2: setKey(Phaser.Keyboard.G),
            weapon1: setKey(Phaser.Keyboard.V),
            weapon2: setKey(Phaser.Keyboard.B)
        };
    },
    
    createPlayer2: function () {
        this.player2 = new Player(2);
        this.paddle2 = new Paddle();
        this.paddle2.setSpriteImage("pad_right");
        this.paddle2.createPaddle(GAMEMECHANICS_WORLD_WIDTH-GAMEMECHANICS_MARGIN_PADDLE_TO_SIDE-45);
        this.cursor2 = {
            up: setKey(Phaser.Keyboard.UP),
            down: setKey(Phaser.Keyboard.DOWN),
            boon1: setKey(Phaser.Keyboard.NUMPAD_5),
            boon2: setKey(Phaser.Keyboard.NUMPAD_6),
            weapon1: setKey(Phaser.Keyboard.NUMPAD_2),
            weapon2: setKey(Phaser.Keyboard.NUMPAD_3)
        };
    },
    
    createBall: function () {
        this.ball = new Ball();
        this.ball.setImageSprite("ball");
        this.ball.create();
    },
    
    createSkillCollectors: function () {
        this.skillcollectors = [];
        this.skillcollectors[0] = new SkillCollector();
        this.skillcollectors[1] = new SkillCollector();
        this.skillcollectors[2] = new SkillCollector();
        this.skillcollectors[3] = new SkillCollector();
    
        this.skillcollectors.forEach(function (obj, index){
            obj.setSpriteImage("goodCollector");
        });
    
        this.skillcollectors[0].create(150, 10);
        this.skillcollectors[1].create(350, 10);
        this.skillcollectors[2].create(150, GAMEMECHANICS_WORLD_HEIGHT-GAMEMECHANICS_RECOLLECTOR_HEIGHT-10);
        this.skillcollectors[3].create(350, GAMEMECHANICS_WORLD_HEIGHT-GAMEMECHANICS_RECOLLECTOR_HEIGHT-10);
    
    },
    
    createSkillPlaces: function () {
        this.skillPlacesOfP1 = [];
        this.skillPlacesOfP1[0] = new SkillPlace(1, 1);
        this.skillPlacesOfP1[1] = new SkillPlace(1, 2);
        this.skillPlacesOfP1[2] = new SkillPlace(1, 3);
        this.skillPlacesOfP1[3] = new SkillPlace(1, 4);
        this.skillPlacesOfP1.forEach(function (obj, index){
            obj.createSkillPlace(1, index+1);
        });
        
        this.player1.setSkillPlaces(this.skillPlacesOfP1);
        
        this.skillPlacesOfP2 = [];
        this.skillPlacesOfP2[0] = new SkillPlace(2, 1);
        this.skillPlacesOfP2[1] = new SkillPlace(2, 2);
        this.skillPlacesOfP2[2] = new SkillPlace(2, 3);
        this.skillPlacesOfP2[3] = new SkillPlace(2, 4);
        this.skillPlacesOfP2.forEach(function (obj, index){
            obj.createSkillPlace(2, index+1);
        });
        
        this.player2.setSkillPlaces(this.skillPlacesOfP2);
    },
    
    createSkills: function () {
        this.skills = [];
        this.skills[0] = new Skill(SKILL_BOON, SKILL_WALL, 0, 2, 0, 0, 0, "ico_wall");
        this.skills[1] = new Skill(SKILL_BOON, SKILL_VEL_GROW, 0, 0, 0, 0, 4, "ico_velGrow");
        this.skills[2] = new Skill(SKILL_BOON, SKILL_POTION, 0, 0, 10, 0, 0, "ico_potion");
        this.skills[3] = new Skill(SKILL_BOON, SKILL_PADDLE_GROW, 0, 0, 0, 0, 4, "ico_paddleGrow");
        this.skills[4] = new Skill(SKILL_BOON, SKILL_HEAL_STATE, 0, 0, 0, 0, 0, "ico_healState");
        this.skills[5] = new Skill(SKILL_BOON, SKILL_SHIELD, 1, 0, 0, 0, 0, "ico_shield");
        this.skills[6] = new Skill(SKILL_WEAPON, SKILL_POISON, 0, 0, 5, 2, 12, "ico_poison");
        this.skills[7] = new Skill(SKILL_WEAPON, SKILL_MISSILE, 0, 0, 10, 0, 0, "ico_misil");
        this.skills[8] = new Skill(SKILL_WEAPON, SKILL_INVISIBLE, 0, 0, 0, 0, 3, "ico_invisible");
        this.skills[9] = new Skill(SKILL_WEAPON, SKILL_CHANGE_DIRECTION, 0, 0, 0, 0, 0, "ico_changeDirection");
        this.skills[10] = new Skill(SKILL_WEAPON, SKILL_PADDLE_DWARF, 0, 0, 0, 0, 4, "ico_paddleDwarf");
        this.skills[11] = new Skill(SKILL_WEAPON, SKILL_VEL_DWARF, 0, 0, 0, 0, 4, "ico_velDwarf");
        this.skills[12] = new Skill(SKILL_WEAPON, SKILL_VULNERABILITY, 0, 1, 0, 0, 0, "ico_vulnerable");
        this.skills[13] = new Skill(SKILL_WEAPON, SKILL_TURN_OFF_SKILL, 0, 0, 0, 0, 2, "ico_turnOffSkillCollector");
    },
    
    createSkillImages: function () {
        this.skillImages = [];
        this.skillImages[0] = null;
        this.skillImages[1] = null;
        this.skillImages[2] = null;
        this.skillImages[3] = null;
        this.skillImages[4] = null;
        this.skillImages[5] = null;
        this.skillImages[6] = null;
        this.skillImages[7] = null;
    },
    
    createText: function(){
     //SCORE TEXT
        this.scorePlayer1 = game.add.text(
            GAMEMECHANICS_WORLD_WIDTH/2-30,
            25,
            this.score = this.player1.getScore(),
            {
                font: "24px Arial",
                fill: "#ffffff"
            }
        );
        this.scoreLabelUnion = game.add.text(
            GAMEMECHANICS_WORLD_WIDTH/2,
            25,
            this.score = ":",
            {
                font: "24px Arial",
                fill: "#ffffff"
            }
        );
        this.scorePlayer2 = game.add.text(
            GAMEMECHANICS_WORLD_WIDTH/2+20,
            25,
            this.score = this.player2.getScore(),
            {
                font: "24px Arial",
                fill: "#ffffff"
            }
        );
    },
    
    createTextLive: function(){
    
    //LIVE TEXT
        this.scorePlayer1Label = game.add.text(
            75,
            10,
            this.score = "Player 1",
            {
                font: "18px Arial",
                fill: "#ffffff"
            }
        );
        this.scorePlayer1Life = game.add.text(
            75,
            30,
            this.score = this.player1.getHp()+"%",
            {
                font: "18px Arial",
                fill: "#ffffff"
            }
        );
        this.scorePlayer2Label = game.add.text(
            GAMEMECHANICS_WORLD_WIDTH-125,
            10,
            this.score = "Player 2",
            {
                font: "18px Arial",
                fill: "#ffffff"
            }
        );
        this.scorePlayer2Life = game.add.text(
           GAMEMECHANICS_WORLD_WIDTH-125,
           30,
            this.score = this.player2.getHp()+"%",
            {
                font: "18px Arial",
                fill: "#ffffff"
            }
        );
        
    },
    
    reset: function () {
        this.paddle1.resetSkills();
        this.paddle2.resetSkills();
        this.player1.setHp(PLAYER_HP);
        this.player2.setHp(PLAYER_HP);
        this.skillcollectors[0].removeSkillsFrom(this.player1, this.skillImages);
        this.skillcollectors[0].removeSkillsFrom(this.player2, this.skillImages);
        
        this.ball.getSprite().destroy();
        this.paddle1.getSprite().destroy();
        this.paddle2.getSprite().destroy();
        
        this.paddle1 = new Paddle();
        this.paddle1.setSpriteImage("pad_left");
        this.paddle1.createPaddle(45+GAMEMECHANICS_MARGIN_PADDLE_TO_SIDE);
        
        this.paddle2 = new Paddle();
        this.paddle2.setSpriteImage("pad_right");
        this.paddle2.createPaddle(GAMEMECHANICS_WORLD_WIDTH-GAMEMECHANICS_MARGIN_PADDLE_TO_SIDE-45);
        
        this.createBall();
     },
 
    
    /*********************************************************/   
    ///////////////////////////////////////////////////////////
    /** PHYSICS **********************************************/
    /*********************************************************/
    
    moveAll: function () {
        movePlayer(this.paddle1, this.cursor1);
        movePlayer(this.paddle2, this.cursor2);
        moveBall(this.ball, this.player1, this.player2);
        
    },
    
    skillListeners: function () {
        this.paddle1.skillListener(this.player1, this.cursor1, this.skillImages, this.ball);
        this.paddle2.skillListener(this.player2, this.cursor2, this.skillImages, this.ball);
    },
    
    
    collisions: function () {
        this.collisionOfPaddles();
        this.collisionOfCollectors();
        this.collisionOfMissiles();
    },
    
    collisionOfPaddles: function () {
    //paddle 1
        if (this.ball.getSprite().x-5 >= this.paddle1.getSprite().x-5 && this.ball.getSprite().x-5 <= this.paddle1.getSprite().x+5){
            //esquinas
            if(this.ball.getSprite().y >= this.paddle1.getSprite().y-30 && this.ball.getSprite().y <= this.paddle1.getSprite().y-20 && this.ball.getSignY() == 1){
                this.ball.setOwnedBy(this.player1);
                this.ball.setSignX(1);
                this.ball.setSignY(-1);
            } else {
                if(this.ball.getSprite().y <= this.paddle1.getSprite().y+30 && this.ball.getSprite().y >= this.paddle1.getSprite().y+20 && this.ball.getSignY() == -1){
                    this.ball.setOwnedBy(this.player1);
                    this.ball.setSignX(1);
                    this.ball.setSignY(1);
                } else {
                    //normal
                    if(this.ball.getSprite().y >= this.paddle1.getSprite().y-30 && this.ball.getSprite().y <= this.paddle1.getSprite().y+30){
                        this.ball.setOwnedBy(this.player1);
                        this.ball.setSignX(1);
                        if (this.ball.getSignY() == this.paddle1.getSignY()){
                            this.ball.setSpeedY(this.ball.getSpeedY()+1);
                        } else if (this.ball.getSignY() != this.paddle1.getSignY() && this.paddle1.getSignY() != 0 && this.ball.getSpeedY()-1 > 0){
                            this.ball.setSpeedY(this.ball.getSpeedY()-1); 
                        }
                    }
                }
            }
        } else {
    //paddle 2
            if (this.ball.getSprite().x+5 >= this.paddle2.getSprite().x-5 && this.ball.getSprite().x+5 <= this.paddle2.getSprite().x+5){
                //esquinas
                if(this.ball.getSprite().y >= this.paddle2.getSprite().y-30 && this.ball.getSprite().y <= this.paddle2.getSprite().y-20 && this.ball.getSignY() == 1){
                    this.ball.setOwnedBy(this.player2);
                    this.ball.setSignX(-1);
                    this.ball.setSignY(-1);
                } else {
                    if(this.ball.getSprite().y <= this.paddle2.getSprite().y+30 && this.ball.getSprite().y >= this.paddle2.getSprite().y+20 && this.ball.getSignY() == -1){
                        this.ball.setOwnedBy(this.player2);
                        this.ball.setSignX(-1);
                        this.ball.setSignY(1);
                    } else {
                        //normal
                        if(this.ball.getSprite().y >= this.paddle2.getSprite().y-30 && this.ball.getSprite().y <= this.paddle2.getSprite().y+30){
                            this.ball.setOwnedBy(this.player2);
                            this.ball.setSignX(-1);
                            if (this.ball.getSignY() == this.paddle2.getSignY()){
                                this.ball.setSpeedY(this.ball.getSpeedY()+1);
                            } else if (this.ball.getSignY() != this.paddle2.getSignY() && this.paddle2.getSignY() != 0 && this.ball.getSpeedY()-1 > 0){
                                this.ball.setSpeedY(this.ball.getSpeedY()-1);
                            }
                        }
                    }
                }
            }
        }
    },
    
    collisionOfCollectors: function () {
        ball = this.ball;
        skills = this.skills;
        skillImages = this.skillImages;
        if (this.ball.getOwnedBy() != null){
            this.skillcollectors.forEach(function (obj, index) {
                if (ball.getSprite().x >= obj.getSprite().x && ball.getSprite().x <= obj.getSprite().x+GAMEMECHANICS_RECOLLECTOR_WIDTH){
                    if (obj.getSprite().y < 100){
                        //top
                        if (ball.getSprite().y == 60 && ball.getSignY()>0){
                            obj.doEvent(ball.getOwnedBy(), skills, skillImages);
                        }
                    } else {
                    //bottom
                        if (ball.getSprite().y == GAMEMECHANICS_WORLD_HEIGHT-60 && ball.getSignY()<0){
                            obj.doEvent(ball.getOwnedBy(), skills, skillImages);
                        }
                    }
                }
            });
        }
    },
    
    collisionOfMissiles: function () {
        missile = null;
        if(this.paddle1.getMissile() != null){
            missile = this.paddle1.getMissile();
            missile.move();
            missile.impact(this.paddle2, this.player2, this.paddle1);
        }
        if(this.paddle2.getMissile() != null){
            missile = this.paddle2.getMissile();
            missile.move();
            missile.impact(this.paddle1, this.player1, this.paddle2);
        }
    }
}