//Clase Util
const FUREMOL_LOAD = "state-load";
const FUREMOL_BOOT = "state-boot";
const FUREMOL_MENU = "state-menu";
const FUREMOL_GAME = "state-play";
const FUREMOL_ABOUT = "state-about";
const FUREMOL_INSTRUCTIONS_1 = "state-instructions-1";
const FUREMOL_INSTRUCTIONS_2 = "state-instructions-2";
const FUREMOL_INSTRUCTIONS_3 = "state-instructions-3";

/********************************************/
//AUDIO
/********************************************/
function playOST(ost){
    var audio = game.add.audio(ost);
    audio.volume = 0.5;
    audio.loop = true;
    audio.play();
}

function playAudio(audioName, loop) {
    var audio = game.add.audio(audioName);
    audio.volume = 0.6;
    audio.loop = loop;
    audio.play();
}

function toggleSound(button){
    game.sound.mute = !(game.sound.mute);
    button.frame = game.sound.mute ? 1 : 0;
}


function stopAllSounds(){
    //if(game.sound.mute) game.sound.stopAll();
}

function goToLvl(state){
    stopAllSounds();
    game.state.start(state);
}

/********************************************/
//USER CONTROLS
/********************************************/
function setArrowKeys(){
    return game.input.keyboard.createCursorKeys();
}

function setKey(key){
    return game.input.keyboard.addKey(key);
}

function setMouse(key){
    /*NOT IMPLEMENTED*/
}

function keyCapture(key){
    if(!key.up) game.input.keyboard.addKeyCapture([key]);
    else{
        game.input.keyboard.addKeyCapture([key.up, key.left, key.right]);
    }
}


//OTHERS

//Random
function random(amount){
    return Math.floor((Math.random() * amount));
}

