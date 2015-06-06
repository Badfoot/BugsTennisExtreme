var loadState = {

	preload: function () {
        //ball
		game.load.image('ball', 'assets/images/ball/ball.png');
        //icon_skillCollector
        game.load.image('badCollector', 'assets/images/icon_skillCollector/badCollector.png');
        game.load.image('goodCollector', 'assets/images/icon_skillCollector/goodApple.png');
        //icon_skills
	    game.load.image('changeDirection', 'assets/images/icon_skills/change_direction.jpg');
        game.load.image('healState', 'assets/images/icon_skills/heal_state.jpg');
        game.load.image('invisible', 'assets/images/icon_skills/invisible.jpg');
        game.load.image('misil', 'assets/images/icon_skills/misil.jpg');
        game.load.image('paddleDwarf', 'assets/images/icon_skills/paddle_dwarf.jpg');
        game.load.image('paddleGrow', 'assets/images/icon_skills/paddle_grow.jpg');
        game.load.image('poison', 'assets/images/icon_skills/poison.jpg');
        game.load.image('potion', 'assets/images/icon_skills/potion.jpg');
        game.load.image('shield', 'assets/images/icon_skills/shield.jpg');
        game.load.image('turnOffSkillCollector', 'assets/images/icon_skills/turn_off_skill_collector.jpg');
        game.load.image('velDwarf', 'assets/images/icon_skills/vel_dwarf.jpg');
        game.load.image('velGrow', 'assets/images/icon_skills/vel_grow.jpg');
        game.load.image('vulnerable', 'assets/images/icon_skills/vulnerable.jpg');
        game.load.image('wall', 'assets/images/icon_skills/wall.jpg');
        
        //background
        game.load.image('about', 'assets/images/backgrounds/about.jpg');
        game.load.image('baseBackground', 'assets/images/backgrounds/baseBackground.jpg');
        game.load.image('field', 'assets/images/backgrounds/field.jpg');
        game.load.image('instructionsBoons', 'assets/images/backgrounds/instructions_boons.jpg');
        game.load.image('instructionsDebufs', 'assets/images/backgrounds/instructions_debufs.jpg');
        game.load.image('instructionsMov', 'assets/images/backgrounds/instructions_mov.jpg');
        game.load.image('main', 'assets/images/backgrounds/main.jpg');
        
        //Buttons
         game.load.image('aboutButton', 'assets/images/buttons/about.png');
         game.load.image('aboutHover', 'assets/images/buttons/about_hover.png');
         game.load.image('arrowLeft', 'assets/images/buttons/arrow_left.png');
         game.load.image('arrowRight', 'assets/images/buttons/arrow_right.png');
         game.load.image('instructions', 'assets/images/buttons/instructions.png');
         game.load.image('instructionsHover', 'assets/images/buttons/instructions_hover.png');
         game.load.image('menu', 'assets/images/buttons/menu.png');
         game.load.image('play', 'assets/images/buttons/play.png');
         game.load.image('playHover', 'assets/images/buttons/play_hover.png');
         game.load.image('sound', 'assets/images/buttons/sound.png');
        
        //Paddles
         game.load.image('left', 'assets/images/paddles/left.png');
         game.load.image('right', 'assets/images/paddles/right.png');
        
        //LogoBugtennis
        game.load.image('bugtennis', 'assets/images/logo/bugtennis/bugtennis.png');
        //logofuremol
        game.load.image('bugtennis', 'assets/images/logo/furemol/furemolLogo.png');
        
        
        
        
        
        
        
        
        
	},

	create: function() { 
		//game.state.start('Menu');
	}
};