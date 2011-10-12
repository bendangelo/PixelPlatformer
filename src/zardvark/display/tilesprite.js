re.c('tilesprite')
.require('sprite tiles.png tile')
.init(function(){
	this.regX = this.sizeX * 0.5;
	this.regY = this.sizeY * 0.5;
	this.bisect = this.bitmap.width;
});