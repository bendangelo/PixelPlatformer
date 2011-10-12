re.c('ladder')
.require('item pressed')
.extend({
	cap:'cap',
	
	touch:function(t){
		this.hero.ground = false;
		this.hero.jump = false;
		
		this.hero.masY = 0;
		this.hero.friY = 0.5;
		
		if(this.pressed(re.controls.up)){
			this.hero.velY -= 39 * t;
			this.hero.flicker('ladder');
			
		} else if(this.pressed(re.controls.down)){
			this.hero.velY += 39 * t;
			this.hero.flicker('ladder');
			
		}
	},
	
	untouch:function(){
		this.hero.masY = 1;
		this.hero.friY = this.old;
	}
	
})
.init(function(){
	this.old = this.hero.friY;
	
	this.setFrameId(10);
	
});

re.c('cap')
.require('item')
.extend({
	
	//overwrite ladder implementation
	touch:function(){
		//this.hero.friY = this.old;
		/*if(this.hero.posY > this.posY && Math.floor(this.hero.posY-0.9) < this.posY){
			this.hero.graY = re.physics.graY;
			this.hero.step({x:this.hero.posX, y:this.posY+1}, false, true, this.posX, this.posY+1);
		}*/
		
	},
	
	untouch:function(){
	
	}
	
})
.init(function(){
	this.setFrameId(0);
	
	this.updateBefore(this.hero);
});