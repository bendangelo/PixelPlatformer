re.c('particle')
.require('sprite random physics')
.init(function(){
	
	this.velX = this.random(-14, 14);
	this.velY = this.random(-15, -1);
	
	this.bodX = re.tile.sizeX * 0.5;
	this.bodY = re.tile.sizeY * 0.5;
	
	this.friX = 0.95;
	this.friY = 0.9;
	
	this.resX = 0.9;
	this.resY = 0.9;
});

re.c('blowup')
.extend({
	
	blowUp:function(tile){
		
		var s = 'items.png';
		
		if(this.has('hero')) s = 'hero.png';
		var width = this.bitmap.width / (re.tile.sizeX * 0.5);
		
		var x = this.posX + this.regX;
		var y = this.posY + this.regY;
		
		re.e('particle '+s, 4)
		.each(function(i){
			
			this.posX = x;
			this.posY = y;
			
			this.sizeX = re.tile.sizeX * 0.5;
			this.sizeY = re.tile.sizeY * 0.5;
			
			if(i == 0){
				this.setFrameId(tile);
			} 
			if(i== 1){
				this.setFrameId(tile+1);
			}
			if(i == 2){
				this.setFrameId(tile + width);
			}
			if(i == 3){
				this.setFrameId(tile + width + 1);
			}
			
		});
		
	}
	
});