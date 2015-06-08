//state == scene //
var gameState = {
/**/preload: function () {
        //game.load.audio("ost1", "assets/ost/4 - Fight!.ogg");
    },
    
/**/create: function () {
        //GAME
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.gameController = new GameMechanics();
    
        //WORLD
        this.walls = this.gameController.createWorld();
    
        //Fondo
        game.add.image(
            0,                 //x position
            0,                 //y position
            "bg_base"     //image
        );
        game.add.image(
            50,                 //x position
            50,                 //y position
            "imgMaps_field"     //image
        );        
        game.add.image(
            50,                 //x position
            50,                 //y position
            "transparent"     //image
        );
    
        //Buttons
        var goBack = game.add.button(GAMEMECHANICS_WORLD_WIDTH/2-(106/2), GAMEMECHANICS_WORLD_HEIGHT-45, "btn_menu", function (goBack){goToLvl(FUREMOL_MENU);}, this);
        goBack.input.useHandCursor = true;
    
        //PLAYER 1
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
    
        //PLAYER 2
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
    
        //BALL
        this.ball = new Ball();
        this.ball.setImageSprite("ball");
        this.ball.create();
    
        //SkillCollector 1(arriba derecha)
    
    //    this.skillCollector1 = new SkillCollector();    
  //      this.skillCollector1.setSpriteImage("goodCollector");
  //      this.skillCollector1.create(GAMEMECHANICS_WORLD_WIDTH-GAMEMECHANICS_MARGIN_PADDLE_TO_SIDE-45, GAMEMECHANICS_WORLD_HEIGHT/2);
    
        //SkillCollector 2(arriba izquierda)
   //     this.skillCollector2 = new SkillCollector();    
   //     this.skillCollector2.setSpriteImage("goodCollector");
   //     this.skillCollector2.create(GAMEMECHANICS_WORLD_WIDTH-GAMEMECHANICS_MARGIN_PADDLE_TO_SIDE-45, GAMEMECHANICS_WORLD_HEIGHT/2);
        
        //SkillCollector 3(abajo izquierda)
   //     this.skillCollector3 = new SkillCollector();    
   //     this.skillCollector3.setSpriteImage("goodCollector");
  //      this.skillCollector3.create(GAMEMECHANICS_WORLD_WIDTH-GAMEMECHANICS_MARGIN_PADDLE_TO_SIDE-45, GAMEMECHANICS_WORLD_HEIGHT/2);
        
        //SkillCollector 4(abajo derecha)
   //     this.skillCollector4 = new SkillCollector();    
   //     this.skillCollector4.setSpriteImage("goodCollector");
   //     this.skillCollector4.create(GAMEMECHANICS_WORLD_WIDTH-GAMEMECHANICS_MARGIN_PADDLE_TO_SIDE-45, GAMEMECHANICS_WORLD_HEIGHT/2);
        //MARCADOR
    
        //audio
    
        //particles
        
        //BUTTONS
        var muteButton = game.add.button(GAMEMECHANICS_WORLD_WIDTH-35-5, GAMEMECHANICS_WORLD_HEIGHT-30-5, "btn_sound", function (muteButton){toggleSound(muteButton);}, this);
        muteButton.input.useHandCursor = true;
        muteButton.frame = (game.sound.mute)?1:0;
    },

/**/update: function () {
        this.movePlayers();
        this.moveBall();
        this.collisions();
    },
    
/*********************************************************/   
///////////////////////////////////////////////////////////
/** METODOS **********************************************/
/*********************************************************/
    
    movePlayers: function () {
        this.paddle1.move(this.cursor1);
        this.paddle2.move(this.cursor2);
    },
    
    moveBall: function () {
        this.ball.move();
    },
    
    collisions: function () {
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
        
        //Recolectores 1
        
       /* if (this.ball.getSprite().x-5 >= this.skillCollector1.getSprite().x-5 && this.ball.getSprite().x-5 <= this.skillCollector1.getSprite().x+5){
            if(this.ball.getSprite().y >= this.skillCollector1.getSprite().y && this.ball.getSprite().y <= this.skillCollector1.getSprite().y){            
               
            }
            
        }*/
        
        //Recolectores 2  
        
        //Recolectores 3
        
        //Recolectores 4
        
        
        
        
    }
}