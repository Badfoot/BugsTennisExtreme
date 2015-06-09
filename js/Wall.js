const WALL_MAX_LIVE = 2;

var Wall = function () {
    this.live = 0;
    this.sprite;
};

//active
Wall.prototype.getLive = function(){
    return this.live;
}

Wall.prototype.setLive = function(value){
    this.live = value;
}

//sprite
Wall.prototype.getSprite = function(){
    return this.sprite;
}

Wall.prototype.setSprite = function(value){
    this.sprite = value;
}