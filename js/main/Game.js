var game = new Phaser.Game(500, 340, Phaser.AUTO, 'gameDiv');
game.global = {
	//
};

game.state.add('Boot', bootState);
game.state.add('Load', loadState);
game.state.add('Menu', menuState);
game.state.add('Play', playState);

game.state.start('Boot');