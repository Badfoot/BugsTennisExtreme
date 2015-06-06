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
        
        
        
	},

	create: function() { 
		//game.state.start('Menu');
	}
};