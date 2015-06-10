var aboutState = {

	create: function() {
		game.add.image(0, 0, 'bg_about');
        
        var muteButton = game.add.button(GAMEMECHANICS_WORLD_WIDTH-35-5, GAMEMECHANICS_WORLD_HEIGHT-30-5, "btn_sound", function (muteButton){toggleSound(muteButton);}, this);
        muteButton.input.useHandCursor = true;
        muteButton.frame = (game.sound.mute)?1:0;
        
        var goBack = game.add.button(5, GAMEMECHANICS_WORLD_HEIGHT-50, "btn_menu", function (goBack){goToLvl(FUREMOL_MENU);}, this);
        goBack.input.useHandCursor = true;
	},

	start: function() {
		//do nothing
	},
    
    update: function() {
		//do nothing
	}
};