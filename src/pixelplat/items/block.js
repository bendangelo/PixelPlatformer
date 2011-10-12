re.c('block')
.require('item physics')
.extend({
	
	touch:function(){
		
		if(this.hero.posY <= this.posY){
			this.hero.graY = 0;
			this.hero.velY = 0;
			this.hero.posY = this.posY - this.hero.sizeY;
			
			if(this.hero.pressed(re.controls.up)){
				this.hero.graY = re.physics.graY;
				this.hero.jumpUp();
			}
			
		} else if(this.hero.posX < this.posX && this.hero.velX > 0
		||this.hero.posX > this.posX && this.hero.velX < 0){
			
			re.c('item').actionSfx.play();
			this.velX += this.hero.velX;
			
			this.hero.velX = this.forceRes(this.hero.velX, 0.5);
		} 
	},
	
	untouch:function(){
		this.hero.graY = re.physics.graY;
	}
	
})
.init(function(){
	
	this.setFrameId(4);
	
});