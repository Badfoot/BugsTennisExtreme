var loadState = {

	preload: function () {
        //ball
		game.load.spritesheet('ball', 'assets/images/ball/ball.png', 20, 20);
        
        //icon_skillCollector
        game.load.image('badCollector', 'assets/images/icon_skillCollector/badCollector.png');
        game.load.image('goodCollector', 'assets/images/icon_skillCollector/goodApple.png');
        
        //icon_skills
	    game.load.image('ico_changeDirection', 'assets/images/icon_skills/change_direction.jpg');
        game.load.image('ico_healState', 'assets/images/icon_skills/heal_state.jpg');
        game.load.image('ico_invisible', 'assets/images/icon_skills/invisible.jpg');
        game.load.image('ico_misil', 'assets/images/icon_skills/misil.jpg');
        game.load.image('ico_paddleDwarf', 'assets/images/icon_skills/paddle_dwarf.jpg');
        game.load.image('ico_paddleGrow', 'assets/images/icon_skills/paddle_grow.jpg');
        game.load.image('ico_poison', 'assets/images/icon_skills/poison.jpg');
        game.load.image('ico_potion', 'assets/images/icon_skills/potion.jpg');
        game.load.image('ico_shield', 'assets/images/icon_skills/shield.jpg');
        game.load.image('ico_turnOffSkillCollector', 'assets/images/icon_skills/turn_off_skill_collector.jpg');
        game.load.image('ico_velDwarf', 'assets/images/icon_skills/vel_dwarf.jpg');
        game.load.image('ico_velGrow', 'assets/images/icon_skills/vel_grow.jpg');
        game.load.image('ico_vulnerable', 'assets/images/icon_skills/vulnerable.jpg');
        game.load.image('ico_wall', 'assets/images/icon_skills/wall.jpg');
        
        //background
        game.load.image('bg_about', 'assets/images/backgrounds/about.jpg');
        game.load.image('bg_instructionsBoons', 'assets/images/backgrounds/instructions_boons.jpg');
        game.load.image('bg_instructionsDebufs', 'assets/images/backgrounds/instructions_debufs.jpg');
        game.load.image('bg_instructionsMov', 'assets/images/backgrounds/instructions_mov.jpg');
        game.load.image('bg_main', 'assets/images/backgrounds/main.jpg');
        
        //Buttons
         game.load.image('btn_about', 'assets/images/buttons/about.png');
         game.load.image('btn_aboutHover', 'assets/images/buttons/about_hover.png');
         game.load.image('btn_arrowLeft', 'assets/images/buttons/arrow_left.png');
         game.load.image('btn_arrowRight', 'assets/images/buttons/arrow_right.png');
         game.load.image('btn_instructions', 'assets/images/buttons/instructions.png');
         game.load.image('btn_instructionsHover', 'assets/images/buttons/instructions_hover.png');
         game.load.image('btn_menu', 'assets/images/buttons/menu.png');
         game.load.image('btn_play', 'assets/images/buttons/play.png');
         game.load.image('btn_playHover', 'assets/images/buttons/play_hover.png');
         game.load.spritesheet('btn_sound', 'assets/images/buttons/sound.png', 35, 30);
        
        //Paddles
         game.load.image('pad_left', 'assets/images/paddles/left.png');
         game.load.image('pad_right', 'assets/images/paddles/right.png');
        
        //LogoBugtennis
        game.load.image('logo_bugtennis', 'assets/images/logo/bugtennis/bugtennis.png');
        //logofuremol
        game.load.image('logo_furemolLogo', 'assets/images/logo/furemol/furemolLogo.png');
        
        //imageMaps
        
        game.load.image('imgMaps_field', 'assets/images/imagemaps/field.jpg');
        game.load.image('imgMaps_infLeft', 'assets/images/imagemaps/inf_left.jpg');
        game.load.image('imgMaps_infMid', 'assets/images/imagemaps/inf_mid.jpg'); 
        game.load.image('imgMaps_infRight', 'assets/images/imagemaps/inf_right.jpg');
        game.load.image('imgMaps_leftInf', 'assets/images/imagemaps/left_inf.jpg');
        game.load.image('imgMaps_leftSup', 'assets/images/imagemaps/left_sup.jpg');
        game.load.image('imgMaps_rightInf', 'assets/images/imagemaps/right_inf.jpg');
        game.load.image('imgMaps_rightSup', 'assets/images/imagemaps/right_sup.jpg'); 
        game.load.image('imgMaps_supLeft', 'assets/images/imagemaps/sup_left.jpg');
        game.load.image('imgMaps_supMid', 'assets/images/imagemaps/sup_mid.jpg');
        game.load.image('imgMaps_supRight', 'assets/images/imagemaps/sup_right.jpg');
        
        
        
        
        
	},

	create: function() { 
		//game.state.start('Menu');
	}
};