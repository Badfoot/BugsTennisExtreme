//Clase Util
const FUREMOL_LOAD= 0;
const FUREMOL_MENU= 1;
const FUREMOL_GAME= 4;
const FUREMOL_ABOUT= 2;
const FUREMOL_INSTRUCTIONS= 3;

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

function mute(button){
    game.sound.mute = !(game.sound.mute);
    button.frame = game.sound.mute ? 1 : 0;
}


function stopAllSounds(){
    //
}

function unMute(){
    //
}

function goToLvl(){
    //
}

