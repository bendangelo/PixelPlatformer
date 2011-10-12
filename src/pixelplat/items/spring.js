re.c('spring')
.require('item flicker pressed')
.extend({
	
	touch:function(){
		this.hero.velY = -5;
		
		if(this.pressed(re.controls.up)){
			this.hero.velY = -25;
			this.flicker('bounce');
			re.c('item').actionSfx.play();
		}
	},
	
	untouch:function(){
		
	}
	
})
.init(function(){
	var total = 0;
	
	this.addFlicker('bounce', 1, 0.3, '13 12');
	
	this.setFrameId(12);
	
});