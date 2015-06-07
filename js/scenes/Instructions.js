var instructionsState1 = {

	create: function() { 
		game.add.image(0, 0, 'bg_instructions1');
        
        var muteButton = game.add.button(GAMEMECHANICS_WORLD_WIDTH-35-5, GAMEMECHANICS_WORLD_HEIGHT-30-5, "btn_sound", function (muteButton){toggleSound(muteButton);}, this);
        muteButton.input.useHandCursor = true;
        muteButton.frame = (game.sound.mute)?1:0;
        
        var goBack = game.add.button(5, GAMEMECHANICS_WORLD_HEIGHT-50, "btn_menu", function (goBack){goToLvl(FUREMOL_MENU);}, this);
        goBack.input.useHandCursor = true;
        
        var nextPage = game.add.button(
            GAMEMECHANICS_WORLD_WIDTH/2+10,
            GAMEMECHANICS_WORLD_HEIGHT-50,
            "btn_arrowRight",
            function (nextPage){goToLvl(FUREMOL_INSTRUCTIONS_2);},
            this
        );
        nextPage.input.useHandCursor = true;
        
	},

	start: function() {
		//do nothing
	},
    
    update: function() {
		//do nothing
	}
};

/*********************************************************/   
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
/*********************************************************/ 
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
/*********************************************************/

var instructionsState2 = {

	create: function() { 
		game.add.image(0, 0, 'bg_instructions2');
        
        var muteButton = game.add.button(GAMEMECHANICS_WORLD_WIDTH-35-5, GAMEMECHANICS_WORLD_HEIGHT-30-5, "btn_sound", function (muteButton){toggleSound(muteButton);}, this);
        muteButton.input.useHandCursor = true;
        muteButton.frame = (game.sound.mute)?1:0;
        
        var goBack = game.add.button(5, GAMEMECHANICS_WORLD_HEIGHT-50, "btn_menu", function (goBack){goToLvl(FUREMOL_MENU);}, this);
        goBack.input.useHandCursor = true;
        
        var prevPage = game.add.button(
            GAMEMECHANICS_WORLD_WIDTH/2-35-10,
            GAMEMECHANICS_WORLD_HEIGHT-50,
            "btn_arrowLeft",
            function (nextPage){goToLvl(FUREMOL_INSTRUCTIONS_1);},
            this
        );
        prevPage.input.useHandCursor = true;
        
        var nextPage = game.add.button(
            GAMEMECHANICS_WORLD_WIDTH/2+10,
            GAMEMECHANICS_WORLD_HEIGHT-50,
            "btn_arrowRight",
            function (nextPage){goToLvl(FUREMOL_INSTRUCTIONS_3);},
            this
        );
        nextPage.input.useHandCursor = true;
	},

	start: function() {
		//do nothing
	},
    
    update: function() {
		//do nothing
	}
};

/*********************************************************/   
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
/*********************************************************/ 
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
/*********************************************************/

var instructionsState3 = {

	create: function() { 
		game.add.image(0, 0, 'bg_instructions3');
        
        var muteButton = game.add.button(GAMEMECHANICS_WORLD_WIDTH-35-5, GAMEMECHANICS_WORLD_HEIGHT-30-5, "btn_sound", function (muteButton){toggleSound(muteButton);}, this);
        muteButton.input.useHandCursor = true;
        muteButton.frame = (game.sound.mute)?1:0;
        
        var goBack = game.add.button(5, GAMEMECHANICS_WORLD_HEIGHT-50, "btn_menu", function (goBack){goToLvl(FUREMOL_MENU);}, this);
        goBack.input.useHandCursor = true;
        
        var prevPage = game.add.button(
            GAMEMECHANICS_WORLD_WIDTH/2-35-10,
            GAMEMECHANICS_WORLD_HEIGHT-50,
            "btn_arrowLeft",
            function (nextPage){goToLvl(FUREMOL_INSTRUCTIONS_2);},
            this
        );
        prevPage.input.useHandCursor = true;
	},

	start: function() {
		//do nothing
	},
    
    update: function() {
		//do nothing
	}
};