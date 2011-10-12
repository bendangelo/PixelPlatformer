re.c('coin')
.require('item flicker blowup')
.extend({
	
	touch:function(){
		this.sfx.play();
		
		re('counter').get(0).addCoin(1);
		
		this.blowUp(48);
		
		this.dispose();
	},
	
	untouch:function(){
	
	}
	
})
.init(function(c){
	if(!c.coin){
		c.coin = re.e('sound coin.sfx');
	}
	this.sfx = c.coin;
	
	this.addFlicker('glow', -1, 1.8, '14 15 15');
	this.flicker('glow');
	
});