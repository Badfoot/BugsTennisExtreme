var bootState = {

	preload: function () {
		game.load.image('progressBar', '../../assets/images/progressBar.png');
        game.load.image('furemolLogo', '../../assets/images/logo/furemol/furemolLogo.png');
	},

	create: function() { 
		game.stage.backgroundColor = '#000000';
		game.physics.startSystem(Phaser.Physics.ARCADE);

		goToLvl(FUREMOL_LOAD);
	}
};