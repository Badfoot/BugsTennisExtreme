var game = new Phaser.Game(
    GAMEMECHANICS_WORLD_WIDTH,
    GAMEMECHANICS_WORLD_HEIGHT,
    Phaser.AUTO,
    'gameDiv'
);


game.state.add(FUREMOL_BOOT, bootState);
game.state.add(FUREMOL_LOAD, loadState);
game.state.add(FUREMOL_MENU, menuState);
game.state.add(FUREMOL_INSTRUCTIONS_1, instructionsState1);
game.state.add(FUREMOL_INSTRUCTIONS_2, instructionsState2);
game.state.add(FUREMOL_INSTRUCTIONS_3, instructionsState3);
game.state.add(FUREMOL_ABOUT, aboutState);
game.state.add(FUREMOL_GAME, gameState);

goToLvl(FUREMOL_BOOT);