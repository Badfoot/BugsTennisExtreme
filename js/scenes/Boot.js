var bootState = {

	preload: function () {
		//game.load.image('progressBar', 'assets/images/progressBar.png');
	},

	create: function() { 
		//game.stage.backgroundColor = '#3498db';
		game.physics.startSystem(Phaser.Physics.ARCADE);

		game.state.start('Load');
	}
};