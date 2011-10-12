re.c('win')
.require('item')
.extend({
	
	touch:function(){
		
		var c = re('counter').get(0);
		
		//next level
		re.scene('score', c.coins, c.max);
		
	},
	
	untouch:function(){
	
	}
	
})
.init(function(){
	
	//draws nothing anyway
	this.drawing = false;
	this.signal('-draw');
	
});