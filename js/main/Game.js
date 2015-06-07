//state == scene //
var gameState = {
/**/preload: function () {
        //game.load.audio("ost1", "assets/ost/4 - Fight!.ogg");
    },
    
/**/create: function () {
        //GAME
        game.physics.startSystem(Phaser.Physics.ARCADE);
        //Fondo
        game.add.image(
            0,          //x position
            0,          //y position
            "bground"   //image
        );
        //WORLD
        //PLAYER 1
        //PLAYER 2
        //MARCADOR
        //audio
        //particles
        
        //BUTTONS
        /*var muteButton = game.add.button(5, 5, "muteButton", function (muteButton){toggleSound(muteButton);}, this);
        muteButton.input.useHandCursor = true;
        muteButton.frame = (game.sound.mute)?1:0;*/
    },

/**/update: function () {
    }
    
/*********************************************************/   
///////////////////////////////////////////////////////////
/** METODOS **********************************************/
/*********************************************************/
}