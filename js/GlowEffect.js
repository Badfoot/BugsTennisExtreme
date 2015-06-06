var GlowEffect = function () {

    this.typeOf = 0;
    this.sprite;
};

//typeof

GlowEffect.prototype.getTypeOf = function(){
    return this.typeOf;
}

GlowEffect.prototype.setTypeOF = function(value){
    this.typeOf = value;
}

//sprite
GlowEffect.prototype.getSprite = function(){
    return this.sprite;
}

GlowEffect.prototype.setSprite = function(value){
    this.sprite = value;
}