var loadState = {

	preload: function () {
        
        game.add.image(100, 50, 'furemolLogo');
        
        var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', { font: '30px Arial', fill: '#ffffff' });
		loadingLabel.anchor.setTo(0.5, 0.5);

		var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
		progressBar.anchor.setTo(0.5, 0.5);
		game.load.setPreloadSprite(progressBar);
        
        //Trasparente
        game.load.image('transparent', '../assets/images/transparente.png');
        
        //ball
		game.load.spritesheet('ball', '../assets/images/ball/ball.png', 20, 20);
        
        //icon_skillCollector
        game.load.spritesheet('goodCollector', '../assets/images/icon_skillCollector/goodApple.png', 100, 50);
        
        //icon_skills
	    game.load.image('ico_changeDirection', '../assets/images/icon_skills/change_direction.jpg');
        game.load.image('ico_healState', '../assets/images/icon_skills/heal_state.jpg');
        game.load.image('ico_invisible', '../assets/images/icon_skills/invisible.jpg');
        game.load.image('ico_misil', '../assets/images/icon_skills/misil.jpg');
        game.load.image('ico_paddleDwarf', '../assets/images/icon_skills/paddle_dwarf.jpg');
        game.load.image('ico_paddleGrow', '../assets/images/icon_skills/paddle_grow.jpg');
        game.load.image('ico_poison', '../assets/images/icon_skills/poison.jpg');
        game.load.image('ico_potion', '../assets/images/icon_skills/potion.jpg');
        game.load.image('ico_shield', '../assets/images/icon_skills/shield.jpg');
        game.load.image('ico_turnOffSkillCollector', '../assets/images/icon_skills/turn_off_skill_collector.jpg');
        game.load.image('ico_velDwarf', '../assets/images/icon_skills/vel_dwarf.jpg');
        game.load.image('ico_velGrow', '../assets/images/icon_skills/vel_grow.jpg');
        game.load.image('ico_vulnerable', '../assets/images/icon_skills/vulnerable.jpg');
        game.load.image('ico_wall', '../assets/images/icon_skills/wall.jpg');
        game.load.image('ico_void', '../assets/images/icon_skills/placeToSkill.jpg');
        
        //iconeffects
        game.load.image('effect_beeToLeft', '../assets/images/skillEffects/beeToLeft.png');
        game.load.image('effect_beeToRight', '../assets/images/skillEffects/beeToRight.png');
        game.load.image('effect_wall', '../assets/images/skillEffects/wall.jpg');
        
        //background
        game.load.image('bg_about', '../assets/images/backgrounds/about.jpg');
        game.load.image('bg_instructions2', '../assets/images/backgrounds/instructions_boons.jpg');
        game.load.image('bg_instructions3', '../assets/images/backgrounds/instructions_debufs.jpg');
        game.load.image('bg_instructions1', '../assets/images/backgrounds/instructions_mov.jpg');
        game.load.image('bg_main', '../assets/images/backgrounds/main.jpg');
        game.load.image('bg_base', '../assets/images/backgrounds/baseBackground.jpg');
        
        //Buttons
        game.load.image('btn_about', '../assets/images/buttons/about.png');
        game.load.image('btn_aboutHover', '../assets/images/buttons/about_hover.png');
        game.load.image('btn_arrowLeft', '../assets/images/buttons/arrow_left.png');
        game.load.image('btn_arrowRight', '../assets/images/buttons/arrow_right.png');
        game.load.image('btn_instructions', '../assets/images/buttons/instructions.png');
        game.load.image('btn_instructionsHover', '../assets/images/buttons/instructions_hover.png');
        game.load.image('btn_menu', '../assets/images/buttons/menu.png');
        game.load.image('btn_play', '../assets/images/buttons/play.png');
        game.load.image('btn_playHover', '../assets/images/buttons/play_hover.png');
        game.load.spritesheet('btn_sound', '../assets/images/buttons/sound.png', 35, 30);
        
        //Paddles
        game.load.image('pad_left', '../assets/images/paddles/left.png');
        game.load.image('pad_right', '../assets/images/paddles/right.png');
        
        //imageMaps
        game.load.image('imgMaps_field', '../assets/images/imagemaps/field.jpg');
        game.load.image('imgMaps_infLeft', '../assets/images/imagemaps/inf_left.jpg');
        game.load.image('imgMaps_infMid', '../assets/images/imagemaps/inf_mid.jpg'); 
        game.load.image('imgMaps_infRight', '../assets/images/imagemaps/inf_right.jpg');
        game.load.image('imgMaps_leftInf', '../assets/images/imagemaps/left_inf.jpg');
        game.load.image('imgMaps_leftSup', '../assets/images/imagemaps/left_sup.jpg');
        game.load.image('imgMaps_rightInf', '../assets/images/imagemaps/right_inf.jpg');
        game.load.image('imgMaps_rightSup', '../assets/images/imagemaps/right_sup.jpg'); 
        game.load.image('imgMaps_supLeft', '../assets/images/imagemaps/sup_left.jpg');
        game.load.image('imgMaps_supMid', '../assets/images/imagemaps/sup_mid.jpg');
        game.load.image('imgMaps_supRight', '../assets/images/imagemaps/sup_right.jpg');      
        
        //AUDIO
        game.load.audio("ostMenu", "../../assets/ost/1 - MainTitle.ogg");
        game.load.audio("ost", "../../assets/ost/4 - Fight!.ogg");
	},

	create: function() { 
        playOST("ostMenu");
		goToLvl(FUREMOL_MENU);
	}
};