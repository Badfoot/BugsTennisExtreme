var menuState = {

	create: function() {
		game.add.image(0, 0, 'bg_main');
        
        var muteButton = game.add.button(GAMEMECHANICS_WORLD_WIDTH-35-5, GAMEMECHANICS_WORLD_HEIGHT-30-5, "btn_sound", function (muteButton){toggleSound(muteButton);}, this);
        muteButton.input.useHandCursor = true;
        muteButton.frame = (game.sound.mute)?1:0;
        
        var wantToPlay = game.add.button(GAMEMECHANICS_WORLD_WIDTH/2-100, GAMEMECHANICS_WORLD_HEIGHT/2, "btn_play", function (wantToPlay){stopAllSounds(); goToLvl(FUREMOL_GAME);}, this);
        wantToPlay.input.useHandCursor = true;
        
        var wantToInstructions = game.add.button(GAMEMECHANICS_WORLD_WIDTH/2-100, GAMEMECHANICS_WORLD_HEIGHT/2+60, "btn_instructions", function (wantToInstructions){goToLvl(FUREMOL_INSTRUCTIONS_1);}, this);
        wantToInstructions.input.useHandCursor = true;
        
        var wantToAbout = game.add.button(GAMEMECHANICS_WORLD_WIDTH/2-100, GAMEMECHANICS_WORLD_HEIGHT/2+120, "btn_about", function (wantToAbout){goToLvl(FUREMOL_ABOUT);}, this);
        wantToAbout.input.useHandCursor = true;
	},

	start: function() {
		//do nothing
	},
    
    update: function() {
		//do nothing
	}
};