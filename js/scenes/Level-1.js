var level1State = {
/**/preload: function () {
       // game.load.audio("ost1", "assets/ost/4 - Fight!.ogg");
    },
    
/**/create: function () {
        //GAME
        this.randomPos = false;
        //game.stage.backgroundImage = "bground";
        game.physics.startSystem(Phaser.Physics.ARCADE);
        //Fondo
        game.add.image(
            0,          //x position
            0,          //y position
            "bground"   //image
        );
        this.bestScored = false;
        //WORLD
        //this.createWorld();
        //PLAYER
        //this.setUserControl();//control
        //this.createPlayer();//sprite
        
        //audio
        //playOST("ost1");
        //particles
        //this.createEmitter();
        
        //BUTTONS
        //var muteButton = game.add.button(5, 5, "muteButton", function (muteButton){toggleSound(muteButton);}, this);
        //muteButton.input.useHandCursor = true;
        //muteButton.frame = (game.sound.mute)?1:0;
    },

/**/update: function () {
       // this.playerCollision();
       // this.enemyCollision();
       // this.player.playerControl();
       // this.movePlayer();
       // this.updateEnemies();
    },
    
/*********************************************************/   
///////////////////////////////////////////////////////////
/** METODOS **********************************************/
/*********************************************************/
//USER KEYBOARD/MOUSE
    setUserControl: function () {
        this.cursor = setArrowKeys();
        this.mySpacebar = setKey(Phaser.Keyboard.SPACEBAR);
        this.wasd = {
            up: setKey(Phaser.Keyboard.W),
            left: setKey(Phaser.Keyboard.A),
            right: setKey(Phaser.Keyboard.D)
        };
        keyCapture(this.mySpacebar);
        keyCapture(this.cursor);
        keyCapture(this.wasd);
    },/***************************************************/
    
/********************************/
/********************************/
//CREATE...
/********************************/
    //WORLD//****************/
    createWorld: function () {
        this.walls = createWorld(1);
    },/***************************************************/
    
  
    
    //PLAYER//****************/
    createPlayer: function() {
       
    },/***************************************************/
    
    //ENEMY//****************/
   
    
    createEmitter: function () {
       
    },

/******************/
/******************/
//MOVEMENT OF... **/
/******************/
    //Player//**************/
    movePlayer: function () {
      
       
    },/***************************************************/
    
    
    finish: function(){
      //  game.sound.stopAll();
        startLevel("menu");
    }
    
};/*************************************************/