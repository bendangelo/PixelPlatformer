re.c('apple')
.require('item flicker blowup')
.extend({
	
	touch:function(t){
		
		this.hero.powerup();
		
		re.c('item').actionSfx.play();
		this.blowUp(4);
		this.blowUp(4);
		
		this.dispose();
	},
	
	untouch:function(t){
		
		
	}
	
})
.init(function(){
	
	this.setFrameId(1);
	this.addFlicker('idle', -1, 1, '1 2 3 3 2');
	
	this.flicker('idle');
});