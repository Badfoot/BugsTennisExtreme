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
            50,                 //x position
            50,                 //y position
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

        //MARCADOR
    
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
        }
        reduce++;
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
        this.player1 = new Player();
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
        this.player2 = new Player();
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
    
    /*********************************************************/   
    ///////////////////////////////////////////////////////////
    /** PHYSICS **********************************************/
    /*********************************************************/
    
    moveAll: function () {
        movePlayer(this.paddle1, this.cursor1);
        movePlayer(this.paddle2, this.cursor2);
        moveBall(this.ball);
    },
    
    
    collisions: function () {
        this.collisionOfPaddles();
        this.collisionOfCollectors();
    },
    
    collisionOfPaddles: function () {
    //paddle 1
        if (this.ball.getSprite().x-5 >= this.paddle1.getSprite().x-5 && this.ball.getSprite().x-5 <= this.paddle1.getSprite().x+5){
            if(this.ball.getSprite().y >= this.paddle1.getSprite().y-30 && this.ball.getSprite().y <= this.paddle1.getSprite().y+30){
                this.ball.setSignX(1);
                if (this.ball.getSignY() == this.paddle1.getSignY()){
                    this.ball.setSpeedY(this.ball.getSpeedY()+1);
                } else if (this.ball.getSignY() != this.paddle1.getSignY() && this.paddle1.getSignY() != 0 && this.ball.getSpeedY()-1 > 0){
                    this.ball.setSpeedY(this.ball.getSpeedY()-1); 
                }
            }
            //esquinas
            if(this.ball.getSprite().y >= this.paddle1.getSprite().y-30 && this.ball.getSprite().y <= this.paddle1.getSprite().y-20 && this.ball.getSignY() == 1){
                this.ball.setSignY(-1);
            } else {
                if(this.ball.getSprite().y <= this.paddle1.getSprite().y+30 && this.ball.getSprite().y >= this.paddle1.getSprite().y+20 && this.ball.getSignY() == -1){
                    this.ball.setSignY(1);
                }
            }
        } else {
    //paddle 2
            if (this.ball.getSprite().x+5 >= this.paddle2.getSprite().x-5 && this.ball.getSprite().x+5 <= this.paddle2.getSprite().x+5){
                if(this.ball.getSprite().y >= this.paddle2.getSprite().y-30 && this.ball.getSprite().y <= this.paddle2.getSprite().y+30){
                    this.ball.setSignX(-1);
                    if (this.ball.getSignY() == this.paddle2.getSignY()){
                        this.ball.setSpeedY(this.ball.getSpeedY()+1);
                    } else if (this.ball.getSignY() != this.paddle2.getSignY() && this.paddle2.getSignY() != 0 && this.ball.getSpeedY()-1 > 0){
                        this.ball.setSpeedY(this.ball.getSpeedY()-1);
                    }
                }
                //esquinas
                if(this.ball.getSprite().y >= this.paddle2.getSprite().y-30 && this.ball.getSprite().y <= this.paddle2.getSprite().y-20 && this.ball.getSignY() == 1){
                    this.ball.setSignY(-1);
                } else {
                    if(this.ball.getSprite().y <= this.paddle2.getSprite().y+30 && this.ball.getSprite().y >= this.paddle2.getSprite().y+20 && this.ball.getSignY() == -1){
                        this.ball.setSignY(1);
                    }
                }
            }
        }
    },
    
    collisionOfCollectors: function () {
        ball = this.ball;
        this.skillcollectors.forEach(function (obj, index) {
            if (ball.getSprite().x >= obj.getSprite().x && ball.getSprite().x <= obj.getSprite().x+GAMEMECHANICS_RECOLLECTOR_WIDTH){
                if (obj.getSprite().y < 100){
                    console.log("INDEX: "+index);
                    console.log("   X-INDEX: "+obj.getSprite().x+" to "+(obj.getSprite().x+GAMEMECHANICS_RECOLLECTOR_WIDTH));
                    console.log("   X-BALL: "+ball.getSprite().x);
                    console.log("   Y-BALL: "+ball.getSprite().y);
                    console.log("   SIGN BALL: "+ball.getSignY());
                    console.log("   SPEED BALL: "+ball.getSpeedY());
                    //top
                    if (ball.getSprite().y <= 60 && ball.getSignY()<0){
                        obj.setActive(!obj.getActive());
                    }
                } else {
                //bottom
                    console.log("INDEX: "+index);
                    console.log("   X-INDEX: "+obj.getSprite().x+" to "+(obj.getSprite().x+GAMEMECHANICS_RECOLLECTOR_WIDTH));
                    console.log("   X-BALL: "+ball.getSprite().x);
                    console.log("   Y-BALL: "+ball.getSprite().y);
                    console.log("   SIGN BALL: "+ball.getSignY());
                    console.log("   SPEED BALL: "+ball.getSpeedY());
                    if (ball.getSprite().y >= GAMEMECHANICS_WORLD_HEIGHT-60 && ball.getSignY()>0){
                        obj.setActive(!obj.getActive());
                    }
                }
                
            }
        });
    }
}